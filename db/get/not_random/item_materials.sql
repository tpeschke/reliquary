select label, material, RANDOM() * weight as weight, subtable, isand from ritemmaterials r 
where itemid = $1
group by label, material, weight, subtable, isand
order by weight desc