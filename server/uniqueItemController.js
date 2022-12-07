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
        let item = chanceTables[table][getRandomIndex(chanceTables[table].length)]
        res.send(item)
    },
    getChanceTables: (req, res) => {
        res.send(chanceTables)
    }
}

