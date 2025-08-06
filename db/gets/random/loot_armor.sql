select * from ritems
where concat(itemcategory, size) = $1
order by random()
limit 1