const weirdTables = require('./rudimentTables')

const controllerFunctions = {
    getRandomScrolls: async (req, res) => {
        const { checkForContentTypeBeforeSending } = require('../../helpers')
        let { numberOfItems } = req.query

        const scrolls = await controllerFunctions.getRandomScrollsWorkhorse(numberOfItems)
        checkForContentTypeBeforeSending(res, scrolls)
    },
    getRandomScrollsWorkhorse: async (numberOfItems = 1, power) => {
        let count = Number(numberOfItems)
        if (!Number.isFinite(count) || count < 0) {
            count = 1
        }
        if (count === 0) {
            return []
        }
        if (count > 25) {
            count = 25
        }

        return getRandomSpells(count, power)
    }
}

module.exports = controllerFunctions

function getRandomSpells(numberOfItems = 1, sp = 0) {
    const limit = 100

    numberOfItems = Number(numberOfItems)
    if (!Number.isFinite(numberOfItems) || numberOfItems < 0) {
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
        shape: rudimentName(weirdTables.shapeTable),
        origin: rudimentName(weirdTables.originTable),
    }

    let tradition = rudimentName(weirdTables.traditionTable)
    while (tradition === 'Reroll') {
        tradition = rudimentName(weirdTables.traditionTable)
    }
    const effect = rudimentName(weirdTables.effectsTables[tradition])
    
    return {...spell, sp, tradition, effect, name: nameTheScroll(spell.origin, effect, spell.shape), tooltip: createTooltip(spell, effect, tradition), type: 'scroll'}
}

function rudimentName(table) {
    const row = getRudimentFromRoll(table)
    return row && row.rudiment ? row.rudiment : 'Unknown'
}

function getRudimentFromRoll(table) {
    if (!table || !Array.isArray(table.rows) || table.rows.length === 0) {
        return null
    }

    const roll = Math.floor(Math.random() * (table.max) + 1)
    let total = 0
    for (let i = 0; i < table.rows.length; i++) {
        total += table.rows[i].weight
        if (total >= roll) {
            return table.rows[i]
        }
    }

    return table.rows[table.rows.length - 1]
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