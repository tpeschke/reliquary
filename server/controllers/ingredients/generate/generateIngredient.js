const generatePlantName = require('./utilities/generatePlantName')
const generateHarvestable = require('./utilities/generateHarvestable')
const generateLocations = require('./utilities/generateLocations')
const generateReactivity = require('./utilities/generateReactivity')

module.exports = function generateIngredient(potion, potionIndex) {
    return (_, index) => {
        return {
            id: makeId(10),
            ...generatePlantName(),
            harvestablePart: generateHarvestable(),
            locations: generateLocations(),
            reactivity: generateReactivity()
        };
    };
}

function makeId(length) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}