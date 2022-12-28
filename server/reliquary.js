const { connection } = require('./serverConfig')
    , express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
const uniqueItemCtrl = require('./uniqueItemController.js')
const tables = require('./tables')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

// app.get('/api/getUniquieItem', uniqueItemCtrl.getRandomUniqueItem)

massive(connection).then(dbI => {
    app.set('db', dbI)
    app.listen(3434, _ => {
        console.log(`One Thousand Good Deeds Cannot Blot Out the Stain of One Sin 3434`)

        // if !SIZE, category
        // if SIZE, item
            // add materials to item material
                // if label, add to label to all materials it applies to
        // if material, material
        // if detail, details

        // Gem types & shapes


        // eventually have to SUBJECT
    })
})