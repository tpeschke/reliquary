select RANDOM() * multiplier as weightedMult, RANDOM() * price as weightedPrice, r.* from rmaterial r
where materialcategory = $1
order by weightedMult desc, weightedPrice desc
limit 1;