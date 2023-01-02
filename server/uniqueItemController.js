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
        db.get.random.item_by_id(325).then(itemResult => {
            let rawItem = itemResult[0]
            let promiseArray = []

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
                    let randomNumber = getRandomInt(10)
                    if (randomNumber <= rawItem[key]) {
                        const detailAmount = Math.ceil(rawItem[key] / randomNumber)
                        rawItem[key] = []
                        for (let i = 1; i < detailAmount; i++) {
                            promiseArray.push(getFromTable(rawItem[key], { subtable: toTitleCase(key) }, db))
                        }
                    } else {
                        rawItem[key] = null
                    }
                } else if (rawItem[key] && key === 'gems') {

                } else if (rawItem[key] && key === 'subject') {

                }
            }

            let specialKeys = ['engravings', 'stitchings']

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
                    res.send(rawItem)
                })

            })
        })
    }
}

async function getFromTable(arrayToPushTo, result, db) {
    let materialCategoryArray = ['Cloth', 'Exotic Cloth', 'Exotic Metal', 'Exotic Stone/Earthwork', 'Exotic Wood', 'Fur', 'Leather', 'Metal', 'other_table', 'Paper Product', 'Parchment', 'Stone/Earthwork', 'Vellum', 'Wax', 'Wood']

    if (materialCategoryArray.includes(result.subtable)) {
        return db.get.random.material_by_category(result.subtable).then(subtableResult => {
            result.subtableResults = subtableResult;

            if (subtableResult[0].subtable) {
                result.subtableResults = []
                return getFromTable(result.subtableResults, subtableResult[0], db).then(_ => {
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

            if (subtableResult[0].subtable) {
                result.subtableResults = []
                return getFromTable(result.subtableResults, subtableResult[0], db).then(_ => {
                    arrayToPushTo.push(result)
                    return true
                })
            } else {
                arrayToPushTo.push(result)
                return true
            }
        })
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}