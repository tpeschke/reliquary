select RANDOM() * r.weight as randomweight, r.* from ritemdetails r 
where category = 'Gem Size' and cast (detail as float) <= 2
order by randomweight desc
limit 1;