CREATE TABLE cloth (
    id SERIAL PRIMARY KEY,
    cloth TEXT NOT NULL,
    price_multiplier NUMERIC(5,2),
    bonus TEXT,
    conf_bonus text,
    rarity integer
);

INSERT INTO cloth (cloth, price_multiplier, bonus, conf_bonus) VALUES
('Serge', 0.25, '+1 vs Cold & Rain', 'None'),
('Burlap', 0.25, 'Repair = 1/2 cost', 'None'),
('Canvas', 0.50, 'Repair = 1/2 cost', 'None'),
('Linen', 1.00, '+2 vs Heat', 'None'),
('Cotton', 1.00, 'None', 'None'),
('Wool', 1.00, '+1 vs Cold & Rain', 'None'),
('Calico', 1.25, '+2 vs Heat', '+1 Dice Size (+d4!)'),
('Satin', 1.25, 'Lower the Size by a third for Carry', '+1 Dice Size (+d4!)'),
('Taffeta', 1.25, 'Lower the Size by a third for Carry', '+1 Dice Size (+d4!)'),
('Cambric', 1.50, 'Repair = 1/2 cost', '+2 Dice Size (+d6!)'),
('Muslin', 1.75, '+2 vs Heat', '+3 Dice Size (+d8!)'),
('Worsted', 1.75, '+1 vs Cold & Rain', '+3 Dice Size (+d8!)'),
('Hemp', 2.00, 'Repair = 1/2 cost', '+4 Dice Size (+d10!)'),
('Fustian', 2.00, '+2 vs Heat', '+4 Dice Size (+d10!)'),
('Bokeram', 2.25, '+2 vs Heat', '+5 Dice Size (+d12!)'),
('Pintado', 2.50, '+2 vs Heat', '+6 Dice Size (+d20!)'),
('Silk', 2.50, 'Lower the Size by a third for Carry', '+6 Dice Size (+d20!)'),
('Mohair', 3.00, '+1 vs Cold & Rain', '+7 Dice Size (+d20!+d4!)'),
('Tartan', 3.00, '+1 vs Cold & Rain', '+7 Dice Size (+d20!+d4!)'),
('Cashmere', 3.00, '+1 vs Cold & Rain', '+7 Dice Size (+d20!+d4!)'),
('Damask', 3.50, 'Lower the Size by a third for Carry', '+8 Dice Size (+d20!+1d6!)'),
('Merino', 3.50, '+1 vs Cold & Rain', '+8 Dice Size (+d20!+1d6!)'),
('Tussah', 4.00, 'Lower the Size by a third for Carry', '+9 Dice Size (+d20!+1d8!)'),
('Brocade', 4.00, 'Lower the Size by a third for Carry', '+9 Dice Size (+d20!+1d8!)'),
('Samite', 4.50, 'Lower the Size by a third for Carry', '+10 Dice Size (+d20!+1d10!)'),
('Velvet', 5.00, 'Lower the Size by a third for Carry', '+11 Dice Size (+d20!+1d12!)');

CREATE TABLE fur_n_leather (
    id SERIAL PRIMARY KEY,
    furleather TEXT NOT NULL,
    type text,
    price_multiplier NUMERIC(5,2),
    bonus TEXT,
    conf_bonus TEXT,
    rarity integer
);

INSERT INTO fur_n_leather (furleather, price_multiplier, bonus, conf_bonus) VALUES
('Marten', 1.50, '+3 vs Heat', '+2 Dice Size (+d6!)'),
('Stoat', 2.00, '+3 vs Heat', '+4 Dice Size (+d10!)'),
('Other Animal', 2.25, '+3 vs Heat', '+5 Dice Size (+d12!)'),
('Sable', 2.50, '+3 vs Heat', '+6 Dice Size (+d20!)'),
('Beaver', 3.00, '+3 vs Heat', '+7 Dice Size (+d20!+d4!)'),
('Ermine', 3.50, '+3 vs Heat', '+8 Dice Size (+d20!+1d6!)'),
('Vair', 4.00, '+3 vs Heat', '+9 Dice Size (+d20!+1d8!)'),
('Monster, Common', 3.00, '+3 vs Heat', '+7 Dice Size (+d20!+d4!)'),
('Monster, Uncommon', 4.00, '+3 vs Heat', '+9 Dice Size (+d20!+1d8!)'),
('Monster, Rare', 5.00, '+3 vs Heat', '+11 Dice Size (+d20!+1d12!)'),
('Monster, Legendary', 6.00, '+3 vs Heat', '+12 Dice Size (+2d20!)');

update fur_n_leather 
set type = 'Fur'
where type is null

INSERT INTO fur_n_leather (furleather, price_multiplier, bonus, conf_bonus) VALUES
('Cow', 1.00, 'None', 'None'),
('Chamois', 1.50, 'Ignore the first Wear gained', '+2 Dice Size (+d6!)'),
('Cordovan', 2.00, 'Ignore the first Wear gained', '+4 Dice Size (+d10!)'),
('Snakeskin', 2.25, 'Ignore the first Wear gained', '+5 Dice Size (+d12!)'),
('Other Animal', 1.50, 'Ignore the first Wear gained', '+2 Dice Size (+d6!)'),
('Monster, Common', 2.50, 'Ignore the first Wear gained', '+6 Dice Size (+d20!)'),
('Sentient Person (See Race of Origin)', 3.00, 'Ignore the first Wear gained', '+7 Dice Size (+d20!+d4!)'),
('Monster, Uncommon', 3.00, 'Ignore the first Wear gained', '+7 Dice Size (+d20!+d4!)'),
('Monster, Rare', 4.00, 'Ignore the first Wear gained', '+9 Dice Size (+d20!+1d8!)'),
('Monster, Legendary', 5.00, 'Ignore the first Wear gained', '+11 Dice Size (+d20!+1d12!)');

update fur_n_leather 
set type = 'Leather'
where type is null;

CREATE TABLE metal_table (
    id SERIAL PRIMARY KEY,
    metal TEXT NOT NULL,
    price_multiplier NUMERIC(5,2),
    bonus TEXT,
    conf_bonus text,
    rarity integer
);

INSERT INTO metal_table (metal, price_multiplier, bonus, conf_bonus) VALUES
('Lead', 0.50, '+5 damage vs Outsiders / +3 DR vs Outsiders', 'None'),
('Iron', 1.00, 'None', 'None'),
('Tin', 1.25, 'Ignore the first Wear gained', '+1 Dice Size (+d4!)'),
('Steel', 1.50, '+2 damage / +1 DR', '+2 Dice Size (+d6!)'),
('Copper', 1.50, 'Repair costs are halved', '+2 Dice Size (+d6!)'),
('Brass', 2.00, 'Spell Effects are +/-1 Order based on the wielder''s desire', '+4 Dice Size (+d10!)'),
('Bronze', 2.25, 'Can do twice as many Maintenance Checks on it between Wear', '+5 Dice Size (+d12!)'),
('Silver', 4.00, 'Always counted as Pure Metal', '+9 Dice Size (+d20!+1d8!)'),
('Gold', 6.00, 'None', '+12 Dice Size (+2d20!)');

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
('Glass', 5.00, 'None');

CREATE TABLE wood_table (
    id SERIAL PRIMARY KEY,
    wood TEXT NOT NULL,
    price_multiplier NUMERIC(5,2),
    bonus TEXT,
    conf_bonus text,
    rarity integer
);

INSERT INTO wood_table (wood, price_multiplier, bonus, conf_bonus) VALUES
('Pine', 1.00, 'None', 'None'),
('Aspen', 1.00, 'Double your breakage threshold', 'None'),
('Oak', 1.25, 'Double your breakage threshold', '+1 Dice Size (+d4!)'),
('Basswood', 1.25, 'Lower the Size by a third for Carry', '+1 Dice Size (+d4!)'),
('Hickory', 1.25, 'Double your breakage threshold', '+1 Dice Size (+d4!)'),
('Poplar', 1.25, 'Lower the Size by a third for Carry', '+1 Dice Size (+d4!)'),
('Ash', 1.25, 'Double your breakage threshold', '+1 Dice Size (+d4!)'),
('Cherry', 1.25, 'Double your breakage threshold', '+1 Dice Size (+d4!)'),
('Butternut', 1.25, 'Lower the Size by a third for Carry', '+1 Dice Size (+d4!)'),
('Beech', 1.25, 'Double your breakage threshold', '+1 Dice Size (+d4!)'),
('Ambrosia Maple', 1.25, 'Lower the Size by a third for Carry', '+1 Dice Size (+d4!)'),
('Yew', 1.50, 'Lower the Size by a third for Carry', '+2 Dice Size (+d6!)'),
('Sapele', 1.50, 'Double your breakage threshold', '+2 Dice Size (+d6!)'),
('Balsa', 1.50, 'Lower the Size by a third for Carry', '+2 Dice Size (+d6!)'),
('Mahogany', 1.50, 'Double your breakage threshold', '+2 Dice Size (+d6!)'),
('Bark Pocket Maple', 1.50, 'Double your breakage threshold', '+2 Dice Size (+d6!)'),
('Jatoba', 1.75, 'Double your breakage threshold', '+3 Dice Size (+d8!)'),
('Acacia', 1.75, 'Double your breakage threshold', '+3 Dice Size (+d8!)'),
('Cedar', 1.75, 'Lower the Size by a third for Carry', '+3 Dice Size (+d8!)'),
('Paduk', 2.00, 'Double your breakage threshold', '+4 Dice Size (+d10!)'),
('Walnut', 2.00, 'Double your breakage threshold', '+4 Dice Size (+d10!)'),
('Birch', 2.00, 'Double your breakage threshold', '+4 Dice Size (+d10!)'),
('Purpleheart', 2.25, 'Double your breakage threshold', '+5 Dice Size (+d12!)'),
('Redwood', 2.25, 'Double your breakage threshold', '+5 Dice Size (+d12!)'),
('Goncalo Alves', 2.50, 'Double your breakage threshold', '+6 Dice Size (+d20!)'),
('Chechen', 2.50, 'Double your breakage threshold', '+6 Dice Size (+d20!)'),
('Canarywood', 2.50, 'Double your breakage threshold', '+6 Dice Size (+d20!)'),
('Yellowheart', 2.50, 'Double your breakage threshold', '+6 Dice Size (+d20!)'),
('Chakte Viga', 2.50, 'Double your breakage threshold', '+6 Dice Size (+d20!)'),
('Ebiara', 2.50, 'Double your breakage threshold', '+6 Dice Size (+d20!)'),
('Lacewood', 2.75, 'Double your breakage threshold', '+6 Dice Size (+d20!)'),
('Bloodwood', 3.00, 'Double your breakage threshold', '+7 Dice Size (+d20!+d4!)'),
('Leopardwood', 3.00, 'Double your breakage threshold', '+7 Dice Size (+d20!+d4!)'),
('Granadillo', 3.00, 'Double your breakage threshold', '+7 Dice Size (+d20!+d4!)'),
('Osage Orange', 3.25, 'Double your breakage threshold', '+7 Dice Size (+d20!+d4!)'),
('Katalox', 3.50, 'Double your breakage threshold', '+8 Dice Size (+d20!+1d6!)'),
('Bubinga', 3.50, 'Double your breakage threshold', '+8 Dice Size (+d20!+1d6!)'),
('Wenge', 3.50, 'Double your breakage threshold', '+8 Dice Size (+d20!+1d6!)'),
('Zebrawood', 3.50, 'Double your breakage threshold', '+8 Dice Size (+d20!+1d6!)'),
('Mango', 3.50, 'Double your breakage threshold', '+8 Dice Size (+d20!+1d6!)'),
('Redheart', 4.50, 'Double your breakage threshold', '+10 Dice Size (+d20!+1d10!)'),
('Bocote', 4.75, 'Double your breakage threshold', '+10 Dice Size (+d20!+1d10!)'),
('Rosewood', 4.75, 'Double your breakage threshold', '+10 Dice Size (+d20!+1d10!)'),
('Holly', 5.00, 'Double your breakage threshold', '+11 Dice Size (+d20!+1d12!)'),
('Olivewood', 5.00, 'Double your breakage threshold', '+11 Dice Size (+d20!+1d12!)'),
('Teak', 5.00, 'Double your breakage threshold', '+11 Dice Size (+d20!+1d12!)'),
('Cocobolo', 6.00, 'Double your breakage threshold', '+12 Dice Size (+2d20!)'),
('Ebony', 6.00, 'Double your breakage threshold', '+12 Dice Size (+2d20!)');

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