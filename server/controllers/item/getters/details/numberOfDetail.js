const detailChanceLetterDictionary = require('../../dictionaries/detailChanceLetterDictionary')
const { getRandomInt } = require('../../../../helpers')

function getNumberOfDetail(baseChance = 0, detail = 'N') {
    let chance = detailChanceLetterDictionary[detail.toUpperCase()] * baseChance

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