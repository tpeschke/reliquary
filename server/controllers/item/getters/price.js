const { gemSizeDictionary } = require('../dictionaries/gemSize')

const BONFIRE = 0
const DND = 1
const HACKMASTER = 2

function getPrice(item, materialInfo, gems, system) {
    const materials = Array.isArray(materialInfo) ? materialInfo : []
    const gemList = Array.isArray(gems) ? gems : []
    const materialMultiplier = materials.reduce((multiplier, material) => {
        const factor = Number(material?.price_multiplier)
        return multiplier * (Number.isFinite(factor) ? factor : 1)
    }, 1)
    const rawPrice = Number(item?.price) * materialMultiplier
    const basePrice = Number.isFinite(rawPrice) ? rawPrice : 0

    const gemPrice = gemList.reduce((price, gem) => {
        const sizeValue = gem?.size?.size
        if (sizeValue === undefined || sizeValue === null) {
            return price
        }
        const sizeMultiplier = gemSizeDictionary[+sizeValue] ?? 0
        return price + (+gem.price * sizeMultiplier)
    }, 0)

    if (system === BONFIRE) {
        return convertPrice(basePrice + gemPrice)
    } else if (system === DND) {
        return {
            amount: +(basePrice + gemPrice).toFixed(2),
            coin: 'gp'
        }
    }

    return {
        amount: +(basePrice + gemPrice).toFixed(2),
        coin: 'sp'
    }
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