const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('./helpers')
const sendErrorForward = sendErrorForwardNoFile('Enchanted Items')

controllerFunctions = {
    getEnchantedItem: (req, res) => {
        const db = req.app.get('db')
        let { numberOfItems, status } = req.query

        if (!numberOfItems) {
            numberOfItems = 1
        } else if (numberOfItems > 25) {
            numberOfItems = 25
        }

        db.get.semi_random.enchanted_item(numberOfItems, !!status).then(items => {
            checkForContentTypeBeforeSending(res, items)
        }).catch(e => sendErrorForward('get enchanted item', e, res))
    }
}

module.exports = controllerFunctions