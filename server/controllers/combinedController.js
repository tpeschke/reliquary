
const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('../helpers')
    , sendErrorForward = sendErrorForwardNoFile('Combined')

const enchantedCtrl = require('./enchantedController')
    , potionCtrl = require('./potionController')
    , scrollCtrl = require('./scrollController')
    , talismanCtrl = require('./talismanController')
    , itemCtrl = require('./item/ItemController')

controllerFunctions = {
    getTreasure: (req, res) => {
        const db = req.app.get('db')
        let { requestArray } = req.body

        let resultArray = []
        let promiseArray = []

        requestArray.forEach((request, index) => {
            if (!resultArray[index]) {
                resultArray[index] = []
            }
            
            if (request.enchanted) {
                const { numberOfItems, status } = request.enchanted
                promiseArray.push(enchantedCtrl.getEnchantedItemsWorkHorse(res, db, numberOfItems, status).then(result => {
                    resultArray[index] = [...resultArray[index], ...result]
                }).catch(e => sendErrorForward('get enchanted item in all treasures', e, res)))
            }

            if (request.potions) {
                const { numberOfItems, rarity } = request.potions
                promiseArray.push(potionCtrl.getRandomPotionsWorkhorse(res, db, numberOfItems, rarity).then(result => {
                    resultArray[index] = [...resultArray[index], ...result]
                }).catch(e => sendErrorForward('get potions in all treasures', e, res)))

            }

            if (request.scrolls) {
                request.scrolls.forEach(scroll => {
                    const { numberOfItems, power } = scroll
                    promiseArray.push(scrollCtrl.getRandomScrollsWorkhorse(res, numberOfItems, power).then(result => {
                        resultArray[index] = [...resultArray[index], ...result]
                    }).catch(e => sendErrorForward('get scrolls in all treasures', e, res)))
                })
            }

            if (request.talismans) {
                const { numberOfItems } = request.talismans
                promiseArray.push(talismanCtrl.getRandomTalismansWorkhorse(res, db, numberOfItems).then(result => {
                    resultArray[index] = [...resultArray[index], ...result]
                }).catch(e => sendErrorForward('get talismans in all treasures', e, res)))
            }
            if (request.items && request.items.length > 0) {
                const { items } = request
                
                let itemPromiseArray = []
                itemCtrl.getItemsFromArray(res, db, items, itemPromiseArray, {format: 'OBJECT'})

                promiseArray.push(Promise.all(itemPromiseArray).then(items => {
                    resultArray[index] = [...resultArray[index], ...items]
                    return items
                }))
            }
        })

        Promise.all(promiseArray).then(_ => {
            checkForContentTypeBeforeSending(res, resultArray)
        })
    }
}

module.exports = controllerFunctions