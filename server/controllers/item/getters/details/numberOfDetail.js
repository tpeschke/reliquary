const { detailMultiplier } = require('../../dictionaries/detailLevel')
const { getRandomInt } = require('../../../../helpers')

function getNumberOfDetail(baseChance = 0, detail = 'N') {
    let chance = detailMultiplier(detail) * (Number(baseChance) || 0)

    let randomNumber = getRandomInt(10)
    let number = 0

    while (randomNumber <= chance) {
        number++
        randomNumber *= 2
    }

    return number
}

module.exports = {
    getNumberOfDetail
}