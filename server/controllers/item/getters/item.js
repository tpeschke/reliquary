const { query } = require('../../../../db/index')
const { getMaterialInfo } = require('./materials')
const { getDetails } = require('./details/main')
const { getPrice} = require('./price')
const { randomIntBetweenTwoInts } = require('../../../helpers')
const { formatItem } = require('../formatting/item')

async function getItemsFromArray(items, finishedItemArray, defaults) {
    const { format, category, rarity, detail, wear } = defaults

    for (let i = 0; i < items.length && i < 25; i++) {
        const item = items[i]

        finishedItemArray.push(new Promise(resolve => {
            category ? item.category = category : null
            rarity ? item.rarity = rarity : null
            detail ? item.detail = detail : null
            wear ? item.wear = wear : null

            return getItem(resolve, format, item)
        }))
    }
}

const itemMaterialSQL = `SELECT 
*
FROM (
SELECT
    ROW_NUMBER() OVER (PARTITION BY part ORDER BY random() * weight DESC) AS row_num,
    *
FROM 
    item_material_table
where 
    itemid = $1 and tableid = $2
) AS items
WHERE 
row_num = 1;`

async function getItem(resolve, { category, rarity, detail, wear }) {
    const [item] = await query(getCategorySQL(category), [])
    const materials = await query(itemMaterialSQL, [item.id, item.tableid])

    const materialInfo = await getMaterialInfo(materials, rarity)

    const [colors, engravings, gems] = await getDetails(item, rarity, detail)

    const price = getPrice(item, materialInfo, gems)

    const rolledWear = randomIntBetweenTwoInts(0, +wear)

    resolve(formatItem(item, materialInfo, colors, engravings, gems, rolledWear, price))
}

module.exports = {
    getItemsFromArray,
    getItem
}

function getCategorySQL(category) {
    const tableDictionary = [
        null,
        'academic_tools',
        'adventuring_gear',
        'alchemical_substances',
        'armor_table',
        'beverage_table',
        'footwear_table',
        'headgear_table',
        'clothing_table',
        'accessories_table',
        'entertainment_table',
        'fabric_n_ropes_table',
        'prepped_foods_table',
        'bread_table',
        'fruits_n_veggies_table',
        'meat_table',
        'nuts_table',
        'spices_table',
        'household_items_table',
        'illumination_table',
        'jewelry_table',
        'medical_tools_table',
        'musical_instrument_table',
        'personal_containers_table',
        'raw_good_table',
        'religious_items_table',
        'shields_table',
        'trade_tools_table',
        'weapons_axes_table',
        'weapons_polearms_table',
        'weapons_sidearms_table',
        'weapons_swords_table',
        'weapons_trauma_table',
        'weapons_ranged_thrown_table',
        'weapons_ranged_mechanical_table',
        'weapons_ranged_firearm_table',
        'works_of_art_table',
        'armor_light_table',
        'armor_medium_table',
        'armor_heavy_table'
    ]

    if (!category) {
        category = randomIntBetweenTwoInts(1, tableDictionary.length - 1)
    }

    return `select * from ${tableDictionary[category]}
ORDER BY random() * weight desc
limit 1`

}