const axios = require('axios')
const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('./helpers')
const sendErrorForward = sendErrorForwardNoFile('Scrolls')

const controllerFunctions = {
    getRandomScrolls: async (req, res) => {
        let { numberOfItems } = req.query

        const scrolls = await controllerFunctions.getRandomScrollsWorkhorse(res, numberOfItems)
        checkForContentTypeBeforeSending(res, scrolls)
    },
    getRandomScrollsWorkhorse: async (res, numberOfItems = 1, power) => {
        if (numberOfItems > 25) {
            numberOfItems = 25
        }

        return axios.get('https://bonfire.stone-fish.com/getRandomSpells/' + numberOfItems).then(result => {
            return result.data.map(scroll => {return {...scroll, sp: power}})
        }).catch(e => sendErrorForward('get random scrolls', e, res))
    }
}

module.exports = controllerFunctions