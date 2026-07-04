const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('../../helpers')
const ingredients = require('./dummyData.js')
const sendErrorForward = sendErrorForwardNoFile('Ingredients')

const controllerFunctions = {
    getRandomIngredients: async (req, res) => {
        const numberOfItems = +req.query.numberOfItems
        const climateID = +req.body.climateID
        const { location } = req.body

        const filteredIngredients = filterByLocation(filterByClimate(climateID), location)
        let ingredientsToReturn = []

        for (let i = 0; i < numberOfItems; i++) {
            const randomIngredient = filteredIngredients[Math.floor(Math.random() * filteredIngredients.length)];
            ingredientsToReturn.push(randomIngredient)
        }

        checkForContentTypeBeforeSending(res, ingredientsToReturn)
    },
    searchIngredients: (req, res) => {
        const searchTerm = req.query.searchTerm.toUpperCase()
        const climateID = +req.body.climateID
        const { location } = req.body

        const filteredIngredients = filterByLocation(filterByClimate(climateID), location)

        const ingredientsToReturn = filteredIngredients.filter(({ ingredientName, potion }) => {
            return ingredientName.toUpperCase().includes(searchTerm) || potion.name.toUpperCase().includes(searchTerm)
        })

        checkForContentTypeBeforeSending(res, ingredientsToReturn.splice(0, 25))
    },
    searchByClimate: (req, res) => {
        const climateID = +req.body.climateID
        const { location } = req.body

        checkForContentTypeBeforeSending(res, filterByLocation(filterByClimate(climateID), location).splice(0, 25))
    },
    searchByLocation: (req, res) => {
        const searchLocation = req.query.location
        const climateID = +req.body.climateID
        const { location } = req.body

        const filteredIngredients = filterByLocation(filterByClimate(climateID), location)

        checkForContentTypeBeforeSending(res, filteredIngredients.splice(0, 25))
    },
}

module.exports = controllerFunctions

function filterByClimate(climateID) {
    if (climateID) {
        return ingredients.filter(({ classifications, potion }) => {
            return classifications.findIndex(climate => climate.id === climateID) > -1
        })
    }

    return ingredients
}

function filterByLocation(filteredIngredients, searchLocation) {
    if (searchLocation) {
        return filteredIngredients.filter(({ locations, potion }) => {
            return locations.findIndex(location => location.location === searchLocation) > -1
        })
    }

    return filteredIngredients
}