const { aOrAn } = require('./aOrAn')
const { getBonusString } = require('./bonusString')

function formatOne(item, materialInfo) {
    return `${aOrAn(materialInfo[0].displayName)} ${materialInfo[0].displayName}${getBonusString(materialInfo[0].bonus, materialInfo[0].rarity)} ${item.item}`
}

function formatTwo(item, materialInfo) {
    return `${aOrAn(item.collective)} ${item.collective} of ${materialInfo[0].displayName}${getBonusString(materialInfo[0].bonus, materialInfo[0].rarity)} ${item.item}`
}

function formatThree(item, materialInfo) {
    const baseString = `${aOrAn(item.item)} ${item.item} with`
    const materialString = materialInfo.map((material, index) => {
        const bonusString = getBonusString(material.bonus, material.rarity)

        if (index === materialInfo.length - 1 && index > 0) {
            return ` and ${aOrAn(material.part)} ${material.part} of ${material.displayName}${bonusString}`
        } else if (index === 0) {
            return ` ${aOrAn(material.part)} ${material.part} of ${material.displayName}${bonusString}`
        } else {
            return `, ${aOrAn(material.part)} ${material.part} of ${material.displayName}${bonusString}`
        }
    })

    return baseString + materialString
}

function formatFour(item, materialInfo) {
    const baseString = `${aOrAn(item.collective)} ${item.collective} of ${item.item} with`

    const materialString = materialInfo.map((material, index) => {
        const bonusString = getBonusString(material.bonus, material.rarity)

        if (index === materialInfo.length - 1 && index > 0) {
            return ` and ${aOrAn(material.part)} ${material.part} of ${material.displayName}${bonusString}`
        } else if (index === 0) {
            return ` ${aOrAn(material.part)} ${material.part} of ${material.displayName}${bonusString}`
        } else {
            return `, ${aOrAn(material.part)} ${material.part} of ${material.displayName}${bonusString}`
        }
    })

    return baseString + materialString
}

function formatFive(item, materialInfo) {
    return `${aOrAn(item.collective)} ${item.collective} of ${materialInfo[0].material}${getBonusString(materialInfo[0].bonus, materialInfo[0].rarity)} ${item.item} ${materialNameDictionary[+materialInfo[0].categoryid]}`
}

function formatSix(item, materialInfo) {
    return `${aOrAn(item.collective)} ${item.collective} of ${materialInfo[0].displayName}${getBonusString(materialInfo[0].bonus, materialInfo[0].rarity)}`
}

function formatSeven(item) {
    return `${aOrAn(item.collective)} ${item.collective} of ${item.item}`
}

function formatEight(item) {
    return `${aOrAn(item.item)} ${item.item}`
}

function formatNine(item, materialInfo) {
    return `${aOrAn(item.collective)} ${item.collective} ${materialInfo[0].displayName}${getBonusString(materialInfo[0].bonus, materialInfo[0].rarity)} ${item.item}`
}

module.exports = {
    formatOne,
    formatTwo,
    formatThree,
    formatFour,
    formatFive,
    formatSix,
    formatSeven,
    formatEight,
    formatNine
}