function getCategoryName(categoryID) {
    const categoryNameDictionary = [
        null,
        'Academic Tools',
        'Adventuring Gear',
        'Alchemical Substances',
        'Armor',
        'Beverage',
        'Footwear',
        'Headgear',
        'Clothing',
        'Accessories',
        'Entertainment',
        'Fabric & Ropes',
        'Prepped Foods',
        'Bread',
        'Fruits & Veggies',
        'Meat',
        'Nuts',
        'Spices',
        'Household Items',
        'Illumination',
        'Jewelry',
        'Medical Tools',
        'Musical Instrument',
        'Personal Containers',
        'Raw Goods',
        'Religious Items',
        'Shields',
        'Trade Tools',
        'Weapon: Axes',
        'Weapon: Polearms',
        'Weapon: Sidearms',
        'Weapon: Swords',
        'Weapon: Trauma',
        'Ranged Weapon: Thrown',
        'Ranged Weapon: Mechanical',
        'Ranged Weapon: Firearms',
        'Works of Art'
    ]

    return categoryNameDictionary[categoryID]
}

module.exports = {
    getCategoryName
}