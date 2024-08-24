const { getRandomInt, sendErrorForwardNoFile, getSemiRandom, checkForContentTypeBeforeSending, helperObjects } = require('./helpers')
const dictionaries = require('./ItemDictionaries.js')

const sendErrorForward = sendErrorForwardNoFile('Items')

controllerFunctions = {
    getItem: (req, res) => {
        const db = req.app.get('db')
        const { itemCategory, materialRarity = 'C', detailing = 'L' } = req.query

        const searchFunctionToUse = dictionaries.getWhichCategoryToGet(dictionaries.itemCategory[+itemCategory])

        db.get.random[searchFunctionToUse](dictionaries.itemCategory[+itemCategory]).then(item => {
            item = item[0]
            db.get.not_random.item_materials(item.id).then(materialResult => {
                if (materialResult.length > 0 && materialResult[0].material) {
                    let materials = []
                    materialResult.forEach(material => {
                        if (materials.length === 0) {
                            if (material.material.includes('Waxed')) {
                                materials.push({ material: 'Wax', label: null })
                                materials.push({ material: material.material.split(' ')[1], label: null })
                            } else {
                                materials.push(material)
                            }
                        } else {
                            let addToMaterials = true
                            for (let i = 0; i < materials.length; i++) {
                                if (materials[i].label === material.label && !material.isand) {
                                    addToMaterials = false
                                    i = materials.length
                                }
                            }
                            if (addToMaterials) {
                                if (material.material.includes('Waxed')) {
                                    materials.push({ material: 'Wax', label: null })
                                    materials.push({ material: material.material.split(' ')[1], label: null })
                                } else {
                                    materials.push(material)
                                }
                            }
                        }
                    })
                    item.materials = materials
                } else {
                    item.materials = []
                }

                let promiseArray = []
                let populatedMaterials = []
                item.materials.forEach(material => {
                    if (material.subtable) {
                        promiseArray.push(helperObjects.getFromTable(populatedMaterials, material, db))
                    } else {
                        if (materialRarity.toUpperCase() === 'L' && ['Cloth', 'Metal', 'Stone/Earthwork', 'Wood'].includes(material.material)) {
                            promiseArray.push(db.get.semi_random.loot_materials(`Exotic ${material.material}`, 0, 0).then(specificMaterial => {
                                return populatedMaterials.push(specificMaterial)
                            }).catch(e => sendErrorForward('get specific item', e, res)))
                        } else {
                            const specificMaterialRarityMultiplier = dictionaries.materialRarityMultiplier[material.material]
                            promiseArray.push(db.get.semi_random.loot_materials(material.material, specificMaterialRarityMultiplier[materialRarity.toUpperCase()].min, specificMaterialRarityMultiplier[materialRarity.toUpperCase()].max).then(specificMaterial => {
                                return populatedMaterials.push(specificMaterial)
                            }).catch(e => sendErrorForward('get specific item', e, res)))
                        }
                    }
                })

                promiseArray.push(getDetailing(db, 'Adjectives', detailing, item.adjectives).then(adjectives => {
                    item.adjectives = adjectives
                    return true
                }).catch(e => sendErrorForward('get Adjectives details function', e, res)))

                promiseArray.push(getDetailing(db, 'Colors', detailing, item.colors).then(colors => {
                    item.colors = colors
                    return true
                }).catch(e => sendErrorForward('get Colors details function', e, res)))

                Promise.all(promiseArray).then(_ => {
                    item.materials = populatedMaterials
                    checkForContentTypeBeforeSending(res, item)
                })
            }).catch(e => sendErrorForward('get material by item', e, res))
        }).catch(e => sendErrorForward('get item by category', e, res))
    },
}

getNumberOfDetails = (chance) => {
    let numberOfDetails = 0
    let keepGoing = true

    while (keepGoing) {
        let randomNumber = getRandomInt(10)
        keepGoing = randomNumber <= chance
        if (keepGoing) {
            numberOfDetails++
            chance = Math.floor(chance / 2)
        }
    }

    return numberOfDetails
}

getDetailing = async (db, type, detailing, baseChance) => {
    let chance = dictionaries.detailingChance[detailing] * baseChance
    const numberOfDetails = getNumberOfDetails(chance) 
    return db.get.random.detail(type, numberOfDetails).catch(e => sendErrorForward('get detail query', e, res))
}

// engravings
// stitchings
// gems
//  should be affected by materialRarity

module.exports = controllerFunctions