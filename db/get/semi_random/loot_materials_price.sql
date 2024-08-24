select * from rmaterial r 
where materialcategory = $1
	and price >= $2
	and price <= $3
order by random()
limit 1