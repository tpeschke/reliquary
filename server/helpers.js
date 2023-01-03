const GemSizeDictionary = {
    '0.2': .1,
    '0.5': .25,
    '1': .5,
    '1.5': .75,
    '2': 1,
    '2.5': 2,
    '3': 5,
    '4': 10,
    '5': 20
}

const helperObjects = {
    getSubject: async function (arrayToPushTo, db, isSecondary = false) {
        return db.get.random.subject().then(subjectResult => {
            let subjectPromiseArray = []
            subjectResult = subjectResult[0]

            const subjectKeys = ['persons', 'colors', 'adjectives']

            for (let key in subjectResult) {
                if (subjectResult[key] && subjectKeys.includes(key)) {
                    let randomNumber = helperObjects.getRandomInt(10)
                    if (randomNumber <= subjectResult[key]) {
                        const detailAmount = Math.ceil(subjectResult[key] / randomNumber)
                        subjectResult[key] = []
                        for (let i = 0; i < detailAmount; i++) {
                            subjectPromiseArray.push(helperObjects.getFromTable(subjectResult[key], { subtable: helperObjects.toTitleCase(key) }, db))
                        }
                    } else {
                        delete subjectResult[key]
                    }
                } else if (subjectResult[key] && key === 'animal_subtype') {
                    let randomNumber = helperObjects.getRandomInt(10)
                    if (randomNumber <= subjectResult[key]) {
                        const detailAmount = Math.ceil(subjectResult[key] / randomNumber)
                        subjectResult[key] = []
                        for (let i = 0; i < detailAmount; i++) {
                            subjectPromiseArray.push(helperObjects.getFromTable(subjectResult[key], { subtable: 'Animal Subtype' }, db))
                        }
                    } else {
                        delete subjectResult[key]
                    }
                } else if (subjectResult[key] && key === 'body_parts') {
                    let randomNumber = helperObjects.getRandomInt(10)
                    if (randomNumber <= subjectResult[key]) {
                        const detailAmount = Math.ceil(subjectResult[key] / randomNumber)
                        subjectResult[key] = []
                        for (let i = 0; i < detailAmount; i++) {
                            subjectPromiseArray.push(helperObjects.getFromTable(subjectResult[key], { subtable: 'Body Parts' }, db))
                        }
                    } else {
                        delete subjectResult[key]
                    }
                } else if (subjectResult[key] && key === 'events') {
                    let randomNumber = helperObjects.getRandomInt(10)
                    if (randomNumber <= subjectResult[key]) {
                        const detailAmount = Math.ceil(subjectResult[key] / randomNumber)

                        subjectResult[key] = []
                        const EVENT_SUBJECT = 'Event Subject'
                            , EVENT_TIME_PERIOD = 'Time Period'

                        for (let i = 0; i < detailAmount; i++) {
                            subjectPromiseArray.push(new Promise(resolve => {
                                let rawEvent = { subject: null, time_period: null }

                                let eventPromiseArray = []
                                eventPromiseArray.push(helperObjects.getFromTableToObject(rawEvent, 'time_period', { subtable: EVENT_TIME_PERIOD }, db))
                                eventPromiseArray.push(helperObjects.getFromTableToObject(rawEvent, 'subject', { subtable: EVENT_SUBJECT }, db))

                                Promise.all(eventPromiseArray).then(finalGem => {
                                    let event = {
                                        time_period: rawEvent.time_period.subtableResults[0],
                                        subject: rawEvent.subject.subtableResults[0]
                                    }

                                    subjectResult[key].push(event)
                                    resolve(true);
                                })
                            }))

                        }
                    } else {
                        delete subjectResult[key]
                    }
                } else if (subjectResult[key] && key === 'secondary_subject') {
                    let randomNumber = helperObjects.getRandomInt(10)
                    if (randomNumber <= subjectResult[key] && !isSecondary) {
                        const detailAmount = Math.ceil(subjectResult[key] / randomNumber)

                        subjectResult[key] = []

                        for (let i = 0; i < detailAmount; i++) {
                            subjectPromiseArray.push(new Promise(resolve => {
                                let secondarySubjectArray = []
                                secondarySubjectArray.push(helperObjects.getSubject(subjectResult[key], db, true))

                                Promise.all(secondarySubjectArray).then(_ => {
                                    resolve(true);
                                })
                            }))

                        }
                    } else {
                        delete subjectResult[key]
                    }
                }
            }

            return Promise.all(subjectPromiseArray).then(_ => {
                arrayToPushTo.push(subjectResult)
                return true
            })

        })
    },
    getFromTable: async function (arrayToPushTo, result, db) {
        let materialCategoryArray = ['Cloth', 'Exotic Cloth', 'Exotic Metal', 'Exotic Stone/Earthwork', 'Exotic Wood', 'Fur', 'Leather', 'Metal', 'other_table', 'Paper Product', 'Parchment', 'Stone/Earthwork', 'Vellum', 'Wax', 'Wood']

        if (materialCategoryArray.includes(result.subtable)) {
            return db.get.random.material_by_category(result.subtable).then(subtableResult => {
                result.subtableResults = subtableResult;

                if (subtableResult[0].subtable) {
                    result.subtableResults = []
                    return helperObjects.getFromTable(result.subtableResults, subtableResult[0], db).then(_ => {
                        arrayToPushTo.push(result)
                        return true
                    })
                } else {
                    arrayToPushTo.push(result)
                    return true
                }
            })
        } else {
            return db.get.random.detail_by_category(result.subtable).then(subtableResult => {
                result.subtableResults = subtableResult;

                if (subtableResult.length > 0 && subtableResult[0].subtable) {
                    result.subtableResults = []
                    return helperObjects.getFromTable(result.subtableResults, subtableResult[0], db).then(_ => {
                        arrayToPushTo.push(result)
                        return true
                    })
                } else {
                    arrayToPushTo.push(result)
                    return true
                }
            })
        }
    },
    getFromTableToObject: async function (objectToAddTo, key, result, db) {
        let materialCategoryArray = ['Cloth', 'Exotic Cloth', 'Exotic Metal', 'Exotic Stone/Earthwork', 'Exotic Wood', 'Fur', 'Leather', 'Metal', 'other_table', 'Paper Product', 'Parchment', 'Stone/Earthwork', 'Vellum', 'Wax', 'Wood']

        if (materialCategoryArray.includes(result.subtable)) {
            return db.get.random.material_by_category(result.subtable).then(subtableResult => {
                result.subtableResults = subtableResult;

                if (subtableResult[0].subtable) {
                    result.subtableResults = []
                    return helperObjects.getFromTable(result.subtableResults, subtableResult[0], db).then(_ => {
                        objectToAddTo[key] = result
                        return true
                    })
                } else {
                    objectToAddTo[key] = result
                    return true
                }
            })
        } else {
            return db.get.random.detail_by_category(result.subtable).then(subtableResult => {
                result.subtableResults = subtableResult;

                if (subtableResult[0].subtable) {
                    result.subtableResults = []
                    return helperObjects.getFromTable(result.subtableResults, subtableResult[0], db).then(_ => {
                        objectToAddTo[key] = result
                        return true
                    })
                } else {
                    objectToAddTo[key] = result
                    return true
                }
            })
        }
    },
    getRandomInt: function (max) {
        return Math.floor(Math.random() * max) + 1;
    },
    randomIntBetweenTwoInts: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    },
    toTitleCase: function (str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    },
    reformatObject: function (object) {
        let price = object.price ? object.price : 0
            , multipliers = []
            , detailNumber = 0
            , totalGemPrice = 0

        delete object.id
        delete object.itemsubcategory
        delete object.total

        let detailKeys = ['adjectives', 'colors', 'quirks']
        for (let key in object) {
            if (!object[key]) {
                delete object[key]
            } else if (detailKeys.includes(key)) {
                object[key] = object[key].map(entry => {
                    let { detail, category } = entry.subtableResults[0]
                    return { detail, category }
                })

                detailNumber += object[key].length
            } else if (key === 'materials') {
                object.materials = object.materials.map(material => {
                    delete material.randomweight
                    delete material.id
                    delete material.weight
                    delete material.subtable

                    if (material.price) {
                        price += material.price
                    } else {
                        delete material.price
                    }
                    if (material.multiplier) {
                        multipliers.push(material.multiplier)
                    } else {
                        delete material.multiplier
                    }

                    if (material.label === 'None' || !material.label) {
                        delete material.label
                    }

                    // needs to check subtableResults ON subtableResults
                    // also need to delete subtable results
                    if (material.subtableResults) {
                        material.subtableResults.forEach(innerMaterial => {
                            material.submaterial = innerMaterial.material
                            if (innerMaterial.price) {
                                price += innerMaterial.price
                                material.subprice = innerMaterial.price
                            }
                            if (innerMaterial.multiplier) {
                                multipliers.push(innerMaterial.multiplier)
                                material.submultiplier = innerMaterial.multiplier
                            }
                        })
                    }

                    return material
                })
            } else if (key === 'gems') {
                object.gems = object.gems.map(gem => {

                    let gemPrice = gem.type.price
                    let gemMultipier = GemSizeDictionary[gem.size.detail]

                    let newGem = {
                        type: gem.type.detail,
                        shape: gem.shape.detail,
                        size: gem.size.detail,
                        price: gemPrice * gemMultipier
                    }

                    totalGemPrice += newGem.price

                    return newGem
                })
            } else if (key === 'subject') {
                object.subject = object.subject.map(subject => helperObjects.cleanUpSubject(subject))
            } else if (key === 'stitchings') {
                object.stitchings.map(stitching => {
                    stitching.subject = helperObjects.cleanUpSubject(stitching.subject)
                    return stitching
                })
            } else if (key === 'engravings') {
                object.engravings.map(engraving => {
                    engraving.subject = helperObjects.cleanUpSubject(engraving.subject)
                    engraving.type = {
                        type: engraving.type.subtable,
                        detail: engraving.type.subtableResults[0].detail,
                        price: engraving.type.subtableResults[0].price
                    }
                    return engraving
                })
            }
        }

        const min = object.amount_min ? object.amount_min : 1
            , max = object.amount_max ? object.amount_max : 1

        object.number = helperObjects.randomIntBetweenTwoInts(min, max)

        delete object.amount_min
        delete object.amount_max

        object.totalPrice = price
        object.totalMultipliers = multipliers
        object.aveMultipliers = multipliers.reduce((a, b) => a + b, 0) / multipliers.length
        object.totalDetails = detailNumber
        object.totalGemPrice = totalGemPrice

        object.aveMultipliers = object.aveMultipliers ? object.aveMultipliers : 1

        let detailPercentage = helperObjects.getRandomInt(10) * .1
        let detailModifier = (detailNumber * detailPercentage) + 1
        object.finalPrice = +(((price * object.aveMultipliers) * detailModifier) + totalGemPrice).toFixed(2)

        return object
    },
    cleanUpSubject: function (subject) {
        delete subject.randomweight
        delete subject.id
        delete subject.weight

        const subjectKeys = ['persons', 'colors', 'adjectives', 'body_parts', 'animal_subtype']

        for (let key in subject) {
            if (subject[key] && subjectKeys.includes(key)) {
                subject[key] = subject[key].map(object => {
                    return helperObjects.cleanUpDetailSubtableResults(object)[0]
                })
            } else if (subject[key] && key === 'events') {
                subject[key] = subject[key].map(object => {
                    return {
                        subject: object.subject.detail,
                        time_period: object.time_period.detail
                    }
                })
            } else if (subject[key] && key === 'secondary_subject') {
                subject[key] = subject[key].map(secondary => helperObjects.cleanUpSubject(secondary))
            }
        }

        return subject
    },
    cleanUpDetailSubtableResults: function (object) {
        return object.subtableResults.map(innerObject => {
            delete innerObject.random
            delete innerObject.id
            delete innerObject.weight
            delete innerObject.category

            if (!innerObject.price) {
                delete innerObject.price
            }

            if (!innerObject.subtable) {
                delete innerObject.subtable
            }

            if (innerObject.subtableResults) {
                let submaterial = helperObjects.cleanUpDetailSubtableResults(innerObject)[0]
                if (submaterial.length === 1 && !object.detail) {
                    object.detail = submaterial[0].detail
                } else {
                    innerObject.submaterial = submaterial
                }
                delete innerObject.subtableResults
            }

            return innerObject
        })
    },
    getRestOfItem: async (rawItem, db, req, res) => {
        let promiseArray = []

        delete rawItem['?column?']

        promiseArray.push(db.get.not_random.item_materials(rawItem.id).then(materialResult => {
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
                let randomNumber = helperObjects.getRandomInt(10)
                if (randomNumber <= rawItem[key]) {
                    const detailAmount = Math.ceil(rawItem[key] / randomNumber)
                    rawItem[key] = []
                    for (let i = 0; i < detailAmount; i++) {
                        promiseArray.push(helperObjects.getFromTable(rawItem[key], { subtable: helperObjects.toTitleCase(key) }, db))
                    }
                } else {
                    delete rawItem[key]
                }
            } else if (rawItem[key] && key === 'gems') {
                let randomNumber = helperObjects.getRandomInt(10)
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
                            gemPromiseArray.push(helperObjects.getFromTableToObject(rawGem, 'shape', { subtable: GEM_SHAPE }, db))
                            gemPromiseArray.push(helperObjects.getFromTableToObject(rawGem, 'size', { subtable: GEM_SIZE }, db))
                            gemPromiseArray.push(helperObjects.getFromTableToObject(rawGem, 'type', { subtable: GEM_TYPE }, db))

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
            } else if (key === 'subject') {
                // } else if (rawItem[key] && key === 'subject') {
                rawItem[key] = []
                helperObjects.getSubject(rawItem[key], db, false)
            }
        }

        let randomNumberStitching = helperObjects.getRandomInt(10)
        if (rawItem.stitchings && randomNumberStitching <= rawItem.stitchings) {
            const detailAmount = Math.ceil(rawItem.stitchings / randomNumberStitching)
            // let randomNumberStitching = 1
            // if (true) {
            //     const detailAmount = Math.ceil(1 / randomNumberStitching)

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
                    stitchingPromiseArray.push(helperObjects.getSubject(rawStitching.subject, db, false))

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

        let randomNumberEngraving = helperObjects.getRandomInt(10)
        if (rawItem.engravings && randomNumberEngraving <= rawItem.engravings) {
            const detailAmount = Math.ceil(rawItem.engravings / randomNumberEngraving)
            // let randomNumberEngraving = 1
            // if (true) {
            //     const detailAmount = Math.ceil(1 / randomNumberEngraving)
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
                    engarvingPromiseArray.push(helperObjects.getSubject(rawEngraving.subject, db, false))
                    const engravingSubtable = rawItem.gems ? ENGRAVING_WITH_GEMS : ENGRAVING_WITHOUT_GEMS
                    engarvingPromiseArray.push(helperObjects.getFromTableToObject(rawEngraving, 'type', { subtable: engravingSubtable }, db))

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

                res.send(helperObjects.reformatObject(rawItem))
            })

        })
    },
    getRestOfItemOnBudget: async (budget, rawItem, db, req, res) => {
        let promiseArray = []

        delete rawItem['?column?']

        promiseArray.push(db.get.not_random.item_materials(rawItem.id).then(materialResult => {
            console.log(materialResult)
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
                let randomNumber = helperObjects.getRandomInt(10)
                if (randomNumber <= rawItem[key]) {
                    const detailAmount = Math.ceil(rawItem[key] / randomNumber)
                    rawItem[key] = []
                    for (let i = 0; i < detailAmount; i++) {
                        promiseArray.push(helperObjects.getFromTable(rawItem[key], { subtable: helperObjects.toTitleCase(key) }, db))
                    }
                } else {
                    delete rawItem[key]
                }
            } else if (rawItem[key] && key === 'gems') {
                let randomNumber = helperObjects.getRandomInt(10)
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
                            gemPromiseArray.push(db.get.semi_random.gem_type(budget - rawItem.price).then(result => {
                                rawGem.type = result[0]
                                return true
                            }))
                            gemPromiseArray.push(db.get.semi_random.gem_size().then(result => {
                                rawGem.size = result[0]
                                return true
                            }))
                            gemPromiseArray.push(helperObjects.getFromTableToObject(rawGem, 'shape', { subtable: GEM_SHAPE }, db))

                            Promise.all(gemPromiseArray).then(finalGem => {
                                let gem = {
                                    shape: rawGem.shape.subtableResults[0]
                                }

                                rawItem[key].push(gem)
                                resolve(true);
                            })
                        }))

                    }
                } else {
                    delete rawItem[key]
                }
            } else if (key === 'subject') {
                // } else if (rawItem[key] && key === 'subject') {
                rawItem[key] = []
                helperObjects.getSubject(rawItem[key], db, false)
            }
        }

        let randomNumberStitching = helperObjects.getRandomInt(10)
        if (rawItem.stitchings && randomNumberStitching <= rawItem.stitchings) {
            const detailAmount = Math.ceil(rawItem.stitchings / randomNumberStitching)
            // let randomNumberStitching = 1
            // if (true) {
            //     const detailAmount = Math.ceil(1 / randomNumberStitching)

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
                    stitchingPromiseArray.push(helperObjects.getSubject(rawStitching.subject, db, false))

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

        let randomNumberEngraving = helperObjects.getRandomInt(10)
        if (rawItem.engravings && randomNumberEngraving <= rawItem.engravings) {
            const detailAmount = Math.ceil(rawItem.engravings / randomNumberEngraving)
            // let randomNumberEngraving = 1
            // if (true) {
            //     const detailAmount = Math.ceil(1 / randomNumberEngraving)
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
                    engarvingPromiseArray.push(helperObjects.getSubject(rawEngraving.subject, db, false))
                    const engravingSubtable = rawItem.gems ? ENGRAVING_WITH_GEMS : ENGRAVING_WITHOUT_GEMS
                    engarvingPromiseArray.push(helperObjects.getFromTableToObject(rawEngraving, 'type', { subtable: engravingSubtable }, db))

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
                console.log('line 762: ', material.material, rawItem.price, budget)
                innerPromiseArray.push(db.get.semi_random.material(material.material, rawItem.price, budget).then(innerMaterialResult => {
                    console.log('line 764: ', innerMaterialResult)
                    if (innerMaterialResult[0]) {
                        innerMaterialResult[0].label = material.label
                        if (!innerMaterialResult[0].subtable) {
                            populatedMaterials.push(innerMaterialResult[0])
                            return true
                        }
                        return getFromTable(populatedMaterials, innerMaterialResult[0], db)
                    } else {
                        console.log("line 771: ", material)
                        return db.get.random.item_by_category(material.material).then(itemByCategory => {
                            console.log("line 773: ", itemByCategory)
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

                let finalObject = helperObjects.reformatObject(rawItem)

                if (finalObject.finalPrice > budget) {
                    finalObject.wear = Math.ceil((finalObject.finalPrice - budget) / (finalObject.finalPrice * .1))
                }

                res.send(finalObject)
            })

        })
    }
}

module.exports = helperObjects