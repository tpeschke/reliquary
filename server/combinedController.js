
const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('./helpers')
    , sendErrorForward = sendErrorForwardNoFile('Combined')

const enchantedCtrl = require('./enchantedController')
    , potionCtrl = require('./potionController')
    , scrollCtrl = require('./scrollController')
    , talismanCtrl = require('./talismanController')
    , itemCtrl = require('./ItemController')

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

            if (request.items) {
                const { itemArray } = request.items
                
                let itemPromiseArray = []
                itemCtrl.getItemsFromArray(res, db, itemArray, itemPromiseArray, {format: 'string'})

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