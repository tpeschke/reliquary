const { ROLL_TWICE, CLOTH, CLOTHING } = require('./constants');
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
        if (tableArray[i].entry === item) {
            delete tableArray[i].weight
            return tableArray[i]
        }
    }
}

module.exports = {
    setUpTables: () => {
        for (const table in tables) {
            chanceTables[table] = []
            tables[table].forEach(entry => {
                for (let i = 0; i < entry.weight; i++) {
                    chanceTables[table].push(entry.entry)
                }
            })
        }
        console.log('Chance Tables Set Up')
    },
    getRandomUniqueItem: (req, res) => {
        let itemObject = {}
        const table = chanceTables.start[getRandomIndex(chanceTables.start.length)]
        itemObject.table = table

        itemObject = {...itemObject, ...getBaseItem(table)}

        // roll twice

        // replace or subtype for base materials

        // if no base_material & value, send it
        // if no base_material but it has a value, do details and then send it

        // METAL
        // 'Horn'
        // {material: 'Wicker', subtable: WOOD}
        // [WOOD, METAL]
        // [{material: FRUIT_AND_VEGATABLES, exclude: 'JAM', value: '3 sc'}]
        // [{weight: 3, material: METAL}, {weight: 6, material: 'Goose Feather'}]
        // [{weight: 3, material: 'Porcupine Spine'}, {weight: 6, material: 'Goose Feather'}]
        // [{weight: 6, material: Clay, subtable: STONE_EARTHWORK}, {weight: 2, material: WAX}, {weight: 1, material: Slate, subtable: STONE_EARTHWORK}]
        // [{weight: 2, material: WOOD}, {weight: 2, material: METAL}, {weight: 2, material: LEATHER}, {wight: 3, material: 'Waxed Cloth', subtables: [WAX, CLOTH]}]
        // [{label: 'Cover', materials: [{weight: 1, material: METAL},{weight: 5, material: CLOTH}, {weight: 2, material: LEATHER}, {weight: 1, material: WOOD}]}, 
               // {label: 'Interior', materials: PAPER_PRODUCT}]
        //  [{label: 'Hilt', materials: [LEATHER, WOOD]}, {label: 'Blade', material: METAL}]
        // [[{weight: 2, material: 'Down', subtable: ANIMAL_AIR}, {weight: 2, material: Feather, subtable: ANIMAL_AIR}], CLOTH]
        // [[{weight: 6, material: METAL}, {weight: 4, material: WOOD}], 'Glass']
        // [{material: 'Feathers', subtable: ANIMAL_AIR}, [{weight: 3, material: CLOTH}, {6, material: LEATHER}]]
        // [{weight: 7, material: METAL}, {weight: 2, material: CLOTH}, {weight: 1, material: 'both'}]
        // [{weight: 2, material: METAL}, {weight: 2, material: CLOTH}, {weight: 3, material: LEATHER}, {weight: 1, material: 'Two'}, {weight: 1, material: 'all three'}]
        // [{weight: 4, material: 'Chicken', valuie: '0.01 sc'}, {weight: 3, material: 'Goose', valuie: '0.01 sc'}, {weight: 2, material: 'Animal', subtable: ANIMAL_SUBTYPE, value: '0.03 sc'}, {weight: 1, material: 'Monster', value: '0.1 sc'}]

        // if substance isn't on the OTHER_MATERIALS table
        // if value = 0, do details, then return 'priceless'


        res.send(itemObject)
    },
    getChanceTables: (req, res) => {
        res.send(chanceTables)
    }
}

