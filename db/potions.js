module.exports = {
    search: "select *, weight as rarity, 'potion' as type from rpotion r where UPPER(name) like UPPER(( '%' || $1 || '%' ))or UPPER(effect) like UPPER(( '%' || $1 || '%' ))limit 25",
    xing_search: "select *, 'potion' as type from rxingpotion where UPPER(variant) like UPPER(( '%' || $1 || '%' )) or UPPER(effect) like UPPER(( '%' || $1 || '%' ))",
    random_xing: "select *, 'potion' as type from rxingpotion r order by random() limit 1",
    semi_random: "select *, 'potion' as type from rpotion r where weight = $1 order by random() limit 1"
}