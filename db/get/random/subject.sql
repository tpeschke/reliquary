select random() * weight as randomWeight, r.* from rsubject r
order by randomWeight desc
limit 1