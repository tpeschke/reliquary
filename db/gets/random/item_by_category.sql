select RANDOM() * r.price as randomweight, r.* from ritems r 
where itemcategory = $1
order by randomweight asc 
limit 1