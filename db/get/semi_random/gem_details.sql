select * from ritemdetails r 
where category = $1
	and cast (detail as float) >= $2
	and cast (detail as float) <= $3
order by random()
limit 1