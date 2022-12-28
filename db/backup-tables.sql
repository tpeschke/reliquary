create table ritems (
	id serial primary key,
	itemcategory text,
	item text,
	itemsubcategory text,
	price int,
	size varchar(5),
	adjectives int,
	colors int,
	engravings int,
	stitchings int,
	gems int,
	quirks int
)

create table ritemcategory (
	id serial primary key,
	itemcategory text
)

create table ritemmaterials (
	id serial primary key,
	material text,
	weight int,
	subtable text,
	label text
)

create table ritemdetails (
	id serial primary key,
	detail text,
	weight int,
	price int
)

create table rmaterial (
	id serial primary key,
	material text,
	materialcategory text,
	weight int,
	subtable text,
	multiplier int,
	price int
)