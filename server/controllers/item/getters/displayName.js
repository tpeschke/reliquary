const { materialNameDictionary } = require("../dictionaries/materialNameDictionary")

function getDisplayName(materialInfo) {
    if (!materialInfo) {
        return ''
    }

    switch (+materialInfo.categoryid) {
        case 1:
            return materialInfo.material
        case 2:
            return `${materialInfo.material} ${materialInfo.type}`
        case 3:
        case 4:
        case 5:
            return materialInfo.material
        case 6:
            if (typeof materialInfo.material === 'string' && materialInfo.material.includes('wood')) {
                return materialInfo.material
            }
            return `${materialInfo.material} Wood`
        case 7:
            return `${materialInfo.material} ${materialNameDictionary[+materialInfo.categoryid]}`
        default:
            return materialInfo.material
    }
}

module.exports = {
    getDisplayName
}