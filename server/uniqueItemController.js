const e = require('express');
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

function getItemFromSpecificTable(table, item) {
    for (let i = 0; i < table.length; i++) {
        if (table[i].entry === item || table[i].material === item) {
            return table[i]
        }
    }
}

function itemDetailsFromChanceTables(subtable) {
    let itemToGet = chanceTables[subtable][getRandomIndex(chanceTables[subtable].length)]
    return getItemFromTable(subtable, itemToGet)
}

function buildChanceTablesAndRollOnThem(tableArray) {
    let chanceTable = []
    tableArray.forEach(entry => {
        for (let i = 0; i < entry.weight; i++) {
            if (entry.entry) {
                chanceTable.push(entry.entry)
            } else if (entry.material) {
                chanceTable.push(entry.material)
            }
        }
    })

    return chanceTable[getRandomIndex(chanceTable.length)]
}

function convertMaterial(itemObject) {
    if (itemObject.base_material) {

        // [{weight: 7, material: METAL}, {weight: 2, material: CLOTH}, {weight: 1, material: 'both'}]
        // [{weight: 2, material: METAL}, {weight: 2, material: CLOTH}, {weight: 3, material: LEATHER}, {weight: 1, material: 'Two'}, {weight: 1, material: 'all three'}]
        // exotic materials
        // subtables

        // if substance isn't on the OTHER_MATERIALS table
    }
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

        itemObject = { ...itemObject, ...getBaseItem(table) }

        // roll twice

        // replace or subtype for base materials

        // if no base_material & value, send it
        // if no base_material but it has a value, do details and then send it

        convertMaterial(itemObject)

        // if value = 0, do details, then return 'priceless'

        res.send(itemObject)
    },
    getChanceTables: (req, res) => {
        res.send(chanceTables)
    },
    runTests: () => {
        let itemArray = [
            {
                weight: 2,
                entry: 'Basket, Medium',
                base_material: [{weight: 1, material: 'Metal'}, {weight: 1, material: 'Cloth'}, {weight: 3, material: 'BOTH'}],
                Size: 'S',
                Adjectives: 2,
                Colors: 1
            },
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

        itemArray.forEach(item => {
            handleMaterials(item)
        })
    }
}

function handleMaterials(item) {
    let finalItem = {
        materials: []
    }

    const stringObjectOrArray = checkIfStringObjectOrArray(item.base_material)
    if (stringObjectOrArray === 'array' && !item.base_material[0].weight) {
        item.base_material.forEach(base_material => {
            finalItem.materials.push(sortItems(base_material))
        })
    } else {
        finalItem.materials.push(sortItems(item.base_material))
    }

    console.log(finalItem.materials)
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

function changeSCStringToNumber(scString) {
    if (isNaN(scString)) {
        return +scString.split('sc')[0].trim()
    }
    return scString
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
    console.log(item)
    if (item === 'BOTH') {
        
    } else {
        return handleSingleMaterial(item)
    }
}