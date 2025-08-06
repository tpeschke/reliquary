select *, 'enchanted' as type from renchanteditems r
order by random()
limit $1