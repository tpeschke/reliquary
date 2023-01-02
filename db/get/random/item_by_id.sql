select RANDOM() * i.price, i.* from ritems i
CROSS JOIN (SELECT itemcategory, RANDOM() * sum(price) as total
						FROM ritems
						CROSS JOIN (SELECT SUM(price) AS totalprice FROM ritems) t
                        where id = 2
						group by itemcategory
						order by total asc
						limit 1) ic
where i.itemcategory = ic.itemcategory
order by total asc
limit 1;