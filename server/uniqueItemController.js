const { ROLL_TWICE, ADJECTIVES, COLORS, WEAPON_COLORS, EXPLOSION_COLORS, ENGRAVINGS, STITCHINGS, QUIRKS, SUBJECT, GEMS, RAW_GOODS, ANIMAL_SUBTYPE, PERSONS, EVENTS, BODY_PARTS, RACE_OF_ORIGIN, EVENTS_TIMEPERIOD, EVENTS_SUBJECT, GEM_SIZE, GEM_TYPE, GEM_SHAPE, STITCHING_TYPE, ENGRAVING_TYPE_WITH_GEMS, ENGRAVING_TYPE_WITH_NO_GEMS } = require('./constants');
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
        if (tableArray[i].entry === item || tableArray[i].material === item || tableArray[i].detail === item || tableArray[i].subject === item || tableArray[i].type === item || tableArray[i].shape === item) {
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
                    } else if (entry.subject) {
                        chanceTables[table].push(entry.subject)
                    } else if (entry.type) {
                        chanceTables[table].push(entry.type)
                    } else if (entry.shape) {
                        chanceTables[table].push(entry.shape)
                    }
                }
            })
        }
        console.log('Chance Tables Set Up')
    },
    getRandomUniqueItem: (req, res) => {
        itemObject = getSingleUniqueItem()

        let { budget } = req.query
        
        if (budget) {
            budget = +budget

            while (itemObject.value < budget) {
                console.log('grabbing another item')
                itemObject = getSingleUniqueItem()
            }
            if (itemObject.value > budget) {
                console.log(itemObject.value, ' Add Wear')
                // add Wear
            }
        }

        res.send(itemObject)
    },
    getChanceTables: (req, res) => {
        res.send(chanceTables)
    }
}

function getSingleUniqueItem() {
    // roll twice

    let itemObject = {}
        , rawObject = {}
    const table = chanceTables.start[getRandomIndex(chanceTables.start.length)]
    itemObject.table = table

    rawObject = { ...rawObject, ...getBaseItem(table) }
    if (table === RAW_GOODS) { 
        console.log('RAW GOOD', rawObject) 
    }
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

            let detailNumber = Math.floor(rawObject[tableToLookAt] / getRandomNumber(10))

            if (detailNumber >= 1) {
                itemObject[tableToLookAt] = generateDetails(tableToLookAt, detailNumber)
                startingValue += .05 * itemObject[tableToLookAt].length
            }
        } else if (table === SUBJECT) {
            let subjectArray = []
            let detailNumber = Math.floor(rawObject[table] / getRandomNumber(10))
            for (i = 0; i < detailNumber; i++) {
                subjectArray.push(generateSubject())
            }
            valueMultiplier = subjectArray.reduce((acc, { valueMultiplier }) => acc + valueMultiplier, 0)
            itemObject.subject = subjectArray
            startingValue += .05 * valueMultiplier
        } else if (table === STITCHINGS) {
            let stitchingArray = []
            let detailNumber = Math.floor(rawObject[table] / getRandomNumber(10))
            for (i = 0; i < detailNumber; i++) {
                let stitchingObject = {
                    type: tables[STITCHING_TYPE][0].detail,
                    value: changeSCStringToNumber(tables[STITCHING_TYPE][0].value),
                    subject: generateSubject()
                }
                stitchingArray.push(stitchingObject)
            }
            if (detailNumber > 0) {
                let valueMultiplier = 0
                let stitchValue = 0
                valueMultiplier = stitchingArray.forEach(stitch => {
                    stitchValue += stitch.value
                    valueMultiplier += stitch.subject.valueMultiplier
                })
                itemObject.stitchings = stitchingArray
                startingValue += stitchValue
                startingValue += .05 * valueMultiplier
            }
        } else if (table === GEMS) {
            let gemArray = []
            let detailNumber = Math.floor(rawObject[table] / getRandomNumber(10))
            for (i = 0; i < detailNumber; i++) {
                gemArray.push(generateGems())
            }
            itemObject.gems = gemArray
            startingValue += gemArray.reduce((acc, { value }) => acc + value, 0)
        }
    }

    if (rawObject[ENGRAVINGS]) {
        let engravingArray = []
        let detailNumber = Math.floor(rawObject[table] / getRandomNumber(10))
        for (i = 0; i < detailNumber; i++) {
            let engravingObject = {
                subject: generateSubject()
            }
            if (itemObject.gems.length > 0) {
                const type = itemDetailsFromChanceTables(ENGRAVING_TYPE_WITH_GEMS)
                engravingObject.value = changeSCStringToNumber(type.value)
                engravingObject.type = type.type
            } else {
                const type = itemDetailsFromChanceTables(ENGRAVING_TYPE_WITH_NO_GEMS)
                engravingObject.value = changeSCStringToNumber(type.value)
                engravingObject.type = type.type
            }
            engravingArray.push(engravingObject)
        }
        if (detailNumber > 0) {
            let valueMultiplier = 0
            let engravingValue = 0
            valueMultiplier = engravingArray.forEach(engraving => {
                engravingValue += engraving.reduce((acc, { value }) => acc + value, 0)
                valueMultiplier += engraving.subject.reduce((acc, { valueMultiplier }) => acc + valueMultiplier, 0)
            })
            itemObject.engravings = engravingArray
            startingValue += engravingValue
            startingValue += .05 * valueMultiplier
        }
    }

    const sizeModifier = {
        F: 1,
        D: 2,
        T: 3,
        S: 4,
        M: 5,
        L: 6,
        H: 7,
        G: 8,
        E: 9,
        C: 10
    }

    itemObject.size = rawObject.Size
    startingValue += sizeModifier[itemObject.size]

    itemObject.value = +startingValue.toFixed(2)

    return itemObject
}

function generateGems() {
    let gem = {}

    let { detail: size, valueMultiplier } = detailInfoFromChanceTables(GEM_SIZE)
    let { type, value } = detailInfoFromChanceTables(GEM_TYPE)

    gem.size = size + ' mm'
    gem.type = type
    gem.value = value * valueMultiplier

    gem.shape = detailInfoFromChanceTables(GEM_SHAPE).shape

    return gem
}

function generateSubject() {
    let subject = {}
    const possibleSubjects = detailInfoFromChanceTables('Subject')
    subject.focalpoint = possibleSubjects.subject
    let valueMultiplier = 0

    for (const table in possibleSubjects) {
        let detailNumber = Math.floor(+possibleSubjects[table] / getRandomNumber(10))

        if (detailNumber >= 1) {
            if (table === COLORS || table === ADJECTIVES) {
                subject[table] = generateDetails(table, detailNumber)

                valueMultiplier += subject[table].length
            } else if (table === 'secondary subject') {
                let subjectArray = []
                for (i = 0; i < detailNumber; i++) {
                    subjectArray = [...subjectArray, detailInfoFromChanceTables('Subject').subject]
                }
                subjectArray = [...new Set(subjectArray)]

                subject.secondary_subjects = subjectArray
                valueMultiplier += subject.secondary_subjects.length
            } else if (table === ANIMAL_SUBTYPE) {
                let animalArray = []
                for (i = 0; i < detailNumber; i++) {
                    const animalSubtype = detailInfoFromChanceTables(ANIMAL_SUBTYPE).subtable
                    animalArray = [...animalArray, detailInfoFromChanceTables(animalSubtype).detail]
                }

                subject.animals = animalArray
                valueMultiplier += subject.animals.length
            } else if (table === PERSONS) {
                let personArray = []

                for (i = 0; i < detailNumber; i++) {
                    let personObject = {}

                    personObject.spheres = handleSingleDetail(PERSONS)
                    if (personObject.spheres.length === 1 && personObject.spheres[0] === 'Infamous') {
                        personObject.spheres.push(handleSingleDetail(PERSONS))
                    }
                    personObject.race = handleSingleDetail(RACE_OF_ORIGIN)[0]
                    personObject.timeperiod = handleSingleDetail(EVENTS_TIMEPERIOD)[0]

                    personArray.push(personObject)
                }
                subject.persons = personArray
                valueMultiplier += detailNumber
            } else if (table === EVENTS) {
                let eventArray = []

                for (i = 0; i < detailNumber; i++) {
                    let eventObject = {}

                    eventObject.subject = handleSingleDetail(EVENTS_SUBJECT)[0]
                    if (eventObject.subject.length === 1 && eventObject.subject[0] === 'Subject of Infamy') {
                        eventObject.subject.push(handleSingleDetail(PERSONS))
                    }
                    eventObject.timeperiod = handleSingleDetail(EVENTS_TIMEPERIOD)[0]

                    eventArray.push(eventObject)
                }
                subject.events = eventArray
                valueMultiplier += detailNumber
            } else if (table === BODY_PARTS) {
                let bodyArray = []
                for (i = 0; i < detailNumber; i++) {
                    const bodyPartSubtable = detailInfoFromChanceTables(BODY_PARTS).subtable
                    bodyArray = [...bodyArray, detailInfoFromChanceTables(bodyPartSubtable).detail]
                }

                subject.bodyparts = bodyArray
                valueMultiplier += detailNumber
            }
        }
    }

    subject.valueMultiplier = valueMultiplier

    return subject
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
        const { material: specificMaterial, value, subtable, detail } = itemDetailsFromChanceTables(material)
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
            specificMaterial: specificMaterial ? specificMaterial : detail,
            value: changeSCStringToNumber(value)
        }
    } else {
        const { material: specificMaterial, value, subtable, subtables, detail } = getItemFromTable('other_table', material)
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