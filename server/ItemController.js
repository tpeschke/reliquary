const { sendErrorForwardNoFile, checkForContentTypeBeforeSending, randomIntBetweenTwoInts } = require('./helpers')
const { getDetailing, getStitchings, getEngravings, getGems, processMaterialResults, populationWithSpecificMaterials } = require('./ItemHelpers')
const { getStringDescription, cleanUpItem, calculateFinalPrice, getFormat } = require('./itemFormatHelper.js')
const dictionaries = require('./ItemDictionaries.js')

const sendErrorForward = sendErrorForwardNoFile('Items')

controllerFunctions = {
    getItems: async (req, res) => {
        const db = req.app.get('db')

        const { items } = req.body
        const { format, itemCategory, materialRarity, detailing, wear, number } = req.query

        let finishedItemArray = []

        if (items > 0) {
            items.forEach(item => {
                finishedItemArray.push(new Promise(resolve => {
                    return getItem(db, res, resolve, format, {...item, itemCategory, materialRarity, detailing, wear})
                }))
            })
        }

        for (let i = 1; i < number; i++) {
            finishedItemArray.push(new Promise(resolve => {
                return getItem(db, res, resolve, format, {itemCategory, materialRarity, detailing, wear})
            }))
        }

        Promise.all(finishedItemArray).then(finalItemArray => {
            checkForContentTypeBeforeSending(res, finalItemArray)
        })
    }
}

getItem = async (db, res, resolve, format, { itemCategory = randomIntBetweenTwoInts(1, 38), materialRarity = 'C', detailing = 'M', wear = '0' }) => {
    const searchFunctionToUse = dictionaries.getWhichCategoryToGet(itemCategory)

    db.get.random[searchFunctionToUse](dictionaries.itemCategory[+itemCategory]).then(item => {
        item = item[0]
        db.get.not_random.item_materials(item.id).then(materialResult => {
            if (materialResult.length > 0 && materialResult[0].material) {
                item.materials = processMaterialResults(materialResult)
            } else {
                item.materials = []
            }

            let promiseArray = []
            if (item.materials.length > 0) {
                promiseArray.push(populationWithSpecificMaterials(db, item.materials, materialRarity, res).then(populatedMaterials => {
                    item.materials = populatedMaterials
                    return true
                }).catch(e => sendErrorForward('populate materials', e, res)))
            }

            promiseArray.push(getDetailing(db, 'Adjectives', detailing, item.adjectives, res).then(adjectives => {
                item.adjectives = adjectives
                return true
            }).catch(e => sendErrorForward('get Adjectives details function', e, res)))

            promiseArray.push(getDetailing(db, 'Colors', detailing, item.colors, res).then(colors => {
                item.colors = colors
                return true
            }).catch(e => sendErrorForward('get Colors details function', e, res)))

            promiseArray.push(getGems(db, detailing, materialRarity, item.gems, res).then(gems => {
                item.gems = gems
                return getEngravings(db, detailing, item.engravings, item.gems, res).then(engravings => {
                    item.engravings = engravings
                    return true
                }).catch(e => sendErrorForward('get engravings details function', e, res))
            }).catch(e => sendErrorForward('get gems details function', e, res)))

            promiseArray.push(getStitchings(db, detailing, item.stitchings, res).then(stitchings => {
                item.stitchings = stitchings
            }).catch(e => sendErrorForward('get stitching details function', e, res)))

            Promise.all(promiseArray).then(_ => {
                item.number = randomIntBetweenTwoInts(item.amount_min, item.amount_max)
                item = cleanUpItem(item)
                item.finalPrice = calculateFinalPrice(item)
                item.wear = randomIntBetweenTwoInts(0, +wear)
                item.description = getStringDescription(item)
                resolve(getFormat(item, format))
            })
        }).catch(e => sendErrorForward('get material by item', e, res))
    }).catch(e => sendErrorForward('get item by category', e, res))
}

module.exports = controllerFunctions