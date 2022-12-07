const { connection } = require('./serverConfig')
    , express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
const uniqueItemCtrl = require('./uniqueItemController')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.get('/api/getChanceTables', uniqueItemCtrl.getChanceTables)
app.get('/api/getUniquieItem', uniqueItemCtrl.getRandomUniqueItem)

massive(connection).then(dbI => {
    app.set('db', dbI)
    app.listen(3434, _ => {
        uniqueItemCtrl.setUpTables()
        console.log(`One Thousand Good Deeds Cannot Blot Out the Stain of One Sin 3434`)
    })
})