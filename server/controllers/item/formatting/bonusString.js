function getBonusString(bonus, rarity) {
    const bonusBase = bonus ? ` (${bonus}` : ''

    if (bonusBase === '') { return '' }

    return rarity && rarity - 1 !== 0 ? bonusBase + ` / +${rarity - 1} Position)` : bonusBase + ')'
}

module.exports = {
    getBonusString
}