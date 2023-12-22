const { getRestOfItem, getRestOfItemOnBudget, getFormat, sendErrorForwardNoFile, getSemiRandom , checkForContentTypeBeforeSending} = require('./helpers')

const sendErrorForward = sendErrorForwardNoFile('Unique Items')

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
                checkForContentTypeBeforeSending(res, getFormat(item, format))
            }).catch(e => sendErrorForward('get rest of item', e, res))
        }).catch(e => sendErrorForward('get random unique item', e, res))
    },
    getItemOnBudget: (budget, req, res) => {
        const db = req.app.get('db')
        let { format } = req.query
        getSemiRandom(budget, db).then(itemResult => {
            getRestOfItemOnBudget(budget, itemResult[0], db, req, res).then(item => {
                checkForContentTypeBeforeSending(res, getFormat(item, format))
            }).catch(e => sendErrorForward('get rest of item on budget', e, res))
        }).catch(e => sendErrorForward('get random unique item on budget', e, res))
    },
    getUniqueItems: (req, res) => {
        const db = req.app.get('db')
        let { numberOfItems, budget, format } = req.query
        const { budgets } = req.body

        let promiseArray = []
        if (budgets && budgets.length > 0) {
            for (let i = 0; i < budgets.length; i++) {
                const budget = budgets[i] > 1000 ? 1000 : budgets[i]
                promiseArray.push(getSemiRandom(budget, db).then(itemResult => getRestOfItemOnBudget(budget, itemResult[0], db, req, res).then(result => getFormat(result, format)).catch(e => sendErrorForward('get format', e, res))).catch(e => sendErrorForward('get rest of item on budget 2', e, res)))
            }
        } else {
            if (numberOfItems > 25) {
                numberOfItems = 25
            }
            for (let i = 0; i < numberOfItems; i++) {
                if (budget) {
                    if (budget > 1000) {
                        budget = 1000
                    }
                    promiseArray.push(getSemiRandom(budget, db).then(itemResult => getRestOfItemOnBudget(budget, itemResult[0], db, req, res).then(result => getFormat(result, format))).catch(e => sendErrorForward('get semi-random item', e, res)))
                } else {
                    promiseArray.push(db.get.random.item().then(itemResult => getRestOfItem(itemResult[0], db, req, res).then(result => getFormat(result, format)).catch(e => sendErrorForward('get format 2', e, res))).catch(e => sendErrorForward('get random item 2', e, res)))
                }
            }
        }

        Promise.all(promiseArray).then(finalArray => {
            checkForContentTypeBeforeSending(res, finalArray)
        }).catch(e => sendErrorForward('final promise', e, res))
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
                checkForContentTypeBeforeSending(res, getFormat(item, format))
            }).catch(e => sendErrorForward('get specific unique item', e, res))
        }).catch(e => sendErrorForward('get item by id', e, res))
    },
}

module.exports = controllerFunctions