const { ROLL_TWICE } = require('./constants');
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
        if (tableArray[i].entry === item || tableArray[i].material === item) {
            return tableArray[i]
        }
    }
}

function itemDetailsFromChanceTables(subtable) {
    let itemToGet = chanceTables[subtable][getRandomIndex(chanceTables[subtable].length)]
    return getItemFromTable(subtable, itemToGet)
}

function changeSCStringToNumber(scString) {
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
                    }
                }
            })
        }
        console.log('Chance Tables Set Up')
    },
    getRandomUniqueItem: (req, res) => {
        let itemObject = {}
        const table = chanceTables.start[getRandomIndex(chanceTables.start.length)]
        itemObject.table = table
        
        console.log(table)
        // roll twice

        itemObject = { ...itemObject, ...getBaseItem(table) }

        if (itemObject.base_material) {
            itemObject.base_material = handleMaterials(itemObject.base_material)
            // exotic materials
            // subtables
        } else if (!itemObject.base_material && itemObject.value) {
            itemObject.value = changeSCStringToNumber(itemObject.value)
        } else {
            console.log('something went wrong:', itemObject)
        }

        // if value = 0, do details, then return 'priceless'

        // trim down final item
        res.send(itemObject)
    },
    getChanceTables: (req, res) => {
        res.send(chanceTables)
    },
    runTests: () => {
        let itemArray = [
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: [{weight: 2, material: 'Metal'}, {weight: 2, material: 'Cloth'}, {weight: 3, material: 'Leather'}, {weight: 1, material: 'TWO'}, {weight: 1, material: 'ALL THREE'}],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: [{weight: 1, material: 'Metal'}, {weight: 1, material: 'Cloth'}, {weight: 3, material: 'BOTH'}],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: [{label: 'Hilt', materials: ['Leather', 'Wood']}, {label: 'Blade', material: 'Metal'}],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: [[{weight: 6, material: 'Metal'}, {weight: 4, material: 'Wood'}], 'Glass'],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: [{weight: 1, material: 'Wood'}, {weight: 1, material: 'Metal'}, {weight: 1, material: 'Leather'}, {weight: 3, material: 'Waxed Cloth', subtables: ['Wax', 'Cloth']}],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: [{weight: 4, material: 'Chicken'}, {weight: 3, material: 'Goose'}, {weight: 2, material: 'Animal', value: '0.03 sc'}, {weight: 1, material: 'Monster', value: '0.1 sc'}],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: [{ material: 'Ivory' }, [{ weight: 3, material: 'Cloth' }, { weight: 6, material: 'Leather' }]],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: [{ label: 'Cover', materials: [{ weight: 1, material: 'Metal' }, { weight: 5, material: 'Cloth' }, { weight: 2, material: 'Leather' }, { weight: 1, material: 'Wood' }] }, { label: 'Interior', materials: 'Paper Product' }],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: [{label: 'Hilt', material: 'Wicker'}],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: ['Metal', 'Tallow'],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: ['Metal'],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: ['Metal', [{ weight: 1, material: 'Metal' }, { weight: 1, material: 'Leather' }]],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: [{ weight: 1, material: 'Metal' }, { weight: 1, material: 'Leather' }],
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: { material: 'Waxed Cloth' },
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: {label: 'Hilt', material: 'Wicker'},
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: {label: 'Hilt', material: 'Tallow'},
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: { label: 'Hilt', material: 'Metal' },
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: 'Wicker',
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: 'Tallow',
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
            // {
            //     weight: 2,
            //     entry: 'Basket, Medium',
            //     base_material: 'Metal',
            //     Size: 'S',
            //     Adjectives: 2,
            //     Colors: 1
            // },
        ]

    }
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
        const { material: specificMaterial, value } = itemDetailsFromChanceTables(material)
        // subtable handling
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