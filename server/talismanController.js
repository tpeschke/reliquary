const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('./helpers')
const sendErrorForward = sendErrorForwardNoFile('Talismans')

controllerFunctions = {
    getRandomTalismans: (req, res) => {
        const db = req.app.get('db')
        let { numberOfItems } = req.query

        if (!numberOfItems) {
            numberOfItems = 1
        } else if (numberOfItems > 25) {
            numberOfItems = 25
        }
        
        db.get.random.talisman(numberOfItems).then(talisman => {
            checkForContentTypeBeforeSending(res, talisman)
        }).catch(e => sendErrorForward('get random talisman', e, res))
    }
}

module.exports = controllerFunctions