const {
    formatOne,
    formatTwo,
    formatThree,
    formatFour,
    formatFive,
    formatSix,
    formatSeven,
    formatEight,
    formatNine
} = require('./descriptionFormats')
const { createDescriptiveWear } = require('./wear')
const { formatColors } = require('./details/colors')
const { formatEngravings } = require("./details/engravings")
const { formatGems } = require("./details/gems")

function formatStringDescription(item, materialInfo, colors, engravings, gems, rolledWear, price, system) {
    const isBonfire = system === 0

    let baseString = formatAccordingToType(item, materialInfo, isBonfire)

    if (colors.length > 0 || engravings > 0 || gems > 0) {
        baseString += ". It's "

        if (colors.length > 0) {
            baseString += formatColors(colors)
        }

        if (engravings.length > 0) {
            if (baseString !== ". It's ") { baseString += ". It's also " }
            baseString += formatEngravings(materialInfo, engravings)
        }

        if (gems.length > 0) {
            if (baseString !== ". It's ") { baseString += ". Finally, it's " }
            baseString += formatGems(gems)
        }
    }

    if (rolledWear) {
        baseString += `. ${createDescriptiveWear(rolledWear)}`
    }

    if (rolledWear) {
        baseString += `. It'll be worth ${price} once repaired.`
    } else {
        baseString += `. It's worth ${price}.`
    }

    return baseString.toLowerCase().replace(/(^\s*\w{1}|\.\s*\w{1})/gi, string => string.toUpperCase());
}

function formatAccordingToType(item, materialInfo, isBonfire) {
    switch (+item.format) {
        case 1:
            return formatOne(item, materialInfo, isBonfire)
        case 2:
            return formatTwo(item, materialInfo, isBonfire)
        case 3:
            return formatThree(item, materialInfo, isBonfire)
        case 4:
            return formatFour(item, materialInfo, isBonfire)
        case 5:
            return formatFive(item, materialInfo, isBonfire)
        case 6:
            return formatSix(item, materialInfo, isBonfire)
        case 7:
            return formatSeven(item)
        case 8:
            return formatEight(item)
        case 9:
            return formatNine(item, materialInfo, isBonfire)
        default:
            return ''
    }
}

module.exports = {
    formatStringDescription
}