controllerFunctions = {
    getRandomTalismans: (req, res) => {
        const db = req.app.get('db')
        let { numberOfItems } = req.query

        if (!numberOfItems) {
            numberOfItems = 1
        } else if (numberOfItems > 25) {
            numberOfItems = 25
        }
        
        db.get.random.talisman(numberOfItems).then(talisman => {
            res.send(talisman)
        })
    }
}

module.exports = controllerFunctions