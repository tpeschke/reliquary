const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('../../helpers')
const weirdTables = require('./rudimentTables')
const sendErrorForward = sendErrorForwardNoFile('Scrolls')

const controllerFunctions = {
    getRandomScrolls: async (req, res) => {
        let { numberOfItems } = req.query

        const scrolls = await controllerFunctions.getRandomScrollsWorkhorse(numberOfItems)
        checkForContentTypeBeforeSending(res, scrolls)
    },
    getRandomScrollsWorkhorse: async (numberOfItems = 1, power) => {
        if (numberOfItems > 25) {
            numberOfItems = 25
        }

        return new Promise((resolve) => {
            const spellArray = getRandomSpells(numberOfItems, power)
            resolve(spellArray)
        })
    }
}

module.exports = controllerFunctions

function getRandomSpells(numberOfItems = 1, sp = 0) {
    const limit = 100

    if (numberOfItems < 0) {
        numberOfItems = 1
    } else if (numberOfItems > limit) {
        numberOfItems = limit
    }

    let spellArray = []
    for (let i = 0; i < numberOfItems; i++) {
        spellArray.push(rollForSpell(sp))
    }

    return spellArray
}

function rollForSpell(sp) {
    const spell = {
        shape: getRudimentFromRoll(weirdTables.shapeTable).rudiment,
        origin: getRudimentFromRoll(weirdTables.originTable).rudiment,
    }

    let tradition = getRudimentFromRoll(weirdTables.traditionTable).rudiment
    while (tradition === 'Reroll') {
        tradition = getRudimentFromRoll(weirdTables.traditionTable).rudiment
    }
    const effect = getRudimentFromRoll(weirdTables.effectsTables[tradition]).rudiment
    
    return {...spell, sp, tradition, effect, name: nameTheScroll(spell.origin, effect, spell.shape), tooltip: createTooltip(spell, effect, tradition)}
}

function getRudimentFromRoll(table) {
    const roll = Math.floor(Math.random() * (table.max) + 1)
    let total = 0
    for (let i = 0; i < table.rows.length; i++) {
        total += table.rows[i].weight
        if (total >= roll) {
            return table.rows[i]
        }
    }
}

function nameTheScroll(origin, effect, shape) {
    if (origin === 'Touch' || origin === 'Burst') {
        return `Scroll of ${origin}ing, ${shape} ${effect}`
    } else if (origin === 'Near' || origin === 'Far') {
        return `Scroll of ${origin} ${shape} of ${effect}`
    } else {
        return `Scroll of ${ingTheEffect(effect)} ${origin} in a ${shape}`
    }
}

function ingTheEffect(effect) {
    if (effect[effect.length -1] === 'e') {
        return effect.slice(0, effect.length-1) + 'ing'
    } else {
        return effect + 'ing'
    }
}

function createTooltip(spell, effect, tradition) {
    return `${spell.origin} | ${spell.shape} | ${effect} (${tradition})`
}