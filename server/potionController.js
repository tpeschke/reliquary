const { sendErrorForwardNoFile } = require('./helpers')
const sendErrorForward = sendErrorForwardNoFile('Potions')

controllerFunctions = {
    getRandomPotion: (req, res) => {
        const db = req.app.get('db')
        let { rarity } = req.query

        new Promise((resolve) => {
            getPotion(db, rarity, resolve)
        }).then(potion => res.send(potion)).catch(e => sendErrorForward('get random potion', e, res));
    },
    getRandomPotions: (req, res) => {
        const db = req.app.get('db')
        let { numberOfItems, rarity } = req.query
        let promiseArray = []

        if (numberOfItems > 25) {
            numberOfItems = 25
        }
        for (let i = 0; i < +numberOfItems; i++) {
            promiseArray.push(new Promise((resolve) => {
                getPotion(db, rarity, resolve)
            }))
        }

        Promise.all(promiseArray).then(finalArray => res.send(finalArray)).catch(e => sendErrorForward('get random potions promise', e, res))
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

        if (potion.name === 'Xing Potion') {
            db.get.random.xing_potion().then(modifierInArray => {
                const modifier = modifierInArray[0]
                potion.name = potion.name.replace('Xing', modifier.variant)
                potion.effect = potion.effect.replace('X', modifier.effect)
                resolve(modifyPotion(potion))
            })
        } else {
            resolve(modifyPotion(potion))
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

modifyPotion = (potion) => {
    const isSalve = checkIfSalve()
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