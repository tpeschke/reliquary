select RANDOM() * m.multiplier as randomweight, m.*, mb.confbonus from rmaterial m
left join rmultiplierbonus mb on mb.multiplier = m.multiplier
where materialcategory = $1 
	and m.multiplier * $2 <= $3
	and m.multiplier * $2 >= ($3 / 2)
	and m.multiplier != 0
order by randomweight desc
limit 1