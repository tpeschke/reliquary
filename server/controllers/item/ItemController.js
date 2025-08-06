const { sendErrorForwardNoFile, checkForContentTypeBeforeSending, randomIntBetweenTwoInts } = require('../../helpers')
const { getDetailing, getStitchings, getEngravings, getGems, processMaterialResults, populationWithSpecificMaterials } = require('./ItemHelpers')
const { getStringDescription, cleanUpItem, calculateFinalPrice, getFormat } = require('./itemFormatHelper.js')
const dictionaries = require('./ItemDictionaries.js')

const sendErrorForward = sendErrorForwardNoFile('Items')

const controllerFunctions = {
    getItems: async (req, res) => {
        const db = req.app.get('db')

        const { items } = req.body
        const { format, itemcategory, materialrarity, detailing, wear, number } = req.query

        let finishedItemArray = []

        if (items && items.length > 0) {
            controllerFunctions.getItemsFromArray(res, db, items, finishedItemArray, {format, itemcategory, materialrarity, detailing, wear})
        }

        for (let i = 0; i < number && i < 25; i++) {
            finishedItemArray.push(new Promise(resolve => {
                return getItem(res, db, resolve, format, { itemcategory, materialrarity, detailing, wear })
            }))
        }

        Promise.all(finishedItemArray).then(finalItemArray => {
            checkForContentTypeBeforeSending(res, finalItemArray)
        })
    },
    getItemsFromArray: async (res, db, itemArray, promiseArray, defaults) => {
        const { format, itemcategory, materialrarity, detailing, wear } = defaults

        for (let i = 0; i < itemArray.length && i < 25; i++) {
            const item = itemArray[i]
            promiseArray.push(new Promise(resolve => {
                itemcategory ? item.itemcategory = itemcategory : null
                materialrarity ? item.materialrarity = materialrarity : null
                detailing ? item.detailing = detailing : null
                wear ? item.wear = wear : null
                return getItem(res, db, resolve, format, item)
            }))
        }
    }
}

getItem = async (res, db, resolve, format, { itemcategory = randomIntBetweenTwoInts(1, 38), materialrarity = 'C', detailing = 'M', wear = '0' }) => {
    const searchFunctionToUse = dictionaries.getWhichCategoryToGet(itemcategory)

    db.gets.random[searchFunctionToUse](dictionaries.itemCategory[+itemcategory]).then(item => {
        item = item[0]
        db.gets.not_random.item_materials(item.id).then(materialResult => {
            if (materialResult.length > 0 && materialResult[0].material) {
                item.materials = processMaterialResults(materialResult)
            } else {
                item.materials = []
            }

            let promiseArray = []
            if (item.materials.length > 0) {
                promiseArray.push(populationWithSpecificMaterials(db, item.materials, materialrarity, res).then(populatedMaterials => {
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

            promiseArray.push(getGems(db, detailing, materialrarity, item.gems, res).then(gems => {
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