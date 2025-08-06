select *, weight as rarity, 'potion' as type from rpotion r 
where UPPER(name) like UPPER(( '%' || $1 || '%' ))
or
UPPER(effect) like UPPER(( '%' || $1 || '%' ))
limit 25