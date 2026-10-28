
const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('../helpers')
    , sendErrorForward = sendErrorForwardNoFile('Combined')

const enchantedCtrl = require('./enchantedController')
    , potionCtrl = require('./potionController')
    , scrollCtrl = require('./scroll/scrollController')
    , talismanCtrl = require('./talismanController')
    , { getItemsFromArray } = require('./item/getters/item')
    , { scrollRequestCount } = require('./treasureRequest')

const controllerFunctions = {
    getTreasure: async (req, res) => {
        try {
            const body = req.body || {}
            const requestArray = Array.isArray(body.requestArray) ? body.requestArray : []
            const systemNumber = Number(body.system ?? 0)

            const resultArray = requestArray.map(() => [])
            const promiseArray = []

            requestArray.forEach((request, index) => {
                if (!request || typeof request !== 'object') {
                    return
                }

                if (request.enchanted) {
                    const { numberOfItems, status } = request.enchanted
                    promiseArray.push(collect(
                        enchantedCtrl.getEnchantedItemsWorkHorse(numberOfItems, status),
                        resultArray,
                        index,
                        'enchanted'
                    ))
                }

                if (request.potions) {
                    const { numberOfItems, rarity } = request.potions
                    promiseArray.push(collect(
                        potionCtrl.getRandomPotionsWorkhorse(res, numberOfItems, rarity),
                        resultArray,
                        index,
                        'potions'
                    ))
                }

                if (Array.isArray(request.scrolls)) {
                    request.scrolls.forEach(scroll => {
                        const numberOfItems = scrollRequestCount(scroll)
                        if (!numberOfItems) {
                            return
                        }
                        promiseArray.push(collect(
                            scrollCtrl.getRandomScrollsWorkhorse(numberOfItems, scroll.power),
                            resultArray,
                            index,
                            'scrolls'
                        ))
                    })
                }

                if (request.talismans) {
                    const { numberOfItems } = request.talismans
                    promiseArray.push(collect(
                        talismanCtrl.getRandomTalismansWorkhorse(numberOfItems),
                        resultArray,
                        index,
                        'talismans'
                    ))
                }

                if (Array.isArray(request.items) && request.items.length > 0) {
                    const itemPromiseArray = []
                    getItemsFromArray(request.items, itemPromiseArray, { format: 'INFO', systemNumber })
                    promiseArray.push(collect(Promise.all(itemPromiseArray), resultArray, index, 'items'))
                }
            })

            await Promise.all(promiseArray)
            checkForContentTypeBeforeSending(res, resultArray)
        } catch (error) {
            sendErrorForward('get treasure', error, res)
        }
    }
}

function collect(work, resultArray, index, label) {
    return Promise.resolve(work).then(result => {
        const rows = (Array.isArray(result) ? result : []).filter(row => row != null)
        const tagged = label === 'scrolls'
            ? rows.map(row => row.type ? row : { ...row, type: 'scroll' })
            : rows
        resultArray[index] = [...resultArray[index], ...tagged]
    }).catch(error => {
        console.log(`Combined get ${label} in all treasures ~ `, error.message)
    })
}

module.exports = controllerFunctions
