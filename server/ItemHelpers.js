
const { getRandomInt, getSubject, getFromTableToObject, sendErrorForwardNoFile, getFromTable } = require('./helpers')
const dictionaries = require('./ItemDictionaries.js')

const sendErrorForward = sendErrorForwardNoFile('Item Helper')

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

processSubject = (subject) => {
    let cleanedSubject = {}
    for (const key in subject) {
        if (key === 'subject') {
            cleanedSubject[key] = subject[key]
        } else if (key === 'secondary_subject') {
            console.log(subject[key])
            cleanedSubject[key] = subject[key].map(singleSubject => processSubject(singleSubject))
        } else if (key === 'events') {
            cleanedSubject[key] = subject[key].map(detail => {
                return {
                    time_period: detail.time_period.detail,
                    subject: detail.subject.detail
                }
            })
        } else if (subject[key].length) {
            cleanedSubject[key] = subject[key].map(detail => {
                if (detail.subtableResults) {
                    if (detail.subtableResults[0].detail) {
                        return detail.subtableResults[0].detail
                    } else {
                        return detail.subtableResults[0].subtableResults[0].detail
                    }
                } else {
                    console.log("generic", detail)
                    return detail
                }
            })
        }
    }
    return cleanedSubject
}

itemHelpers = {
    processMaterialResults: (materialResult) => {
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
        return materials
    },
    populationWithSpecificMaterials: async (db, materials, materialRarity, res) => {
        let populatedMaterials = []
        let promiseArray = []
        materials.forEach(material => {
            if (material.subtable) {
                promiseArray.push(getFromTable(populatedMaterials, material, db))
            } else {
                if (materialRarity.toUpperCase() === 'L' && ['Cloth', 'Metal', 'Stone/Earthwork', 'Wood'].includes(material.material)) {
                    promiseArray.push(db.get.semi_random.loot_materials(`Exotic ${material.material}`, 0, 0).then(specificMaterial => {
                        return populatedMaterials.push(specificMaterial[0])
                    }).catch(e => sendErrorForward('get specific item', e, res)))
                } else {
                    const specificMaterialRarityMultiplier = dictionaries.materialRarityMultiplier[material.material]
                    promiseArray.push(db.get.semi_random.loot_materials(material.material, specificMaterialRarityMultiplier[materialRarity.toUpperCase()].min, specificMaterialRarityMultiplier[materialRarity.toUpperCase()].max).then(specificMaterial => {
                        return populatedMaterials.push(specificMaterial[0])
                    }).catch(e => sendErrorForward('get specific item', e, res)))
                }
            }
        })

        return Promise.all(promiseArray).then(finalArray => {
            return populatedMaterials.map(material => {
                if (material.materialcategory === 'Metal' || material.materialcategory === 'Exotic Metal' || material.materialcategory === 'Stone/Earthwork' || material.materialcategory === 'Exotic Stone/Earthwork') {
                    return {
                        material: material.material,
                        multiplier: material.multiplier
                    }
                } else {
                    return {
                        material: `${material.material} ${material.materialcategory}`,
                        multiplier: material.multiplier
                    }
                }
            })
        })
    },
    getDetailing: async (db, type, detailing, baseChance, res) => {
        if (baseChance) {
            let chance = dictionaries.detailingChance[detailing.toUpperCase()] * baseChance
            const numberOfDetails = getNumberOfDetails(chance)

            return db.get.random.detail(type, numberOfDetails).then(details => {
                let promiseArray = []

                for (let i = 0; i < details.length; i++) {
                    let detail = details[i]
                    if (detail.subtable) {
                        promiseArray.push(db.get.random.detail_by_category(detail.subtable).then(subdetail => {
                            return `${detail.detail} ${subdetail[0].detail}`
                        }).catch(e => sendErrorForward('subtable detail', e, res)))
                    } else {
                        promiseArray.push(detail.detail)
                    }
                }

                return Promise.all(promiseArray).then(finalDetailArray => {
                    return finalDetailArray
                })
            }).catch(e => sendErrorForward('get detail query', e, res))
        }
        return null
    },
    getStitchings: async (db, detailing, baseChance, res) => {
        if (baseChance) {
            const chance = dictionaries.detailingChance[detailing.toUpperCase()] * baseChance
            const randomNumber = getRandomInt(10)
            if (randomNumber <= chance) {
                let subjectArray = []
                return getSubject(subjectArray, db, false).then(_ => {
                    return [{
                        subject: processSubject(subjectArray[0]),
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
    },
    getEngravings: async (db, detailing, baseChance, gems, res) => {
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
                            subject: processSubject(subjectArray[0]),
                            type: {
                                type: typeObject.type.subtableResults[0].detail,
                                price: typeObject.type.subtableResults[0].price
                            }
                        }]
                    }).catch(e => sendErrorForward('get engraging type', e, res))
                }).catch(e => sendErrorForward('get engraging subject', e, res))
            } else {
                return []
            }
        }
        return null
    },
    getGems: async (db, detailing, materialRarity, baseChance, res) => {
        if (baseChance) {
            const chance = dictionaries.detailingChance[detailing.toUpperCase()] * baseChance
            const randomNumber = getRandomInt(10)
            if (randomNumber <= chance) {
                let rawGem = { type: null, shape: null, size: null }

                let gemPromiseArray = []

                const gemSizeMultiplier = dictionaries.materialRarityMultiplier['Gem Size']
                gemPromiseArray.push(db.get.semi_random.gem_details('Gem Size', gemSizeMultiplier[materialRarity.toUpperCase()].min, gemSizeMultiplier[materialRarity.toUpperCase()].max).then(gemSize => {
                    rawGem.size = gemSize[0].detail
                    rawGem.multiplier = dictionaries.GemSizeMultiplier[rawGem.size]
                    return true
                }).catch(e => sendErrorForward('get gem size', e, res)))

                gemPromiseArray.push(getFromTableToObject(rawGem, 'shape', { subtable: 'Gem Shape' }, db).catch(e => sendErrorForward('get gem shape', e, res)))

                const gemTypeMultiplier = dictionaries.materialRarityMultiplier['Gem Type']
                gemPromiseArray.push(db.get.semi_random.gem_type_new(gemTypeMultiplier[materialRarity.toUpperCase()].min, gemTypeMultiplier[materialRarity.toUpperCase()].max).then(gemType => {
                    rawGem.type = gemType[0].detail
                    rawGem.price = gemType[0].price
                    return true
                }).catch(e => sendErrorForward('get gem type', e, res)))

                return Promise.all(gemPromiseArray).then(_ => {
                    rawGem.shape = rawGem.shape.subtableResults[0].detail
                    rawGem.price *= rawGem.multiplier
                    return [rawGem]
                })
            } else {
                return null
            }
        }
        return null
    }
}

module.exports = itemHelpers