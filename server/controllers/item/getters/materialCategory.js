const { materialNameDictionary } = require('../dictionaries/materialNameDictionary')

function getMaterialCategory(materialInfo) {
    if (!materialInfo?.categoryid) { return '' }

    if (+materialInfo.categoryid === 2) {
        return materialInfo.type
    }
    return materialNameDictionary[+materialInfo.categoryid]
}

module.exports = {
    getMaterialCategory
}