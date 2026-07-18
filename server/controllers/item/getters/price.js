const { gemSizeDictionary } = require('../dictionaries/gemSize')

function getPrice(item, materialInfo, gems) {
    const basePrice = +item.price * materialInfo.reduce((multiplier, material) => {
        return multiplier * +material.price_multiplier
    }, 1)

    const gemPrice = gems.reduce((price, gem) => {
        const gemPrice = +gem.price * gemSizeDictionary[+gem.size.size]
        return price + gemPrice
    }, 0)

    return convertPrice(basePrice + gemPrice)
}

function convertPrice(basePrice) {
    if (typeof basePrice === 'string') { return { amount: basePrice, coin: '' } }

    if (basePrice < 10) {
        return {
            amount: 1,
            coin: 'cc'
        }
    } else if (basePrice < 100) {
        return {
            amount: +(basePrice).toFixed(0),
            coin: 'cc'
        }
    } else if (basePrice < 10000) {
        return {
            amount: +(basePrice / 100).toFixed(2),
            coin: 'sc'
        }
    } else if (basePrice < 100000) {
        return {
            amount: +(basePrice / 10000).toFixed(2),
            coin: 'gc'
        }
    }

    return {
        amount: +(basePrice / 10000).toFixed(2),
        coin: 'pc'
    }
}

module.exports = {
    getPrice
}