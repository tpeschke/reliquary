CREATE TABLE cloth (
    id SERIAL PRIMARY KEY,
    cloth TEXT NOT NULL,
    price_multiplier NUMERIC(5,2),
    bonus TEXT,
    rarity integer
);

INSERT INTO cloth (cloth, price_multiplier, bonus) VALUES
('Serge', 0.25, '+1 vs Cold & Rain'),
('Burlap', 0.25, 'Repair = 1/2 cost'),
('Canvas', 0.50, 'Repair = 1/2 cost'),
('Linen', 1.00, '+2 vs Heat'),
('Cotton', 1.00, 'None'),
('Wool', 1.00, '+1 vs Cold & Rain'),
('Calico', 1.25, '+2 vs Heat'),
('Satin', 1.25, 'Lower the Size by a third for Carry'),
('Taffeta', 1.25, 'Lower the Size by a third for Carry'),
('Cambric', 1.50, 'Repair = 1/2 cost'),
('Muslin', 1.75, '+2 vs Heat'),
('Worsted', 1.75, '+1 vs Cold & Rain'),
('Hemp', 2.00, 'Repair = 1/2 cost'),
('Fustian', 2.00, '+2 vs Heat'),
('Bokeram', 2.25, '+2 vs Heat'),
('Pintado', 2.50, '+2 vs Heat'),
('Silk', 2.50, 'Lower the Size by a third for Carry'),
('Mohair', 3.00, '+1 vs Cold & Rain'),
('Tartan', 3.00, '+1 vs Cold & Rain'),
('Cashmere', 3.00, '+1 vs Cold & Rain'),
('Damask', 3.50, 'Lower the Size by a third for Carry'),
('Merino', 3.50, '+1 vs Cold & Rain'),
('Tussah', 4.00, 'Lower the Size by a third for Carry'),
('Brocade', 4.00, 'Lower the Size by a third for Carry'),
('Samite', 4.50, 'Lower the Size by a third for Carry'),
('Velvet', 5.00, 'Lower the Size by a third for Carry');

CREATE TABLE fur_n_leather (
    id SERIAL PRIMARY KEY,
    furleather TEXT NOT NULL,
    type text,
    price_multiplier NUMERIC(5,2),
    bonus TEXT,
    rarity integer
);

INSERT INTO fur_n_leather (furleather, price_multiplier, bonus) VALUES
('Marten', 1.50, '+3 vs Heat'),
('Stoat', 2.00, '+3 vs Heat'),
('Other Animal', 2.25, '+3 vs Heat'),
('Sable', 2.50, '+3 vs Heat'),
('Beaver', 3.00, '+3 vs Heat'),
('Ermine', 3.50, '+3 vs Heat'),
('Vair', 4.00, '+3 vs Heat'),
('Monster, Common', 3.00, '+3 vs Heat'),
('Monster, Uncommon', 4.00, '+3 vs Heat'),
('Monster, Rare', 5.00, '+3 vs Heat'),
('Monster, Legendary', 6.00, '+3 vs Heat');

update fur_n_leather 
set type = 'Fur'
where type is null

INSERT INTO fur_n_leather (furleather, price_multiplier, bonus) VALUES
('Cow', 1.00, 'None'),
('Chamois', 1.50, 'Ignore the first Wear gained'),
('Cordovan', 2.00, 'Ignore the first Wear gained'),
('Snakeskin', 2.25, 'Ignore the first Wear gained'),
('Other Animal', 1.50, 'Ignore the first Wear gained'),
('Monster, Common', 2.50, 'Ignore the first Wear gained'),
('Sentient Person (See Race of Origin)', 3.00, 'Ignore the first Wear gained'),
('Monster, Uncommon', 3.00, 'Ignore the first Wear gained'),
('Monster, Rare', 4.00, 'Ignore the first Wear gained'),
('Monster, Legendary', 5.00, 'Ignore the first Wear gained');

update fur_n_leather 
set type = 'Leather'
where type is null;

CREATE TABLE metal_table (
    id SERIAL PRIMARY KEY,
    metal TEXT NOT NULL,
    price_multiplier NUMERIC(5,2),
    bonus TEXT,
    rarity integer
);

INSERT INTO metal_table (metal, price_multiplier, bonus) VALUES
('Lead', 0.50, '+5 damage vs Outsiders / +3 DR vs Outsiders'),
('Iron', 1.00, 'None'),
('Tin', 1.25, 'Ignore the first Wear gained'),
('Steel', 1.50, '+2 damage / +1 DR'),
('Copper', 1.50, 'Repair costs are halved'),
('Brass', 2.00, 'Spell Effects are +/-1 Order based on the wielder''s desire'),
('Bronze', 2.25, 'Can do twice as many Maintenance Checks on it between Wear'),
('Silver', 4.00, 'Always counted as Pure Metal'),
('Gold', 6.00, 'None');

CREATE TABLE paper_table (
    id SERIAL PRIMARY KEY,
    type TEXT NOT NULL,
    price_multiplier NUMERIC(5,3),
    rarity integer
);

INSERT INTO paper_table (type, price_multiplier) VALUES
('Paper', 1.000),
('Papyrus', 1.250),
('Cow Parchment', 0.750),
('Goat Parchment', 1.125),
('Sheep Parchment', 1.125),
('Common Animal Parchment', 1.125),
('Uncommon Animal Parchment', 2.250),
('Monster Parchment', 3.750),
('Sentient Person Parchment', 4.500),
('Cow Vellum', 0.500),
('Goat Vellum', 0.750),
('Sheep Vellum', 0.750),
('Common Animal Vellum', 0.750),
('Uncommon Animal Vellum', 1.500),
('Monster Vellum', 2.500),
('Sentient Person Vellum', 3.000);

CREATE TABLE stone_table (
    id SERIAL PRIMARY KEY,
    stone TEXT NOT NULL,
    price_multiplier NUMERIC(5,2),
    bonus text,
    rarity integer
);

INSERT INTO stone_table (stone, price_multiplier, bonus) VALUES
('Clay', 0.25, 'None'),
('Armorstone', 0.25, 'None'),
('Basalt', 0.25, 'None'),
('Limestone', 0.50, 'None'),
('Earthenware', 1.00, 'None'),
('Pottery', 1.25, 'Ignore the first Wear gained'),
('Tufa', 1.50, 'Ignore the first Wear gained'),
('Travertine', 1.50, 'Ignore the first Wear gained'),
('Wax', 1.75, 'Ignore the first Wear gained'),
('Slate', 2.00, 'Ignore the first Wear gained'),
('Granite', 2.50, 'Ignore the first Wear gained'),
('Flint', 2.50, 'Ignore the first Wear gained'),
('Alabaster', 3.00, 'Ignore the first Wear gained'),
('Sandstone', 3.00, 'Ignore the first Wear gained'),
('Quartz', 4.00, 'Ignore the first Wear gained'),
('Marble', 4.00, 'Ignore the first Wear gained'),
('Crystal', 4.00, 'Ignore the first Wear gained'),
('Glass', 5.00);

CREATE TABLE wood_table (
    id SERIAL PRIMARY KEY,
    wood TEXT NOT NULL,
    price_multiplier NUMERIC(5,2),
    bonus TEXT,
    rarity integer
);

INSERT INTO wood_table (wood, price_multiplier, bonus, conf_bonus) VALUES
('Pine', 1.00, 'None'),
('Aspen', 1.00, 'Double your breakage threshold'),
('Oak', 1.25, 'Double your breakage threshold'),
('Basswood', 1.25, 'Lower the Size by a third for Carry'),
('Hickory', 1.25, 'Double your breakage threshold'),
('Poplar', 1.25, 'Lower the Size by a third for Carry'),
('Ash', 1.25, 'Double your breakage threshold'),
('Cherry', 1.25, 'Double your breakage threshold'),
('Butternut', 1.25, 'Lower the Size by a third for Carry'),
('Beech', 1.25, 'Double your breakage threshold'),
('Ambrosia Maple', 1.25, 'Lower the Size by a third for Carry'),
('Yew', 1.50, 'Lower the Size by a third for Carry'),
('Sapele', 1.50, 'Double your breakage threshold'),
('Balsa', 1.50, 'Lower the Size by a third for Carry'),
('Mahogany', 1.50, 'Double your breakage threshold'),
('Bark Pocket Maple', 1.50, 'Double your breakage threshold'),
('Jatoba', 1.75, 'Double your breakage threshold'),
('Acacia', 1.75, 'Double your breakage threshold'),
('Cedar', 1.75, 'Lower the Size by a third for Carry'),
('Paduk', 2.00, 'Double your breakage threshold'),
('Walnut', 2.00, 'Double your breakage threshold'),
('Birch', 2.00, 'Double your breakage threshold'),
('Purpleheart', 2.25, 'Double your breakage threshold'),
('Redwood', 2.25, 'Double your breakage threshold'),
('Goncalo Alves', 2.50, 'Double your breakage threshold'),
('Chechen', 2.50, 'Double your breakage threshold'),
('Canarywood', 2.50, 'Double your breakage threshold'),
('Yellowheart', 2.50, 'Double your breakage threshold'),
('Chakte Viga', 2.50, 'Double your breakage threshold'),
('Ebiara', 2.50, 'Double your breakage threshold'),
('Lacewood', 2.75, 'Double your breakage threshold'),
('Bloodwood', 3.00, 'Double your breakage threshold'),
('Leopardwood', 3.00, 'Double your breakage threshold'),
('Granadillo', 3.00, 'Double your breakage threshold'),
('Osage Orange', 3.25, 'Double your breakage threshold'),
('Katalox', 3.50, 'Double your breakage threshold'),
('Bubinga', 3.50, 'Double your breakage threshold'),
('Wenge', 3.50, 'Double your breakage threshold'),
('Zebrawood', 3.50, 'Double your breakage threshold'),
('Mango', 3.50, 'Double your breakage threshold'),
('Redheart', 4.50, 'Double your breakage threshold'),
('Bocote', 4.75, 'Double your breakage threshold'),
('Rosewood', 4.75, 'Double your breakage threshold'),
('Holly', 5.00, 'Double your breakage threshold'),
('Olivewood', 5.00, 'Double your breakage threshold'),
('Teak', 5.00, 'Double your breakage threshold'),
('Cocobolo', 6.00, 'Double your breakage threshold'),
('Ebony', 6.00, 'Double your breakage threshold');

CREATE TABLE wax_table (
    id SERIAL PRIMARY KEY,
    wax TEXT NOT NULL,
    price_multiplier NUMERIC(5,3),
    rarity integer
);

INSERT INTO wax_table (wax, price_multiplier) VALUES
('Bee', 1.000),
('Whale Head', 1.250),
('Bayberry', 1.500),
('Carnauba', 0.500),
('Candelilla', 0.250),
('Rice Bran', 0.250),
('Soy', 0.250),
('Jojoba', 0.500);