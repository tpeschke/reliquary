const tables = require('./tables')

let chanceTables = {}

module.exports = {
    getRandomUniqueItem: (req, res) => {
        let table = tables.start[0].entry
        res.send(tables[table][0])
    },
}

