const { checkForContentTypeBeforeSending } = require('../helpers')
const { random } = require('../../db/talisman')
const { query } = require('../../db/index')

const controllerFunctions = {
    getRandomTalismans: async (req, res) => {
        let { numberOfItems } = req.query

        const talismans = await controllerFunctions.getRandomTalismansWorkhorse(numberOfItems)
        checkForContentTypeBeforeSending(res, talismans)
    },
    getRandomTalismansWorkhorse: async (numberOfItems = 1) => {
        const count = Number(numberOfItems)
        if (!Number.isFinite(count) || count <= 0) {
            return []
        }

        const limited = Math.min(25, Math.floor(count))
        return query(random, [limited]).catch(e => {
            console.log('Talismans get random talisman ~ ', e.message)
            return []
        })
    }
}

module.exports = controllerFunctions