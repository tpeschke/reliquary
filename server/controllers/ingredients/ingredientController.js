const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('../../helpers')
const ingredients = require('./dummyData.js')
const sendErrorForward = sendErrorForwardNoFile('Ingredients')

const controllerFunctions = {
    getRandomIngredients: async (req, res) => {
        const { numberOfItems = '25' } = req.query

        const ingredientsCopy = [...ingredients]

        checkForContentTypeBeforeSending(res, ingredientsCopy.splice(0, +numberOfItems))
    },
}

module.exports = controllerFunctions