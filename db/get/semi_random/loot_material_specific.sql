select m.*, mb.confbonus from rmaterial m
left join rmultiplierbonus mb on mb.multiplier = m.multiplier
where material = $1