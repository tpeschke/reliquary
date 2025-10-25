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
    id SERIAL PRIMARY KEY,
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

-- Entertainment ID: 10
CREATE TABLE Entertainment_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC NOT NULL,  -- chance out of 100
    item TEXT NOT NULL,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size TEXT,
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO Entertainment_table (weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid) VALUES
(5,  'Ankle Bells',        2, 'Pair',       NULL, 3,   'S', 4, 3, 2, 10),
(5,  'Bean Bags',          2, 'Set',        NULL, 3,   'D', 8, 2, NULL, 10),
(5,  'Collapsing Cane',    1, NULL,         NULL, 4,   'S', 7, 1, 6, 10),
(5,  'Cards',              2, 'Deck',       NULL, 0.5, 'T', 8, NULL, NULL, 10),
(5,  'Marked Cards',       2, 'Deck',       NULL, 1,   'T', 8, NULL, NULL, 10),
(5,  'Tarot Cards',        2, 'Deck',       NULL, 1,   'T', 9, NULL, NULL, 10),
(5,  'Chess Set',          1, NULL,         NULL, 5,   'M', 3, 2, 3, 10),
(5,  'Dice',               2, 'Pair',       NULL, 0.2, 'D', 4, NULL, 1, 10),
(5,  'Loaded Dice',        2, 'Pair',       NULL, 5,   'D', 4, NULL, 1, 10),
(5,  'Handheld Fan',       1, NULL,         NULL, 3,   'S', 9, 6, NULL, 10),
(5,  'Finger Cymbals',     2, 'Pair',       NULL, 2,   'T', 3, 3, NULL, 10),
(5,  'Hair Dye',           7, 'Dose',       NULL, 0.1, 'T', 9, NULL, NULL, 10),
(4,  'Hair Extensions',    7, 'Handful',    NULL, 0.1, 'S', 7, NULL, NULL, 10),
(4,  'Speaking Horn',      1, NULL,         NULL, 4,   'S', 4, 2, NULL, 10),
(4,  'Juggling Knife',     2, 'Set',        NULL, 14,  'S', 5, 1, 1, 10),
(4,  'Retractable Knife',  2, 'Set',        NULL, 12,  'S', 5, 2, 3, 10),
(4,  'Marionette',         1, NULL,         NULL, 7,   'S', 9, 5, 1, 10),
(5,  'Perfume',            7, 'Vial',       NULL, 15,  'T', 7, 3, 4, 10),
(5,  'Puppet',             1, NULL,         NULL, 10,  'T', 9, 3, NULL, 10),
(5,  'Tobacco',            2, 'Pinch',     10,    1,   'T', 1, NULL, NULL, 10),
(5,  'Toy Sword',          1, NULL,         NULL, 2,   'T', 3, 2, 1, 10);

-- Fabrics & Ropes ID: 11
CREATE TABLE fabric_n_ropes_table (
    id SERIAL PRIMARY KEY,
    weight INTEGER,                -- chance out of 100
    item TEXT NOT NULL,
    format INTEGER,
    collective TEXT,
    max_number INTEGER,
    price NUMERIC,
    size TEXT,
    colors INTEGER,
    engravings INTEGER,
    tableid INTEGER NOT NULL
);

INSERT INTO fabric_n_ropes_table 
(weight, item, format, collective, max_number, price, size, colors, engravings, tableid)
VALUES
(3, '3.5’ x 6’ Comforter', 3, NULL, NULL, 10, 'L', 7, 4, 11),
(4, 'Cut Fabric', 2, '1 Sq Yard', NULL, 2.6, 'S', 2, 2, 11),
(3, 'Flag', 1, 'Material', NULL, 5, 'S', 9, 3, 11),
(3, 'Thread', 2, 'Yard', 4, 0.01, 'T', 1, NULL, 11),
(3, 'Yarn', 2, 'Yard', 4, 0.01, 'T', 2, NULL, 11),
(4, 'Rope', 2, '50 ft', NULL, 13, 'M', 2, 2, 11);

-- Prepped Food ID: 12
CREATE TABLE prepped_foods_table (
    id SERIAL PRIMARY KEY,
    weight INT,               -- chance out of 100
    item TEXT,
    format INT,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size CHAR(1),
    colors INT,
    tableid INT
);

INSERT INTO prepped_foods_table (weight, item, format, collective, max_number, price, size, colors, tableid) VALUES
(2, 'Almond-Cream', 7, 'Handful', NULL, 1, 'T', 1, 12),
(3, 'Bear Fat Dumplings', 7, 'Handful', NULL, 1, 'S', 1, 12),
(2, 'Blood', 7, 'Pint', NULL, 0.02, 'T', 1, 12),
(2, 'Boe', 7, 'Handful', NULL, 1, 'T', 1, 12),
(2, 'Brie', 7, 'Handful', NULL, 1.7, 'T', 1, 12),
(2, 'Brose', 7, 'Handful', NULL, 0.5, 'T', 1, 12),
(2, 'Broth', 7, 'Pint', NULL, 0.02, 'T', 1, 12),
(2, 'Browncap', 7, 'Handful', NULL, 0.01, 'T', 1, 12),
(2, 'Butter', 7, 'Pound', NULL, 1.2, 'T', 1, 12),
(3, 'Candy', 7, 'Handful', NULL, 3, 'T', 1, 12),
(2, 'Charmeats', 7, 'Handful', NULL, 1, 'T', 1, 12),
(2, 'Cheese', 7, 'Pound', NULL, 1.2, 'T', 1, 12),
(2, 'Comfirts', 7, 'Handful', NULL, 1, 'T', 1, 12),
(2, 'Crips', 7, 'Handful', NULL, 1, 'T', 1, 12),
(2, 'Daintiers', 7, 'Handful', NULL, 2.3, 'T', 1, 12),
(2, 'Egg', 7, 'Half Dozen', NULL, 0.05, 'F', 1, 12),
(3, 'Fish Flay', 7, 'Handful', NULL, 1, 'T', 1, 12),
(3, 'Forcemeat', 7, 'Pound', NULL, 1, 'T', 1, 12),
(2, 'Fry', 7, 'Pint', NULL, 1, 'T', 1, 12),
(2, 'Galainte', 7, 'Handful', NULL, 1, 'T', 1, 12),
(2, 'Giblets', 2, 'Pound', NULL, 1, 'T', 1, 12),
(2, 'Gut Warmer', 7, 'Pint', NULL, 0.75, 'T', 1, 12),
(2, 'Handpie', 7, 'Handful', NULL, 1.2, 'T', 1, 12),
(2, 'Hot Water Pastries', 7, 'Handful', NULL, 1.6, 'T', 1, 12),
(2, 'Lard', 7, 'Pint', NULL, 1, 'S', 1, 12),
(2, 'Livers', 7, 'Handful', NULL, 0.02, 'T', 1, 12),
(2, 'Muggets', 2, 'Handful', NULL, 1, 'T', 1, 12),
(2, 'Musted Sauce', 7, 'Bowl', NULL, 0.4, 'T', 1, 12),
(3, 'Nice Drippings', 7, 'Pint', NULL, 0.01, 'T', 1, 12),
(2, 'Numbles', 7, 'Handful', NULL, 0.03, 'T', 1, 12),
(2, 'Pap', 7, 'Handful', NULL, 0.3, 'T', 1, 12),
(2, 'Pasta', 7, 'Handful', NULL, 0.02, 'T', 1, 12),
(2, 'Pie', 7, 'Handful', NULL, 1.3, 'T', 1, 12),
(2, 'Pottage', 7, 'Handful', NULL, 0.3, 'T', 1, 12),
(3, 'Preserves', 2, 'Pint', NULL, 1.3, 'T', 1, 12),
(2, 'Pynepaste', 7, 'Pound', NULL, 0.1, 'T', 1, 12),
(2, 'Quenelle', 7, 'Pound', NULL, 1, 'T', 1, 12),
(2, 'Quoses', 7, 'Pound', NULL, 1, 'T', 1, 12),
(2, 'Roe', 7, 'Pound', NULL, 2, 'T', 1, 12),
(2, 'Blood Sausage', 7, 'Link', NULL, 0.01, 'T', 1, 12),
(2, 'Pepper Sausage', 7, 'Link', NULL, 0.03, 'T', 1, 12),
(2, 'Sailor’s Sausage', 7, 'Link', NULL, 0.01, 'T', 1, 12),
(2, 'Scratch-Root Stew', 7, 'Bowl', NULL, 0.3, 'T', 1, 12),
(2, 'Soorea', 7, 'Pint', NULL, 1, 'T', 1, 12),
(2, 'Souse', 7, 'Pint', NULL, 1.6, 'T', 1, 12),
(2, 'Syrup', 7, 'Pint', NULL, 0.1, 'T', 1, 12);

-- Bread ID: 13
CREATE TABLE bread_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC(5,2),
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC(6,2),
    price NUMERIC(6,2),
    size CHAR(1),
    colors INTEGER,
    tableid INTEGER
);

INSERT INTO bread_table (weight, item, format, collective, max_number, price, size, colors, tableid) VALUES
(2.00, 'Corn Dodgers', 7, 'Meal', NULL, 0.3, 'T', 1, 13),
(2.00, 'Fry Bread', 7, 'Loaf', NULL, 0.4, 'T', 1, 13),
(2.00, 'Horse Bread', 7, 'Loaf', NULL, 0.38, 'T', 1, 13),
(1.00, 'Manchet Bread', 7, 'Loaf', NULL, 1.3, 'T', 1, 13),
(1.00, 'Maslin Bread', 7, 'Loaf', NULL, 0.48, 'T', 1, 13),
(1.00, 'Pan & Egg Bread', 7, 'Meal', NULL, 1, 'T', 1, 13),
(1.00, 'Sop Bread', 7, 'Loaf', NULL, 0.86, 'T', 1, 13),
(2.00, 'Strongbread', 7, 'Loaf', NULL, 0.3, 'T', 1, 13),
(1.00, 'Wastel Bread', 7, 'Loaf', NULL, 1, 'T', 1, 13),
(3.00, 'Rations', 7, 'Day', NULL, 2.5, 'T', 1, 13),
(2.00, 'Hardtack', 7, 'Biscuit', NULL, 0.2, 'T', 1, 13),
(1.00, 'Rye Bread', 7, 'Loaf', NULL, 0.44, 'T', 1, 13),
(1.00, 'Wheat Bread', 7, 'Loaf', NULL, 0.5, 'T', 1, 13);

-- Fruits & Veggies ID: 14
CREATE TABLE fruits_n_veggies_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC(5,2),
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size CHAR(1),
    colors INTEGER,
    tableid INTEGER
);

INSERT INTO fruits_n_veggies_table (weight, item, format, collective, max_number, price, size, colors, tableid) VALUES
(3, 'Barberries', 7, 'Handful', NULL, 1.5, 'M', 1, 14),
(3, 'Bush Tomatoes', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Canabens', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Beets', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Cardoons', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Carrots', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Celozia', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Currants', 7, 'Handful', NULL, 1.5, 'M', 1, 14),
(3, 'Flattops', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Lemon', 7, 'Handful', NULL, 2, 'M', 1, 14),
(3, 'Liakeer', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Limes', 7, 'Handful', NULL, 2, 'M', 1, 14),
(3, 'Meat Grass', 7, 'Handful', NULL, 1.5, 'M', 1, 14),
(3, 'Mutries', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Onions', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Orange', 7, 'Handful', NULL, 2, 'M', 1, 14),
(3, 'Pippins', 7, 'Handful', NULL, 2, 'M', 1, 14),
(3, 'Pomace', 7, 'Handful', NULL, 1.5, 'M', 1, 14),
(3, 'Quadong', 7, 'Handful', NULL, 1.5, 'M', 1, 14),
(3, 'Quinces', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Raisins', 7, 'Handful', NULL, 1.5, 'M', 1, 14),
(3, 'Roundberries', 7, 'Handful', NULL, 1.5, 'M', 1, 14),
(3, 'Rozele', 7, 'Handful', NULL, 2, 'M', 1, 14),
(3, 'Salad', 7, 'Plate', NULL, 1, 'M', 1, 14),
(3, 'Smalledge', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Skyrwits', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Spinach', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Taola', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Wardons', 7, 'Handful', NULL, 1, 'M', 1, 14),
(3, 'Warrigals', 7, 'Handful', NULL, 1, 'M', 1, 14),
(2, 'Wortes', 7, 'Handful', NULL, 1, 'M', 1, 14),
(2, 'Jam', 7, 'Cup', NULL, 3, 'M', 1, 14),
(2, 'Pickles', 7, 'Handful', NULL, 2, 'M', 1, 14),
(2, 'Raisins', 7, 'Handful', NULL, 1.5, 'M', 1, 14),
(2, 'Tobacco Seed', 7, 'Handful', NULL, 3, 'M', 1, 14);

-- Meat ID: 15
CREATE TABLE meat_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC(5,2),
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size CHAR(1),
    colors INTEGER,
    tableid INTEGER
);

INSERT INTO meat_table (weight, item, format, collective, max_number, price, size, colors, tableid) VALUES
(2, 'Meat', 7, 'Pound', NULL, 20, 'T', 1, 15),
(2, 'Fish', 7, 'Pound', NULL, 10, 'T', 1, 15),
(2, 'Fowl', 7, 'Pound', NULL, 30, 'T', 1, 15);

-- Nut ID: 16
CREATE TABLE nuts_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC(5,2),
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size CHAR(1),
    colors INTEGER,
    tableid INTEGER
);

INSERT INTO nuts_table (weight, item, format, collective, max_number, price, size, colors, tableid) VALUES
(1, 'Acorns', 7, 'Handful', NULL, 0.3, 'M', 1, 16),
(1, 'Almonds', 7, 'Handful', NULL, 0.5, 'M', 1, 16),
(1, 'Chestnuts', 7, 'Handful', NULL, 0.3, 'M', 1, 16),
(1, 'Hazelnuts', 7, 'Handful', NULL, 0.3, 'M', 1, 16),
(1, 'Pinenuts', 7, 'Handful', NULL, 0.3, 'M', 1, 16),
(1, 'Pistachios', 7, 'Handful', NULL, 0.5, 'M', 1, 16),
(1, 'Sesame Seeds', 7, 'Handful', NULL, 0.5, 'M', 1, 16),
(1, 'Walnuts', 7, 'Handful', NULL, 0.5, 'M', 1, 16);

-- Spices ID: 17
CREATE TABLE spices_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price TEXT,
    size CHAR(1),
    colors INTEGER,
    tableid INTEGER
);

INSERT INTO spices_table (weight, item, format, collective, max_number, price, size, colors, tableid) VALUES
(2, 'Honey', 7, 'Ounce', NULL, '1', 'D', 1, 17),
(1, 'Sugar', 7, 'Ounce', NULL, '1', 'M', 1, 17),
(1, 'Cinnamon', 7, 'Ounce', NULL, '4', 'M', 1, 17),
(1, 'Ginger', 7, 'Ounce', NULL, '1.5', 'M', 1, 17),
(1, 'Mace', 7, 'Ounce', NULL, '5', 'M', 1, 17),
(1, 'Molasses', 7, 'Ounce', NULL, '4', 'M', 1, 17),
(1, 'Mustard', 7, 'Ounce', NULL, '1', 'M', 1, 17),
(1, 'Nutmeg', 7, 'Ounce', NULL, '2.5', 'M', 1, 17),
(1, 'Pectin', 7, 'Ounce', NULL, '0.2', 'D', 1, 17),
(1, 'Salt', 7, 'Ounce', NULL, '0.45', 'M', 1, 17),
(1, 'Saffron', 7, 'Ounce', NULL, '160', 'M', 1, 17);

-- Household Items ID: 18
CREATE TABLE household_items_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,        -- chance out of 100
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size CHAR(1),
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER,
    material TEXT
);

INSERT INTO household_items_table (weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid, material) VALUES
(3, 'Sheet', 1, NULL, NULL, 0.5, 'L', 3, 2, NULL, 18, 'Cloth'),
(3, 'Curtain', 1, NULL, NULL, 5, 'H', 4, 3, NULL, 18, '1-8 Cloth; 9-10 Leather'),
(3, 'Blanket', 1, NULL, NULL, 5, 'H', 2, 1, NULL, 18, 'Fur'),
(3, '1-person Bench', 1, NULL, NULL, 10, 'H', 1, 1, NULL, 18, '1-9 Wood; 10 Metal'),
(3, 'Carpet', 1, NULL, NULL, 6, 'G', 5, 2, NULL, 18, '1-3 Cloth; 4-10 Wool'),
(3, 'Chair', 1, NULL, NULL, 35, 'H', 1, 1, NULL, 18, '1-9 Wood; 10 Metal'),
(3, 'Chandelier', 1, NULL, NULL, 20, 'G', 1, 4, 2, 18, 'Metal'),
(3, 'Seat Cushion', 1, NULL, NULL, 2, 'M', 4, 3, NULL, 18, '1-8 Cloth; 9-10 Leather'),
(3, 'Stool', 1, NULL, NULL, 30, 'L', 1, 1, NULL, 18, '1-9 Wood; 10 Metal'),
(3, 'Tapestry', 1, NULL, NULL, 20, 'G', 9, 9, NULL, 18, '1-8 Wool; 9 Leather; 10 Cloth'),
(3, 'Cloth', 2, 'Bolt', NULL, 11, 'L', 6, 1, NULL, 18, 'Cloth'),
(3, 'Cauldron', 1, NULL, NULL, 12, 'H', 1, 1, 1, 18, 'Metal'),
(2, 'Pastry Coffin', 1, NULL, NULL, 0.5, 'S', 2, 2, 1, 18, '1-7 Wood; 8-10 Metal'),
(2, 'Galley-pot', 1, NULL, NULL, 1, 'S', 1, 1, NULL, 18, 'Metal'),
(2, 'Larding Needle', 1, NULL, NULL, 0.05, 'S', 1, 1, NULL, 18, '1-3 Metal; 4-6 Wood; 7 Bone, Sentient; 8-9 Bone, Animal; 10 Bone, Monster'),
(2, 'Pipkin', 1, NULL, NULL, 0.02, 'L', 2, 1, NULL, 18, 'Stone/Earthwork'),
(2, 'Porringers', 1, NULL, NULL, 2, 'S', 2, 1, NULL, 18, '1-8 Metal; 9-10 Stone/Earthwork'),
(2, 'Querne', 1, NULL, NULL, 16, 'M', 2, 1, NULL, 18, '1-8 Stone/Earthwork; 9-10 Wood'),
(2, 'Rowel', 1, NULL, NULL, 0.4, 'S', 2, 1, NULL, 18, 'Metal'),
(2, 'Salamander Plate', 1, NULL, NULL, 2, 'M', 2, 2, NULL, 18, 'Stone/Earthwork'),
(2, 'Trencher', 1, NULL, NULL, 0.1, 'S', 2, 1, NULL, 18, 'Wood'),
(2, 'Tripod', 1, NULL, NULL, 0.5, 'L', 1, 1, NULL, 18, 'Metal'),
(2, 'Bowl', 1, NULL, NULL, 0.6, 'S', 4, 3, 1, 18, '1-6 Wood; 7-10 Metal'),
(2, 'Drinking Horn', 8, NULL, NULL, 1, 'S', 2, 2, 1, 18, 'n/a'),
(2, 'Fork', 1, NULL, NULL, 0.4, 'T', 1, 1, NULL, 18, 'Metal'),
(2, 'Goblet', 1, NULL, NULL, 0.5, 'T', 2, 3, 1, 18, '1-3 Glass; 4 Crystal; 6-10 Metal'),
(2, 'Kettle', 1, NULL, NULL, 3, 'S', 1, 2, NULL, 18, 'Metal'),
(2, 'Knife', 1, NULL, NULL, 2.5, 'T', 1, 1, NULL, 18, 'Metal'),
(2, 'Ladle', 1, NULL, NULL, 0.01, 'T', 1, 1, NULL, 18, '1-7 Wood; 8-10 Metal'),
(2, 'Mug', 1, NULL, NULL, 0.1, 'T', 4, 3, 1, 18, '1-4 Wood; 5-6 Metal; 7-10 Stone/Earthwork'),
(2, 'Pan', 1, NULL, NULL, 1, 'T', 1, 2, NULL, 18, 'Metal'),
(2, 'Pitcher', 1, NULL, NULL, 0.5, 'T', 2, 2, 1, 18, 'Metal'),
(2, 'Platter', 1, NULL, NULL, 1.25, 'T', 4, 2, NULL, 18, '1-7 Wood; 8-10 Metal'),
(2, 'Pot hanger', 1, NULL, NULL, 0.08, 'D', 1, 1, NULL, 18, 'Metal'),
(2, 'Salt Cellar', 1, NULL, NULL, 0.3, 'D', 3, 2, 1, 18, '1-8 Metal; 9-10 Wood'),
(2, 'Small Spit', 1, NULL, NULL, 0.3, 'S', 1, 1, NULL, 18, 'Metal'),
(2, 'Spoon', 1, NULL, NULL, 0.3, 'T', 1, 1, NULL, 18, '1-7 Metal; 8-10 Wood'),
(2, 'Drinking Glass', 1, NULL, NULL, NULL, 'D', 4, 2, NULL, 18, 'Glass'),
(3, 'Pillow', 1, NULL, NULL, 4, 'S', 4, 3, NULL, 18, '1-8 Cloth; 9-10 Leather'),
(3, 'Woven Rug', 1, NULL, NULL, 10, 'L', 8, 5, NULL, 18, '1-3 Cloth; 4-5 Leather; 6-10 Wool'),
(3, 'Stein', 1, NULL, NULL, 2, 'T', 1, 4, 1, 18, 'Metal');

-- Illumination Items ID: 19
CREATE TABLE illumination_table (
    id SERIAL PRIMARY KEY,
    weight INT NOT NULL,          -- Chance out of 100
    item TEXT NOT NULL,           -- Item name
    format INT,                   -- Format ID
    collective TEXT,              -- Collective (if any)
    max_number NUMERIC,           -- Maximum number
    price NUMERIC,                -- Price value
    size CHAR(1),                 -- Size category
    colors INT,                   -- Number of colors
    engravings INT,               -- Number of engravings
    gems INT,                     -- Number of gems
    tableid INT NOT NULL          -- Reference table ID
);

INSERT INTO illumination_table 
(weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid)
VALUES
(1, 'Candelabra', 1, NULL, NULL, 1, 'H', 2, 3, 1, 19),
(1, 'Candle', 1, NULL, NULL, 0.05, 'T', 4, 1, NULL, 19),
(1, 'Timekeeping Candle', 1, NULL, NULL, 3, 'S', 3, NULL, NULL, 19),
(1, 'Candlestick', 1, NULL, NULL, 0.5, 'D', 2, 2, 1, 19),
(1, 'Lamp', 1, NULL, NULL, 3, 'S', 1, 2, 1, 19),
(1, 'Beacon Lantern', 1, NULL, NULL, 5, 'S', 1, 2, 1, 19),
(1, 'Bullseye Lantern', 3, NULL, NULL, 7, 'S', 1, 1, NULL, 19),
(1, 'Hooded Lantern', 1, NULL, NULL, 9, 'S', 1, 1, NULL, 19),
(1, 'Storm Lantern', 1, NULL, NULL, 2, 'S', 1, 2, NULL, 19),
(1, 'Torch', 1, NULL, NULL, 0.04, 'S', 1, NULL, NULL, 19);

-- Illumination Items ID: 20
CREATE TABLE jewelry_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,              -- Chance out of 100
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size CHAR(1),
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO jewelry_table (weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid)
VALUES
(10, 'Ring', 1, NULL, NULL, 5, 'D', 2, 3, 4, 20),
(5, 'Necklace', 1, NULL, NULL, 1, 'D', 2, 1, 3, 20),
(5, 'Teeth', 2, 'Set', NULL, 1, 'D', 3, 5, 1, 20),
(5, 'Earings', 2, 'Set', NULL, 0.5, 'F', 2, 2, 4, 20),
(5, 'Pendant', 1, NULL, NULL, 1, 'F', 2, 2, 4, 20),
(5, 'Bangle', 1, NULL, NULL, 1, 'F', 3, 2, 2, 20),
(5, 'Belly Chain', 1, NULL, NULL, 1, 'F', 3, 1, 2, 20),
(5, 'Chatelaine', 1, NULL, NULL, 10, 'D', 4, 2, 2, 20),
(5, 'Pin', 1, NULL, NULL, 1, 'F', 2, 2, 4, 20),
(5, 'Torc', 1, NULL, NULL, 1, 'D', 2, 4, 3, 20),
(5, 'Bracelet', 1, NULL, NULL, 1, 'F', 5, 4, 2, 20),
(5, 'Choker', 1, NULL, NULL, 0.5, 'F', 5, 2, 1, 20),
(5, 'Anklet', 1, NULL, NULL, 0.5, 'F', 3, 3, 2, 20),
(5, 'Armlet', 1, NULL, NULL, 1, 'F', 4, 3, 3, 20),
(5, 'Slave Bracelet', 1, NULL, NULL, 1, 'F', 4, 1, 2, 20),
(5, 'Prayer Beads', 1, NULL, NULL, 0.5, 'D', 1, 1, 1, 20),
(5, 'Brooch', 1, NULL, NULL, 1, 'D', 2, 4, 4, 20),
(5, 'Locket', 1, NULL, NULL, 1, 'D', 2, 2, 4, 20),
(5, 'Crown', 1, NULL, NULL, 20, 'S', 3, 4, 5, 20),
(5, 'Tiara', 1, NULL, NULL, 20, 'S', 3, 4, 5, 20),
(5, 'Bracer', 1, NULL, NULL, 1, 'F', 4, 3, 3, 20);

-- Medical Tools ID: 21
CREATE TABLE medical_tools_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size CHAR(1),
    colors INTEGER,
    engravings INTEGER,
    tableid INTEGER
);

INSERT INTO medical_tools_table (weight, item, format, collective, max_number, price, size, colors, engravings, tableid)
VALUES
(4, 'Bandages', 1, NULL, NULL, 0.01, 'S', 2, 1, 21),
(1, 'Bleeding Basin', 1, NULL, NULL, 1, 'S', 2, 2, 21),
(2, 'Crutches', 1, NULL, NULL, 0.3, 'S', 2, 3, 21),
(1, 'Eyeglasses', 1, NULL, NULL, 100, 'T', 1, 3, 21),
(1, 'Probe', 1, NULL, NULL, 0.4, 'T', 1, NULL, 21),
(1, 'Scalpel', 1, NULL, NULL, 15, 'T', 1, NULL, 21),
(1, 'Lancet', 1, NULL, NULL, 1, 'T', 1, NULL, 21),
(1, 'Litter', 1, NULL, NULL, 3, 'T', 1, NULL, 21),
(1, 'Sutures', 1, NULL, NULL, 1, 'T', 1, NULL, 21),
(2, 'Pegleg', 1, NULL, NULL, 8, 'S', 2, 3, 21),
(1, 'Amputation Saw', 1, NULL, NULL, 15, 'S', 1, NULL, 21),
(1, 'Stretcher', 3, NULL, NULL, 3, 'T', 3, 1, 21),
(1, 'Tooth Wrench', 1, NULL, NULL, 2, 'T', 1, NULL, 21),
(1, 'Arrow Extractor', 1, NULL, NULL, 4, 'S', 1, NULL, 21),
(1, 'Arm Sling', 1, NULL, NULL, 0.01, 'T', 3, 1, 21);

-- Musical Instruments ID: 22
CREATE TABLE musical_instrument_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    item TEXT,
    format INT,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size TEXT,
    colors INT,
    engravings INT,
    gems INT,
    tableid INT
);

INSERT INTO musical_instrument_table
(weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid)
VALUES
(1, 'Adufe', 1, NULL, 5.3, NULL, 'S', 1, 1, 1, 22),
(1, 'Bagpipes', 3, NULL, 94.9, NULL, 'M', 3, 2, NULL, 22),
(1, 'Bladder Pipe', 3, NULL, 35, NULL, 'S', 2, 1, NULL, 22),
(1, 'Citole', 1, NULL, 50, NULL, 'M', 1, 1, NULL, 22),
(1, 'Crumhorn', 1, NULL, 25, NULL, 'S', 1, 1, NULL, 22),
(1, 'Dulcimer', 1, NULL, 70, NULL, 'L', 1, 1, 1, 22),
(1, 'Fiddle', 1, NULL, 80, NULL, 'M', 1, 1, 1, 22),
(1, 'Frame Drum', 3, NULL, 3, NULL, 'S', 1, 1, NULL, 22),
(1, 'Gittern', 1, NULL, 75, NULL, 'S', 1, 1, NULL, 22),
(1, 'Glockenspiel', 3, NULL, 7, NULL, 'L', 1, 2, 1, 22),
(1, 'Guitarra', 1, NULL, 35, NULL, 'M', 1, 2, NULL, 22),
(1, 'Harp', 1, NULL, 40, NULL, 'M', 1, 3, 2, 22),
(1, 'Hurdy-Gurdy', 3, NULL, 100, NULL, 'L', 1, 2, NULL, 22),
(1, 'Lute', 1, NULL, 95, NULL, 'M', 1, 2, NULL, 22),
(1, 'Mandolin', 1, NULL, 60, NULL, 'M', 1, 2, NULL, 22),
(1, 'Naqareh', 3, NULL, 18.7, NULL, 'S', 1, 2, NULL, 22),
(1, 'Oud', 1, NULL, 42.5, NULL, 'L', 1, 1, NULL, 22),
(1, 'Psalterium', 1, NULL, 200, NULL, 'L', 1, 3, 3, 22),
(1, 'Rebec', 1, NULL, 42.5, NULL, 'M', 1, 1, NULL, 22),
(1, 'Recorder', 1, NULL, 5, NULL, 'S', 1, 1, NULL, 22),
(1, 'Sackbut', 1, NULL, 41.5, NULL, 'M', 1, 1, NULL, 22),
(1, 'Shawm', 1, NULL, 34.5, NULL, 'L', 1, 1, NULL, 22),
(1, 'String Drum', 1, NULL, 27, NULL, 'M', 2, 1, NULL, 22),
(1, 'Tabor Drum', 3, NULL, 6.5, NULL, 'M', 2, 1, NULL, 22),
(1, 'Tabor Pipe', 1, NULL, 26.5, NULL, 'S', 1, 1, NULL, 22),
(1, 'Timbrel', 3, NULL, 5.5, NULL, 'S', 1, 1, NULL, 22),
(1, 'Viol', 1, NULL, 100, NULL, 'M', 1, 1, NULL, 22),
(1, 'Zampogna', 3, NULL, 75, NULL, 'L', 2, 1, NULL, 22),
(1, 'Hunting Horn', 1, NULL, 25, NULL, 'S', 1, 1, NULL, 22);

-- Personal Containers ID: 23
CREATE TABLE personal_containers_table (
    id SERIAL PRIMARY KEY,
    weight INTEGER,
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price TEXT,
    size TEXT,
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO personal_containers_table
(weight, item, format, collective, price, size, colors, engravings, gems, tableid)
VALUES
(2, 'Amphora', 1, NULL, null, 'L', 7, 1, NULL, 23),
(2, 'Backpack', 9, 'Large', NULL, 'S', 3, 1, NULL, 23),
(2, 'Backpack', 9, 'Medium', NULL, 'S', 3, 1, NULL, 23),
(2, 'Backpack', 9, 'Small', NULL, 'S', 3, 1, NULL, 23),
(2, 'Bag', 9, 'Medium', NULL, 'S', 3, 1, NULL, 23),
(2, 'Bag', 9, 'Small', NULL, 'S', 3, 1, NULL, 23),
(2, 'Bandoleer', 1, NULL, NULL, 'T', 1, 2, NULL, 23),
(2, 'Barrel', 9, '12 Gal.', NULL, 'S', 1, 1, NULL, 23),
(2, 'Basket', 9, 'Medium', NULL, 'S', 1, NULL, NULL, 23),
(2, 'Basket', 9, 'Small', NULL, 'S', 1, NULL, NULL, 23),
(2, 'Beaker', 1, NULL, NULL, 'D', 1, NULL, NULL, 23),
(2, 'Bottle', 1, NULL, NULL, 'T', 2, 1, NULL, 23),
(2, 'Box', 9, 'Medium', NULL, 'S', 3, 1, NULL, 23),
(2, 'Box', 9, 'Small', NULL, 'S', 3, 1, NULL, 23),
(2, 'Bucket', 9, '1 Gal.', NULL, 'S', 1, NULL, NULL, 23),
(2, 'Bucket', 9, '5 Gal.', NULL, 'S', 1, NULL, NULL, 23),
(2, 'Canteen', 1, NULL, NULL, 'S', 3, 3, 1, 23),
(2, 'Map/Scroll Case', 1, NULL, NULL, 'S', 3, 4, 1, 23),
(2, 'Cask', 9, '2 Gal.', NULL, 'S', 1, 1, NULL, 23),
(2, 'Chest', 9, 'Medium', NULL, 'L', 1, 2, NULL, 23),
(2, 'Chest', 9, 'Small', NULL, 'M', 1, 2, NULL, 23),
(2, 'Coin Purse', 1, NULL, NULL, 'T', 4, 3, NULL, 23),
(2, 'Cup', 1, NULL, NULL, 'T', 1, 1, 1, 23),
(2, 'Flask', 1, NULL, NULL, 'T', 1, 4, 1, 23),
(2, 'Jar', 1, NULL, NULL, 'T', 1, 1, NULL, 23),
(2, 'Jug', 1, NULL, NULL, 'S', 1, 1, NULL, 23),
(3, 'Mug', 1, NULL, NULL, 'T', 1, 2, NULL, 23),
(2, 'Pitcher', 1, NULL, NULL, 'S', 1, 2, NULL, 23),
(4, 'Pot', 9, 'Small', NULL, 'S', 1, 1, NULL, 23),
(3, 'Belt Pouch', 9, 'Medium', NULL, 'S', 3, 1, NULL, 23),
(2, 'Belt Pouch', 9, 'Small', NULL, 'S', 3, 1, NULL, 23),
(5, 'Quiver', 1, NULL, NULL, 'S', 4, 2, 1, 23),
(1, 'Ring with a Poison Container', 1, NULL, NULL, 'D', 4, 4, 3, 23),
(2, 'Saddlebags', 9, 'Large', NULL, 'H', 3, 2, 1, 23),
(2, 'Saddlebags', 9, 'Medium', NULL, 'L', 3, 2, 1, 23),
(2, 'Saddlebags', 9, 'Small', NULL, 'M', 3, 2, 1, 23),
(3, 'Sheathe', 9, 'Small', NULL, 'S', 4, 3, 2, 23),
(3, 'Sheathe', 9, 'Medium', NULL, 'S', 4, 2, 2, 23),
(3, 'Sheathe', 9, 'Large', NULL, 'S', 4, 2, 2, 23),
(4, 'Vial Holder Belt', 1, NULL, NULL, 'T', 2, 2, NULL, 23),
(2, 'Waterskin', 1, NULL, NULL, 'S', 1, 2, NULL, 23);


UPDATE personal_containers_table SET price = 0.5 WHERE id = 1;
UPDATE personal_containers_table SET price = 15 WHERE id = 2;
UPDATE personal_containers_table SET price = 10 WHERE id = 3;
UPDATE personal_containers_table SET price = 9 WHERE id = 4;
UPDATE personal_containers_table SET price = 6.5 WHERE id = 5;
UPDATE personal_containers_table SET price = 5 WHERE id = 6;
UPDATE personal_containers_table SET price = 5 WHERE id = 7;
UPDATE personal_containers_table SET price = 10 WHERE id = 8;
UPDATE personal_containers_table SET price = 10 WHERE id = 9;
UPDATE personal_containers_table SET price = 5 WHERE id = 10;
UPDATE personal_containers_table SET price = 50 WHERE id = 11;
UPDATE personal_containers_table SET price = 0.04 WHERE id = 12;
UPDATE personal_containers_table SET price = 10 WHERE id = 13;
UPDATE personal_containers_table SET price = 5 WHERE id = 14;
UPDATE personal_containers_table SET price = 3 WHERE id = 15;
UPDATE personal_containers_table SET price = 5 WHERE id = 16;
UPDATE personal_containers_table SET price = 2 WHERE id = 17;
UPDATE personal_containers_table SET price = 6 WHERE id = 18;
UPDATE personal_containers_table SET price = 3 WHERE id = 19;
UPDATE personal_containers_table SET price = 6 WHERE id = 20;
UPDATE personal_containers_table SET price = 3 WHERE id = 21;
UPDATE personal_containers_table SET price = 0.4 WHERE id = 22;
UPDATE personal_containers_table SET price = 0.7 WHERE id = 23;
UPDATE personal_containers_table SET price = 0.7 WHERE id = 24;
UPDATE personal_containers_table SET price = 0.7 WHERE id = 25;
UPDATE personal_containers_table SET price = 5 WHERE id = 26;
UPDATE personal_containers_table SET price = 0.02 WHERE id = 27;
UPDATE personal_containers_table SET price = 0.5 WHERE id = 28;
UPDATE personal_containers_table SET price = 1.2 WHERE id = 29;
UPDATE personal_containers_table SET price = 1.2 WHERE id = 30;
UPDATE personal_containers_table SET price = 0.5 WHERE id = 31;
UPDATE personal_containers_table SET price = 2.5 WHERE id = 32;
UPDATE personal_containers_table SET price = 15 WHERE id = 33;
UPDATE personal_containers_table SET price = 15 WHERE id = 34;
UPDATE personal_containers_table SET price = 10 WHERE id = 35;
UPDATE personal_containers_table SET price = 5 WHERE id = 36;
UPDATE personal_containers_table SET price = 2.5 WHERE id = 37;
UPDATE personal_containers_table SET price = 5 WHERE id = 38;
UPDATE personal_containers_table SET price = 10 WHERE id = 39;
UPDATE personal_containers_table SET price = 5 WHERE id = 40;
UPDATE personal_containers_table SET price = 4.5 WHERE id = 41;

-- FUCK UP HERE
-- Raw Good ID: 23 -> 24
CREATE TABLE raw_good_table (
    id SERIAL PRIMARY KEY,
    weight INT,
    item TEXT,
    format INT,
    collective TEXT,
    max_number INT,
    size TEXT,
    colors TEXT,
    tableid INT
);

INSERT INTO raw_good_table (weight, item, format, collective, max_number, size, colors, tableid) VALUES
(1, 'Cloth', 2, 'Bolt', 10, 'M', NULL, 24),
(1, '', 2, 'Bolt', 30, 'M', NULL, 24),
(1, '', 2, 'Ingot', 20, 'M', NULL, 24),
(1, '', 2, 'Collection', 5, 'M', NULL, 24),
(1, 'Wood', 2, 'Plank', 5, 'M', NULL, 24);

-- Religious Items ID: 24 -> 25
CREATE TABLE religious_items_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    item TEXT,
    format INT,
    collective TEXT,
    price NUMERIC,
    size TEXT,
    colors INT,
    engravings INT,
    gems INT,
    tableid INT
);

INSERT INTO religious_items_table (weight, item, format, collective, price, size, colors, engravings, gems, tableid) VALUES
(2, 'Altar Cloth', 1, NULL, 10, 'S', 7, 9, NULL, 25),
(1, 'Aspergillum', 3, NULL, 5, 'S', 1, 3, 2, 25),
(2, 'Brazier', 1, NULL, 5, 'S', 1, 7, 2, 25),
(2, 'Temple Candle', 1, NULL, 0.5, 'M', 8, 2, NULL, 25),
(1, 'Censer', 1, NULL, 3, 'S', 1, 6, 2, 25),
(1, 'Chalise', 1, NULL, 5, 'T', 2, 6, 2, 25),
(2, 'Holy Symbol', 1, NULL, 5, 'T', 3, 5, 2, 25),
(1, 'Incense', 7, 'Handful', 10, 'D', 9, NULL, NULL, 25),
(1, 'Pilgrimage Badge', 1, NULL, 1, 'D', 7, 9, NULL, 25),
(1, 'Prayer Beads', 1, NULL, 1, 'D', 9, 5, 1, 25),
(1, 'Sacred Texts', 4, 'Collection', 50, 'S', 6, 7, NULL, 25),
(1, 'Snuffing Bell', 1, NULL, 2, 'T', 2, 4, 1, 25),
(1, 'Talisman', 1, NULL, 1, 'T', 5, 1, 2, 25),
(1, 'Totem', 1, NULL, 0.5, 'T', 4, 1, 1, 25);

-- Shields ID: 25 -> 26
CREATE TABLE shields_table (
    id SERIAL PRIMARY KEY,
    weight INT,
    item VARCHAR(100),
    format INT,
    collective VARCHAR(100),
    price NUMERIC(10,2),
    size CHAR(1),
    colors INT,
    engravings INT,
    gems INT,
    tableid INT
);

INSERT INTO shields_table (weight, item, format, collective, price, size, colors, engravings, gems, tableid) VALUES
(1, 'Buckler', 1, NULL, 40, 'S', 4, 4, 1, 26),
(1, 'Clothe', 1, NULL, 0.5, 'S', 9, 1, NULL, 26),
(4, 'Figure Eight', 3, NULL, 60, 'M', 9, 3, 1, 26),
(5, 'Heater', 1, NULL, 70, 'M', 6, 4, 1, 26),
(5, 'Hoplon', 1, NULL, 45, 'M', 5, 3, 1, 26),
(5, 'Kite', 3, NULL, 110, 'L', 7, 4, 1, 26),
(2, 'Pavise', 1, NULL, 135, 'L', 9, 7, 1, 26),
(3, 'Round', 3, NULL, 95, 'M', 6, 5, 1, 26),
(2, 'Tower', 1, NULL, 100, 'L', 7, 6, 1, 26);

-- Trade Tools ID: 26 -> 27
CREATE TABLE trade_tools_table (
    id SERIAL PRIMARY KEY,
    weight INT,
    item TEXT,
    format INT,
    collective TEXT,
    max_number INT,
    price NUMERIC(10,2),
    size CHAR(1),
    colors INT,
    engravings INT,
    tableid INT
);

INSERT INTO trade_tools_table (weight, item, format, collective, max_number, price, size, colors, engravings, tableid) VALUES
(1, 'Adze', 3, NULL, NULL, 5, 'S', 1, 1, 27),
(1, 'Auger', 3, NULL, NULL, 15, 'L', 1, 1, 27),
(1, 'Ax', 3, NULL, NULL, 12, 'M', 1, 2, 27),
(1, 'Bear Trap', 1, NULL, NULL, 40, 'M', 1, 1, 27),
(1, 'Bellows', 3, NULL, NULL, 1, 'M', 2, 1, 27),
(1, 'Bow Drill', 3, NULL, NULL, 2, 'S', 1, 1, 27),
(1, 'Branding Iron', 1, NULL, NULL, 0.5, 'S', 1, 1, 27),
(1, 'Cleaning Brush', 1, NULL, NULL, 0.5, 'S', 1, 1, 27),
(1, 'Carding Comb', 3, NULL, NULL, 3, 'S', 2, 3, 27),
(1, 'Carpenter’s Square', 1, NULL, NULL, 0.5, 'S', 2, 2, 27),
(1, 'Chisel', 1, NULL, NULL, 0.5, 'T', 1, 1, 27),
(1, 'Cleaver', 3, NULL, NULL, 12, 'S', 1, 1, 27),
(1, 'Drill', 1, NULL, NULL, 6, 'T', 1, 1, 27),
(1, 'File', 1, NULL, NULL, 7, 'T', 1, 1, 27),
(1, 'Funnel', 3, NULL, NULL, 3, 'S', 1, 1, 27),
(1, 'Glass Cutter', 3, NULL, NULL, 15, 'T', 2, 2, 27),
(1, 'Hammer', 3, NULL, NULL, 10, 'T', 1, 2, 27),
(1, 'Hatchet', 3, NULL, NULL, 12, 'S', 1, 1, 27),
(1, 'Hoe', 3, NULL, NULL, 10, 'L', 1, 1, 27),
(1, 'Horseshoe', 1, NULL, NULL, 1, 'T', 1, 1, 27),
(1, 'Mallet', 1, NULL, NULL, 1, 'T', 1, 1, 27),
(1, 'Nail 3”', 2, 'Bag', 8, 0.5, 'F', 1, 1, 27),
(1, 'Oar', 1, NULL, NULL, 15, 'M', 2, 1, 27),
(1, 'Paddle', 1, NULL, NULL, 15, 'L', 2, 1, 27),
(1, 'Pick', 3, NULL, NULL, 20, 'L', 1, 1, 27),
(1, 'Pitch Fork', 3, NULL, NULL, 7, 'L', 1, 1, 27),
(1, 'Planer', 3, NULL, NULL, 3, 'S', 1, 1, 27),
(1, 'Pliers', 1, NULL, NULL, 1, 'T', 1, 1, 27),
(1, 'Chalk Powder', 10, 'Bag', NULL, 0.1, 'D', 4, NULL, 27),
(1, '2:1 Pully', 1, NULL, NULL, 15, 'T', 1, 1, 27),
(1, 'Rake', 3, NULL, NULL, 7, 'L', 1, 1, 27),
(1, 'Saw', 3, NULL, NULL, 13, 'S', 1, 1, 27),
(1, 'Scissors', 3, NULL, NULL, 8, 'T', 1, 1, 27),
(1, 'Shears', 1, NULL, NULL, 9, 'T', 1, 1, 27),
(1, 'Shepherd''s Crook', 1, NULL, NULL, 3, 'L', 1, 2, 27),
(1, 'Shovel', 3, NULL, NULL, 9, 'L', 1, 1, 27),
(1, 'Sickle', 3, NULL, NULL, 9, 'S', 1, 2, 27),
(1, 'Sledge', 3, NULL, NULL, 12, 'S', 1, 1, 27),
(1, 'Tongs', 1, NULL, NULL, 3, 'T', 1, 1, 27),
(1, 'Trowel', 3, NULL, NULL, 1, 'T', 1, 1, 27),
(1, 'Wedge', 1, NULL, NULL, 0.5, 'T', 1, 1, 27),
(1, 'Windlass', 1, NULL, NULL, 5, 'T', 1, 2, 27),
(1, 'Wire', 2, 'Foot', 100, 1, 'D', 3, NULL, 27);

-- Weapon Axes ID: 27 -> 28
CREATE TABLE weapons_axes_table (
    id SERIAL PRIMARY KEY,
    weight INTEGER,
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number INTEGER,
    price NUMERIC,
    size CHAR(1),
    colors INTEGER,
    engravings INTEGER,
    tableid integer default 28
);

INSERT INTO weapons_axes_table (
    weight, item, format, collective, max_number, price, size, colors, engravings
) VALUES
(1, 'Bardiche', 3, NULL, NULL, 120, 'L', 1, 5),
(1, 'Battle Axe', 3, NULL, NULL, 90, 'M', 1, 5),
(2, 'Handaxe', 3, NULL, NULL, 12, 'S', 1, 5),
(1, 'Horsemans Pick', 3, NULL, NULL, 105, 'M', 1, 5),
(1, 'Lochaber Axe', 3, NULL, NULL, 117, 'L', 1, 5);

-- Weapon Polarms ID: 28 -> 29
CREATE TABLE weapons_polearms_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number INTEGER,
    price NUMERIC,
    size TEXT,
    colors INTEGER,
    engravings INTEGER,
    tableid INTEGER
);

INSERT INTO weapons_polearms_table (
    weight, item, format, collective, max_number, price, size, colors, engravings, tableid
) VALUES
(1, 'Ahlspiess', 3, NULL, NULL, 17, 'L', 1, 3, 28),
(1, 'Bill', 3, NULL, NULL, 17, 'L', 1, 3, 28),
(1, 'Glaive', 3, NULL, NULL, 35, 'L', 1, 3, 28),
(1, 'Guisarme', 3, NULL, NULL, 22, 'L', 1, 3, 28),
(1, 'Halberd', 3, NULL, NULL, 42, 'L', 1, 3, 28),
(1, 'Lance', 3, NULL, NULL, 45, 'L', 1, 3, 28),
(1, 'Lucerne', 3, NULL, NULL, 37, 'L', 1, 3, 28),
(1, 'Military Fork', 3, NULL, NULL, 19, 'L', 1, 3, 28),
(1, 'Pike', 3, NULL, NULL, 10, 'H', 1, 3, 28),
(1, 'Planson', 3, NULL, NULL, 20, 'S', 1, 3, 28),
(1, 'Ranseur', 3, NULL, NULL, 33, 'L', 1, 3, 28),
(1, 'Short Spear', 3, NULL, NULL, 16, 'M', 1, 3, 28),
(1, 'Sovnya', 3, NULL, NULL, 32, 'L', 1, 3, 28),
(1, 'Voulge', 3, NULL, NULL, 27, 'L', 1, 3, 28),
(1, 'War-scythe', 3, NULL, NULL, 16, 'L', 1, 3, 28);

-- Weapon Sidearms ID: 29 -> 30
CREATE TABLE weapons_sidearms_table (
    id SERIAL PRIMARY KEY,
    weight INTEGER,
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size TEXT,
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO weapons_sidearms_table (
    weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid
) VALUES
(1, 'Brass Knuckles', 1, NULL, NULL, 10, 'S', 3, 3, 1, 30),
(3, 'Cinquedea', 3, NULL, NULL, 15, 'S', 3, 3, 1, 30),
(5, 'Dagger', 3, NULL, NULL, 12, 'S', 3, 3, 1, 30),
(5, 'Knife', 3, NULL, NULL, 10, 'S', 3, 3, 1, 30),
(3, 'Stiletto', 3, NULL, NULL, 17, 'S', 3, 3, 2, 30),
(3, 'Dusack', 3, NULL, NULL, 49, 'S', 3, 3, 2, 30),
(3, 'Katzbalger', 3, NULL, NULL, 55, 'S', 3, 3, 2, 30),
(1, 'Scourge', 3, NULL, NULL, 10, 'M', 3, 3, 1, 30);

-- Weapon Swords ID: 30 -> 31
CREATE TABLE weapons_swords_table (
    id SERIAL PRIMARY KEY,
    weight INTEGER,
    item TEXT NOT NULL,
    format INTEGER,
    collective TEXT,
    max_number INTEGER,
    price NUMERIC(10,2),
    size CHAR(1),
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO weapons_swords_table (
    weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid
) VALUES
(1, 'Arming Sword', 3, NULL, NULL, 70, 'M', 3, 3, 2, 31),
(1, 'Court Sword', 3, NULL, NULL, 63, 'S', 3, 3, 2, 31),
(1, 'Estoc', 3, NULL, NULL, 78, 'M', 3, 3, 2, 31),
(1, 'Executioner''s Sword', 3, NULL, NULL, 250, 'H', 3, 3, 2, 31),
(1, 'Falchion', 3, NULL, NULL, 80, 'M', 3, 3, 2, 31),
(1, 'Koncerz', 3, NULL, NULL, 83, 'M', 3, 3, 2, 31),
(1, 'Longsword', 3, NULL, NULL, 75, 'M', 3, 3, 2, 31),
(1, 'Messer', 3, NULL, NULL, 68, 'M', 3, 3, 2, 31),
(1, 'Rapier', 3, NULL, NULL, 80, 'M', 3, 3, 2, 31),
(1, 'Sabre', 3, NULL, NULL, 78, 'M', 3, 3, 2, 31),
(1, 'Schaivona', 3, NULL, NULL, 60, 'S', 3, 3, 2, 31),
(1, 'Zweihander', 3, NULL, NULL, 130, 'L', 3, 3, 2, 31);

-- Weapon Trauma ID: 31 -> 32
CREATE TABLE weapons_trauma_table (
    id SERIAL PRIMARY KEY,
    weight INTEGER,
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number INTEGER,
    price INTEGER,
    size TEXT,
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO weapons_trauma_table (
    weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid
) VALUES
(1, 'Bec De Corbin', 3, NULL, 75, NULL, 'L', 2, 4, 1, 32),
(1, 'Bludgeon', 1, NULL, 8, NULL, 'S', 6, 2, NULL, 32),
(1, 'Club', 1, NULL, 5, NULL, 'M', 4, 2, NULL, 32),
(1, 'Mace', 3, NULL, 48, NULL, 'M', 2, 5, 2, 32),
(1, 'Maul', 3, NULL, 35, NULL, 'L', 2, 4, 1, 32),
(1, 'Goedendag', 3, NULL, 24, NULL, 'L', 3, 3, NULL, 32),
(1, 'Great Hammer', 3, NULL, 200, NULL, 'H', 2, 6, 2, 32),
(1, 'Peasant''s Flail', 3, NULL, 20, NULL, 'L', 2, 2, NULL, 32),
(1, 'Quarterstaff', 1, NULL, 8, NULL, 'L', 3, 7, 1, 32),
(1, 'War Flail', 3, NULL, 50, NULL, 'M', 5, 2, 2, 32),
(1, 'War Hammer', 3, NULL, 83, NULL, 'M', 2, 6, 2, 32);

-- Weapon Ranged Thrown ID: 32 -> 33
CREATE TABLE weapons_ranged_thrown_table (
    id SERIAL PRIMARY KEY,
    weight INTEGER,
    item TEXT NOT NULL,
    format INTEGER,
    collective TEXT,
    max_number INTEGER,
    price NUMERIC(10,2),
    size CHAR(1),
    colors INTEGER,
    engravings INTEGER,
    tableid INTEGER,
    materials TEXT
);

INSERT INTO weapons_ranged_thrown_table (
    weight, item, format, collective, max_number, price, size, colors, engravings, tableid, materials
) VALUES
(1, 'Javelin', 1, NULL, NULL, 8, 'L', 7, 3, 33, '1 - 8 Wood; 9 - 10 Metal'),
(1, 'Throwing Axe', 3, NULL, NULL, 12, 'M', 3, 3, 33, 'Wood & Metal'),
(1, 'Throwing Knife', 3, NULL, NULL, 10, 'S', 2, 4, 33, 'Wood & Metal');

-- Weapon Ranged Mechanical ID: 33 -> 34
CREATE TABLE weapons_ranged_mechanical_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number NUMERIC,
    price NUMERIC,
    size CHAR(1),
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO weapons_ranged_mechanical_table (
    weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid
) VALUES
(5,  'Bellybow',          3, NULL, NULL, 175, 'L', 3, 7, 1, 34)
(10, 'Composite Bow',     1, NULL, NULL, 45,  'M', 7, 3, 1, 34)
(5,  'Crossbow',          3, NULL, NULL, 75,  'L', 5, 3, 1, 34)
(3,  'Latchet Crossbow',  3, NULL, NULL, 50,  'M', 6, 4, 1, 34)
(3,  'Longbow',           1, NULL, NULL, 60,  'L', 8, 2, 1, 34)
(20, 'Sling',             1, NULL, NULL, 5,   'S', 8, 5, NULL, 34)
(1,  'Warbow',            1, NULL, NULL, 255, 'H', 9, 3, 2, 34)

-- Weapon Ranged Firearm ID: 34 -> 35
CREATE TABLE weapons_ranged_firearm_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    item TEXT NOT NULL,
    format INTEGER,
    collective TEXT,
    max_number INTEGER,
    price NUMERIC,
    size TEXT,
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER NOT NULL
);

INSERT INTO weapons_ranged_firearm_table 
(weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid)
VALUES
(1, 'Fire Lance', 3, NULL, NULL, 105, 'L', 4, 4, NULL, 35),
(1, 'Arquebus', 3, NULL, NULL, 235, 'L', 5, 6, 1, 35),
(1, 'Hand Canon', 3, NULL, NULL, 110, 'M', 6, 5, 1, 35);

-- Works of Art ID: 35 -> 36
CREATE TABLE works_of_art_table (
    id SERIAL PRIMARY KEY,
    weight INTEGER,
    item TEXT,
    format INTEGER,
    collective TEXT,
    max_number INTEGER,
    price NUMERIC,
    size TEXT,
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO works_of_art_table 
(weight, item, format, collective, max_number, price, size, colors, engravings, gems, tableid)
VALUES
(1, 'Painting', 1, NULL, NULL, 150, 'L', 9, 9, NULL, 36),
(1, 'Pottery', 1, NULL, NULL, 25, 'S', 7, 9, 1, 36),
(1, 'Sculpture', 1, NULL, NULL, 200, 'H', 8, 9, 1, 36),
(1, 'Book', 3, NULL, NULL, 50, 'S', 6, 9, NULL, 36),
(1, 'Glassware', 7, 'Piece', NULL, 200, 'S', 8, 9, 1, 36),
(1, 'Tapestry', 1, NULL, NULL, 250, 'H', 9, 9, NULL, 36);

-- Armor Light ID: (technically) 37
CREATE TABLE armor_light_table (
    id SERIAL PRIMARY KEY,
    weight INTEGER,
    item TEXT,
    format INTEGER,
    collective TEXT,
    size TEXT,
    price NUMERIC,
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO armor_light_table (weight, item, format, collective, size, price, colors, engravings, gems, tableid)
VALUES
(13, 'Buff Coat', 2, 'Suit', 'S', 130, 8, 2, NULL, 4),
(9, 'Gambeson', 2, 'Suit', 'S', 90, 8, 2, NULL, 4),
(19, 'Leather', 2, 'Suit', 'S', 190, 4, 2, 1, 4);

-- Armor Medium ID: (technically) 38
CREATE TABLE armor_medium_table (
    id SERIAL PRIMARY KEY,
    weight INTEGER,
    item TEXT,
    format INTEGER,
    collective TEXT,
    size TEXT,
    price NUMERIC,
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO armor_medium_table (weight, item, format, collective, size, price, colors, engravings, gems, tableid)
VALUES
(65, 'Brigandine', 3, 'Suit', 'M', 650, 7, 4, 1, 4),
(39, 'Chainmail', 2, 'Suit', 'M', 390, 4, 2, 1, 4),
(19, 'Coat of Plates', 3, 'Suit', 'M', 190, 4, 4, 1, 4),
(37, 'Lamellar', 3, 'Suit', 'M', 370, 3, 4, 1, 4),
(33, 'Banded Mail', 3, 'Suit', 'M', 335, 2, 4, 1, 4),
(20, 'Breastplate', 3, 'Suit', 'M', 200, 4, 2, 1, 4),
(35, 'Ringmail', 3, 'Suit', 'M', 350, 3, 4, 1, 4),
(27, 'Splintmail', 3, 'Suit', 'M', 275, 3, 4, 1, 4);

-- Armor Heavy ID: (technically) 39
CREATE TABLE armor_heavy_table (
    id SERIAL PRIMARY KEY,
    weight INTEGER,
    item TEXT,
    format INTEGER,
    collective TEXT,
    size TEXT,
    price NUMERIC,
    colors INTEGER,
    engravings INTEGER,
    gems INTEGER,
    tableid INTEGER
);

INSERT INTO armor_heavy_table (weight, item, format, collective, size, price, colors, engravings, gems, tableid)
VALUES
(212, 'Full Plate', 2, 'Suit', 'L', 2125, 2, 7, 2, 4),
(114, 'Plated Mail', 2, 'Suit', 'L', 1140, 2, 6, 2, 4),
(107, 'Scale', 2, 'Suit', 'L', 1075, 2, 6, 2, 4);
