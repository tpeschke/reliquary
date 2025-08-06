select RANDOM() * weight as random, r.* from ritemdetails r 
where category = $1
order by random desc
limit $2