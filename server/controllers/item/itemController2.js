const { color } = require('@mui/system')
const { query } = require('../../../db')
const { sendErrorForwardNoFile, checkForContentTypeBeforeSending, getRandomInt } = require('../../helpers')

const sendErrorForward = sendErrorForwardNoFile('Items')

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

const controllerFunctions = {
    getItems: async (req, res) => {
        const { items } = req.body
        const { format, category, rarity = 1, detail = 'N', wear, number = 1 } = req.query

        let finishedItemArray = []

        for (let i = 0; i < number && i < 25; i++) {
            finishedItemArray.push(new Promise(resolve => {
                return getItem(res, resolve, { category, rarity, detail, wear })
            }))
        }

        Promise.all(finishedItemArray).then(finalItemArray => {
            checkForContentTypeBeforeSending(res, finalItemArray)
        })
    }
}

module.exports = controllerFunctions

// const itemSQL = `select * from academic_tools
// ORDER BY random() * weight desc
// limit 1`

// TODO Sealing Wax isn't properly displaying (id 12)
const itemSQL = `select * from academic_tools
where id = 12`

const itemMaterialSQL = `SELECT 
*
FROM (
SELECT
    ROW_NUMBER() OVER (PARTITION BY part ORDER BY random() * weight DESC) AS row_num,
    *
FROM 
    item_material_table
where 
    itemid = $1
) AS ranked_sales
WHERE 
row_num = 1;`

async function getItem(res, resolve, { category, rarity, detail, wear }) {
    const [item] = await query(itemSQL, [])

    const materials = await query(itemMaterialSQL, [item.id])

    let promiseArray = []

    materials.forEach(({ materialid, material, materialtableid, part }) => {
        promiseArray.push(getMaterialInfo(materialid, material, materialtableid, part, rarity))
    })

    const materialInfo = await Promise.all(promiseArray).then(results => {
        return results.map(result => result[0])
    })

    const colors = await getColors(item.colors, detail)
    const engravings = await getEngravings(item.engravings, detail)
    const gems = await getGems(item.gems, detail)

    // TODO Price

    const formattedItem = formatItem(item, materialInfo, colors, engravings, gems, wear)

    resolve(formattedItem)
}

function getTable(columnName, tableName) {
    return `select *, ${columnName} as material, $1 as part, $2 as materialid from ${tableName}
    where rarity = $3
    ORDER BY random()
    limit 1`
}

function getSpecificMaterial(specificMaterial, columnName, tableName) {
    return `select *, ${columnName} as material, $1 as part, $2 as materialid from ${tableName}
    where Upper(${columnName}) = '${specificMaterial.toUpperCase()}'`
}

// TODO also, leather, wax, some wood, some earth, and some cloth need to display the base material (ie 'bees wax' instead of 'bees')

async function getMaterialInfo(materialid, material, materialtableid, part, rarity) {
    const tableNameDictionary = [null, 'cloth', 'fur_n_leather', 'metal_table', 'paper_table', 'stone_table', 'wood_table', 'wax_table']
    const columnNameDictionary = [null, 'cloth', 'furleather', 'metal', 'type', 'stone', 'wood', 'wax']

    if (materialid) {
        return query(getTable(columnNameDictionary[materialid], tableNameDictionary[materialid]), [part, materialid, rarity])
    } else if (material && materialtableid) {
        return query(getSpecificMaterial(material, columnNameDictionary[materialtableid], tableNameDictionary[materialtableid]), [part, materialid])
    } else if (material) {
        // TODO
        // 'Porcupine Spine'
        // 'Goose Feather'
        return [
            {
                material: 'Placeholder',
                price_multiplier: 1,
                bonus: '',
                conf_bonus: '',
                rarity: 1,
                part
            }
        ]
    } else {
        console.log('something went wrong')
    }
}

const detailChanceLetterDictionary = {
    N: 0,
    L: .5,
    M: 1,
    H: 2,
    A: 5
}

function getNumberOfDetail(baseChance = 0, detail = 'N') {
    let chance = detailChanceLetterDictionary[detail.toUpperCase()] * baseChance

    let randomNumber = getRandomInt(10)
    let number = 0

    while (randomNumber <= chance) {
        number++
        randomNumber *= 2
    }

    return number
}

const colorSQL = `select * from color_table
order by random()
limit $1`

async function getColors(colorChance, detail) {
    const number = getNumberOfDetail(colorChance, detail)
    return query(colorSQL, [number])
}

const subjectSQL = `select * from engraving_table
order by random()
limit $1`
const timePeriodSQL = `select * from time_table
order by random()
limit $1`

async function getEngravings(engravingChance, detail) {
    const number = getNumberOfDetail(engravingChance, detail)

    const subjects = await query(subjectSQL, [number])
    const timePeriods = await query(timePeriodSQL, [number])

    return subjects.map((subject, index) => {
        return {
            ...subject,
            timePeriod: timePeriods[index]
        }
    })
}

const gemShapeSQL = `select * from gem_shape_table
order by random()
limit $1`
const gemSizeSQL = `select * from gem_size_table
order by random() * weight
limit $1`
const gemTypeSQL = `select * from gem_type_table
order by random() * weight
limit $1`

async function getGems(gemChance, detail) {
    const number = getNumberOfDetail(gemChance, detail)

    const sizes = await query(gemSizeSQL, [number])
    const shapes = await query(gemShapeSQL, [number])
    const types = await query(gemTypeSQL, [number])

    return types.map((type, index) => {
        return {
            ...type,
            size: sizes[index],
            shape: shapes[index]
        }
    })
}

function formatItem(item, materialInfo, colors, engravings, gems, wear) {
    let baseString = formatAccordingToType(item, materialInfo)

    if (colors.length > 0 || engravings > 0 || gems > 0) {
        baseString += ". It's "

        if (colors.length > 0) {
            baseString += formatColors(colors)
        }

        if (engravings.length > 0) {
            if (baseString !== ". It's ") { baseString += ". It's also " }
            baseString += formatEngravings(materialInfo, engravings)
        }

        if (gems.length > 0) {
            if (baseString !== ". It's ") { baseString += ". Finally, it's " }
            baseString += formatGems(gems)
        }
    }

    // TODO
    //  Wear
    //  Price

    return baseString
}

function formatAccordingToType(item, materialInfo) {
    switch (item.format) {
        case 1:
            return formatOne(item, materialInfo)
        case 2:
            return formatTwo(item, materialInfo)
        case 3:
            return formatThree(item, materialInfo)
        case 4:
            return formatFour(item, materialInfo)
        case 5:
            return formatFive(item, materialInfo)
        default:
            return ''
    }
}

function formatOne(item, materialInfo) {
    return `${aOrAn(materialInfo[0].material)} ${materialInfo[0].material} ${item.item}`
}

function formatTwo(item, materialInfo) {
    return `${aOrAn(item.collective)} ${item.collective} of ${materialInfo[0].material} ${item.item}`
}

function formatThree(item, materialInfo) {
    const baseString = `${aOrAn(item.item)} ${item.item} with`
    const materialString = materialInfo.map((material, index) => {
        if (index === materialInfo.length - 1 && index > 0) {
            return `, and ${aOrAn(material.part)} ${material.part} of ${material.material}`
        } else if (index === 0) {
            return ` ${aOrAn(material.part)} ${material.part} of ${material.material}`
        } else {
            return `, ${aOrAn(material.part)} ${material.part} of ${material.material}`
        }
    })

    return baseString + materialString
}

function formatFour(item, materialInfo) {
    const baseString = `${aOrAn(item.collective)} ${item.collective} of ${item.item} with`
    const materialString = materialInfo.map((material, index) => {
        if (index === materialInfo.length - 1 && index > 0) {
            return `, and ${aOrAn(material.part)} ${material.part} of ${material.material}`
        } else if (index === 0) {
            return ` ${aOrAn(material.part)} ${material.part} of ${material.material}`
        } else {
            return `, ${aOrAn(material.part)} ${material.part} of ${material.material}`
        }
    })

    return baseString + materialString
}

function formatFive(item, materialInfo) {
    // TODO need to display 'Wax' Here
    return `${aOrAn(item.collective)} ${item.collective} of ${materialInfo[0].material} ${item.item}`
}

function aOrAn(noun) {
    const firstLetter = noun.substring(0, 1)

    return "AEIOUaeiou".indexOf(firstLetter) != -1 ? 'An' : 'A'
}

function formatColors(colors) {
    let colorString = 'colored'

    colors.forEach((color, index) => {
        if (index === colors.length - 1 && index > 0) {
            colorString += `, and ${color.color}`
        } else if (index === 0) {
            colorString += ` ${color.color}`
        } else {
            colorString += `, ${color.color}`
        }
    })

    return colorString
}

function formatEngravings(materialInfo, engravings) {
    let engravingsString = getEngravingVerb(materialInfo)

    engravings.forEach((engravings, index) => {
        if (index === engravings.length - 1 && index > 0) {
            engravingsString += `, and ${aOrAn(engravings.engraving_theme)} ${engravings.engraving_theme} Event from ${engravings.timePeriod.time} Times`
        } else if (index === 0) {
            engravingsString += ` ${aOrAn(engravings.engraving_theme)} ${engravings.engraving_theme} Event from ${engravings.timePeriod.time} Times`
        } else {
            engravingsString += `, ${aOrAn(engravings.engraving_theme)} ${engravings.engraving_theme} Event from ${engravings.timePeriod.time} Times`
        }
    })

    return engravingsString
}

function getEngravingVerb(materialInfo) {
    const { materialid } = materialInfo[Math.floor(Math.random() * materialInfo.length)];

    switch (materialid) {
        case '1':
        case '2':
            return 'stitched with'
        case '3':
            return 'engraved with'
        case '4':
            return 'recording a'
        case '5':
            return 'engraved with'
        case '6':
            return 'carved with'
        case '7':
            return 'etched with'

    }
    return 'engraved with'
}

function formatGems(gems) {
    let gemString = 'set with'

    gems.forEach((gem, index) => {
        if (index === gems.length - 1 && index > 0) {
            gemString += `, and a ${gem.size.size} mm ${gem.shape.gem_shape}-Shaped ${gem.name}`
        } else if (index === 0) {
            gemString += ` a ${gem.size.size} mm ${gem.shape.gem_shape}-Shaped ${gem.name}`
        } else {
            gemString += `, a ${gem.size.size} mm ${gem.shape.gem_shape}-Shaped ${gem.name}`
        }
    })

    return gemString
}