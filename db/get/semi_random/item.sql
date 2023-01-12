select * from 
	(select RANDOM() * (ic.total / i.price) as randomprice, minMax.min * i.price as minPrice, minMax.max * i.price as maxPrice, i.* from ritems i
		CROSS JOIN (SELECT sum(price) as total
					FROM ritems
					CROSS JOIN (SELECT SUM(price) AS totalprice FROM ritems) t
					order by total asc
					limit 1) ic
		join (select min(multiplier) as min, max(multiplier) as max, itemid from rmaterial m
			join (select material, itemid from ritemmaterials group by itemid, material) im on im.material = m.materialcategory 
					where multiplier > 0
					group by itemid) 
			minMax on minMax.itemid = i.id
		where (minMax.min * i.price) <= $1 and (minMax.max * i.price) >= $1
		
	) finalTable
order by randomPrice