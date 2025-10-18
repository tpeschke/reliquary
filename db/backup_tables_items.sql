-- Table ID: 1
CREATE TABLE academic_tools (
    id SERIAL PRIMARY KEY,
    tableid INTEGER NOT NULL DEFAULT 1,
    weight INTEGER,
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number INTEGER,
    price NUMERIC,
    size CHAR(1),
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER
);

INSERT INTO academic_tools (
    tableid, weight, item, format, collective, max_number, price, size, colors, engravings, gems
) VALUES
(1, 7, 'Armillary', 1, NULL, NULL, 300, 'L', 2, 3, 4),
(1, 7, 'Astrolabe', 1, NULL, NULL, 150, 'S', 2, 3, 3),
(1, 8, 'Balance & Weights', 2, 'Set', NULL, 1, 'M', 2, 1, 1),
(1, 8, 'Book, Hollow', 3, NULL, NULL, 20, 'S', 5, 2, 1),
(1, 7, 'Hourglass', 1, NULL, NULL, 20, 'S', 2, 3, 2),
(1, 8, 'Inkwell', 1, NULL, NULL, 10, 'T', 6, 1, 2),
(1, 7, 'Magnifying Glass', 1, NULL, NULL, 100, 'T', 2, 2, 2),
(1, 8, 'Paper', 2, 'Sheet', 100, 2, 'S', 4, NULL, NULL),
(1, 8, 'Personal Seal', 1, NULL, NULL, 10, 'D', 8, 9, 3),
(1, 8, 'Quill', 1, NULL, NULL, 1, 'D', 2, NULL, NULL),
(1, 8, 'Scale, Merchant’s', 1, NULL, NULL, 20, 'M', 2, 1, 1),
(1, 8, 'Sealing', 5, 'Ounce', NULL, 1, 'D', 9, NULL, NULL),
(1, 8, 'Writing Tablet', 2, 'Pile', NULL, 1, 'S', 4, 1, 0);

-- Table ID: 2
CREATE TABLE adventuring_gear (
    id SERIAL PRIMARY KEY,
    weight INT NOT NULL,
    item TEXT NOT NULL,
    format INT,
    collective TEXT,
    max_number TEXT,
    price NUMERIC,
    size CHAR(1),
    colors INT,
    engravings INT,
    tableid integer default 2
);

INSERT INTO adventuring_gear (weight, item, format, collective, max_number, price, size, colors, engravings) VALUES
(2, 'Bedroll', 1, NULL, NULL, 1, 'M', 4, 3),
(2, 'Blade Pole', 3, NULL, NULL, 3, 'L', 1, 1),
(2, 'Blanket', 1, NULL, 4.5, 4.5, 'S', 4, 4),
(2, 'Block & Tackle', 1, NULL, NULL, 5, 'S', 1, 1),
(2, 'Rabbit Trap Cage', 1, NULL, NULL, 16, 'M', 1, 1),
(2, 'Caltrops', 2, 'Collection', 10, 0.3, 'S', 1, 1),
(2, 'Camp Bed', 1, NULL, NULL, 16, 'L', 5, 1),
(2, 'Chain', 2, 'Foot', 10, 3, 'S', 1, 1),
(2, 'Stick', 1, NULL, 20, 0.05, 'S', 7, 1),
(2, 'Climbing Harness', 1, NULL, NULL, 8, 'S', 2, 2),
(1, 'Compass', 1, NULL, NULL, 75, 'S', 1, 3),
(2, 'Crampons', 4, 'Pair', NULL, 4, 'S', 1, 1),
(2, 'Cross-Staff', 1, NULL, NULL, 15, 'L', 1, 1),
(2, 'Crowbar', 1, NULL, NULL, 1, 'M', 1, 1),
(2, 'Darksuit', 1, NULL, NULL, 25, 'S', 1, 2),
(2, 'Dowsing Rod', 1, NULL, NULL, 1, 'S', 1, 1),
(2, 'Firestarter', 3, NULL, NULL, 1, 'T', 1, 1),
(2, 'Fish Trap', 1, NULL, 0.5, 0.5, 'M', 1, 1),
(2, 'Fishhook', 1, NULL, NULL, 1, 'D', 1, 1),
(2, 'Fishing Line', 2, 'Foot', '10 + 10', 0.5, 'T', 1, 1),
(2, 'Fishing Net', 2, '25 sq ft', NULL, 3, 'L', 1, 1),
(2, 'Fishing Pole', 1, NULL, NULL, 1.2, 'M', 1, 3),
(2, 'Footpads', 1, NULL, NULL, 4, 'T', 1, 1),
(2, 'Grapnel Hook', 1, NULL, NULL, 16, 'M', 1, 1),
(2, 'Hammock', 1, NULL, NULL, 2, 'S', 4, 1),
(2, 'Hooked Pole', 1, NULL, NULL, 5, 'L', 1, 1),
(2, 'Horseshoe', 1, NULL, NULL, 0.2, 'T', 1, 2),
(2, 'Insect Netting', 1, NULL, NULL, 3, 'M', 1, 1),
(2, '10 ft Ladder', 1, NULL, NULL, 1, 'L', 1, 1),
(1, 'Lard', 2, 'Pint', NULL, 1, 'S', 1, 1),
(1, 'Listening Cone', 1, NULL, NULL, 2, 'S', 3, 1),
(2, 'Lock', 1, NULL, NULL, 100, 'T', 1, 2),
(2, 'Lock Chisel', 1, NULL, NULL, 2, 'T', 1, 1),
(2, 'Lockpicks, Set', 1, NULL, NULL, 12, 'T', 1, 2),
(2, 'Manacles', 1, NULL, NULL, 15, 'S', 1, 2),
(1, 'Marbles', 2, 'Handful', NULL, 15, 'D', 9, 3),
(2, 'Mini-blade', 1, NULL, NULL, 0.5, 'T', 1, 1),
(2, 'Mirror Pole', 3, NULL, NULL, 22, 'L', 1, 1),
(2, 'Pegleg', 1, NULL, NULL, 8, 'S', 3, 4),
(1, 'Pell', 1, NULL, NULL, 0.5, 'T', 2, 1),
(2, '10 ft Pole', 1, NULL, NULL, 2, 'L', 1, 1),
(2, 'Quintain', 1, NULL, NULL, 1, 'H', 1, 1),
(2, 'Hollow Reed', 1, NULL, NULL, 1, 'T', 1, 1),
(1, 'Sewing Needle', 1, NULL, NULL, 0.5, 'D', 1, 1),
(2, 'Sextant', 1, NULL, NULL, 500, 'S', 1, 4),
(2, 'Anti-Vampire Stake', 1, NULL, NULL, 0.25, 'T', 1, 1),
(2, '3/4” Tack', 1, NULL, NULL, 0.01, 'D', 1, 1),
(2, 'Tar Paper', 2, 'Piece', NULL, 1, 'F', 1, 1),
(2, '1-Man Tent', 1, NULL, NULL, 5, 'M', 4, 1),
(2, '2-Man Tent', 1, NULL, NULL, 12, 'L', 4, 1),
(2, 'Tinderbox', 1, NULL, NULL, 3, 'T', 1, 1),
(2, 'Whetstone', 1, NULL, NULL, 0.02, 'T', 1, 1),
(2, 'Whistle', 1, NULL, NULL, 2, 'T', 2, 3);

-- Table ID: 3
CREATE TABLE alchemical_substances (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    item TEXT NOT NULL,
    format TEXT,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size TEXT,
    colors INTEGER,
    tableid INTEGER
);

INSERT INTO alchemical_substances (weight, item, format, collective, max_number, price, size, colors, tableid) VALUES
(5, 'Metal-Eating Acid, metal-eating', '7', 'Ounce', NULL, 13.74, 'D', 3, 3),
(5, 'Alchemist’s Fire', '7', 'Pint', NULL, 124, 'S', 2, 3),
(2, 'Ambergris', '7', 'Ounce', NULL, 141, 'D', 2, 3),
(5, 'Aniseed', '7', 'Ounce', NULL, 0.21, 'D', 1, 3),
(5, 'Antitoxin', '7', 'Dose', NULL, 10, 'D', 6, 3),
(6, 'Blinding Powder', '7', 'Handful', NULL, 16, 'D', 5, 3),
(6, 'Coal', '7', 'Pound', NULL, 0.02, 'S', 1, 3),
(5, 'Disappearing Ink', '7', 'Ounce', NULL, 1, 'T', 4, 3),
(6, 'Faceblack', '7', 'Pint', NULL, 0.6, 'S', 1, 3),
(5, 'Holy Water', '7', 'Vial', NULL, 1, 'T', 1, 3),
(5, 'Oil', '2', 'Vial', NULL, NULL, 'T', 4, 3),
(5, 'Pearlash', '7', 'Pound', NULL, 4, 'S', 3, 3),
(3, 'Poison', '2', 'Dose', NULL, NULL, 'D', 9, 3),
(6, 'Potash', '7', 'Pound', NULL, 1, 'S', 3, 3),
(5, 'Pearly Shell', '7', 'Ounce', NULL, 0.03, 'T', 3, 3),
(6, 'Soap', '7', 'Ounce', NULL, 0.05, 'T', 4, 3),
(5, 'Talcum Powder', '7', 'Ounce', NULL, 1.3, 'T', 4, 3),
(5, 'Wax', '2', 'Ounce', NULL, 5, 'T', 9, 3),
(5, 'Weaponblack', '7', 'Dose', NULL, 1, 'T', 1, 3);

-- Armor ID: 4
CREATE TABLE armor_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    item TEXT NOT NULL,
    format INTEGER,
    collective TEXT,
    max_number TEXT,
    price NUMERIC,
    colors INTEGER,
    engraving_stitching INTEGER,
    gems INTEGER,
    tableid integer default 4
);

INSERT INTO armor_table 
(weight, item, format, collective, max_number, price, colors, engraving_stitching, gems)
VALUES
(65, 'Brigandine', 3, 'Suit', 'M', 650, 7, 4, 1),
(13, 'Buff Coat', 2, 'Suit', 'S', 130, 8, 2, NULL),
(39, 'Chainmail', 2, 'Suit', 'M', 390, 4, 2, 1),
(19, 'Coat of Plates', 3, 'Suit', 'M', 190, 4, 4, 1),
(9, 'Gambeson', 2, 'Suit', 'S', 90, 8, 2, NULL),
(37, 'Lamellar', 3, 'Suit', 'M', 370, 3, 4, 1),
(33, 'Banded Mail', 3, 'Suit', 'M', 335, 2, 4, 1),
(19, 'Leather', 2, 'Suit', 'S', 190, 4, 2, 1),
(212, 'Full Plate', 2, 'Suit', 'L', 2125, 2, 7, 2),
(114, 'Plated Mail', 2, 'Suit', 'L', 1140, 2, 6, 2),
(107, 'Scale', 2, 'Suit', 'L', 1075, 2, 6, 2),
(20, 'Breastplate', 3, 'Suit', 'M', 200, 4, 2, 1),
(35, 'Ringmail', 3, 'Suit', 'M', 350, 3, 4, 1),
(27, 'Splintmail', 3, 'Suit', 'M', 275, 3, 4, 1);

-- Beverages ID: 5
CREATE TABLE beverage_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC NOT NULL,
    item TEXT NOT NULL,
    format INTEGER NOT NULL,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size TEXT,
    colors INTEGER,
    tableid INTEGER
);

INSERT INTO beverage_table (weight, item, format, collective, max_number, price, size, colors, tableid)
VALUES
(2.5, 'Ale', 7, 'Gallon', NULL, 0.8, 'M', 1, 5),
(6.5, 'Almond Milk', 7, 'Pint', NULL, 1, 'S', 1, 5),
(10.5, 'Applejack', 7, 'Pint', NULL, 2, 'S', 1, 5),
(14.5, 'Barley-Broth', 7, 'Pint', NULL, 0.01, 'S', 1, 5),
(18.5, 'Beer', 7, 'Gallon', NULL, 0.8, 'M', 1, 5),
(22.5, 'Bitter Broth', 7, 'Pint', NULL, 1, 'S', 1, 5),
(26.5, 'Braggart', 7, 'Pint', NULL, 1, 'S', 1, 5),
(30.5, 'Brandy', 7, 'Gallon', NULL, 4, 'M', 1, 5),
(34.5, 'Cider, Hard', 7, 'Gallon', NULL, 3.2, 'M', 1, 5),
(38.5, 'Cider, Sweet', 7, 'Gallon', NULL, 2, 'M', 1, 5),
(42.5, 'Decoction', 7, 'Pint', NULL, 1, 'S', 1, 5),
(46.5, 'Furmore', 7, 'Pint', NULL, 1, 'S', 1, 5),
(50.5, 'Grog', 7, 'Gallon', NULL, 0.5, 'M', 1, 5),
(54.5, 'Lemon Juice', 7, 'Gallon', NULL, 4, 'M', 1, 5),
(58.5, 'Liver Squeezings', 7, 'Cup', NULL, 1, 'T', 1, 5),
(62.5, 'Mead', 7, 'Gallon', NULL, 3.8, 'M', 1, 5),
(66.5, 'Milk', 7, 'Gallon', NULL, 0.2, 'M', 1, 5),
(70.5, 'Miracle Water', 7, 'Cup', NULL, 5, 'T', 1, 5),
(74.5, 'Must', 7, 'Cup', NULL, 1, 'T', 1, 5),
(78.5, 'Posset', 7, 'Cup', NULL, 0.5, 'S', 1, 5),
(82.5, 'Rum', 7, 'Gallon', NULL, 15, 'M', 1, 5),
(86.5, 'Tea', 7, 'Cup', NULL, 4, 'T', 1, 5),
(90.5, 'Vinegar', 7, 'Gallon', NULL, 6, 'M', 1, 5),
(94.5, 'Whiskey', 7, 'Gallon', NULL, 0.4, 'M', 1, 5),
(98.5, 'Wine', 7, 'Gallon', NULL, 5.4, 'M', 1, 5);

-- Footwear ID: 6
CREATE TABLE footwear_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC NOT NULL,
    item TEXT NOT NULL,
    format INTEGER NOT NULL,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size TEXT,
    colors INTEGER,
    stitchings INTEGER,
    tableid INTEGER
);

INSERT INTO footwear_table (weight, item, format, collective, max_number, price, size, colors, stitchings, tableid)
VALUES
(1, 'Ankle Boots', 2, 'Pair', NULL, 3, 'S', 3, 2, 6),
(2.5, 'Calf Boots', 2, 'Pair', NULL, 2, 'S', 3, 2, 6),
(4, 'Climbing Boots', 4, 'Pair', NULL, 12, 'S', 1, 1, 6),
(5, 'Knee Boots', 2, 'Pair', NULL, 4, 'S', 3, 2, 6),
(6, 'Riding, Calf Boots', 2, 'Pair', NULL, 2, 'S', 4, 1, 6),
(7, 'Riding, Knee Boots', 2, 'Pair', NULL, 4, 'S', 4, 1, 6),
(8, 'Riding, Thigh Boots', 2, 'Pair', NULL, 6, 'M', 4, 2, 6),
(9, 'Thigh Boots', 2, 'Pair', NULL, 6, 'M', 4, 2, 6),
(10, 'Chopines', 4, 'Pair', NULL, 1, 'S', 3, 4, 6),
(11, 'Clogs', 2, 'Pair', NULL, 1, 'S', 2, 1, 6),
(12, 'Moccasins', 2, 'Pair', NULL, 0.05, 'S', 2, 7, 6),
(13, 'Pattens', 2, 'Pair', NULL, 0.5, 'S', 1, 1, 6),
(14, 'Sandals', 2, 'Pair', NULL, 0.4, 'S', 1, 1, 6),
(15, 'Sandshoes', 2, 'Pair', NULL, 3, 'M', 1, 1, 6),
(16, 'Dress Shoes', 2, 'Pair', NULL, 10, 'S', 9, 9, 6),
(17, 'Simple Shoes', 2, 'Pair', NULL, 2, 'S', 3, 2, 6),
(18, 'Slippers', 2, 'Pair', NULL, 0.2, 'S', 9, 4, 6),
(19, 'Snowshoes', 2, 'Pair', NULL, 3, 'M', 1, 1, 6),
(20, 'Socks', 2, 'Pair', NULL, 2, 'S', 9, 4, 6);

-- Headgear ID: 7
CREATE TABLE headgear_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    item TEXT NOT NULL,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size TEXT,
    colors INTEGER,
    engravings INTEGER,
    tableid INTEGER
);

INSERT INTO headgear_table (weight, item, format, collective, max_number, price, size, colors, engravings, tableid)
VALUES
(1,  'Bandana',              1, NULL, NULL, 0.05, 'S', 6, 2, 7),
(2,  'Barbette & Fillet',    1, NULL, NULL, 0.1,  'S', 3, 3, 7),
(3,  'Beret',                1, NULL, NULL, 5,    'S', 4, 2, 7),
(4,  'Cap',                  1, NULL, NULL, 0.1,  'S', 3, 1, 7),
(5,  'Caul',                 1, NULL, NULL, 0.05, 'S', 2, 1, 7),
(6,  'Chaperon',             1, NULL, NULL, 15,   'L', 4, 4, 7),
(7,  'Clogs',                1, NULL, NULL, 3,    'S', 9, 1, 7),
(8,  'Coif',                 1, NULL, NULL, 0.03, 'S', 1, 1, 7),
(9,  'Ferroniere',           1, NULL, NULL, 50,   'S', 1, 1, 7),
(10, 'Fez',                  1, NULL, NULL, 0.3,  'M', 1, 1, 7),
(11, 'Hat',                  1, NULL, NULL, 0.3,  'S', 1, 1, 7),
(12, 'Hat',                  1, NULL, NULL, 0.3,  'S', 1, 1, 7),
(13, 'Headdress',            3, NULL, NULL, 1,    'L', 9, 9, 7),
(14, 'Hood',                 1, NULL, NULL, 0.5,  'S', 1, 1, 7),
(15, 'Hood',                 1, NULL, NULL, 0.5,  'S', 1, 1, 7),
(16, 'Skullcap',             1, NULL, NULL, 0.05, 'S', 2, 1, 7),
(17, 'Skullcap',             1, NULL, NULL, 0.05, 'S', 2, 1, 7),
(18, 'Turban',               1, NULL, NULL, 0.2,  'L', 4, 2, 7),
(19, 'Veil',                 1, NULL, NULL, 0.3,  'S', 1, 1, 7),
(20, 'Wimple',               1, NULL, NULL, 0.5,  'S', 1, 1, 7);

-- Body Clothing ID: 8
CREATE TABLE clothing_table (
    weight NUMERIC NOT NULL, 
    item TEXT NOT NULL,
    format INT,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size CHAR(1),
    colors INT,
    engravings INT,
    gems INT,
    tableid INT NOT NULL
);

INSERT INTO clothing_table (weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid) VALUES
(2, 'Apron', 1, NULL, NULL, 0.02, 'M', 3, 1, NULL, 8),
(3, 'Belt', 1, NULL, NULL, 0.05, 'S', 2, 1, 1, 8),
(3, 'Braies', 1, NULL, NULL, 0.02, 'S', 6, 3, NULL, 8),
(3, 'Breeches', 2, 'Pair', NULL, 0.05, 'M', 6, 3, NULL, 8),
(3, 'Buckle', 1, NULL, NULL, 0.1, 'S', 4, 3, 1, 8),
(3, 'Cape', 1, NULL, NULL, 1, 'M', 6, 2, NULL, 8),
(3, 'Cassock', 1, NULL, NULL, 25, 'M', 4, 2, 1, 8),
(3, 'Chasbule', 1, NULL, NULL, 0.3, 'L', 6, 3, NULL, 8),
(3, 'Chemise', 1, NULL, NULL, 0.1, 'M', 2, 2, NULL, 8),
(3, 'Choker', 1, NULL, NULL, 0.01, 'S', 4, 3, 1, 8),
(3, 'Cloak', 1, NULL, NULL, 3, 'M', 6, 2, NULL, 8),
(3, 'Coat', 1, NULL, NULL, 10, 'M', 5, 3, NULL, 8),
(3, 'Codpiece', 1, NULL, NULL, 1, 'T', 9, 6, 1, 8),
(3, 'Cote', 1, NULL, NULL, 12, 'M', 5, 5, NULL, 8),
(3, 'Cotehardie', 1, NULL, NULL, 6, 'M', 7, 5, NULL, 8),
(3, 'Cyclas', 1, NULL, NULL, 3, 'M', 6, 5, NULL, 8),
(3, 'Doublet', 1, NULL, NULL, 3, 'M', 7, 6, 1, 8),
(3, 'Drawers', 1, NULL, NULL, 0.06, 'S', 9, 1, NULL, 8),
(3, 'Dress', 1, NULL, NULL, 3, 'L', 9, 6, 1, 8),
(3, 'Fullclothe', 1, NULL, NULL, 5, 'M', 3, 5, NULL, 8),
(3, 'Gamash', 1, NULL, NULL, 0.2, 'M', 3, 5, NULL, 8),
(3, 'Gloves', 1, NULL, NULL, 1, 'S', 4, 1, NULL, 8),
(3, 'Hosiery', 1, NULL, NULL, 4, 'S', 7, 4, NULL, 8),
(3, 'Houpeland', 1, NULL, NULL, 6, 'M', 6, 4, NULL, 8),
(3, 'Jerkin', 1, NULL, NULL, 38, 'M', 6, 7, NULL, 8),
(3, 'Kilt', 1, NULL, NULL, 18, 'S', 9, 3, NULL, 8),
(3, 'Liripipe', 1, NULL, NULL, 0.5, 'T', 5, 4, NULL, 8),
(2, 'Mittens', 2, 'Pair', NULL, 0.3, 'T', 6, 4, NULL, 8),
(2, 'Robes', 2, 'Set', NULL, 1, 'M', 7, 6, 1, 8),
(2, 'Sash', 1, NULL, NULL, 5.5, 'S', 8, 3, 1, 8),
(2, 'Scarf', 1, NULL, NULL, 5.5, 'S', 8, 4, NULL, 8),
(2, 'Shirt', 1, NULL, NULL, 1, 'S', 6, 4, NULL, 8),
(2, 'Surcote', 1, NULL, NULL, 2, 'M', 8, 7, NULL, 8),
(2, 'Sweater', 1, NULL, NULL, 12, 'M', 7, 9, NULL, 8),
(2, 'Toga', 1, NULL, NULL, 3, 'M', 2, 1, NULL, 8),
(2, 'Tunic', 1, NULL, NULL, 1, 'S', 6, 3, NULL, 8),
(2, 'Vest', 1, NULL, NULL, 9, 'S', 6, 3, NULL, 8);

-- Accessories ID: 9
CREATE TABLE accessories_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    item TEXT NOT NULL,
    format TEXT,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size TEXT,
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO accessories_table (weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid) VALUES
(1, 'Grooming Brush', '1', NULL, 1, NULL, 'T', 3, 3, 1, 9),
(1, 'Button', '1', 'Material', NULL, 0.3, 'F', 3, 1, NULL, 9),
(1, 'Comb', '1', NULL, 1, NULL, 'T', 1, 2, 1, 9),
(1, 'Dog Collar', '1', NULL, 0.8, NULL, 'T', 2, 2, 1, 9),
(1, 'Handkerchief', '1', NULL, 0.7, NULL, 'T', 3, 2, NULL, 9),
(1, 'Horse Shoe', '1', NULL, 5, NULL, 'T', NULL, 1, NULL, 9),
(1, 'Napkin', '1', NULL, 0.7, NULL, 'T', 2, 1, NULL, 9),
(1, 'Saddle', '1', NULL, 75, NULL, 'L', 1, 3, 1, 9),
(1, 'Scarf', '1', NULL, 5.5, NULL, 'S', 8, 3, NULL, 9),
(1, 'Walking Staff', '1', NULL, 2, NULL, 'S', 1, 1, 1, 9);