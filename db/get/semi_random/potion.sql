select *, 'potion' as type from rpotion r 
where weight = $1
order by random()
limit 1