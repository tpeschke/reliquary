const test = require('node:test')
const assert = require('node:assert/strict')
const { detailLetter, detailMultiplier } = require('./detailLevel')

test('numeric bestiary detail maps onto the letter scale', () => {
    assert.equal(detailLetter(0), 'N')
    assert.equal(detailLetter(1), 'L')
    assert.equal(detailLetter(2), 'M')
    assert.equal(detailLetter(3), 'H')
    assert.equal(detailMultiplier(0), 0)
    assert.equal(detailMultiplier(1), 0.5)
    assert.equal(detailMultiplier(2), 1)
    assert.equal(detailMultiplier(3), 2)
})

test('null and non-finite detail do not throw and mean no detail', () => {
    assert.equal(detailLetter(null), 'N')
    assert.equal(detailLetter(undefined), 'N')
    assert.equal(detailLetter(Number.NaN), 'N')
    assert.equal(detailMultiplier(null), 0)
})

test('legacy letters and labels still resolve', () => {
    assert.equal(detailLetter('N'), 'N')
    assert.equal(detailLetter('l'), 'L')
    assert.equal(detailLetter('High'), 'H')
    assert.equal(detailLetter('Normal'), 'M')
    assert.equal(detailMultiplier('A'), 5)
})
