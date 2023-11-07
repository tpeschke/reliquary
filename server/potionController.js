// add param to select specific rarity

controllerFunctions = {
    getRandomPotion: (req, res) => {
        const db = req.app.get('db')
        let { rarity } = req.query

        new Promise((resolve) => {
            getPotion(db, rarity, resolve)
        }).then(potion => res.send(potion));
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

        Promise.all(promiseArray).then(finalArray => res.send(finalArray))
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
    })
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
        'Common': 100,
        'Uncommon': 200,
        'Rare': 400
    }

    const { name, effect, rarity } = potion
    const price = rarityPriceDictionary[rarity]

    return { name: toTitleCase(name), effect, rarity, price: isSalve ? price * 1.5 : price }
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