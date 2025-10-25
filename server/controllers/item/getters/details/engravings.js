const { query } = require('../../../../../db/index')
const { getNumberOfDetail } = require('./numberOfDetail')

async function getEngravings(engravingChance, detail) {
    const number = getNumberOfDetail(engravingChance, detail)

    const subjects = await query(subjectSQL, [number])
    const timePeriods = await query(timePeriodSQL, [number])

    return subjects.map((subject, index) => {
        return {
            ...subject,
            timePeriod: timePeriods[index]
        }
    })
}

module.exports = {
    getEngravings
}

const subjectSQL = `select * from engraving_table
order by random()
limit $1`

const timePeriodSQL = `select * from time_table
order by random()
limit $1`