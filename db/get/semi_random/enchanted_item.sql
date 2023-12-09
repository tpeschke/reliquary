select * from renchanteditems r
where major is $2
order by random()
limit $1