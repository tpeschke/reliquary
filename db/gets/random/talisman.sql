select *, 'talisman' as type, concat('When you fail a ', concat(r.skill, ' Check, you may gain +5 but have this talisman break & still gain a Complication, even if you succeed. You can only apply 1 talisman / Check.')) as explanation from rtalisman r
order by random()
limit $1