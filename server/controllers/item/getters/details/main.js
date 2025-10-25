const { getColors } = require("./colors")
const { getEngravings } = require('./engravings')
const { getGems } = require('./gems')

module.exports = {
    getDetails: async ({colors, engravings, gems}, rarity, detail) => {
        let promiseArray = []

        promiseArray[0] = getColors(colors, detail)
        promiseArray[1] = getEngravings(engravings, detail)
        promiseArray[2] = getGems(gems, detail, rarity)

        return Promise.all(promiseArray)
    } 
}