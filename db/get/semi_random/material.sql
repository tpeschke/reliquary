select RANDOM() * r.weight as randomweight, r.* from rmaterial r
where materialcategory = $1 
	and multiplier * $2 <= $3
	and multiplier * $2 >= ($3 / 2)
	and multiplier != 0
order by randomweight desc
limit 1