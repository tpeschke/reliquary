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
        let table = chanceTables.start[getRandomIndex(chanceTables.start.length)]
        let item
        if (item_tables_with_subtables.includes(table)) {
            let subtable = chanceTables[table][getRandomIndex(chanceTables[table].length)]
            item = chanceTables[subtable][getRandomIndex(chanceTables[subtable].length)]
        } else if (table !== ROLL_TWICE) {
            item = chanceTables[table][getRandomIndex(chanceTables[table].length)]
        } else {
            item = ROLL_TWICE
        }
        res.send(item)
    },
    getChanceTables: (req, res) => {
        res.send(chanceTables)
    }
}

