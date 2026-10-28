const test = require('node:test')
const assert = require('node:assert/strict')
const { scrollRequestCount } = require('./treasureRequest')
const scrollCtrl = require('./scroll/scrollController')

test('bestiary scroll requests use numberOfScrolls', () => {
    assert.equal(scrollRequestCount({ numberOfScrolls: 3, power: 12 }), 3)
})

test('direct scroll requests still use numberOfItems', () => {
    assert.equal(scrollRequestCount({ numberOfItems: 2, power: 8 }), 2)
})

test('missing or empty scroll counts are skipped', () => {
    assert.equal(scrollRequestCount({ power: 10 }), 0)
    assert.equal(scrollRequestCount({ numberOfScrolls: 0, power: 10 }), 0)
    assert.equal(scrollRequestCount(null), 0)
})

test('scroll counts are capped', () => {
    assert.equal(scrollRequestCount({ numberOfScrolls: 90, power: 10 }), 25)
})

test('generated scrolls keep the count, power, and type the Bestiary renders', async () => {
    const scrolls = await scrollCtrl.getRandomScrollsWorkhorse(2, 14)
    assert.equal(scrolls.length, 2)
    assert.equal(scrolls[0].type, 'scroll')
    assert.equal(scrolls[0].sp, 14)
    assert.equal(typeof scrolls[0].name, 'string')
    assert.equal(typeof scrolls[0].tooltip, 'string')
})
