const { Pool } = require('pg')
const { connection } = require('../server/serverConfig')

const pool = new Pool(connection)

module.exports = {
    query: async (text, params) => {
        const result = await pool.query(text, params).catch(e => console.log(text, '\n', params, '\n', e))
        return result?.rows ? result.rows : []
    }
}