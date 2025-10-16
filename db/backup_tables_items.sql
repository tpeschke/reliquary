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


CREATE TABLE item_material_table (
    id SERIAL PRIMARY KEY,
    weight NUMERIC,
    itemid INTEGER NOT NULL,
    tableid INTEGER NOT NULL,
    materialid INTEGER,
    material TEXT,
    materialtableid INTEGER,
    part TEXT
);

INSERT INTO item_material_table (weight, itemid, tableid, materialid, material, materialtableid, part) VALUES
(NULL, 1, 1, 3, NULL, NULL, NULL),
(2, 1, 1, 3, NULL, NULL, NULL),
(3, 1, 1, 3, NULL, NULL, NULL),
(1, 4, 1, 3, NULL, NULL, 'cover'),
(5, 4, 1, 1, NULL, NULL, 'cover'),
(2, 4, 1, 2, NULL, NULL, 'cover'),
(1, 4, 1, 6, NULL, NULL, 'cover'),
(NULL, 4, 1, 4, NULL, NULL, 'interior'),
(NULL, 5, 1, 3, NULL, NULL, NULL),
(NULL, 6, 1, 3, NULL, NULL, NULL),
(NULL, 7, 1, 3, NULL, NULL, NULL),
(NULL, 8, 1, 4, NULL, NULL, NULL),
(NULL, 9, 1, 3, NULL, NULL, NULL),
(NULL, 10, 1, NULL, 'Porcupine Spine', NULL, NULL),
(NULL, 10, 1, NULL, 'Goose Feather', NULL, NULL),
(NULL, 11, 1, 3, NULL, NULL, NULL),
(NULL, 12, 1, 7, NULL, NULL, NULL),
(6, 13, 1, NULL, 'Clay', 5, NULL),
(2, 13, 1, 7, NULL, NULL, NULL),
(1, 13, 1, NULL, 'Slate', 5, NULL);

-- Table ID: 1
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

