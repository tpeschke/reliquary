select label, material, RANDOM() * weight as weight, subtable from ritemmaterials r 
where itemid = $1
group by label, material, weight, subtable
order by weight desc