const { gemSizeDictionary } = require('../dictionaries/gemSize')

function getPrice(item, materialInfo, gems) {
    const basePrice = +item.price * materialInfo.reduce((multiplier, material) => {
        return multiplier * +material.price_multiplier
    }, 1)

    const gemPrice = gems.reduce((price, gem) => {
        const gemPrice = +gem.price * gemSizeDictionary[+gem.size.size]
        return price + gemPrice
    }, 0)

    return +((basePrice + gemPrice).toFixed(2))
}

module.exports = {
    getPrice
}