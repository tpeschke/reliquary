select *, 'potion' as type from rxingpotion
where UPPER(variant) like UPPER(( '%' || $1 || '%' ))
or
UPPER(effect) like UPPER(( '%' || $1 || '%' ))