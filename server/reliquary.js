const { connection } = require('./serverConfig')
    , express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
const itemCtrl = require('./controllers/item/ItemController.js')
    , potionCtrl = require('./controllers/potionController.js')
    , talismanCtrl = require('./controllers/talismanController.js')
    , scrollCtrl = require('./controllers/scrollController.js')
    , enchantedCtrl = require('./controllers/enchantedController.js')
    , combinedCtrl = require('./controllers/combinedController.js')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.get('/api/getEnchantedItem', enchantedCtrl.getEnchantedItems)
app.get('/api/getSingleEnchantedItem/:id', enchantedCtrl.getSingleEnchantedItem)

app.post('/api/getItems', itemCtrl.getItems)
app.post('/api/getRandomPotion', potionCtrl.getRandomPotion)
app.post('/api/getRandomPotions', potionCtrl.getRandomPotions)
app.post('/api/searchPotions', potionCtrl.searchPotions)
app.post('/api/searchEnchantedItems', enchantedCtrl.searchEnchantedItem)
app.post('/api/getTalismans', talismanCtrl.getRandomTalismans)
app.post('/api/getScrolls', scrollCtrl.getRandomScrolls)

app.post('/api/treasure', combinedCtrl.getTreasure)

const path = require('path')
app.use(express.static(__dirname + `/../build`));
app.get('/*', (_, response) => {
    response.sendFile(path.join(__dirname + '/../build/index.html'))
})

massive(connection).then(dbI => {
    app.set('db', dbI)
    app.listen(3434, _ => {
        console.log(`One Thousand Good Deeds Cannot Blot Out the Stain of One Sin 3434`)
    })
})