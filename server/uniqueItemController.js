module.exports = {
    getRandomUniqueItem: (req, res) => {
        const db = req.app.get('db')
        
        db.get.random.item().then(result => {
            res.send(result[0])
        })
    }
}
