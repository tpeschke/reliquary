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

function formatStringDescription(item, materialInfo, colors, engravings, gems, rolledWear, price) {
    let baseString = formatAccordingToType(item, materialInfo)

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
        baseString += `. It'll be worth ${price} sc once repaired.`
    } else {
        baseString += `. It's worth ${price} sc.`
    }

    return baseString
}

function formatAccordingToType(item, materialInfo) {
    switch (+item.format) {
        case 1:
            return formatOne(item, materialInfo)
        case 2:
            return formatTwo(item, materialInfo)
        case 3:
            return formatThree(item, materialInfo)
        case 4:
            return formatFour(item, materialInfo)
        case 5:
            return formatFive(item, materialInfo)
        case 6:
            return formatSix(item, materialInfo)
        case 7:
            return formatSeven(item)
        case 8:
            return formatEight(item)
        case 9:
            return formatNine(item, materialInfo)
        default:
            return ''
    }
}

module.exports = {
    formatStringDescription
}