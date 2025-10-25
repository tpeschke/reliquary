function aOrAn(noun) {
    const firstLetter = noun.substring(0, 1)

    return "AEIOUaeiou".indexOf(firstLetter) != -1 ? 'An' : 'A'
}

module.exports = {
    aOrAn
}