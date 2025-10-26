const { aOrAn } = require('../aOrAn')

function formatEngravings(materialInfo, engravings) {
    let engravingsString = getEngravingVerb(materialInfo)

    engravings.forEach((engravings, index) => {
        if (index === engravings.length - 1 && index > 0) {
            engravingsString += ` and ${aOrAn(engravings.engraving_theme)} ${engravings.engraving_theme} Event from ${engravings.timePeriod.time} Times`
        } else if (index === 0) {
            engravingsString += ` ${aOrAn(engravings.engraving_theme)} ${engravings.engraving_theme} Event from ${engravings.timePeriod.time} Times`
        } else {
            engravingsString += `, ${aOrAn(engravings.engraving_theme)} ${engravings.engraving_theme} Event from ${engravings.timePeriod.time} Times`
        }
    })

    return engravingsString
}

function getEngravingVerb(materialInfo) {
    if (materialInfo.length > 0) {
        const { materialid } = materialInfo[Math.floor(Math.random() * materialInfo.length)];

        switch (materialid) {
            case '1':
            case '2':
                return 'stitched with'
            case '3':
                return 'engraved with'
            case '4':
                return 'recording a story featuring'
            case '5':
                return 'engraved with'
            case '6':
                return 'carved with'
            case '7':
                return 'etched with'

        }
    }
    return 'engraved with'
}

module.exports = {
    formatEngravings
}