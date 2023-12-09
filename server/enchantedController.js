const { sendErrorForwardNoFile } = require('./helpers')
const sendErrorForward = sendErrorForwardNoFile('Enchanted Items')

controllerFunctions = {
    getEnchantedItem: (req, res) => {
        const db = req.app.get('db')
        let { numberOfItems } = req.query

        if (!numberOfItems) {
            numberOfItems = 1
        } else if (numberOfItems > 25) {
            numberOfItems = 25
        }
        
        db.get.random.enchanted_item(numberOfItems).then(items => {
            res.send(items)
        }).catch(e => sendErrorForward('get enchanted item', e, res))
    }
}

module.exports = controllerFunctions