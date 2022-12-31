// Raw Goods has "Leather & Fur"

module.exports = {
    getRandomUniqueItem: (req, res) => {
        const db = req.app.get('db')

        db.get.random.item().then(itemResult => {
            let rawItem = itemResult[0]
            let promiseArray = []
            // promiseArray.push(db.get.random.item_materials(rawItem.id).then(materialResult => {

            // material cases:
            //  id 2
            //  Shovel: id 366
            //  Talisman: id 325
            //  Incence: id 319
            //  Bellows: id 336
            //  Funnel: id 348

            promiseArray.push(db.get.random.item_materials(348).then(materialResult => {
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

            Promise.all(promiseArray).then(_ => {

                let innerPromiseArray = []
                let populatedMaterials = []
                rawItem.materials.forEach(material => {
                    console.log("line 55 ", material)
                    innerPromiseArray.push(db.get.random.material(material.material).then(innerMaterialResult => {
                        if (innerMaterialResult[0]) {
                            innerMaterialResult[0].label = material.label
                            // subtables need to be handled as well :(
                            // Paper Products are probably the easiest way via itemid 2
                            populatedMaterials.push(innerMaterialResult[0])
                            return true
                        } else {
                            return db.get.random.item_by_category(material.material).then(itemByCategory => {
                                itemByCategory[0].label = material.label
                                // subtables need to be handled as well :(
                                // Paper Products are probably the easiest way via itemid 2
                                populatedMaterials.push(itemByCategory[0])
                                return true
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
