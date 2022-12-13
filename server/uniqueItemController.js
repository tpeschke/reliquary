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

function getItemFromTable(table, item) {
    console.log(table)
    const tableArray = tables[table]
    for (let i = 0; i < tableArray.length; i++) {
        if (tableArray[i].entry === item) {
            return tableArray[i]
        }
    }
}

module.exports = {
    setUpTables: () => {
        for (const table in tables ) {
            chanceTables[table] = []
            tables[table].forEach(entry => {
                for(let i = 0; i < entry.weight; i++) {
                    chanceTables[table].push(entry.entry)
                }
            })
        }
        console.log('Chance Tables Set Up')
    },
    getRandomUniqueItem: (req, res) => {
        let itemObject = {}
        // replace or subtype for base materials
        const table = chanceTables.start[getRandomIndex(chanceTables.start.length)]
        itemObject.table = table

        let item
        if (item_tables_with_subtables.includes(table)) {
            const subtable = chanceTables[table][getRandomIndex(chanceTables[table].length)]
            item = chanceTables[subtable][getRandomIndex(chanceTables[subtable].length)]
            itemObject.item = getItemFromTable(subtable, item)
        } else if (table !== ROLL_TWICE) {
            item = chanceTables[table][getRandomIndex(chanceTables[table].length)]
            itemObject.item = getItemFromTable(table, item)
        } else {
            item = ROLL_TWICE
        }

        res.send(itemObject)
    },
    getChanceTables: (req, res) => {
        res.send(chanceTables)
    }
}

