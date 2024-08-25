const dictionaries = {
    getWhichCategoryToGet: (type) => {
        return type.substring(0, 5) === 'Armor' ? 'loot_armor' : 'loot_by_category'
    },
    itemCategory: [
        null,
        'Personal Containers',
        'ArmorS',
        'ArmorM',
        'ArmorL',
        'Musical Instruments',
        'Clothing_Accessories',
        'Entertainment',
        'Weapons_Sidearms',
        'Food_Bread',
        'Food_Nuts',
        'Shields',
        'Food_Protein',
        'Weapons_Firearms',
        'Beverages',
        'Household Items',
        'Food_Prepped Food',
        'Weapons_Thrown',
        'Weapons_Mechanical Ranged',
        'Weapons_Swords',
        'Weapons_Trauma',
        'Food_Spices & Seasonings',
        'Illumination',
        'Clothing_Headgear',
        'Jewelry',
        'Fabrics & Ropes',
        'Religious Items',
        'Weapons_Polearms',
        'Works of Art',
        'Academic Tools',
        'Alchemical Substances',
        'Trade Tools',
        'Weapons_Axes',
        'Medical Tools',
        'Clothing_Body',
        'Clothing_Footwear',
        'Food_Fruit & Vegetables',
        'Adventuring Gear',
        'Raw Good'
    ],
    materialRarityMultiplier: {
        'Gem Size': {
            C: {
                min: 1,
                max: 1.5
            },
            U: {
                min: 2,
                max: 3
            },
            R: {
                min: 4,
                max: 5
            },
            L: {
                min: 5,
                max: 5
            }
        },
        'Gem Type': {
            C: {
                min: 1,
                max: 8
            },
            U: {
                min: 10,
                max: 40
            },
            R: {
                min: 40,
                max: 400
            },
            L: {
                min: 400,
                max: 3000001
            }
        },
        'Cloth': {
            C: {
                min: .1,
                max: 1
            },
            U: {
                min: 1,
                max: 3
            },
            R: {
                min: 3,
                max: 5
            },
            L: {
                min: 3,
                max: 5
            }
        },
        'Parchment': {
            C: {
                min: 1,
                max: 2
            },
            U: {
                min: 2,
                max: 4
            },
            R: {
                min: 5,
                max: 6
            },
            L: {
                min: 5,
                max: 6
            }
        },
        'Paper Product': {
            C: {
                min: .25,
                max: 1
            },
            U: {
                min: .25,
                max: 1
            },
            R: {
                min: .25,
                max: 1
            },
            L: {
                min: .25,
                max: 1
            }
        },
        'Leather': {
            C: {
                min: 1,
                max: 2
            },
            U: {
                min: 2,
                max: 3
            },
            R: {
                min: 4,
                max: 7
            },
            L: {
                min: 4,
                max: 7
            }
        },
        'Fur': {
            C: {
                min: 1,
                max: 2
            },
            U: {
                min: 2,
                max: 3
            },
            R: {
                min: 3,
                max: 6
            },
            L: {
                min: 3,
                max: 6
            }
        },
        'Vellum': {
            C: {
                min: 1,
                max: 2
            },
            U: {
                min: 4,
                max: 4
            },
            R: {
                min: 5,
                max: 6
            },
            L: {
                min: 5,
                max: 6
            }
        },
        'Wood': {
            C: {
                min: 1,
                max: 2
            },
            U: {
                min: 2,
                max: 4
            },
            R: {
                min: 4,
                max: 7
            },
            L: {
                min: 4,
                max: 7
            }
        },
        'Stone/Earthwork': {
            C: {
                min: 1,
                max: 2
            },
            U: {
                min: 2,
                max: 4
            },
            R: {
                min: 4,
                max: 5
            },
            L: {
                min: 4,
                max: 5
            }
        },
        'Metal': {
            C: {
                min: .1,
                max: 2
            },
            U: {
                min: 2,
                max: 3
            },
            R: {
                min: 4,
                max: 6
            },
            L: {
                min: 3,
                max: 5
            }
        }
    },
    detailingChance: {
        N: 0,
        L: .5,
        M: 1,
        H: 2,
        A: 5
    },
    GemSizeMultiplier: {
        '0.2': .1,
        '0.5': .25,
        '1': .5,
        '1.5': .75,
        '2': 1,
        '2.5': 2,
        '3': 5,
        '4': 10,
        '5': 20
    }
}

module.exports = dictionaries