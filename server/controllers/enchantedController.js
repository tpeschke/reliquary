const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('../helpers')
const sendErrorForward = sendErrorForwardNoFile('Enchanted Items')

const controllerFunctions = {
    getEnchantedItems: async (req, res) => {
        const db = req.app.get('db')
        let { numberOfItems, status } = req.query
        console.log(db)
        console.log(get)
        const items = await controllerFunctions.getEnchantedItemsWorkHorse(res, db, numberOfItems, status).catch(e => sendErrorForward('get enchanted item', e, res))
        checkForContentTypeBeforeSending(res, items)
    },
    getEnchantedItemsWorkHorse: async (res, db, numberOfItems, status) => {
        if (numberOfItems > 25) {
            numberOfItems = 25
        }
    
        return db.get.semi_random.enchanted_item(numberOfItems, !!status).catch(e => sendErrorForward('get enchanted item workhorse', e, res))
    },
    getSingleEnchantedItem: (req, res) => {
        const db = req.app.get('db')
        let { id } = req.params

        db.get.not_random.enchanted_item(+id).then(item => {
            checkForContentTypeBeforeSending(res, item)
        }).catch(e => sendErrorForward('get single enchanted item', e, res))
    },
    searchEnchantedItem: (req, res) => {
        const db = req.app.get('db')
        let { searchTerm } = req.query

        db.get.not_random.enchanted_item_search(searchTerm).then(items => {
            checkForContentTypeBeforeSending(res, items)
        }).catch(e => sendErrorForward('search enchanted item', e, res))
    }
}



module.exports = controllerFunctions