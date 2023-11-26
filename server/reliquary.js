const { connection } = require('./serverConfig')
    , express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
const uniqueItemCtrl = require('./uniqueItemController.js')
    , potionCtrl = require('./potionController.js')
    , talismanCtrl = require('./talismanController.js')
    , scrollCtrl = require('./scrollController.js')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.get('/api/getUniquieItem', uniqueItemCtrl.getUniqueItem)

app.post('/api/getUniquieItems', uniqueItemCtrl.getUniqueItems)
app.post('/api/getRandomPotion', potionCtrl.getRandomPotion)
app.post('/api/getRandomPotions', potionCtrl.getRandomPotions)
app.post('/api/getTalismans', talismanCtrl.getRandomTalismans)
app.post('/api/getScrolls', scrollCtrl.getRandomScrolls)

const root = require('path').join(__dirname, '../build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

massive(connection).then(dbI => {
    app.set('db', dbI)
    app.listen(3434, _ => {
        console.log(`One Thousand Good Deeds Cannot Blot Out the Stain of One Sin 3434`)
    })
})