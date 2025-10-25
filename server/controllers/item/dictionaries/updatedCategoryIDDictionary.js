// rarity
// common
// uncommon
// rare
// legendary - currently not supported

// material table ids
//  cloth = 1
//  fur & leather = 2
//  metal = 3
//  paper = 4
//  earth = 5
//  wood = 6
//  wax = 7

function updatedCategoryIDDictionary(category, version) {
    if (version === 2) {
        return category
    }

    const oldItemCategoryIDs = {
        // Academic Tools
        29: 1,
        // Accessories
        6: 9,
        // Adventuring Gear
        37: 2,
        // Alchemical Substances
        30: 3,
        // Armor, Light
        2: 36,
        // Armor, Medium
        3: 37,
        // Armor, Heavy
        4: 38,
        // Beverages
        14: 5,
        // Clothing, Body
        34: 8,
        // Clothing, Footwear
        35: 6,
        // Clothing, Headgear
        23: 7,
        // Entertainment
        7: 10,
        // Fabrics & Ropes
        25: 11,
        // Food, Bread
        9: 13,
        // Food, Fruit & Vegetables
        36: 14,
        // Food, Nuts
        10: 16,
        // Food, Prepped
        16: 12,
        // Food, Protein
        12: 15,
        // Food, Spices & Seasonings
        21: 17,
        // Household Items
        15: 18,
        // Illumination
        22: 19,
        // Jewelry
        24: 20,
        // Medical Tools
        33: 21,
        // Musical Instruments
        5: 22,
        // Personal Containers
        1: 23,
        // Raw Goods
        38: 23,
        // Religious Items
        26: 24,
        // Shields
        11: 25,
        // Trade Tools
        31: 26,
        // Weapons, Axes
        32: 27,
        // Weapons, Firearms
        13: 34,
        // Weapons, Mechanical Ranged
        18: 33,
        // Weapons, Polearms
        27: 28,
        // Weapons, Sidearms
        8: 29,
        // Weapons, Swords
        19: 30,
        // Weapons, Thrown
        17: 32,
        // Weapons, Trauma
        20: 31,
        // Works of Art
        28: 34
    }

    return oldItemCategoryIDs[category]
}

module.exports = {
    updatedCategoryIDDictionary
}