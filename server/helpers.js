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
                                        type: rawEvent.time_period.subtableResults[0],
                                        shape: rawEvent.subject.subtableResults[0]
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
            , multiplier = 1
            , detailNumber = 0
            , totalGemPrice = 0

        delete object.id
        delete itemsubcategory


        // Make sure label: 'None' is removed

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
                        multiplier += material.multiplier
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
                                multiplier += innerMaterial.multiplier
                                material.submultiplier = innerMaterial.multiplier
                            }
                        })
                    }

                    return material
                })
            } else if (key === 'gems') {
                object.gems = object.gems.map(gem => {
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
            }
            // engravings
            // stitchings

        }

        object.totalPrice = price
        object.totalMultiplier = multiplier
        object.totalDetails = detailNumber
        object.totalGemPrice = totalGemPrice

        return object
    }
}

module.exports = helperObjects