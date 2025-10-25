const { query } = require('../../../../../db/index')
const { getNumberOfDetail } = require('./numberOfDetail')

async function getGems(gemChance, detail, rarity) {
    const number = getNumberOfDetail(gemChance, detail)

    const sizes = await query(gemSizeSQL, [number])
    const shapes = await query(gemShapeSQL, [number])
    const types = await query(gemTypeSQL, [rarity, number])

    return types.map((type, index) => {
        return {
            ...type,
            size: sizes[index],
            shape: shapes[index]
        }
    })
}

module.exports = {
    getGems
}

const gemShapeSQL = `select * from gem_shape_table
order by random()
limit $1`

const gemSizeSQL = `select * from gem_size_table
order by random() * weight
limit $1`

const gemTypeSQL = `select * from gem_type_table
where rarity = $1
order by random() * weight
limit $2`