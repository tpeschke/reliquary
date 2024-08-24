select * from rmaterial r 
where materialcategory = $1
	and multiplier >= $2
	and multiplier <= $3
order by random()
limit 1