const { query } = require('../../../../../db/index')
const { getNumberOfDetail } = require('./numberOfDetail')

async function getColors(colorChance, detail) {
    const number = getNumberOfDetail(colorChance, detail)
    return query(colorSQL, [number])
}

module.exports = {
    getColors
}

const colorSQL = `select * from color_table
order by random()
limit $1`