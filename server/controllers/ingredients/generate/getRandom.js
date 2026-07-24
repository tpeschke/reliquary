const getRandomFromArray = (array) => {
    return array[randomIntFromInterval(0, array.length - 1)];
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomFunctions = {
    getRandomFromArray,
    randomIntFromInterval
}

module.exports = randomFunctions