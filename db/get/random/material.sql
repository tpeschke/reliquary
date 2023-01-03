select RANDOM() * r.multiplier as randomweight, r.* from rmaterial r
where materialcategory = $1
order by randomweight desc
limit 1