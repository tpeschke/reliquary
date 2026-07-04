const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('../../helpers')
const ingredients = require('./dummyData.js')
const sendErrorForward = sendErrorForwardNoFile('Ingredients')

const controllerFunctions = {
    getRandomIngredients: async (req, res) => {
        const numberOfItems = +req.query.numberOfItems

        let ingredientsToReturn = []

        for (let i = 0; i < numberOfItems; i++) {
            const randomIngredient = ingredients[Math.floor(Math.random() * ingredients.length)];
            ingredientsToReturn.push(randomIngredient)
        }

        checkForContentTypeBeforeSending(res, ingredientsToReturn)
    },
    searchIngredients: (req, res) => {
        const searchTerm = req.query.searchTerm.toUpperCase()

        const ingredientsToReturn = ingredients.filter(({ ingredientName, potion }) => {
            return ingredientName.toUpperCase().includes(searchTerm) || potion.name.toUpperCase().includes(searchTerm)
        })

        checkForContentTypeBeforeSending(res, ingredientsToReturn)
    },
    searchByClimate: (req, res) => {
        const climateID = +req.query.climateID

        const ingredientsToReturn = ingredients.filter(({ classifications, potion }) => {
            return classifications.findIndex(climate => climate.id === climateID ) > -1
        })

        checkForContentTypeBeforeSending(res, ingredientsToReturn)
    },
    searchByLocation: (req, res) => {
        const searchLocation = req.query.location

        const ingredientsToReturn = ingredients.filter(({ locations, potion }) => {
            return locations.findIndex(location => location.location === searchLocation ) > -1
        })

        checkForContentTypeBeforeSending(res, ingredientsToReturn)
    },
}

module.exports = controllerFunctions