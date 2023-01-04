const { getRestOfItem, getRestOfItemOnBudget, getFormat } = require('./helpers')

controllerFunctions = {
    getUniqueItem: (req, res) => {
        let { budget, itemId } = req.query

        if (itemId) {
            controllerFunctions.getSpecificUniqueItem(+itemId, req, res)
        } else if (budget) {
            controllerFunctions.getItemOnBudget(+budget, req, res)
        } else {
            controllerFunctions.getRandomUniqueItem(req, res)
        }
    },
    getRandomUniqueItem: (req, res) => {
        const db = req.app.get('db')
        let { format } = req.query

        db.get.random.item().then(itemResult => {
            getRestOfItem(itemResult[0], db, req, res).then(item => {
                res.send(getFormat(item, format))
            })
        })
    },
    getItemOnBudget: (budget, req, res) => {
        const db = req.app.get('db')
        let { format } = req.query

        db.get.semi_random.item(budget * .5, budget).then(itemResult => {
            getRestOfItemOnBudget(budget, itemResult[0], db, req, res).then(item => {
                res.send(getFormat(item, format))
            })
        })
    },
    getUniqueItems: (req, res) => {
        const db = req.app.get('db')
        let { numberOfItems, budget, format } = req.query
        const { budgets } = req.body

        let promiseArray = []
        if (budgets && budgets.length > 0) {
            for (let i = 0; i < budgets.length; i++) {
                const budget = budgets[i]
                promiseArray.push(db.get.semi_random.item(budget * .5, budget).then(itemResult => getRestOfItemOnBudget(budget, itemResult[0], db, req, res).then( result => getFormat(result, format))))
            }
        } else {
            if (numberOfItems > 25) {
                numberOfItems = 25
            }

            for (let i = 0; i < numberOfItems; i++) {
                if (budget) {
                    promiseArray.push(db.get.semi_random.item(budget * .5, budget).then(itemResult => getRestOfItemOnBudget(budget, itemResult[0], db, req, res).then( result => getFormat(result, format))))
                } else {
                    promiseArray.push(db.get.random.item().then(itemResult => getRestOfItem(itemResult[0], db, req, res).then( result => getFormat(result, format))))
                }
            }
        }

        Promise.all(promiseArray).then(finalArray => {
            res.send(finalArray)
        })
    },
    getSpecificUniqueItem: (itemId, req, res) => {
        const db = req.app.get('db')

        // material cases:
        //  id 2
        //  Shovel: id 366
        //  Talisman: id 325
        //  Incence: id 319
        //  Bellows: id 336
        //  Funnel: id 348

        let { format } = req.query

        db.get.random.item_by_id(itemId).then(itemResult => {
            getRestOfItem(itemResult[0], db, req, res).then(item => {
                res.send(getFormat(item, format))
            })
        })
    },
}

module.exports = controllerFunctions