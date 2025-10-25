function createDescriptiveWear(wear) {
    if (wear <= 2) {
        return `It has a little worn (${wear} Wear)`
    } else if (wear <= 4) {
        return `It's slightly worn (${wear} Wear)`
    } else if (wear <= 6) {
        return `It's pretty worn (${wear} Wear)`
    } else if (wear <= 8) {
        return `It's very worn (${wear} Wear)`
    } else if (wear <= 10) {
        return `It's about to break (${wear} Wear)`
    } else {
        return `It's broken (${wear} Wear)`
    }
}

module.exports = {
    createDescriptiveWear
}