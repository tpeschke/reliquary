module.exports = {
    semi_random: "select *, 'enchanted' as type from renchanteditems where major = $1 order by random() limit $2",
    not_random: "select *, 'enchanted' as type from renchanteditems r where id = $1",
    search: "select *, 'enchanted' as type from renchanteditems r  where UPPER(name) like UPPER(( '%' || $1 || '%' )) or UPPER(description) like UPPER(( '%' || $1 || '%' )) or UPPER(itemcategory) like UPPER(( '%' || $1 || '%' )) or UPPER(power) like UPPER(( '%' || $1 || '%' )) or UPPER(price) like UPPER(( '%' || $1 || '%' )) or UPPER(history) like UPPER(( '%' || $1 || '%' )) limit 25"
}