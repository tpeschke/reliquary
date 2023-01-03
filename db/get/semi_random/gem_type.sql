select RANDOM() * r.weight as randomweight, r.* from ritemdetails r 
where category = 'Gem Type'
	and price <= $1
order by randomweight desc
limit 1