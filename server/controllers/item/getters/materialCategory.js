const materialNameDictionary = [null, 'Cloth', null, 'Metal', 'Paper', 'Stone', 'Wood', 'Wax', '']

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