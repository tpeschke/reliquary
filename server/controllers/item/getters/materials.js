const { query } = require('../../../../db/index')
const { getMaterialCategory } = require('./materialCategory')
const { getDisplayName} = require('./displayName')

async function getMaterialInfo(materials, rarity) {
    let promiseArray = []

    materials.forEach(({ materialid, material, materialtableid, part }) => {
        promiseArray.push(getMaterialSpecificInfo(materialid, material, materialtableid, part, rarity))
    })
    
    return await Promise.all(promiseArray).then(results => {
        return results.map(result => {
            return {
                ...result[0],
                category: getMaterialCategory(result[0]),
                displayName: getDisplayName(result[0])
            }
        })
    })
}

module.exports = {
    getMaterialInfo
}

async function getMaterialSpecificInfo(materialid, material, materialtableid, part, rarity) {
    const tableNameDictionary = [null, 'cloth', 'fur_n_leather', 'metal_table', 'paper_table', 'stone_table', 'wood_table', 'wax_table']
    const columnNameDictionary = [null, 'cloth', 'furleather', 'metal', 'type', 'stone', 'wood', 'wax']

    if (materialid) {
        return query(getTable(columnNameDictionary[materialid], tableNameDictionary[materialid]), [part, materialid, rarity])
    } else if (material && materialtableid) {
        return query(getSpecificMaterial(material, columnNameDictionary[materialtableid], tableNameDictionary[materialtableid]), [part, materialtableid, rarity])
    } else if (material) {
        return query(getMiscMaterial(material), [part, rarity])
    } else {
        console.log('something went wrong')
    }
}


function getTable(columnName, tableName) {
    return `select *, ${columnName} as material, $1 as part, $2 as categoryid from ${tableName}
    where rarity = $3
    ORDER BY random()
    limit 1`
}

function getSpecificMaterial(specificMaterial, columnName, tableName) {
    return `select *, ${columnName} as material, $1 as part, $2 as categoryid, $3 as rarity from ${tableName}
    where Upper(${columnName}) = '${specificMaterial.toUpperCase()}'`
}

function getMiscMaterial(specificMaterial) {
    return `select *, $1 as part, $2 as rarity from misc_item_material_table
    where Upper(material) = '${specificMaterial.toUpperCase()}'`
}