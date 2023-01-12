select RANDOM() * ( ic.total / i.price) as finalTotal, ic.*, i.* from ritems i
CROSS JOIN (SELECT RANDOM() * sum(price) as total
					FROM ritems
					CROSS JOIN (SELECT SUM(price) AS totalprice FROM ritems) t
					order by total asc
					limit 1) ic
cross join (select min(multiplier) as min, max(multiplier) as max from rmaterial m  
				where multiplier > 0) minMax		
where price * max >= $1 and price * min <= $1
order by finalTotal desc
limit 1;