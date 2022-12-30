module.exports = {
    getRandomUniqueItem: (req, res) => {
        const db = req.app.get('db')

        db.get.random.item().then(itemResult => {
            let rawItem = itemResult[0]
            let promiseArray = []
            promiseArray.push(db.get.random.item_materials(rawItem.id).then(materialResult => {
            // promiseArray.push(db.get.random.item_materials(2).then(materialResult => {
                if (materialResult[0].material) {
                    let materials = []
                    materialResult.forEach(material => {
                        if (materials.length === 0) {
                            materials.push(material)
                        } else {
                            let addToMaterials = true
                            for (let i = 0; i < materials.length; i++) {
                                if (materials[i].label === material.label) {
                                    addToMaterials = false
                                    i = materials.length
                                }
                            }
                            if (addToMaterials) {
                                materials.push(material)
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
                    innerPromiseArray.push(db.get.random.material(material.material).then(innerMaterialResult => {

                        // subtables need to be handled as well :(
                            // Paper Products are probably the easiest way via itemid 2
                        populatedMaterials.push(innerMaterialResult[0])
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
