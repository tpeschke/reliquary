create table ritems (
	id serial primary key,
	itemcategory text,
	item text,
	itemsubcategory text,
	price float,
	size varchar(5),
	adjectives int,
	colors int,
	engravings int,
	stitchings int,
	gems int,
	quirks int,
	subject int
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
	price float,
	subtable text
)

create table rmaterial (
	id serial primary key,
	material text,
	materialcategory text,
	weight int,
	subtable text,
	multiplier float,
	price float
)

create table rsubject (
	id serial primary key,
	weight int,
	subject text,
	secondary_subject text,
	animal_subtype int,
	persons int,
	events int,
	colors int,
	adjectives int,
	body_parts int
)

create table rpotion (
	id serial primary key,
	weight int,
	name text,
	effect text
)

create table rxingpotion (
	id serial primary key,
	variant text,
	effect text
)

create table rtalisman (
	id serial primary key,
	skill text,
	skillsuite text
)

create table renchanteditems (
    id serial primary key,
    name  varchar(1000),
	description  varchar(1000),
	itemcategory  varchar(1000),
	power varchar(1000),
	price  varchar(1000),
	history  varchar(1000),
	major boolean,
	size varchar(1000)
)

create table rmultiplierbonus (
	id serial primary key,
	multiplier float,
	confbonus varchar(50)
)

