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
        let materialCategoryArray = ['Cloth', 'Exotic Cloth', 'Exotic Metal', 'Exotic Stone/Earthwork', 'Exotic Wood', 'Fur', 'Leather', 'Metal', 'other_table', 'Paper Product', 'Parchment', 'Stone/Earthwork', 'Vellum', 'Wax', 'Wood', 'other_table']

        if (materialCategoryArray.includes(result.subtable)) {
            return db.get.random.material_by_category(result.subtable ? result.subtable : 'other_table').then(subtableResult => {
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
        } else if (!result.subtable) {
            if (materialCategoryArray.includes(result.material)) {
                return db.get.random.material_by_category(result.material).then(subtableResult => {
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
                return db.get.not_random.material(result.material, 'other_table').then(subtableResult => {
                    result = subtableResult[0]
                    arrayToPushTo.push(result)
                })
            }
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
    reformatObject: function (object, budget = false) {
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
            } else if (key === 'materials' && object[key][0]) {
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

                    if (material.label === 'NONE' || !material.label) {
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

        if (budget && object.finalPrice > budget) {
            object.wear = Math.ceil((object.finalPrice - budget) / (object.finalPrice * .1))
        }

        object.description = helperObjects.getStringDescription(object)

        return object
    },
    getStringDescription: function ({ number, item, materials, colors, adjectives, wear, finalPrice, gems, subject, quirks, itemcategory, engravings, stitchings }) {
        let itemDescription = ''

        let itemName = item

        if (itemName.includes(',')) {
            let itemArray = itemName.split(',')
            itemName = [itemArray[1], itemArray[0]].join(' ')
        }
        if (number > 1) {
            itemDescription += `${number} ${itemName}s`
        } else {
            itemDescription += `A ${itemName}`
        }

        if (itemcategory === 'Shields') {
            itemDescription += ` ${itemcategory.slice(0, -1)}`
        } else if (itemcategory === 'Armor' || itemcategory === 'Cloth') {
            itemDescription += ` ${itemcategory}`
        }

        if (materials && materials[0] && materials.length > 0) {
            materials.forEach((material, index) => {
                let materialToShow = material.material
                if (material.subtableResults) {
                    materialToShow = material.subtableResults[0].material
                }
                if (material.submaterial) {
                    materialToShow = material.submaterial
                }
                if (index === 0 && material.label) {
                    itemDescription += ` with a ${material.label} of ${materialToShow}`
                } else if (material.label) {
                    itemDescription += ` and a ${material.label} of ${materialToShow}`
                } else if (index === 0 && !material.label) {
                    itemDescription += ` made of ${materialToShow}`
                } else if (!material.label) {
                    itemDescription += ` and ${materialToShow}`
                } else {
                    console.log("something went wrong: ", material)
                }

                const materialCategoriesToInclude = ['Leather', 'Wood', 'Wax']
                if (materialCategoriesToInclude.includes(material.materialcategory)) {
                    itemDescription += ` ${material.materialcategory}`
                }
            })
        }

        itemDescription += "."

        if (colors && colors.length > 0) {
            const plural = colors.length > 1

            itemDescription += ` It's primary color${plural ? 's are' : ' is'}`
            colors.forEach(({ detail }, index) => {
                if (index === colors.length - 1 && colors.length > 1) {
                    itemDescription += ' and'
                }
                itemDescription += ` ${detail}`
                if (index < colors.length - 1) {
                    itemDescription += ','
                }
            })
            itemDescription += "."
        }

        if (gems && gems.length > 0) {
            const plural = gems.length > 1

            if (plural) {
                itemDescription += ` It has ${gems.length - 1} gems:`
                gems.forEach((gem, index) => {
                    if (index === gems.length - 1 && gems.length > 1) {
                        itemDescription += ' and'
                    }
                    itemDescription += ` a ${gem.shape} ${gem.type} about ${gem.size} mm in size`
                    if (index < gems.length - 1) {
                        itemDescription += ','
                    }
                })
                itemDescription += '.'
            } else {
                itemDescription += ` It has a single gem: a ${gems[0].shape} ${gems[0].type} about ${gems[0].size} mm in size.`
            }
        }

        if (subject && subject.length > 0) {
            itemDescription += ` The subject of the work appears to be ${subject[0].subject} in nature`
            if (subject[0].secondary_subject && subject[0].secondary_subject[0].length > 0) {
                itemDescription += ` as well as`
                subject[0].secondary_subject[0].forEach((subject, index) => {
                    if (index === subject[0].secondary_subject[0].length - 1 && subject[0].secondary_subject[0].length > 1) {
                        itemDescription += ' and'
                    }
                    itemDescription += ` ${subject[0].shape}`
                    if (index < subject[0].secondary_subject[0].length - 1) {
                        itemDescription += ','
                    }
                })
            }
            itemDescription += '.'

            if (subject[0].events && subject[0].events.length > 0) {
                itemDescription += ` It depicts`
                subject[0].events.forEach((event, index) => {
                    if (index === 0) {
                        itemDescription += ` ${event.subject} events from ${event.time_period} times`
                    } else if (index === 1) {
                        itemDescription += `. It also draws parallels to ${event.subject} events from ${event.time_period} times`
                    } else {
                        if (index === subject[0].events.length - 1 && subject[0].events.length > 1) {
                            itemDescription += ' and'
                        }
                        itemDescription += ` ${event.subject} events from ${event.time_period} times`
                        if (index < subject[0].events.length - 1) {
                            itemDescription += ','
                        }
                    }
                })
                itemDescription += '.'
            }

            if (subject[0].persons && subject[0].persons.length > 0) {
                itemDescription += ` Its main character appears to be`
                subject[0].persons.forEach(({ detail }, index) => {
                    if (index === subject[0].persons.length - 1 && subject[0].persons.length > 1) {
                        itemDescription += ' and'
                    }
                    itemDescription += ` ${detail}`
                    if (index < subject[0].persons.length - 1) {
                        itemDescription += ','
                    }
                })
                itemDescription += ' in nature.'
            }

            let thereAreBodyParts = false
            if (subject[0].body_parts && subject[0].body_parts.length > 0) {
                thereAreBodyParts = true
                const plural = subject[0].body_parts.length > 1
                itemDescription += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`

                subject[0].body_parts.forEach(({ submaterial }, index) => {
                    if (index === subject[0].body_parts.length - 1 && subject[0].body_parts.length > 1) {
                        itemDescription += ' and'
                    }
                    itemDescription += ` ${submaterial.detail}`
                    if (submaterial.detail.charAt(submaterial.detail.length - 1) !== 's') {
                        itemDescription += 's'
                    }
                    if (index < subject[0].body_parts.length - 1) {
                        itemDescription += ','
                    }
                })

                if (!subject[0].animal_subtype || !subject[0].animal_subtype.length > 0) {
                    itemDescription += '.'
                }
            }

            if (subject[0].animal_subtype && subject[0].animal_subtype.length > 0) {
                const plural = subject[0].animal_subtype.length > 1
                if (thereAreBodyParts) {
                    itemDescription += ` as well as`
                } else {
                    itemDescription += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`
                }

                subject[0].animal_subtype.forEach(({ submaterial }, index) => {
                    if (index === subject[0].animal_subtype.length - 1 && subject[0].animal_subtype.length > 1) {
                        itemDescription += ' and'
                    }
                    itemDescription += ` ${submaterial.detail}s`
                    if (index < subject[0].animal_subtype.length - 1) {
                        itemDescription += ','
                    }
                })
                itemDescription += '.'
            }

            if (subject[0].colors && subject[0].colors.length > 0) {
                const plural = subject[0].colors.length > 1

                itemDescription += ` The color${plural ? 's ' : ''}`
                subject[0].colors.forEach(({ detail }, index) => {
                    if (index === subject[0].colors.length - 1 && subject[0].colors.length > 1) {
                        itemDescription += ' and'
                    }
                    itemDescription += ` ${detail}`
                    if (index < subject[0].colors.length - 1) {
                        itemDescription += ','
                    }
                })
                itemDescription += "feature prominantly."
            }

            if (subject[0].adjectives && subject[0].adjectives.length > 0) {
                itemDescription += ` You'd probably describe the work as`
                subject[0].adjectives.forEach(({ detail, submaterial }, index) => {
                    if (index === subject[0].adjectives.length - 1 && subject[0].adjectives.length > 1) {
                        itemDescription += ' and'
                    }
                    itemDescription += ` ${detail}`
                    if (submaterial) {
                        itemDescription += ` ${submaterial.detail}`
                    }
                    if (index < subject[0].adjectives.length - 1) {
                        itemDescription += ','
                    }
                })
                itemDescription += "."
            }
        }

        if (engravings && engravings.length > 0) {
            const plural = engravings.length > 1

            if (plural) {
                itemDescription += ' The item has a number of engravings on it.'
            } else if (engravings[0].detail === 'Gem Engraving') {
                itemDescription += ` It appears as if the gem has an engraving.`
            } else {
                itemDescription += ` There is an inside engraving on the item.`
            }

            if (engravings[0].subject) {
                const subject = engravings[0].subject
                itemDescription += ` The engraving appears to be ${subject.subject} in nature`
                if (subject.secondary_subject && subject.secondary_subject.length > 0) {
                    itemDescription += ` as well as`
                    subject.secondary_subject.forEach((innerSubject, index) => {
                        if (index === subject.secondary_subject.length - 1 && subject.secondary_subject.length > 1) {
                            itemDescription += ' and'
                        }
                        itemDescription += ` ${subject.shape}`
                        if (index < subject.secondary_subject.length - 1) {
                            itemDescription += ','
                        }
                    })
                }
                itemDescription += '.'

                if (subject.events && subject.events.length > 0) {
                    itemDescription += ` It depicts`
                    subject.events.forEach((event, index) => {
                        if (index === 0) {
                            itemDescription += ` ${event.subject} events from ${event.time_period} times`
                        } else if (index === 1) {
                            itemDescription += `. It also draws parallels to ${event.subject} events from ${event.time_period} times`
                        } else {
                            if (index === subject.events.length - 1 && subject.events.length > 1) {
                                itemDescription += ' and'
                            }
                            itemDescription += ` ${event.subject} events from ${event.time_period} times`
                            if (index < subject.events.length - 1) {
                                itemDescription += ','
                            }
                        }
                    })
                    itemDescription += '.'
                }

                if (subject.persons && subject.persons.length > 0) {
                    itemDescription += ` Its main character appears to be`
                    subject.persons.forEach(({ detail }, index) => {
                        if (index === subject.persons.length - 1 && subject.persons.length > 1) {
                            itemDescription += ' and'
                        }
                        itemDescription += ` ${detail}`
                        if (index < subject.persons.length - 1) {
                            itemDescription += ','
                        }
                    })
                    itemDescription += ' in nature.'
                }

                let thereAreBodyParts = false
                if (subject.body_parts && subject.body_parts.length > 0) {
                    thereAreBodyParts = true
                    const plural = subject.body_parts.length > 1
                    itemDescription += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`

                    subject.body_parts.forEach(({ submaterial }, index) => {
                        if (index === subject.body_parts.length - 1 && subject.body_parts.length > 1) {
                            itemDescription += ' and'
                        }
                        itemDescription += ` ${submaterial.detail}`
                        if (submaterial.detail.charAt(submaterial.detail.length - 1) !== 's') {
                            itemDescription += 's'
                        }
                        if (index < subject.body_parts.length - 1) {
                            itemDescription += ','
                        }
                    })

                    if (!subject.animal_subtype || !subject.animal_subtype.length > 0) {
                        itemDescription += '.'
                    }
                }

                if (subject.animal_subtype && subject.animal_subtype.length > 0) {
                    const plural = subject.animal_subtype.length > 1
                    if (thereAreBodyParts) {
                        itemDescription += ` as well as`
                    } else {
                        itemDescription += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`
                    }

                    subject.animal_subtype.forEach(({ submaterial }, index) => {
                        if (index === subject.animal_subtype.length - 1 && subject.animal_subtype.length > 1) {
                            itemDescription += ' and'
                        }
                        itemDescription += ` ${submaterial.detail}s`
                        if (index < subject.animal_subtype.length - 1) {
                            itemDescription += ','
                        }
                    })
                    itemDescription += '.'
                }
            }

            if (engravings[0].colors && engravings[0].colors.length > 0) {
                const colors = engravings[0].colors
                const plural = colors.length > 1

                itemDescription += ` The color${plural ? 's ' : ''}`
                colors.forEach(({ detail }, index) => {
                    if (index === colors.length - 1 && colors.length > 1) {
                        itemDescription += ' and'
                    }
                    itemDescription += ` ${detail}`
                    if (index < colors.length - 1) {
                        itemDescription += ','
                    }
                })
                itemDescription += "feature prominantly."
            }

            if (engravings[0].adjectives && engravings[0].adjectives.length > 0) {
                const adjectives = engravings[0].adjectives
                itemDescription += ` You'd probably describe the work as`
                adjectives.forEach(({ detail }, index) => {
                    if (index === adjectives.length - 1 && adjectives.length > 1) {
                        itemDescription += ' and'
                    }
                    itemDescription += ` ${detail}`
                    if (index < adjectives.length - 1) {
                        itemDescription += ','
                    }
                })
                itemDescription += "."
            }
        }

        if (stitchings && stitchings.length > 0) {
            itemDescription += ' The item also has hand stitching'

            if (stitchings[0].subject) {
                const subject = stitchings[0].subject
                itemDescription += ` which are ${subject.subject} in nature`
                if (subject.secondary_subject && subject.secondary_subject.length > 0) {
                    itemDescription += ` as well as`
                    subject.secondary_subject.forEach((innerSubject, index) => {
                        if (index === subject.secondary_subject.length - 1 && subject.secondary_subject.length > 1) {
                            itemDescription += ' and'
                        }
                        itemDescription += ` ${subject.shape}`
                        if (index < subject.secondary_subject.length - 1) {
                            itemDescription += ','
                        }
                    })
                }
                itemDescription += '.'

                if (subject.events && subject.events.length > 0) {
                    itemDescription += ` It depicts`
                    subject.events.forEach((event, index) => {
                        if (index === 0) {
                            itemDescription += ` ${event.subject} events from ${event.time_period} times`
                        } else if (index === 1) {
                            itemDescription += `. It also draws parallels to ${event.subject} events from ${event.time_period} times`
                        } else {
                            if (index === subject.events.length - 1 && subject.events.length > 1) {
                                itemDescription += ' and'
                            }
                            itemDescription += ` ${event.subject} events from ${event.time_period} times`
                            if (index < subject.events.length - 1) {
                                itemDescription += ','
                            }
                        }
                    })
                    itemDescription += '.'
                }

                if (subject.persons && subject.persons.length > 0) {
                    itemDescription += ` Its main character appears to be`
                    subject.persons.forEach(({ detail }, index) => {
                        if (index === subject.persons.length - 1 && subject.persons.length > 1) {
                            itemDescription += ' and'
                        }
                        itemDescription += ` ${detail}`
                        if (index < subject.persons.length - 1) {
                            itemDescription += ','
                        }
                    })
                    itemDescription += ' in nature.'
                }

                let thereAreBodyParts = false
                if (subject.body_parts && subject.body_parts.length > 0) {
                    thereAreBodyParts = true
                    const plural = subject.body_parts.length > 1
                    itemDescription += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`

                    subject.body_parts.forEach(({ submaterial }, index) => {
                        if (index === subject.body_parts.length - 1 && subject.body_parts.length > 1) {
                            itemDescription += ' and'
                        }
                        itemDescription += ` ${submaterial.detail}`
                        if (submaterial.detail.charAt(submaterial.detail.length - 1) !== 's') {
                            itemDescription += 's'
                        }
                        if (index < subject.body_parts.length - 1) {
                            itemDescription += ','
                        }
                    })

                    if (!subject.animal_subtype || !subject.animal_subtype.length > 0) {
                        itemDescription += '.'
                    }
                }

                if (subject.animal_subtype && subject.animal_subtype.length > 0) {
                    const plural = subject.animal_subtype.length > 1
                    if (thereAreBodyParts) {
                        itemDescription += ` as well as`
                    } else {
                        itemDescription += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`
                    }

                    subject.animal_subtype.forEach(({ submaterial }, index) => {
                        if (index === subject.animal_subtype.length - 1 && subject.animal_subtype.length > 1) {
                            itemDescription += ' and'
                        }
                        itemDescription += ` ${submaterial.detail}s`
                        if (index < subject.animal_subtype.length - 1) {
                            itemDescription += ','
                        }
                    })
                    itemDescription += '.'
                }
            }

            if (stitchings[0].colors && stitchings[0].colors.length > 0) {
                const colors = stitchings[0].colors
                const plural = colors.length > 1

                itemDescription += ` The color${plural ? 's ' : ''}`
                colors.forEach(({ detail }, index) => {
                    if (index === colors.length - 1 && colors.length > 1) {
                        itemDescription += ' and'
                    }
                    itemDescription += ` ${detail}`
                    if (index < colors.length - 1) {
                        itemDescription += ','
                    }
                })
                itemDescription += "feature prominantly."
            }

            if (stitchings[0].adjectives && stitchings[0].adjectives.length > 0) {
                const adjectives = stitchings[0].adjectives
                itemDescription += ` You'd probably describe the work as`
                adjectives.forEach(({ detail }, index) => {
                    if (index === adjectives.length - 1 && adjectives.length > 1) {
                        itemDescription += ' and'
                    }
                    itemDescription += ` ${detail}`
                    if (index < adjectives.length - 1) {
                        itemDescription += ','
                    }
                })
                itemDescription += "."
            }
        }

        if (adjectives && adjectives.length > 0) {
            itemDescription += ` You'd probably describe the craftsmanship as`
            adjectives.forEach(({ detail }, index) => {
                if (index === adjectives.length - 1 && adjectives.length > 1) {
                    itemDescription += ' and'
                }
                itemDescription += ` ${detail}`
                if (index < adjectives.length - 1) {
                    itemDescription += ','
                }
            })
            itemDescription += "."
        }

        if (quirks && quirks.length > 0) {
            const plural = quirks.length > 1

            if (plural) {
                itemDescription += ` It also appears to have some faults. Namely, it's`
            } else {
                itemDescription += ` It also appears to have a fault; it's`
            }
            quirks.forEach(({ detail }, index) => {
                if (index === quirks.length - 1 && quirks.length > 1) {
                    itemDescription += ' and'
                }
                itemDescription += ` ${detail}`
                if (index < quirks.length - 1) {
                    itemDescription += ','
                }
            })
            itemDescription += "."
        }

        if (wear) {
            if (wear <= 2) {
                itemDescription += ` It has a little worn (${wear} Wear).`
            } else if (wear <= 4) {
                itemDescription += ` It's slightly worn (${wear} Wear).`
            } else if (wear <= 6) {
                itemDescription += ` It's pretty worn (${wear} Wear).`
            } else if (wear <= 8) {
                itemDescription += ` It's very worn (${wear} Wear).`
            } else if (wear <= 10) {
                itemDescription += ` It's about to break (${wear} Wear).`
            } else {
                itemDescription += ` It's broken (${wear} Wear).`
            }
        }

        if (wear) {
            itemDescription += ` It would probably worth about ${finalPrice} sc after it's repaired.`
        } else {
            itemDescription += ` It's probably worth about ${finalPrice} sc.`
        }

        return itemDescription
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

        return Promise.all(promiseArray).then(_ => {
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
                        return helperObjects.getFromTable(populatedMaterials, innerMaterialResult[0], db)
                    } else {
                        return db.get.random.item_by_category(material.material).then(itemByCategory => {
                            if (itemByCategory.length > 0) {
                                itemByCategory[0].label = material.label
                                if (!itemByCategory[0].subtable) {
                                    populatedMaterials.push(itemByCategory[0])
                                    return true
                                }
                                return helperObjects.getFromTable(populatedMaterials, itemByCategory[0], db)
                            } else {
                                return helperObjects.getFromTable(populatedMaterials, material, db)
                            }
                        })
                    }
                }))
            })

            return Promise.all(innerPromiseArray).then(_ => {
                rawItem.materials = populatedMaterials

                return helperObjects.reformatObject(rawItem)
            })

        })
    },
    getRestOfItemOnBudget: async (budget, rawItem, db, req, res) => {
        let promiseArray = []

        delete rawItem['?column?']

        promiseArray.push(db.get.not_random.item_materials(rawItem.id).then(materialResult => {
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
                                if (rawGem.type) {
                                    let gem = {
                                        shape: rawGem.shape.subtableResults[0],
                                        type: rawGem.type,
                                        size: rawGem.size
                                    }

                                    rawItem[key].push(gem)
                                }
                                resolve(true);
                            })
                        }))

                    }
                } else {
                    delete rawItem[key]
                }
            } else if (rawItem[key] && key === 'subject') {
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

        return Promise.all(promiseArray).then(_ => {
            let innerPromiseArray = []
            let populatedMaterials = []
            rawItem.materials.forEach(material => {
                if (material.subtable) {
                    innerPromiseArray.push(helperObjects.getFromTable(populatedMaterials, material, db))
                } else {
                    innerPromiseArray.push(db.get.semi_random.material(material.material, rawItem.price, budget).then(innerMaterialResult => {
                        if (innerMaterialResult[0]) {
                            innerMaterialResult[0].label = material.label
                            if (!innerMaterialResult[0].subtable) {
                                populatedMaterials.push(innerMaterialResult[0])
                                return true
                            }
                            return helperObjects.getFromTable(populatedMaterials, innerMaterialResult[0], db)
                        } else {
                            return db.get.random.item_by_category(material.material).then(itemByCategory => {
                                if (itemByCategory.length > 0) {
                                    itemByCategory[0].label = material.label
                                    if (!itemByCategory[0].subtable) {
                                        populatedMaterials.push(itemByCategory[0])
                                        return true
                                    }
                                    return helperObjects.getFromTable(populatedMaterials, itemByCategory[0], db)
                                } else {
                                    return helperObjects.getFromTable(populatedMaterials, material, db)
                                }
                            })
                        }
                    }))
                }
            })

            return Promise.all(innerPromiseArray).then(_ => {
                rawItem.materials = populatedMaterials

                let finalObject = helperObjects.reformatObject(rawItem, budget)

                return finalObject
            })

        })
    },
    getFormat: function (item, format) {
        if (format && format.toUpperCase() === 'JSON') {
            delete item.description
            return item
        } else if (format && format.toUpperCase() === 'STRING') {
            return item.description
        } else {
            return item
        }
    }
}

module.exports = helperObjects