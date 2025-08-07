const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('../helpers')
const sendErrorForward = sendErrorForwardNoFile('Enchanted Items')
const { query } = require('../../db/index')
const { semi_random, not_random, search } = require('../../db/enchantedItems')

const controllerFunctions = {
    getEnchantedItems: async (req, res) => {
        let { numberOfItems, status } = req.query

        const items = await controllerFunctions.getEnchantedItemsWorkHorse(numberOfItems, status).catch(e => sendErrorForward('get enchanted item', e, res))
        checkForContentTypeBeforeSending(res, items)
    },
    getEnchantedItemsWorkHorse: async (numberOfItems = 1, status) => {
        if (numberOfItems > 25) {
            numberOfItems = 25
        }

        return query(semi_random, [!!status, numberOfItems])
    },
    getSingleEnchantedItem: async (req, res) => {
        let { id } = req.params

        const item = await query(not_random, [+id])

        checkForContentTypeBeforeSending(res, item)
    },
    searchEnchantedItem: async (req, res) => {
        let { searchTerm } = req.query

        const items = await query(search, [searchTerm])

        checkForContentTypeBeforeSending(res, items)
    }
}

module.exports = controllerFunctions