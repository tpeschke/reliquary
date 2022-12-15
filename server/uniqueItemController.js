const { ROLL_TWICE, ADJECTIVES, COLORS, WEAPON_COLORS, EXPLOSION_COLORS, ENGRAVINGS, STITCHINGS, QUIRKS, SUBJECT, GEMS, RAW_GOODS } = require('./constants');
const { item_tables_with_subtables } = require('./tables');
const tables = require('./tables')

let chanceTables = {}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max - 1) + 1);
}

function getBaseItem(table) {
    if (item_tables_with_subtables.includes(table)) {
        const subtable = chanceTables[table][getRandomIndex(chanceTables[table].length)]
        let item = chanceTables[subtable][getRandomIndex(chanceTables[subtable].length)]
        item = getItemFromTable(subtable, item)
        item.subtable = subtable
        return item
    } else if (table !== ROLL_TWICE) {
        const item = chanceTables[table][getRandomIndex(chanceTables[table].length)]
        return getItemFromTable(table, item)
    } else {
        return ROLL_TWICE
    }
}

function getItemFromTable(table, item) {
    const tableArray = tables[table]
    for (let i = 0; i < tableArray.length; i++) {
        if (tableArray[i].entry === item || tableArray[i].material === item || tableArray[i].detail === item) {
            return tableArray[i]
        }
    }
}

function detailInfoFromChanceTables(detailTable) {
    const detailToGet = chanceTables[detailTable][getRandomIndex(chanceTables[detailTable].length)]
    return getItemFromTable(detailTable, detailToGet)
}

function itemDetailsFromChanceTables(subtable) {
    const itemToGet = chanceTables[subtable][getRandomIndex(chanceTables[subtable].length)]
    return getItemFromTable(subtable, itemToGet)
}

function changeSCStringToNumber(scString = 0) {
    if (isNaN(scString)) {
        return +scString.split('sc')[0].trim()
    }
    return scString
}

module.exports = {
    setUpTables: () => {
        for (const table in tables) {
            chanceTables[table] = []
            tables[table].forEach(entry => {
                for (let i = 0; i < entry.weight; i++) {
                    if (entry.entry) {
                        chanceTables[table].push(entry.entry)
                    } else if (entry.material) {
                        chanceTables[table].push(entry.material)
                    } else if (entry.detail) {
                        chanceTables[table].push(entry.detail)
                    }
                }
            })
        }
        console.log('Chance Tables Set Up')
    },
    getRandomUniqueItem: (req, res) => {
        // roll twice

        let itemObject = {}
            , rawObject = {}
        const table = chanceTables.start[getRandomIndex(chanceTables.start.length)]
        itemObject.table = table

        rawObject = { ...rawObject, ...getBaseItem(table) }
        if (table === RAW_GOODS) { console.log(rawObject)}
        itemObject.entry = rawObject.entry

        if (rawObject.base_material) {
            itemObject.material = handleMaterials(rawObject.base_material)
        } else if (!rawObject.base_material && rawObject.value) {
            itemObject.value = changeSCStringToNumber(rawObject.value)
        } else {
            res.send('something went wrong:', rawObject)
        }

        let startingValue;
        if (!itemObject.value) {
            startingValue = itemObject.material.reduce((acc, { value }) => acc + value, 0)
            isNaN(startingValue) ? 0 : startingValue
        } else {
            startingValue = itemObject.value
        }

        for (const table in rawObject) {
            if (table === ADJECTIVES || table === COLORS || table === WEAPON_COLORS || table === EXPLOSION_COLORS || table === QUIRKS) {
                let tableToLookAt = table
                if (table === EXPLOSION_COLORS) {
                    tableToLookAt = COLORS
                } else if (table === WEAPON_COLORS) {
                    tableToLookAt = COLORS
                }

                console.log(tableToLookAt, table)
                let detailNumber = Math.floor(getRandomNumber(rawObject[tableToLookAt]) / rawObject[tableToLookAt])
                
                if (detailNumber >= 1) {
                    itemObject[tableToLookAt] = generateDetails(tableToLookAt, detailNumber)
                    startingValue += .05 * itemObject[tableToLookAt].length
                }
            } else if (table === ENGRAVINGS || table === STITCHINGS || table === GEMS) {

            } else if (table === SUBJECT) {

            } else {
                console.log(table)
            }
        }

        itemObject.value = startingValue

        console.log(itemObject)
        // trim down final item
        // res.send(itemObject)
    },
    getChanceTables: (req, res) => {
        res.send(chanceTables)
    },
    runTests: () => {
        // let itemArray = [
        //     'Animal'
        // ]

        // Weapon & Explosion Colors

        // Gems
        // Events
        // probably do a whole thing for subjects
        // { weight: 1, detail: 'Subject of Infamy (reroll)' }

        // console.log(handleMaterials('Animal'))
        console.log(generateDetails('Adjectives', 15))
    }
}

function generateDetails(detailTable, numberOfDetails) {
    let detailArray = []

    for (i = 0; i < numberOfDetails; i++) {
        detailArray = [...detailArray, ...handleSingleDetail(detailTable)]
    }

    detailArray = [...new Set(detailArray.filter(detail => !(detail === 'TWO' || detail === 'THREE')))]

    return detailArray
}

function handleSingleDetail(detailTable) {
    let detailArray = []
    const { detail, subtable } = detailInfoFromChanceTables(detailTable)
    if (detail === 'TWO') {
        let detailOne = handleSingleDetail(detailTable)
        let detailTwo = handleSingleDetail(detailTable)
        while (detailOne === 'TWO' || detailOne === 'THREE') {
            detailOne = handleSingleDetail(detailTable)
        }
        while (detailTwo === 'TWO' || detailTwo === 'THREE' || detailTwo === detailOne) {
            detailTwo = handleSingleDetail(detailTable)
        }
        detailArray.push(...detailOne)
        detailArray.push(...detailTwo)
    } else if (detail == 'THREE') {
        let detailOne = handleSingleDetail(detailTable)
        let detailTwo = handleSingleDetail(detailTable)
        let detailThree = handleSingleDetail(detailTable)
        while (detailOne === 'TWO' || detailOne === 'THREE') {
            detailOne = handleSingleDetail(detailTable)
        }
        while (detailTwo === 'TWO' || detailTwo === 'THREE' || detailTwo === detailOne) {
            detailTwo = handleSingleDetail(detailTable)
        }
        while (detailThree === 'TWO' || detailThree === 'THREE' || detailThree === detailOne || detailThree === detailTwo) {
            detailThree = handleSingleDetail(detailTable)
        }
        detailArray.push(...detailOne)
        detailArray.push(...detailTwo)
        detailArray.push(...detailThree)
    }
    if (subtable) {
        const subdetail = handleSingleDetail(subtable)
        detailArray.push(`${detail} ${subdetail}s`)
    } else {
        detailArray.push(detail)
    }

    return detailArray
}

function handleMaterials(base_material) {
    let finalItem = {
        materials: []
    }

    const stringObjectOrArray = checkIfStringObjectOrArray(base_material)
    if (stringObjectOrArray === 'array' && !base_material[0].weight) {
        base_material.forEach(base_material => {
            const itemArray = sortItems(base_material)
            isArray = Array.isArray(itemArray)
            if (isArray) {
                finalItem.materials = [...finalItem.materials, ...itemArray]
            } else {
                finalItem.materials.push(sortItems(base_material))
            }
        })
    } else {
        const itemArray = sortItems(base_material)
        isArray = Array.isArray(itemArray)
        if (isArray) {
            finalItem.materials = [...finalItem.materials, ...itemArray]
        } else {
            finalItem.materials.push(sortItems(base_material))
        }
    }

    return finalItem.materials
}

function sortItems(base_material) {
    const stringObjectOrArray = checkIfStringObjectOrArray(base_material)
    if (stringObjectOrArray === 'string') {
        return handleSingleMaterial(base_material)
    } else if (stringObjectOrArray === 'object') {
        return handleObjectMaterial(base_material)
    } else if (stringObjectOrArray === 'array') {
        return handleChanceOfMaterial(base_material)
    }
}

function checkIfStringObjectOrArray(variable) {
    if (typeof (variable) === 'string') {
        return 'string'
    } else if (Array.isArray(variable)) {
        return 'array'
    } else if (typeof (variable) === 'object') {
        return 'object'
    }
    return 'none of the above'
}

function getAverageFromMaterialArray(subMaterials) {
    let value = subMaterials.reduce((acc, { value }) => acc + value, 0)
    return +(value / subMaterials.length).toFixed(2)
}

function handleSingleMaterial(material) {
    if (tables[material]) {
        const { material: specificMaterial, value, subtable } = itemDetailsFromChanceTables(material)
        if (subtable) {
            const { materialCategory, specificMaterial: subMaterial } = handleSingleMaterial(subtable)
            return {
                materialCategory: materialCategory === specificMaterial ? material : materialCategory,
                specificMaterial,
                subMaterial,
                value: changeSCStringToNumber(value)
            }
        }
        return {
            materialCategory: material,
            specificMaterial,
            value: changeSCStringToNumber(value)
        }
    } else {
        const { material: specificMaterial, value, subtable, subtables } = getItemFromTable('other_table', material)
        if (subtable) {
            const { materialCategory, specificMaterial: subMaterial } = handleSingleMaterial(subtable)
            return {
                materialCategory,
                specificMaterial,
                subMaterial,
                value: changeSCStringToNumber(value)
            }
        }
        if (subtables) {
            let subMaterials = subtables.map(subtable => {
                const { materialCategory, specificMaterial: subMaterial, value } = handleSingleMaterial(subtable)
                return {
                    materialCategory,
                    subMaterial,
                    value: changeSCStringToNumber(value)
                }
            })
            return {
                specificMaterial,
                value: getAverageFromMaterialArray(subMaterials),
                subMaterials
            }
        }
        return {
            specificMaterial,
            value: changeSCStringToNumber(value)
        }
    }
}

function handleObjectMaterial({ label, material, materials }) {
    let materialObject = {}
    if (material) {
        materialObject = handleSingleMaterial(material)
    } else if (materials) {
        const stringObjectOrArray = checkIfStringObjectOrArray(materials)
        if (stringObjectOrArray === 'array' && !materials[0].weight) {
            materials.forEach(base_material => {
                materialObject = sortItems(base_material)
            })
        } else {
            materialObject = sortItems(materials)
        }
    }
    if (label) {
        materialObject = { label, ...materialObject }
    }

    return materialObject
}

function handleChanceOfMaterial(itemArray) {
    let chanceArray = []
    itemArray.forEach(item => {
        for (let i = 0; i < item.weight; i++) {
            chanceArray.push(item.material)
        }
    })

    let item = chanceArray[getRandomIndex(chanceArray.length)]
    if (item === 'BOTH') {
        return [handleSingleMaterial(itemArray[0].material), handleSingleMaterial(itemArray[1].material)]
    } else if (item === 'TWO') {
        let itemOne = chanceArray[getRandomIndex(chanceArray.length)]
        let itemTwo = chanceArray[getRandomIndex(chanceArray.length)]
        while (itemOne === 'TWO' || itemOne === 'ALL THREE') {
            itemOne = chanceArray[getRandomIndex(chanceArray.length)]
        }
        while (itemTwo === 'TWO' || itemTwo === 'ALL THREE' || itemTwo === itemOne) {
            itemTwo = chanceArray[getRandomIndex(chanceArray.length)]
        }
        return [handleSingleMaterial(itemOne), handleSingleMaterial(itemTwo)]
    } else if (item === 'ALL THREE') {
        return [handleSingleMaterial(itemArray[0].material), handleSingleMaterial(itemArray[1].material), handleSingleMaterial(itemArray[2].material)]
    } else {
        return handleSingleMaterial(item)
    }
}