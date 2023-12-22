const axios = require('axios')
const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('./helpers')
const sendErrorForward = sendErrorForwardNoFile('Scrolls')

controllerFunctions = {
    getRandomScrolls: (req, res) => {
        let { numberOfItems } = req.query

        if (!numberOfItems) {
            numberOfItems = 1
        } else if (numberOfItems > 25) {
            numberOfItems = 25
        }

        axios.get('https://bonfire.dragon-slayer.net/getRandomSpells/' + numberOfItems).then(({data}) => {
            checkForContentTypeBeforeSending(res, data)
        }).catch(e => sendErrorForward('get random scrolls', e, res))
    }
}

module.exports = controllerFunctions