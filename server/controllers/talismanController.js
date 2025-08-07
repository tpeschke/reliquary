const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('../helpers')
const { random } = require('../../db/talisman')
const { query } = require('../../db/index')
const sendErrorForward = sendErrorForwardNoFile('Talismans')

const controllerFunctions = {
    getRandomTalismans: async (req, res) => {
        let { numberOfItems } = req.query

        const talismans = await controllerFunctions.getRandomTalismansWorkhorse(numberOfItems)
        checkForContentTypeBeforeSending(res, talismans)
    },
    getRandomTalismansWorkhorse: async (numberOfItems = 1) => {
        if (numberOfItems > 25) {
            numberOfItems = 25
        }

        return query(random, [numberOfItems]).catch(e => sendErrorForward('get random talisman', e, res))
    }
}

module.exports = controllerFunctions