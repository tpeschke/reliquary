select * from ritemdetails r 
where category = 'Gem Type'
	and price >= $1
	and price <= $2
order by random()
limit 1