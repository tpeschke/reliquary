const { connection } = require('./serverConfig')
    , express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
const itemCtrl = require('./ItemController.js')
    , potionCtrl = require('./potionController.js')
    , talismanCtrl = require('./talismanController.js')
    , scrollCtrl = require('./scrollController.js')
    , enchantedCtrl = require('./enchantedController.js')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.get('/api/getEnchantedItem', enchantedCtrl.getEnchantedItem)
app.get('/api/getSingleEnchantedItem/:id', enchantedCtrl.getSingleEnchantedItem)

app.post('/api/getItems', itemCtrl.getItems)
app.post('/api/getRandomPotion', potionCtrl.getRandomPotion)
app.post('/api/getRandomPotions', potionCtrl.getRandomPotions)
app.post('/api/searchPotions', potionCtrl.searchPotions)
app.post('/api/searchEnchantedItems', enchantedCtrl.searchEnchantedItem)
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