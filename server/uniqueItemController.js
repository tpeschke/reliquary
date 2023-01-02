const { getSubject, getFromTable, getFromTableToObject, getRandomInt, toTitleCase, reformatObject } = require('./helpers')

module.exports = {
    getRandomUniqueItem: (req, res) => {
        const db = req.app.get('db')

        // material cases:
        //  id 2
        //  Shovel: id 366
        //  Talisman: id 325
        //  Incence: id 319
        //  Bellows: id 336
        //  Funnel: id 348

        // db.get.random.item().then(itemResult => {
        db.get.random.item_by_id(2).then(itemResult => {
            let rawItem = itemResult[0]
            let promiseArray = []

            delete rawItem['?column?']

            promiseArray.push(db.get.random.item_materials(rawItem.id).then(materialResult => {
                if (materialResult[0].material) {
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
                    rawItem.materials = materials
                } else {
                    rawItem.materials = []
                }
                return true
            }))

            let detailKeys = ['adjectives', 'colors', 'quirks']
            for (const key in rawItem) {
                if (rawItem[key] && detailKeys.includes(key)) {
                    let randomNumber = 1
                    if (randomNumber <= rawItem[key]) {
                        const detailAmount = Math.ceil(rawItem[key] / randomNumber)
                        rawItem[key] = []
                        for (let i = 0; i < detailAmount; i++) {
                            promiseArray.push(getFromTable(rawItem[key], { subtable: toTitleCase(key) }, db))
                        }
                    } else {
                        delete rawItem[key]
                    }
                } else if (rawItem[key] && key === 'gems') {
                    let randomNumber = 1
                    if (randomNumber <= rawItem[key]) {
                        const detailAmount = Math.ceil(rawItem[key] / randomNumber)

                        rawItem[key] = []
                        const GEM_SHAPE = 'Gem Shape'
                            , GEM_SIZE = 'Gem Size'
                            , GEM_TYPE = 'Gem Type'

                        for (let i = 0; i < detailAmount; i++) {
                            promiseArray.push(new Promise(resolve => {
                                let rawGem = { type: null, shape: null, size: null }

                                let gemPromiseArray = []
                                gemPromiseArray.push(getFromTableToObject(rawGem, 'shape', { subtable: GEM_SHAPE }, db))
                                gemPromiseArray.push(getFromTableToObject(rawGem, 'size', { subtable: GEM_SIZE }, db))
                                gemPromiseArray.push(getFromTableToObject(rawGem, 'type', { subtable: GEM_TYPE }, db))

                                Promise.all(gemPromiseArray).then(finalGem => {
                                    let gem = {
                                        type: rawGem.type.subtableResults[0],
                                        shape: rawGem.shape.subtableResults[0],
                                        size: rawGem.size.subtableResults[0]
                                    }

                                    rawItem[key].push(gem)
                                    resolve(true);
                                })
                            }))

                        }
                    } else {
                        delete rawItem[key]
                    }
                } else if (rawItem[key] && key === 'subject') {
                    rawItem[key] = []
                    promiseArray.push(getSubject(rawItem[key], db, false))
                }
            }

            // let randomNumberStitching = randomNumber(10)
            // if (rawItem.stitchings && randomNumberStitching <= rawItem.stitchings) {
            //     const detailAmount = Math.ceil(rawItem.stitchings / randomNumberStitching)
            let randomNumberStitching = 1
            if (true) {
                const detailAmount = Math.ceil(1 / randomNumberStitching)

                rawItem.stitchings = []

                for (let i = 0; i < detailAmount; i++) {
                    promiseArray.push(new Promise(resolve => {
                        let rawStitching = {
                            type: {
                                detail: 'Hand Stitching',
                                price: 0.5
                            },
                            subject: []
                        }

                        let stitchingPromiseArray = []
                        stitchingPromiseArray.push(getSubject(rawStitching.subject, db, false))

                        Promise.all(stitchingPromiseArray).then(_ => {
                            let stitchings = {
                                subject: rawStitching.subject[0],
                                type: rawStitching.type
                            }

                            rawItem.stitchings.push(stitchings)
                            resolve(true);
                        })
                    }))

                }
            } else {
                delete rawItem.stitchings
            }

            // let randomNumberEngraving = randomNumber(10)
            // if (rawItem.engravings && randomNumberEngraving <= rawItem.engravings) {
            // const detailAmount = Math.ceil(rawItem.engravings / randomNumberEngraving)
            let randomNumberEngraving = 1
            if (true) {
                const detailAmount = Math.ceil(1 / randomNumberEngraving)
                rawItem.engravings = []
                const ENGRAVING_WITHOUT_GEMS = 'Engraving Type Without Gems'
                    , ENGRAVING_WITH_GEMS = 'Engraving Type with Gems'

                for (let i = 0; i < detailAmount; i++) {
                    promiseArray.push(new Promise(resolve => {
                        let rawEngraving = {
                            type: {},
                            subject: []
                        }

                        let engarvingPromiseArray = []
                        engarvingPromiseArray.push(getSubject(rawEngraving.subject, db, false))
                        const engravigSubtable = rawItem.gems ? ENGRAVING_WITH_GEMS : ENGRAVING_WITHOUT_GEMS
                        engarvingPromiseArray.push(getFromTableToObject(rawEngraving.type, 'type', { subtable: engravigSubtable }, db))

                        Promise.all(engarvingPromiseArray).then(_ => {
                            let engravings = {
                                subject: rawEngraving.subject[0],
                                type: rawEngraving.type
                            }

                            rawItem.engravings.push(engravings)
                            resolve(true);
                        })
                    }))

                }
            } else {
                delete rawItem.engravings
            }

            Promise.all(promiseArray).then(_ => {
                let innerPromiseArray = []
                let populatedMaterials = []
                rawItem.materials.forEach(material => {
                    innerPromiseArray.push(db.get.random.material(material.material).then(innerMaterialResult => {
                        if (innerMaterialResult[0]) {
                            innerMaterialResult[0].label = material.label
                            if (!innerMaterialResult[0].subtable) {
                                populatedMaterials.push(innerMaterialResult[0])
                                return true
                            }
                            return getFromTable(populatedMaterials, innerMaterialResult[0], db)
                        } else {
                            return db.get.random.item_by_category(material.material).then(itemByCategory => {
                                itemByCategory[0].label = material.label
                                if (!itemByCategory[0].subtable) {
                                    populatedMaterials.push(itemByCategory[0])
                                    return true
                                }
                                return getFromTable(populatedMaterials, itemByCategory[0], db)
                            })
                        }
                    }))
                })

                Promise.all(innerPromiseArray).then(_ => {
                    rawItem.materials = populatedMaterials

                    res.send(reformatObject(rawItem))
                })

            })
        })
    }
}