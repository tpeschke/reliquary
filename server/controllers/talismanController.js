const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('../helpers')
const sendErrorForward = sendErrorForwardNoFile('Talismans')

const controllerFunctions = {
    getRandomTalismans: async (req, res) => {
        const db = req.app.get('db')
        let { numberOfItems } = req.query

        const talismans = await controllerFunctions.getRandomTalismansWorkhorse(res, db, numberOfItems)
        checkForContentTypeBeforeSending(res, talismans)
    },
    getRandomTalismansWorkhorse: async (res, db, numberOfItems = 1) => {
        if (numberOfItems > 25) {
            numberOfItems = 25
        }

        return db.gets.random.talisman(numberOfItems).catch(e => sendErrorForward('get random talisman', e, res))
    }
}

module.exports = controllerFunctions