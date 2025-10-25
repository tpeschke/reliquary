const { formatStringDescription } = require("./stringDescription")
const { getCategoryName } = require('../getters/categoryName')

function formatItem(item, materialInfo, colors, engravings, gems, rolledWear, price) {
    return {
        id: item.id,
        string: formatStringDescription(item, materialInfo, colors, engravings, gems, rolledWear, price),
        category: getCategoryName(item.tableid),
        item: item.item,
        materials: materialInfo.map(({material, category, bonus, rarity}) => {
            return {
                material,
                materialCategory: category,
                bonus,
                confBonus: (bonus && rarity - 1 > 0) ?? `+${rarity - 1} Position`
            }
        }),
        number: 1,
        size: item.size,
        price,
        engravings: engravings.map(({engraving_theme, timePeriod}) => {
            return {
                theme: engraving_theme,
                timePeriod: timePeriod.time
            }
        }),
        colors: colors.map(color => color.color),
        gems: gems.map((size, shape, name, price) => {
            return {
                size: +size.size,
                shape: shape.gem_shape,
                price: +price * gemSizeDictionary[+size.size],
                name
            }
        }),
        wear: rolledWear
    }
}

module.exports = {
    formatItem
}