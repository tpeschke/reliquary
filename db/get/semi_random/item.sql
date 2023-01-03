select RANDOM() * i.price as total, i.* from ritems i
CROSS JOIN (SELECT RANDOM() * sum(price) as total
					FROM ritems
					CROSS JOIN (SELECT SUM(price) AS totalprice FROM ritems) t
					order by total asc
					limit 1) ic
where price >= $1 and price <= $2
order by total asc
limit 1;