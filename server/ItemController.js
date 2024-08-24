const { shape } = require('@mui/system')
const { getRandomInt, getSubject, getFromTableToObject, sendErrorForwardNoFile, checkForContentTypeBeforeSending, getFromTable } = require('./helpers')
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
                        promiseArray.push(getFromTable(populatedMaterials, material, db))
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

                promiseArray.push(getDetailing(db, 'Adjectives', detailing, item.adjectives, res).then(adjectives => {
                    item.adjectives = adjectives
                    return true
                }).catch(e => sendErrorForward('get Adjectives details function', e, res)))

                promiseArray.push(getDetailing(db, 'Colors', detailing, item.colors, res).then(colors => {
                    item.colors = colors
                    return true
                }).catch(e => sendErrorForward('get Colors details function', e, res)))

                promiseArray.push(
                    getGems(db, detailing, materialRarity, item.gems, res).then(gems => {
                        item.gems = gems
                        getEngravings(db, detailing, item.engravings, item.gems, res).then(engravings => {
                            item.engravings = engravings
                        }).catch(e => sendErrorForward('get engravings details function', e, res))
                    }).catch(e => sendErrorForward('get gems details function', e, res))
                )

                promiseArray.push(getStitchings(db, detailing, item.stitchings, res).then(stitchings => {
                    item.stitchings = stitchings
                }).catch(e => sendErrorForward('get stitching details function', e, res)))

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

getDetailing = async (db, type, detailing, baseChance, res) => {
    if (baseChance) {
        let chance = dictionaries.detailingChance[detailing.toUpperCase()] * baseChance
        const numberOfDetails = getNumberOfDetails(chance)
        return db.get.random.detail(type, numberOfDetails).catch(e => sendErrorForward('get detail query', e, res))
    }
    return null
}

getStitchings = async (db, detailing, baseChance, res) => {
    if (baseChance) {
        const chance = dictionaries.detailingChance[detailing.toUpperCase()] * baseChance
        const randomNumber = getRandomInt(10)
        if (randomNumber <= chance) {
            let subjectArray = []
            return getSubject(subjectArray, db, false).then(_ => {
                return [{
                    subject: subjectArray[0],
                    type: {
                        detail: 'Hand Stitching',
                        price: 0.5
                    }
                }]
            }).catch(e => sendErrorForward('get stitching subject', e, res))
        } else {
            return []
        }
    }
    return null
}

getEngravings = async (db, detailing, baseChance, gems, res) => {
    if (baseChance) {
        const chance = dictionaries.detailingChance[detailing.toUpperCase()] * baseChance
        const randomNumber = getRandomInt(10)
        if (randomNumber <= chance) {
            let subjectArray = []
            return getSubject(subjectArray, db, false).then(_ => {
                let typeObject = {}
                const engravingSubtable = gems && gems.length > 0 ? 'Engraving Type with Gems' : 'Engraving Type Without Gems'
                return getFromTableToObject(typeObject, 'type', { subtable: engravingSubtable }, db).then(_ => {
                    return [{
                        subject: subjectArray[0].subject,
                        type: typeObject.type
                    }]
                }).catch(e => sendErrorForward('get engraging type', e, res))
            }).catch(e => sendErrorForward('get engraging subject', e, res))
        } else {
            return []
        }
    }
    return null
}

getGems = async (db, detailing, materialRarity, baseChance, res) => {
    if (baseChance) {
        const chance = dictionaries.detailingChance[detailing.toUpperCase()] * baseChance
        const randomNumber = getRandomInt(10)
        if (randomNumber <= chance) {
            let rawGem = { type: null, shape: null, size: null }

            let gemPromiseArray = []

            const gemSizeMultiplier = dictionaries.materialRarityMultiplier['Gem Size']
            gemPromiseArray.push(db.get.semi_random.gem_details('Gem Size', gemSizeMultiplier[materialRarity.toUpperCase()].min, gemSizeMultiplier[materialRarity.toUpperCase()].max).then(gemSize => {
                rawGem.size = gemSize[0].detail
                return true
            }).catch(e => sendErrorForward('get gem size', e, res)))

            gemPromiseArray.push(getFromTableToObject(rawGem, 'shape', { subtable: 'Gem Shape' }, db).catch(e => sendErrorForward('get gem shape', e, res)))

            const gemTypeMultiplier = dictionaries.materialRarityMultiplier['Gem Type']
            gemPromiseArray.push(db.get.semi_random.gem_type_new(gemTypeMultiplier[materialRarity.toUpperCase()].min, gemTypeMultiplier[materialRarity.toUpperCase()].max).then(gemType => {
                rawGem.type = gemType[0].detail
                rawGem.price = gemType[0].price
                return true
            }).catch(e => sendErrorForward('get gem size', e, res)))

            return Promise.all(gemPromiseArray).then(_ => {
                rawGem.shape = rawGem.shape.subtableResults[0].detail
                return [rawGem]
            })
        } else {
            return []
        }
    }
    return null
}

module.exports = controllerFunctions