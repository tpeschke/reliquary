module.exports = {
    random_subject: "select random() * weight as randomWeight, r.* from rsubject r order by randomWeight desc limit 1",
    random_detail_by_category: "select RANDOM() * weight as random, r.* from ritemdetails r where category = $1 order by random desc limit 1",
    random_material: "select RANDOM() * r.multiplier as randomweight, r.* from rmaterial r where materialcategory = $1 order by randomweight desc limit 1",
    random_material_by_category: "select RANDOM() * multiplier as weightedMult, RANDOM() * price as weightedPrice, r.* from rmaterial r where materialcategory = $1 order by weightedMult desc, weightedPrice desc limit 1;",
    random_animal: "select detail as material from ritemdetails r where category = $1 order by random() limit 1",
    random_detail: "select RANDOM() * weight as random, r.* from ritemdetails r  where category = $1 order by random desc limit $2",
    detail_by_category: "select RANDOM() * weight as random, r.* from ritemdetails r  where category = $1 order by random desc limit 1",
    semi_random_material: "select RANDOM() * m.multiplier as randomweight, m.*, mb.confbonus from rmaterial m left join rmultiplierbonus mb on mb.multiplier = m.multiplier where materialcategory = $1  and m.multiplier * $2 <= $3 and m.multiplier * $2 >= ($3 / 2) and m.multiplier != 0 order by randomweight desc limit 1",
    semi_random_material_price: "select m.*, mb.confbonus from rmaterial m left join rmultiplierbonus mb on mb.multiplier = m.multiplier where materialcategory = $1 and price >= $2 and price <= $3 order by random() limit 1",
    semi_random_material_specific: "select m.*, mb.confbonus from rmaterial m left join rmultiplierbonus mb on mb.multiplier = m.multiplier where material = $1",
    material: "select * from rmaterial r where material = $1 and materialcategory = $2;",
    material_specific: "select m.*, mb.confbonus from rmaterial m left join rmultiplierbonus mb on mb.multiplier = m.multiplier where material = $1",
    material_item: "select label, material, RANDOM() * weight as weight, subtable, isand from ritemmaterials r  where itemid = $1 group by label, material, weight, subtable, isand order by weight desc",
    semi_random_gem_type: "select RANDOM() * r.weight as randomweight, r.* from ritemdetails r  where category = 'Gem Type' and price <= $1 order by randomweight desc limit 1",
    semi_random_gem_size: "select RANDOM() * r.weight as randomweight, r.* from ritemdetails r  where category = 'Gem Size' and cast (detail as float) <= 2 order by randomweight desc limit 1;",
    semi_random_gem_details: "select * from ritemdetails r where category = $1 and cast (detail as float) >= $2 and cast (detail as float) <= $3 order by random() limit 1",
    semi_random_gem_type_new: "select * from ritemdetails r  where category = 'Gem Type' and price >= $1 and price <= $2 order by random() limit 1"
}