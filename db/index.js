const { Pool } = require('pg')
const { connection } = require('../server/serverConfig')

const pool = new Pool(connection)

module.exports = {
    query: async (text, params) => {
        const { rows } = await pool.query(text, params)
        return rows
    }
}