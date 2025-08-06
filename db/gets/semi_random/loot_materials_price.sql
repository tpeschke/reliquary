select m.*, mb.confbonus from rmaterial m
left join rmultiplierbonus mb on mb.multiplier = m.multiplier
where materialcategory = $1
	and price >= $2
	and price <= $3
order by random()
limit 1