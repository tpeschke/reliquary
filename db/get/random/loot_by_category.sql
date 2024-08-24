select * from ritems
where itemcategory = $1
order by random()
limit 1