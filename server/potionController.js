const { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('./helpers')
const sendErrorForward = sendErrorForwardNoFile('Potions')

const controllerFunctions = {
    getRandomPotion: (req, res) => {
        const db = req.app.get('db')
        let { rarity } = req.query

        new Promise((resolve) => {
            getPotion(db, rarity, resolve)
        }).then(potion => checkForContentTypeBeforeSending(res, potion)).catch(e => sendErrorForward('get random potion', e, res));
    },
    getRandomPotions: async (req, res) => {
        const db = req.app.get('db')
        let { numberOfItems, rarity } = req.query

        const potions = await controllerFunctions.getRandomPotionsWorkhorse(res, db, numberOfItems, rarity)     
        checkForContentTypeBeforeSending(res, potions)
    },
    getRandomPotionsWorkhorse: async (res, db, numberOfItems = 1, rarity) => {
        let promiseArray = []

        if (numberOfItems > 25) {
            numberOfItems = 25
        }
        for (let i = 0; i < +numberOfItems; i++) {
            promiseArray.push(new Promise((resolve) => {
                getPotion(db, rarity, resolve)
            }))
        }

        return Promise.all(promiseArray).catch(e => sendErrorForward('get random potions promise', e, res))
    },
    searchPotions: (req, res) => {
        const db = req.app.get('db')
        let { searchTerm } = req.query
        let promiseArray = []
        let basicPotions = []
        let xingPotions = []

        searchTerm = searchTerm.toUpperCase().replace('SALVE', 'POTION')
        searchTerm = searchTerm.toUpperCase().replace('APPLICATION', 'SWIG')

        promiseArray.push(db.get.not_random.potion_search(searchTerm).then(results => {
            basicPotions = results
            return results
        }).catch(e => sendErrorForward('search potion basic potions', e, res)))
        promiseArray.push(db.get.not_random.xing_search(searchTerm).then(results => {
            xingPotions = results.map(result => {
                return {
                    id: 76,
                    weight: 2,
                    name: result.variant + ' Potion',
                    effect: `Gain the "${result.effect}" Emotional State at Rank 2 or increase it by 2 / swig if they already have it. Targets are unaware that their mood has been Weirdingly altered after the effects wear off.`,
                    rarity: 2,
                    type: 'potion'
                }
            })
            return results
        }).catch(e => sendErrorForward('search potion xing potions', e, res)))

        Promise.all(promiseArray).then(_ => {
            if (xingPotions.length > 0) {
                basicPotions = [...basicPotions, ...xingPotions]
            }
            const finishedPotions = basicPotions.map(potion => {
                const rarityDictionary = {
                    1: 'Common',
                    2: 'Uncommon',
                    4: 'Rare'
                }
                potion.rarity = rarityDictionary[potion.rarity]
                potion.type = 'potion'
                return modifyPotion(potion, false)
            })
            checkForContentTypeBeforeSending(res, finishedPotions)
        }).catch(e => sendErrorForward('search potion all promises', e, res))
    }
}

getPotion = (db, rarity, resolve) => {
    if (!rarity) {
        rarity = rarityChance()
    } else {
        rarity = toTitleCase(rarity)
    }
    const rarityDictionary = {
        'Common': 1,
        'Uncommon': 2,
        'Rare': 4
    }

    db.get.semi_random.potion(rarityDictionary[rarity]).then(potionInArray => {
        let potion = potionInArray[0]
        potion.rarity = rarity
        potion.type = 'potion'

        if (potion.name === 'Xing Potion') {
            db.get.random.xing_potion().then(modifierInArray => {
                const modifier = modifierInArray[0]
                potion.name = potion.name.replace('Xing', modifier.variant)
                potion.effect = potion.effect.replace('X', modifier.effect)
                resolve(modifyPotionWithSalveCheck(potion))
            })
        } else {
            resolve(modifyPotionWithSalveCheck(potion))
        }
    }).catch(e => sendErrorForward('semi-random potion', e, res))
}

toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

modifyPotionWithSalveCheck = (potion) => {
    const isSalve = checkIfSalve()
    return modifyPotion(potion, isSalve)
}

modifyPotion = (potion, isSalve = false) => {
    if (isSalve) {
        potion.name = potion.name.replace('Potion', 'Salve')
        potion.effect = potion.effect.replace('swig', 'application')
    }

    const rarityPriceDictionary = {
        'Common': 50,
        'Uncommon': 100,
        'Rare': 150
    }

    const { name, effect, rarity } = potion
    const swigs = Math.floor(Math.random() * 3) + 1
    const price = rarityPriceDictionary[rarity] * swigs

    let typeTooltip = "Potions are drunk."
    let generalTooltip = "Potions with 'swigs'. Each swig lasts ~ 3 hours and effects stacks. \nSo, gulping down 3 swigs of a potion gives 3 hours where you get triple the benefits, 3 hours where you get double the benefits, and 3 hours where you get the baseline for a total of 9 hours"
    if (isSalve) {
        typeTooltip = "Salves can be applied to a person's skin to gain the effect. They can also be throw like molotov cocktails but that only applies half the applications left (rounded up)."
        generalTooltip = "Salves with 'applications'. Each application lasts ~ 3 hours and effects stacks. \nSo, applying down 3 application of a salve gives 3 hours where you get triple the benefits, 3 hours where you get double the benefits, and 3 hours where you get the baseline for a total of 9 hours"
    }

    return { name: toTitleCase(name), effect, rarity, price: isSalve ? price * 1.5 : price, swigs, isSalve, typeTooltip, generalTooltip }
}

rarityChance = () => {
    const rarityTotal = 1 + 2 + 4
    const randomSelection = Math.floor(Math.random() * rarityTotal) + 1
    if (randomSelection < 5) {
        return 'Common'
    } else if (randomSelection < 7) {
        return 'Uncommon'
    } else {
        return 'Rare'
    }
}

checkIfSalve = () => {
    return Math.floor(Math.random() * 100) + 1 > 75
}

module.exports = controllerFunctions