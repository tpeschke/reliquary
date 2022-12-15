const { ROLL_TWICE, CLOTH, CLOTHING } = require('./constants');
const { item_tables_with_subtables, other_table } = require('./tables');
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

function handleMaterial(base_material) {
    let materialObject = { baseMaterial: base_material }

    if (typeof (base_material) === 'string' && tables[base_material]) {
        let itemToGet = chanceTables[base_material][getRandomIndex(chanceTables[base_material].length)]
        materialObject = { ...materialObject, ...getItemFromTable(base_material, itemToGet) }
    } else if (typeof (base_material) === 'string' && !tables[base_material]) {

        materialObject = { ...materialObject, ...getItemFromTable('other_table', base_material) }

        if (materialObject.subtable) {
            let submaterial = chanceTables[materialObject.subtable][getRandomIndex(chanceTables[materialObject.subtable].length)]
            materialObject.submaterial = getItemFromTable(materialObject.subtable, submaterial).material
        }
        if (base_material.subtable) {
            let submaterial = chanceTables[materialObject.subtable][getRandomIndex(chanceTables[materialObject.subtable].length)]
            materialObject.submaterial = getItemFromTable(materialObject.subtable, submaterial).material
        }
    } else if (typeof (base_material) === 'object') {
        const { material } = base_material

        if (typeof (material) === 'string' && tables[material]) {
            let itemToGet = chanceTables[material][getRandomIndex(chanceTables[material].length)]
            materialObject = { ...materialObject, ...getItemFromTable(material, itemToGet) }

        } else if (typeof (material) === 'string' && !tables[material]) {
            materialObject = { ...materialObject, ...getItemFromTable('other_table', material) }
        }

        if (materialObject.subtable) {
            let submaterial = chanceTables[materialObject.subtable][getRandomIndex(chanceTables[materialObject.subtable].length)]
            materialObject.submaterial = getItemFromTable(materialObject.subtable, submaterial).material
        }
    } else {
        console.log('something went wrong: ', base_material)
    }

    return materialObject
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
        const { base_material } = itemObject
        let materialArray = []

        if (typeof (base_material) === 'string' || base_material.material) {
            materialArray.push(handleMaterial(base_material))
        } else {
            if (base_material[0].weight) {
                let item = buildChanceTablesAndRollOnThem(base_material)
                let itemToGet = getItemFromSpecificTable(base_material, item)
                if (itemToGet.subtable) {
                    let itemObject = { baseMaterial: itemToGet.subtable }
                    materialArray.push({ ...itemObject, ...getItemFromTable(itemToGet.subtable, itemToGet.material) })
                } else {
                    materialArray.push(handleMaterial(item))
                }
            } else {
                for (let i = 0; i < base_material.length; i++) {
                    materialArray.push(handleMaterial(base_material[i]))
                }
            }
            // ARRAY
            // [{material: 'Feathers', subtable: ANIMAL_AIR}, [{weight: 3, material: CLOTH}, {6, material: LEATHER}]]
            // [{weight: 7, material: METAL}, {weight: 2, material: CLOTH}, {weight: 1, material: 'both'}]
            // [{weight: 2, material: METAL}, {weight: 2, material: CLOTH}, {weight: 3, material: LEATHER}, {weight: 1, material: 'Two'}, {weight: 1, material: 'all three'}]
            // [{weight: 4, material: 'Chicken', valuie: '0.01 sc'}, {weight: 3, material: 'Goose', valuie: '0.01 sc'}, {weight: 2, material: 'Animal', subtable: ANIMAL_SUBTYPE, value: '0.03 sc'}, {weight: 1, material: 'Monster', value: '0.1 sc'}]
            // [{weight: 2, material: WOOD}, {weight: 2, material: METAL}, {weight: 2, material: LEATHER}, {wight: 3, material: 'Waxed Cloth', subtables: [WAX, CLOTH]}]
            // [[{weight: 6, material: METAL}, {weight: 4, material: WOOD}], 'Glass']
            // [[{weight: 2, material: 'Down', subtable: ANIMAL_AIR}, {weight: 2, material: Feather, subtable: ANIMAL_AIR}], CLOTH]
            // [{label: 'Cover', materials: [{weight: 1, material: METAL},{weight: 5, material: CLOTH}, {weight: 2, material: LEATHER}, {weight: 1, material: WOOD}]}, 
            // {label: 'Interior', materials: PAPER_PRODUCT}]
            //  [{label: 'Hilt', materials: [LEATHER, WOOD]}, {label: 'Blade', material: METAL}]
        }

        console.log(materialArray)

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
                base_material: [{ wight: 3, material: 'Waxed Cloth', subtables: ['Wax', 'Cloth'] }],
                Size: 'S',
                Adjectives: 2,
                Colors: 1
            },
            {
                weight: 2,
                entry: 'Basket, Medium',
                base_material: 'Horn',
                Size: 'S',
                Adjectives: 2,
                Colors: 1
            },
            {
                weight: 2,
                entry: 'Basket, Medium',
                base_material: 'Metal',
                Size: 'S',
                Adjectives: 2,
                Colors: 1
            },
            {
                weight: 2,
                entry: 'Basket, Medium',
                base_material: ['Metal', 'Wood'],
                Size: 'S',
                Adjectives: 2,
                Colors: 1
            }
        ]

        itemArray.forEach(item => {
            convertMaterial(item)
        })
    }
}

