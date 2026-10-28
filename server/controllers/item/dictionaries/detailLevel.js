const detailChanceLetterDictionary = require('./detailChanceLetterDictionary')

// Gear detail arrives as either the legacy letters (N/L/M/H/A) or the
// Bestiary's 0–3 scale (None, Low, Normal, High).
const LETTER_BY_KEY = {
    '0': 'N',
    N: 'N',
    NONE: 'N',
    'NO DETAIL': 'N',
    '1': 'L',
    L: 'L',
    LOW: 'L',
    'LOW DETAIL': 'L',
    '2': 'M',
    M: 'M',
    NORMAL: 'M',
    MEDIUM: 'M',
    '3': 'H',
    H: 'H',
    HIGH: 'H',
    'HIGH DETAIL': 'H',
    '4': 'A',
    '5': 'A',
    A: 'A',
    ALL: 'A'
}

function detailLetter(detail) {
    if (detail === undefined || detail === null || detail === '') {
        return 'N'
    }

    if (typeof detail === 'number') {
        if (!Number.isFinite(detail)) {
            return 'N'
        }
        const rounded = Math.max(0, Math.min(5, Math.round(detail)))
        return LETTER_BY_KEY[String(rounded)] || 'N'
    }

    const key = String(detail).trim().toUpperCase()
    if (LETTER_BY_KEY[key]) {
        return LETTER_BY_KEY[key]
    }

    const numeric = Number(key)
    if (key !== '' && Number.isFinite(numeric)) {
        return detailLetter(numeric)
    }

    return 'N'
}

function detailMultiplier(detail) {
    return detailChanceLetterDictionary[detailLetter(detail)] || 0
}

module.exports = {
    detailLetter,
    detailMultiplier
}
