select detail as material from ritemdetails r
where category = $1
order by random()
limit 1