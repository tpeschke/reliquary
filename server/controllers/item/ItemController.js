const { checkForContentTypeBeforeSending } = require('../../helpers')
const { getItemsFromArray, getItem } = require('./getters/item')

async function getItems(req, res) {
    const { items } = req.body
    const { format, category, rarity = 1, detail = 'N', wear = 0, number = 1, version = 1, system = '0' } = req.query
    const systemNumber = +system

    let finishedItemArray = []

    if (items && items.length > 0) {
        getItemsFromArray(items, finishedItemArray, { format, category, rarity: +rarity, detail, wear, version, systemNumber })
    }

    for (let i = 0; i < number && i < 25; i++) {
        finishedItemArray.push(new Promise(resolve => {
            return getItem(resolve, { category, rarity: +rarity, detail, wear, version, systemNumber })
        }))
    }

    Promise.all(finishedItemArray).then(finalItemArray => {
        checkForContentTypeBeforeSending(res, finalItemArray.filter(item => item != null))
    }).catch(error => {
        console.log('get items ~ ', error.message)
        checkForContentTypeBeforeSending(res, [])
    })
}


module.exports = {
    getItems
}