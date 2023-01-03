const { getRestOfItem, getRestOfItemOnBudget } = require('./helpers')

controllerFunctions = {
    getUniqueItem: (req, res) => {
        let { budget } = req.query

        if (budget) {
            controllerFunctions.getItemOnBudget(+budget, req, res)
        } else {
            controllerFunctions.getRandomUniqueItem(req, res)
        }
    },
    getRandomUniqueItem: (req, res) => {
        const db = req.app.get('db')

        // material cases:
        //  id 2
        //  Shovel: id 366
        //  Talisman: id 325
        //  Incence: id 319
        //  Bellows: id 336
        //  Funnel: id 348

        db.get.random.item().then(itemResult => {
        // db.get.random.item_by_id(2).then(itemResult => {
            getRestOfItem(itemResult[0], db, req, res)
        })
    },
    getItemOnBudget: (budget, req, res) => {
        const db = req.app.get('db')

        db.get.semi_random.item(budget * .5, budget).then(itemResult => {
        // db.get.random.item_by_id(2).then(itemResult => {
            getRestOfItemOnBudget(budget, itemResult[0], db, req, res)
        })
    }
}

module.exports = controllerFunctions