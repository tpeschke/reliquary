const { ACADEMIC_TOOLS, ADVENTURING_GEAR, ALCHEMICAL_SUBSTANCES,
    ARMOR, BEVERAGES, CLOTHING, ENTERTAINMENT, FABRICS_AND_ROPES,
    FOOD, HOUSEHOLD_ITEMS, ILLUMINATION, JEWELRY, MEDICAL_TOOLS,
    MUSICAL_INSTRUMENTS, PERSONAL_CONTAINERS, RAW_GOODS, RELIGIOUS_ITEMS,
    SHIELDS, TRADE_TOOLS, WEAPONS, WORKS_OF_ART, ROLL_TWICE, ACCESSORIES,
    BODY, FOOTWEAR, HEADGEAR, PREPPED_FOOD, BREAD, FRUIT_AND_VEGATABLES,
    PROTEIN, NUTS, SPICES_AND_SEASONINGS, POLEARMS, SIDEARMS, TRAUMA,
    THROWN, MECHANICAL_RANGED, FIREARMS, AXES, SWORDS, EXOTIC_CLOTH,
    FUR_OR_LEATHER, LEATHER, FUR, EXOTIC_METAL, PAPER_PRODUCT, PARCHMENT,
    VELLUM, STONE_EARTHWORK, EXOTIC_STONE_EARTHWORK, EXOTIC_WOOD, CLOTH,
    METAL, WOOD, WAX } = require('./constants')

module.exports = {
    item_tables_with_subtables: [CLOTHING, FOOD, WEAPONS, RAW_GOODS],
    start: [
        { weight: 5, entry: ACADEMIC_TOOLS },
        { weight: 5, entry: ADVENTURING_GEAR },
        { weight: 5, entry: ALCHEMICAL_SUBSTANCES },
        { weight: 3, entry: ARMOR },
        { weight: 5, entry: BEVERAGES },
        { weight: 5, entry: CLOTHING },
        { weight: 5, entry: ENTERTAINMENT },
        { weight: 5, entry: FABRICS_AND_ROPES },
        { weight: 4, entry: FOOD },
        { weight: 5, entry: HOUSEHOLD_ITEMS },
        { weight: 5, entry: ILLUMINATION },
        { weight: 5, entry: JEWELRY },
        { weight: 5, entry: MEDICAL_TOOLS },
        { weight: 5, entry: MUSICAL_INSTRUMENTS },
        { weight: 5, entry: PERSONAL_CONTAINERS },
        { weight: 5, entry: RAW_GOODS },
        { weight: 5, entry: RELIGIOUS_ITEMS },
        { weight: 5, entry: SHIELDS },
        { weight: 5, entry: TRADE_TOOLS },
        { weight: 5, entry: WEAPONS },
        { weight: 5, entry: WORKS_OF_ART },
        { weight: 3, entry: ROLL_TWICE }
    ],
    [ACADEMIC_TOOLS]: [
        {
            weight: 6,
            entry: 'Armillary',
            base_material: 'Metal',
            Size: 'L',
            Adjectives: 3,
            Colors: 2,
            Engravings: 3,
            Gems: 4,
            Quirks: 3
        },
        {
            weight: 6,
            entry: 'Astrolabe',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 3,
            Colors: 2,
            Engravings: 3,
            Gems: 3,
            Quirks: 3
        },
        {
            weight: 7,
            entry: 'Balance & Weights',
            base_material: 'Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 2,
            Engravings: 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 7,
            entry: 'Book, Hollow',
            base_material: 'Cover: 1 Metal 2 - 7 Cloth 8 - 9 Leather 10 Wood Interior: Paper Product',
            Size: 'S',
            Adjectives: 3,
            Colors: 5,
            Engravings: 2,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 6,
            entry: 'Hourglass',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 3,
            Colors: 2,
            Engravings: 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 7,
            entry: 'Inkwell',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 6,
            Engravings: 1,
            Gems: 2,
            Quirks: 1
        },
        {
            weight: 6,
            entry: 'Magnifying Glass',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 3,
            Colors: 2,
            Engravings: 2,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 7,
            entry: 'Paper (per 50 sheets)',
            base_material: 'Paper Product',
            Size: 'S',
            Adjectives: 1,
            Colors: 4,
            Engravings: 0,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 7,
            entry: 'Personal Seal',
            base_material: 'Metal',
            Size: 'D',
            Adjectives: 4,
            Colors: 8,
            Engravings: 9,
            Gems: 3,
            Quirks: 1
        },
        {
            weight: 7,
            entry: 'Quill',
            base_material: '1 - 3 Porcupine Spine 4 - 10 Goose Feather',
            Size: 'D',
            Adjectives: 2,
            Colors: 2,
            Engravings: 0,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 7,
            entry: 'Scale, Merchant’s',
            base_material: 'Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 2,
            Engravings: 1,
            Gems: 1,
            Quirks: 3
        },
        {
            weight: 7,
            entry: 'Sealing Wax',
            base_material: 'Wax',
            Size: 'D',
            Adjectives: 1,
            Colors: 9,
            Engravings: 0,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 7,
            entry: 'Writing Tablet',
            base_material: '1 - 6 Clay (See Stone/Earthwork) 7 - 9 Wax 10 Slate (See Stone/Earthwork)',
            Size: 'S',
            Adjectives: 1,
            Colors: 4,
            Engravings: 1,
            Gems: 0,
            Quirks: 1
        }
    ],
    [ADVENTURING_GEAR]: [
        {
            weight: 2,
            entry: 'Bedroll',
            base_material: '1 - 4 Cloth 5 - 8 Leather 9 - 10 Fur',
            Size: 'M',
            Adjectives: 4,
            Colors: 4,
            'Engravings/Stitchings': 3,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Blade Pole',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Blanket',
            base_material: '1 - 6 Cloth 7 Leather 8 - 10 Fur',
            Size: 'S',
            Adjectives: 4,
            Colors: 4,
            'Engravings/Stitchings': 4,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Block & Tackle',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Cage, Rabbit Trap',
            base_material: 'Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 3
        },
        {
            weight: 2,
            entry: 'Caltrops',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Camp Bed',
            base_material: '1 - 5 Cloth 6 - 9 Leather 10 Fur',
            Size: 'L',
            Adjectives: 5,
            Colors: 5,
            'Engravings/Stitchings': 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Chain, 1d10 ft',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Chalk Stick',
            base_material: 'Chalk',
            Size: 'S',
            Adjectives: 1,
            Colors: 7,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Climbing Harness',
            base_material: '1 - 3 Cloth 4 - 10 Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 2,
            'Engravings/Stitchings': 2,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Compass',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 3,
            Colors: 1,
            'Engravings/Stitchings': 3,
            Quirks: 3
        },
        {
            weight: 2,
            entry: 'Crampons, pair',
            base_material: 'Leather & Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Cross-Staff',
            base_material: '1 - 3 Wood 4 - 10 Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Crowbar',
            base_material: 'Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Darksuit',
            base_material: '1 - 8 Cloth 9 - 10 Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 2,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Dowsing Rod',
            base_material: '1 - 8 Wood 9 - 10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Firestarter',
            base_material: 'Wood & Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Fish Trap',
            base_material: '1- 9 Wicker 10 Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Fishhook',
            base_material: '1 Bone, Sentient 2 - 7 Bone, Animal 8 Bone, Monster 9 - 10 Metal',
            Size: 'D',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Fishing Line ',
            base_material: '1 - 6 Thread 7 - 10 Twine',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Fishing Net (25 sq ft)',
            base_material: '1 - 6 Thread 7 - 10 Twine',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Fishing Pole',
            base_material: '1 - 9 Wood 10 Metal"',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 3,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Footpads',
            base_material: '1 - 8 Cloth 9 - 10 Leather',
            Size: 'T',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Grapnel Hook',
            base_material: 'Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Hammock',
            base_material: '1 - 9 Cloth 10 Leather',
            Size: 'S',
            Adjectives: 3,
            Colors: 4,
            'Engravings/Stitchings': 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Hooked Pole',
            base_material: '1 - 3 Metal 4 - 10 Wood',
            Size: 'L',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Horseshoe',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 2,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Insect Netting',
            base_material: '1 - 6 Thread 7 - 10 Twine',
            Size: 'M',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Ladder, 10 ft',
            base_material: '1 - 9 Wood 10 Metal',
            Size: 'L',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Lard (pint)',
            base_material: '1 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Listening Cone',
            base_material: '1 - 4 Cloth 5 - 6 Leather 7 - 10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Lock',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 4,
            Colors: 1,
            'Engravings/Stitchings': 2,
            Quirks: 3
        },
        {
            weight: 2,
            entry: 'Lock Chisel',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Lockpicks, Set',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 4,
            Colors: 1,
            'Engravings/Stitchings': 2,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Manacles',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 4,
            Colors: 1,
            'Engravings/Stitchings': 2,
            Quirks: 4
        },
        {
            weight: 1,
            entry: 'Marbles',
            base_material: '1 - 3 Metal 4 - 10 Wood',
            Size: 'D',
            Adjectives: 6,
            Colors: 9,
            'Engravings/Stitchings': 3,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Mini-blade',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Mirror Pole',
            base_material: '1 Glass 2 - 3 Silver (See Metal) 7 - 10 Brass (See Metal)',
            Size: 'L',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Pegleg',
            base_material: '1 - 9 Wood 10 Metal',
            Size: 'S',
            Adjectives: 4,
            Colors: 3,
            'Engravings/Stitchings': 4,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Pell',
            base_material: '1 - 7 Wood 8 - 10 Metal',
            Size: 'T',
            Adjectives: 2,
            Colors: 2,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Pole, 10 ft',
            base_material: '1 - 9 Wood 10 Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Quintain',
            base_material: 'Wood',
            Size: 'H',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Reed, Hollow',
            base_material: 'Wood',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sewing Needle',
            base_material: '1 - 4 Wood 5 - 6 Metal 7 Bone, Sentient 8 - 9 Bone, Animal 10 Bone, Monster',
            Size: 'D',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Sextant',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 3,
            Colors: 1,
            'Engravings/Stitchings': 4,
            Quirks: 3
        },
        {
            weight: 2,
            entry: 'Stake, Anti-Vampire',
            base_material: '1 - 9 Wood 10 Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Tack, 3/4”',
            base_material: 'Metal',
            Size: 'D',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Tar Paper',
            base_material: 'Paper Product',
            Size: 'F',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Tent (1-man)',
            base_material: '1 - 7 Cloth 8 - 9 Leather 10 Fur',
            Size: 'M',
            Adjectives: 3,
            Colors: 4,
            'Engravings/Stitchings': 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Tent (2-man)',
            base_material: '1 - 7 Cloth 8 - 9 Leather 10 Fur',
            Size: 'L',
            Adjectives: 3,
            Colors: 4,
            'Engravings/Stitchings': 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Tinderbox',
            base_material: 'Wood',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Whetstone',
            base_material: 'Stone/Earthwork',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Whistle',
            base_material: '1 - 8 Wood 9 - 10 Metal',
            Size: 'T',
            Adjectives: 2,
            Colors: 2,
            'Engravings/Stitchings': 3,
            Quirks: 2
        }
    ],
    [ALCHEMICAL_SUBSTANCES]: [
        {
            weight: 5,
            entry: 'Acid, metal-eating (1 oz)',
            base_material: '13.74 sc',
            Size: 'D',
            Adjectives: 1,
            Colors: 3,
            Quirks: 2
        },
        {
            weight: 5,
            entry: 'Alchemist’s Fire (pint)',
            base_material: '124 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 2,
            Quirks: 4
        },
        {
            weight: 2,
            entry: 'Ambergris (1 oz)',
            base_material: '141 sc',
            Size: 'D',
            Adjectives: 1,
            Colors: 2,
            Quirks: 0
        },
        {
            weight: 5,
            entry: 'Aniseed (1 oz)',
            base_material: '0.21 sc',
            Size: 'D',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 5,
            entry: 'Antitoxin (1 dose)',
            base_material: '10 sc',
            Size: 'D',
            Adjectives: 1,
            Colors: 6,
            Quirks: 1
        },
        {
            weight: 6,
            entry: 'Blinding Powder (1 handful)',
            base_material: '16 sc',
            Size: 'D',
            Adjectives: 1,
            Colors: 5,
            Quirks: 2
        },
        {
            weight: 6,
            entry: 'Coal (1 lb)',
            base_material: '0.02 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 0
        },
        {
            weight: 5,
            entry: 'Disappearing Ink (1 oz)',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 4,
            Quirks: 2
        },
        {
            weight: 6,
            entry: 'Faceblack (1 pint)',
            base_material: '0.6 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 0
        },
        {
            weight: 5,
            entry: 'Healing Salve',
            base_material: '7 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 7,
            Quirks: 3
        },
        {
            weight: 5,
            entry: 'Holy Water',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 0
        },
        {
            weight: 5,
            entry: 'Oil',
            base_material: '1 - 3 Hemp 4 - 8 Linseed 9 - 10 Whale',
            Size: 'T',
            Adjectives: 1,
            Colors: 4,
            Quirks: 0
        },
        {
            weight: 5,
            entry: 'Pearlash (1 lb)',
            base_material: '4 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            Quirks: 0
        },
        {
            weight: 3,
            entry: 'Poison',
            base_material: '1 Blacknessel 2 Blue Glory 3 Bondweed 4 Griffin Hair 5 Lylullin 6 Maidenscap 7 Palm of St Germain 8 Tears of Sicyon (for the above, see the 2.6 in the SRD) 9 Unknown 10 Monster Poison',
            Size: 'D',
            Adjectives: 1,
            Colors: 9,
            Quirks: 4
        },
        {
            weight: 6,
            entry: 'Potash (1 lb)',
            base_material: '1 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            Quirks: 0
        },
        {
            weight: 5,
            entry: 'Shell, Pearly',
            base_material: '0.03 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 3,
            Quirks: 2
        },
        {
            weight: 6,
            entry: 'Soap (1 oz)',
            base_material: '0.05 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 4,
            Quirks: 0
        },
        {
            weight: 5,
            entry: 'Talcum Powder',
            base_material: '1.3 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 4,
            Quirks: 0
        },
        {
            weight: 5,
            entry: 'Wax',
            base_material: 'Wax',
            Size: 'T',
            Adjectives: 1,
            Colors: 9,
            Quirks: 0
        },
        {
            weight: 5,
            entry: 'Weaponblack',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 0
        }
    ],
    [ARMOR]: [
        {
            weight: 9,
            entry: 'Brigandine',
            base_material: 'Leather & Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 7,
            'Engravings/Stitchings': 4,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 9,
            entry: 'Buff Coat',
            base_material: 'Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 8,
            'Engravings/Stitchings': 2,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 9,
            entry: 'Chainmail',
            base_material: 'Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 2,
            'Engravings/Stitchings': 2,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 9,
            entry: 'Coat of Plates',
            base_material: 'Leather & Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 4,
            'Engravings/Stitchings': 4,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 9,
            entry: 'Gambeson',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 8,
            'Engravings/Stitchings': 2,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 9,
            entry: 'Lamellar',
            base_material: 'Leather & Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 3,
            'Engravings/Stitchings': 4,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 9,
            entry: 'Laminar (Banded Mail)',
            base_material: 'Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 2,
            'Engravings/Stitchings': 4,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 9,
            entry: 'Leather',
            base_material: 'Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 4,
            'Engravings/Stitchings': 2,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 9,
            entry: 'Full Plate',
            base_material: 'Metal',
            Size: 'L',
            Adjectives: 3,
            Colors: 2,
            'Engravings/Stitchings': 7,
            Gems: 2,
            Quirks: 3
        },
        {
            weight: 9,
            entry: 'Plated Mail',
            base_material: 'Metal',
            Size: 'L',
            Adjectives: 3,
            Colors: 2,
            'Engravings/Stitchings': 6,
            Gems: 2,
            Quirks: 3
        },
        {
            weight: 9,
            entry: 'Scale',
            base_material: 'Metal',
            Size: 'L',
            Adjectives: 3,
            Colors: 2,
            'Engravings/Stitchings': 6,
            Gems: 2,
            Quirks: 3
        }
    ],
    [BEVERAGES]: [
        {
            weight: 4,
            entry: 'Ale (gallon)',
            base_material: '0.8 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Almond Milk (pint)',
            base_material: '1 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Applejack (pint)',
            base_material: '2 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Barley-Broth',
            base_material: '0.01 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Beer (gallon)',
            base_material: '0.8 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Bitter Broth (pint)',
            base_material: '1 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Braggart (pint)',
            base_material: '1 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Brandy (gallon)',
            base_material: '4 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Cider, Hard (gallon)',
            base_material: '3.2 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Cider, Sweet (Gallon)',
            base_material: '2 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Decoction (pint)',
            base_material: '1 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Furmore (pint)',
            base_material: '1 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Grog (gallon)',
            base_material: '0.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Lemon Juice (gallon)',
            base_material: '4 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Liver Squeezings (cup)',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Mead (gallon)',
            base_material: '3.8 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Milk (gallon)',
            base_material: '0.2 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Miracle Water (cup)',
            base_material: '5 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Must (cup)',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Posset',
            base_material: '.5 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Rum (gallon)',
            base_material: '15 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Tea (cup)',
            base_material: '4 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Vinegar (gallon)',
            base_material: '6 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Whiskey (gallon)',
            base_material: '0.4 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Wine (gallon)',
            base_material: '5.4 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        }
    ],
    [CLOTHING]: [
        {
            weight: 1,
            entry: ACCESSORIES
        },
        {
            weight: 1,
            entry: BODY
        }, {
            weight: 1,
            entry: FOOTWEAR
        },
        {
            weight: 1,
            entry: HEADGEAR
        },
    ],
    [ENTERTAINMENT]: [
        {
            weight: 5,
            entry: 'Ankle Bells',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 4,
            'Engravings/Stitching': 3,
            Gems: 2,
            Quirks: 1,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Bean Bags',
            base_material: '1 - 3 Leather 4 - 10 Cloth',
            Size: 'D',
            Adjectives: 2,
            Colors: 8,
            'Engravings/Stitching': 2,
            Gems: 0,
            Quirks: 1,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Cane, Collapsing',
            base_material: '1 - 7 Wood 8 - 10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 7,
            'Engravings/Stitching': 1,
            Gems: 6,
            Quirks: 3,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Cards',
            base_material: 'Paper Product',
            Size: 'T',
            Adjectives: 2,
            Colors: 8,
            'Engravings/Stitching': 0,
            Gems: 0,
            Quirks: 0,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Cards, Marked',
            base_material: 'Paper Product',
            Size: 'T',
            Adjectives: 2,
            Colors: 8,
            'Engravings/Stitching': 0,
            Gems: 0,
            Quirks: 0,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Cards, Tarot',
            base_material: 'Paper Product',
            Size: 'T',
            Adjectives: 3,
            Colors: 9,
            'Engravings/Stitching': 0,
            Gems: 0,
            Quirks: 0,
            Subject: 9
        },
        {
            weight: 5,
            entry: 'Chest Set',
            base_material: '1 - 9 Wood 10 Metal',
            Size: 'M',
            Adjectives: 3,
            Colors: 3,
            'Engravings/Stitching': 2,
            Gems: 3,
            Quirks: 1,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Dice',
            base_material: '1 - 5 Wood 6 Ivory 7 Bone, Sentient 8 - 9 Bone, Animal 10 Bone, Monster',
            Size: 'D',
            Adjectives: 2,
            Colors: 4,
            'Engravings/Stitching': 0,
            Gems: 1,
            Quirks: 1,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Dice, Loaded',
            base_material: '1 - 5 Wood 6 Ivory 7 Bone, Sentient 8 - 9 Bone, Animal 10 Bone, Monster',
            Size: 'D',
            Adjectives: 2,
            Colors: 4,
            'Engravings/Stitching': 0,
            Gems: 1,
            Quirks: 1,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Fan, Handheld',
            base_material: '1 - 4 Cloth 5 - 7 Wood 8 - 10 Paper Product',
            Size: 'S',
            Adjectives: 3,
            Colors: 9,
            'Engravings/Stitching': 6,
            Gems: 0,
            Quirks: 0,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Finger Cymbals',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 2,
            Colors: 3,
            'Engravings/Stitching': 3,
            Gems: 0,
            Quirks: 0,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Hair Dye',
            base_material: '5 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 9,
            'Engravings/Stitching': 0,
            Gems: 0,
            Quirks: 0,
            Subject: 0
        },
        {
            weight: 4,
            entry: 'Hair Extensions',
            base_material: '1 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 7,
            'Engravings/Stitching': 0,
            Gems: 0,
            Quirks: 0,
            Subject: 0
        },
        {
            weight: 64,
            entry: 'Horn, Speaking',
            base_material: '1 - 4 Cloth 5 - 7 Leather 8 - 9 Wood 10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 4,
            'Engravings/Stitching': 2,
            Gems: 0,
            Quirks: 1,
            Subject: 0
        },
        {
            weight: 4,
            entry: 'Knife, Juggling',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 5,
            'Engravings/Stitching': 1,
            Gems: 1,
            Quirks: 0,
            Subject: 0
        },
        {
            weight: 4,
            entry: 'Knife, Retractable',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 5,
            'Engravings/Stitching': 2,
            Gems: 3,
            Quirks: 2,
            Subject: 0
        },
        {
            weight: 4,
            entry: 'Marionette',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 3,
            Colors: 9,
            'Engravings/Stitching': 5,
            Gems: 1,
            Quirks: 3,
            Subject: 9
        },
        {
            weight: 5,
            entry: 'Perfumes',
            base_material: '3 sc',
            Size: 'T',
            Adjectives: 2,
            Colors: 7,
            'Engravings/Stitching': 3,
            Gems: 4,
            Quirks: 2,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Puppet',
            base_material: '1 - 5 Cloth 6 - 10 Leather',
            Size: 'T',
            Adjectives: 3,
            Colors: 9,
            'Engravings/Stitching': 3,
            Gems: 0,
            Quirks: 1,
            Subject: 9
        },
        {
            weight: 5,
            entry: 'Tobacco',
            base_material: '1 - 5 Chewing 6 - 10 Smoking',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engravings/Stitching': 0,
            Gems: 0,
            Quirks: 0,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Toy Sword',
            base_material: 'Wood',
            Size: 'T',
            Adjectives: 2,
            Colors: 3,
            'Engravings/Stitching': 2,
            Gems: 1,
            Quirks: 1,
            Subject: 0
        }
    ],
    [FABRICS_AND_ROPES]: [
        {
            weight: 3,
            entry: 'Comforter (3.5’ x 6’)',
            base_material: '1 - 2 Down 3 - 5 Feather  7 - 8 Heavy Down  9 - 10 Heavy Feather (see Animal > Air for type) with Cloth',
            Size: 'L',
            Adjectives: 2,
            Colors: 7,
            Stitchings: 4,
            Quirks: 1
        },
        {
            weight: 4,
            entry: 'Cut of Fabric (1 sq yards)',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 2,
            Stitchings: 2,
            Quirks: 0
        },
        {
            weight: 3,
            entry: 'Flag',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 3,
            Colors: 9,
            Stitchings: 3,
            Quirks: 1
        },
        {
            weight: 3,
            entry: 'Thread, 1d4 yards',
            base_material: '1 - 7 Thread 8 - 10 Twine',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Stitchings: 0,
            Quirks: 0
        },
        {
            weight: 3,
            entry: 'Yarn, 1d4 yards',
            base_material: '1 - 5 Cotton 6 - 10 Wool',
            Size: 'T',
            Adjectives: 1,
            Colors: 2,
            Stitchings: 0,
            Quirks: 0
        },
        {
            weight: 4,
            entry: 'Rope',
            base_material: '1 - 4 Hemp  5 - 7 Cotton 8 - 9 Cloth 10 Silk',
            Size: 'M',
            Adjectives: 2,
            Colors: 2,
            Stitchings: 2,
            Quirks: 1
        }
    ],
    [FOOD]: [
        { weight: 1, entry: [PREPPED_FOOD] },
        { weight: 2, entry: [BREAD] },
        { weight: 3, entry: [FRUIT_AND_VEGATABLES] },
        { weight: 4, entry: [PROTEIN] },
        { weight: 5, entry: [NUTS] },
        { weight: 6, entry: [SPICES_AND_SEASONINGS] }
    ],
    [HOUSEHOLD_ITEMS]: [
        {
            weight: 3,
            entry: 'Sheets',
            base_material: 'Cloth',
            Size: 'L',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 3,
            entry: 'Curtains',
            base_material: '1 - 8 Cloth 9 - 10 Leather',
            Size: 'H',
            Adjectives: 2,
            Colors: 4,
            'Engraving/Stitchings': 3,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 3,
            entry: 'Sleeping Furs',
            base_material: 'Fur',
            Size: 'H',
            Adjectives: 2,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 3,
            entry: 'Bench, 1-person',
            base_material: '1 - 9 Wood 10 Metal',
            Size: 'H',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 3,
            entry: 'Carpet',
            base_material: '1 - 3 Cloth 4 - 10 Wool',
            Size: 'G',
            Adjectives: 3,
            Colors: 5,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 3,
            entry: 'Chair',
            base_material: '1 - 9 Wood 10 Metal',
            Size: 'H',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 3,
            entry: 'Chandelier',
            base_material: 'Metal',
            Size: 'G',
            Adjectives: 3,
            Colors: 1,
            'Engraving/Stitchings': 4,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 3,
            entry: 'Seat Cushion',
            base_material: '1 - 8 Cloth 9 - 10 Leather',
            Size: 'M',
            Adjectives: 2,
            Colors: 4,
            'Engraving/Stitchings': 3,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 3,
            entry: 'Stool',
            base_material: '1 - 9 Wood 10 Metal',
            Size: 'L',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 3,
            entry: 'Tapestry',
            base_material: '1 - 8 Wool 9 Leather 10 Cloth',
            Size: 'G',
            Adjectives: 3,
            Colors: 9,
            'Engraving/Stitchings': 9,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 3,
            entry: 'Bolter Cloth',
            base_material: 'Cloth',
            Size: 'L',
            Adjectives: 1,
            Colors: 6,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 3,
            entry: 'Cauldron',
            base_material: 'Metal',
            Size: 'H',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Coffin, Pastry',
            base_material: '1 - 7 Wood 8  - 10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Galley-pot',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Larding Needle',
            base_material: '1 - 3 Metal 4 - 6 Wood 7 Bone, Sentient 8 - 9 Bone, Animal 10 Bone, Monster',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Pipkin',
            base_material: 'Stone/Earthwork',
            Size: 'L',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Porringers',
            base_material: '1 - 8 Metal 9 - 10 Stone/Earthwork',
            Size: 'S',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Querne',
            base_material: '1 - 8 Stone/Earthwork 9 - 10 Wood',
            Size: 'M',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Rowel',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Salamander Plate',
            base_material: 'Stone/Earthwork',
            Size: 'M',
            Adjectives: 2,
            Colors: 2,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Trencher',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Tripod',
            base_material: 'Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Bowl',
            base_material: '1 - 6 Wood 7 - 10 Metal',
            Size: 'S',
            Adjectives: 3,
            Colors: 4,
            'Engraving/Stitchings': 3,
            Gems: 1,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Drinking Horn',
            base_material: 'Horn',
            Size: 'S',
            Adjectives: 3,
            Colors: 2,
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Fork',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Goblet',
            base_material: '1 - 3 Glass  4 Crystal 6 - 10 Metal',
            Size: 'T',
            Adjectives: 3,
            Colors: 2,
            'Engraving/Stitchings': 3,
            Gems: 1,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Kettle',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Knife',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Ladle',
            base_material: '1 - 7 Wood 8 - 10 Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Mug',
            base_material: '1 - 4 Wood 5 - 6 Metal 7 - 10 Stone/Earthwork',
            Size: 'T',
            Adjectives: 2,
            Colors: 4,
            'Engraving/Stitchings': 3,
            Gems: 1,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Pan',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Pitcher',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 2,
            Colors: 2,
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Platter',
            base_material: '1 - 7 Wood 8 - 10 Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 4,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Pot hanger',
            base_material: 'Metal',
            Size: 'D',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Salt Cellar',
            base_material: '1 - 8 Metal 9 - 10 Wood',
            Size: 'D',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Spit, Small',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Spoon',
            base_material: '1 - 7 Metal 8 - 10 Wood',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Drinking Glass',
            base_material: 'Glass',
            Size: 'D',
            Adjectives: 2,
            Colors: 4,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 3,
            entry: 'Pillow',
            base_material: '1 - 8 Cloth 9 - 10 Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 4,
            'Engraving/Stitchings': 3,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 3,
            entry: 'Rug, Woven',
            base_material: '1 - 3 Cloth 4 - 5 Leather 6 - 10 Wool',
            Size: 'L',
            Adjectives: 3,
            Colors: 8,
            'Engraving/Stitchings': 5,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 3,
            entry: 'Rug, Fur',
            base_material: 'Fur',
            Size: 'L',
            Adjectives: 3,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 3,
            entry: 'Stein',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 3,
            Colors: 1,
            'Engraving/Stitchings': 4,
            Gems: 1,
            Quirks: 1
        }
    ],
    [ILLUMINATION]: [
        {
            weight: 1,
            entry: 'Candelabra',
            base_material: 'Metal',
            Size: 'H',
            Adjectives: 3,
            Colors: 2,
            Engraving: 3,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Candle',
            base_material: '1 - 8 Tallow 9 - 10 Wax',
            Size: 'T',
            Adjectives: 2,
            Colors: 4,
            Engraving: 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Candle, Timekeeping',
            base_material: '1 - 7 Tallow 8 - 10 Wax"',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            Engraving: 0,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Candlestick',
            base_material: 'Metal',
            Size: 'D',
            Adjectives: 2,
            Colors: 2,
            Engraving: 2,
            Gems: 1,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Lamp',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            Engraving: 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Lantern, Beacon',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            Engraving: 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Lantern, Bullseye',
            base_material: 'Metal & Paper Product',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            Engraving: 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Lantern, Hooded',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            Engraving: 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Lantern, Storm',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            Engraving: 2,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Torch',
            base_material: '1 - 5 Tallow 6 - 10 Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Engraving: 0,
            Gems: 0,
            Quirks: 0
        }
    ],
    [JEWELRY]: [
        {
            weight: 2,
            entry: 'Ring',
            base_material: 'Metal',
            Size: 'D',
            Adjectives: 3,
            Colors: 2,
            'Engraving/Stitchings': 3,
            Gems: 4,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Necklace',
            base_material: '1 - 7 Metal 8 - 9 Cloth 10 both',
            Size: 'D',
            Adjectives: 4,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 3,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Fake Teeth',
            base_material: '1 - 6 Ivory 7 - 9 Wood 10 Metal',
            Size: 'D',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 5,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Earings',
            base_material: 'Metal',
            Size: 'F',
            Adjectives: 3,
            Colors: 2,
            'Engraving/Stitchings': 2,
            Gems: 4,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Pendant',
            base_material: 'Metal',
            Size: 'F',
            Adjectives: 3,
            Colors: 2,
            'Engraving/Stitchings': 2,
            Gems: 4,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Bangle',
            base_material: 'Metal',
            Size: 'F',
            Adjectives: 3,
            Colors: 3,
            'Engraving/Stitchings': 2,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Belly Chain',
            base_material: 'Metal',
            Size: 'F',
            Adjectives: 3,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Chatelaine',
            base_material: '1 - 2 Metal 3 - 4 Cloth 5 - 8 Leather 9 Two 10 all three',
            Size: 'D',
            Adjectives: 4,
            Colors: 4,
            'Engraving/Stitchings': 2,
            Gems: 2,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Pin',
            base_material: 'Metal',
            Size: 'F',
            Adjectives: 3,
            Colors: 2,
            'Engraving/Stitchings': 2,
            Gems: 4,
            Quirks: 4
        },
        {
            weight: 1,
            entry: 'Torc',
            base_material: '1 - 7 Metal 8 - 9 Leather 10 both',
            Size: 'D',
            Adjectives: 3,
            Colors: 2,
            'Engraving/Stitchings': 4,
            Gems: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Bracelet',
            base_material: '1 - 7 Metal 8 - 9 Leather 10 both',
            Size: 'F',
            Adjectives: 3,
            Colors: 5,
            'Engraving/Stitchings': 4,
            Gems: 2,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Choker',
            base_material: '1 - 5 Metal 6 Cloth 7 - 8 Leather 9 Two 10 all three',
            Size: 'F',
            Adjectives: 3,
            Colors: 5,
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Anklet',
            base_material: '1 - 8 Metal 9 Cloth 10 both',
            Size: 'F',
            Adjectives: 3,
            Colors: 3,
            'Engraving/Stitchings': 3,
            Gems: 2,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Armlet/Bracer',
            base_material: '1 - 5 Metal 6 Cloth 7 - 8 Leather 9 Two 10 all three"',
            Size: 'F',
            Adjectives: 3,
            Colors: 4,
            'Engraving/Stitchings': 3,
            Gems: 3,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Slave Bracelet',
            base_material: 'Metal',
            Size: 'F',
            Adjectives: 3,
            Colors: 4,
            'Engraving/Stitchings': 1,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Prayer Beads',
            base_material: '1 - 6 Cloth 7 - 9 Leather 10 both',
            Size: 'D',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Brooch',
            base_material: 'Metal',
            Size: 'D',
            Adjectives: 4,
            Colors: 2,
            'Engraving/Stitchings': 4,
            Gems: 4,
            Quirks: 4
        },
        {
            weight: 1,
            entry: 'Locket',
            base_material: 'Metal',
            Size: 'D',
            Adjectives: 3,
            Colors: 2,
            'Engraving/Stitchings': 2,
            Gems: 4,
            Quirks: 4
        },
        {
            weight: 1,
            entry: 'Crown/Tiara',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 5,
            Colors: 3,
            'Engraving/Stitchings': 4,
            Gems: 5,
            Quirks: 3
        }
    ],
    [MEDICAL_TOOLS]: [
        {
            weight: 4,
            entry: 'Bandages',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Basin, Bleeding',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 2,
            'Engraving/Stitchings': 2,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Crutches',
            base_material: '1 Metal 2 - 10 Wood',
            Size: 'S',
            Adjectives: 2,
            Colors: 2,
            'Engraving/Stitchings': 3,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Eyeglasses',
            base_material: '1 - 6 Metal 7 - 10 Wood',
            Size: 'T',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 3,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Probe',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Scalpel',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Lancet',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Litter',
            base_material: 'Wood',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Sutures',
            base_material: '1 - 6 Thread 7 - 10 Animal > Land Guts',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Pegleg',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 3,
            Colors: 2,
            'Engraving/Stitchings': 3,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Saw, Amputation',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Stretcher',
            base_material: 'Wood & Cloth',
            Size: 'T',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Tooth Wrench',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Arrow Extractor',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Arm Sling',
            base_material: 'Cloth',
            Size: 'T',
            Adjectives: 1,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Quirks: 1
        }
    ],
    [MUSICAL_INSTRUMENTS]: [
        {
            weight: 4,
            entry: 'Adufe',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Bagpipes',
            base_material: '1 - 8 Wood 9 - 10 Metal with Cloth',
            Size: 'M',
            Adjectives: 3,
            Colors: 3,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Bladder Pipe',
            base_material: '1 - 8 Wood 9 - 10 Metal with Cloth',
            Size: 'S',
            Adjectives: 2,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Citole',
            base_material: 'Wood',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Crumhorn',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Dulcimer',
            base_material: 'Wood',
            Size: 'L',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Fiddle',
            base_material: 'Wood',
            Size: 'M',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Frame Drum',
            base_material: 'Wood & Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Gittern',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Glockenspiel',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 3,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Guitarra',
            base_material: 'Wood',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Harp',
            base_material: 'Wood',
            Size: 'M',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Hurdy-Gurdy',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Lute',
            base_material: 'Wood',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Mandolin',
            base_material: 'Wood',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Naqareh',
            base_material: 'Wood & Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Oud',
            base_material: 'Wood',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Psalterium',
            base_material: 'Wood',
            Size: 'L',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 3,
            Gems: 3,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Rebec',
            base_material: 'Wood',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Recorder',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Sackbut',
            base_material: 'Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Shawm',
            base_material: 'Wood',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'String Drum',
            base_material: 'Wood',
            Size: 'M',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Tabor Drum',
            base_material: 'Wood & Leather',
            Size: 'M',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Tabor Pipe',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Timbrel',
            base_material: 'Metal & Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Viol',
            base_material: 'Wood',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Zampogna',
            base_material: 'Wood with 1 - 2 Cloth 3 - 10 Leather"',
            Size: 'L',
            Adjectives: 2,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 4,
            entry: 'Hunting Horn',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 2
        }
    ],
    [PERSONAL_CONTAINERS]: [
        {
            weight: 2,
            entry: 'Amphora',
            base_material: 'Stone/Earthwork',
            Size: 'L',
            Adjectives: 3,
            Colors: 9,
            'Engraving/Stitchings': 7,
            Gems: 1,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Backpack, Large',
            base_material: '1 - 7 Cloth 8 - 10 Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Backpack, Medium',
            base_material: '1 - 7 Cloth 8 - 10 Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Backpack, Small',
            base_material: '1 - 7 Cloth 8 - 10 Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Bag, Medium',
            base_material: '1 - 8 Cloth 9 - 10 Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Bag, Small',
            base_material: '1 - 8 Cloth 9 - 10 Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Bandoleer',
            base_material: '1 - 4 Cloth 5 - 10 Leather',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Barrel, 12 gal',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Basket, Medium',
            base_material: 'Wicker',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Basket, Small',
            base_material: 'Wicker',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Beaker',
            base_material: 'Glass',
            Size: 'D',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Bottle',
            base_material: '1 - 5 Glass 6 - 10 Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Box, Medium',
            base_material: '1 - 9 Wood 10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Box, Small',
            base_material: '1 - 8 Wood 9 - 10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Bucket, 1 gal',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Bucket, 5 gal',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 0,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Canteen',
            base_material: '1 - 8 Metal 9 - 10 Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 3,
            Gems: 1,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Case, Map/Scroll',
            base_material: '1 - 2 Wood 3 - 4 Metal 5 - 6 Leather 7 - 10 Waxed Cloth',
            Size: 'S',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 4,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Cask, 2 gallon',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Chest, Medium',
            base_material: '1 - 8 Wood 9 - 10 Metal',
            Size: 'L',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Chest, Small',
            base_material: '1 - 9 Wood 10 Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Coin Purse',
            base_material: '1 - 5 Cloth 6 - 10 Leather',
            Size: 'T',
            Adjectives: 2,
            Colors: 4,
            'Engraving/Stitchings': 3,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Cup',
            base_material: '1 - 3 Metal 4 - 9 Stone/Earthwork 10 Porcelain',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Flask',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 4,
            Gems: 1,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Jar',
            base_material: '1 - 3 Glass 4 - 10 Stone/Earthwork',
            Size: 'T',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Jug',
            base_material: '1 - 3 Metal 4 - 10 Stone/Earthwork',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Mug',
            base_material: 'Stone/Earthwork',
            Size: 'T',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Pitcher',
            base_material: 'Stone/Earthwork',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Pot, Small',
            base_material: '1 - 7 Stone/Earthwork 8 - 10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Pouch, Belt, Medium',
            base_material: '1 - 5 Cloth 6 - 10 Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Pouch, Belt, Small',
            base_material: '1 - 5 Cloth 6 - 10 Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 2,
            entry: 'Quiver',
            base_material: '1 - 2 Cloth 3 - 6 Leather 7 Metal 8 - 10 Wood',
            Size: 'S',
            Adjectives: 2,
            Colors: 4,
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Ring, Poison Container',
            base_material: 'Metal',
            Size: 'D',
            Adjectives: 2,
            Colors: 4,
            'Engraving/Stitchings': 4,
            Gems: 3,
            Quirks: 3
        },
        {
            weight: 2,
            entry: 'Saddlebags, Large',
            base_material: '1 - 2 Cloth 3 - 10 Leather',
            Size: 'H',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Saddlebags, Medium',
            base_material: '1 - 3 Cloth 4 - 10 Leather',
            Size: 'L',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Saddlebags, Small',
            base_material: '1 - 4 Cloth 5 - 10 Leather',
            Size: 'M',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Scabbard',
            base_material: '1 - 2 Cloth 3 - 6 Leather 7 Metal 8 - 10 Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 4,
            'Engraving/Stitchings': 3,
            Gems: 2,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Sheathe, Small',
            base_material: '1 - 2 Cloth 3 - 6 Leather 7 Metal 8 - 10 Wood',
            Size: 'S',
            Adjectives: 1,
            Colors: 4,
            'Engraving/Stitchings': 2,
            Gems: 2,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Sheathe, Wrist',
            base_material: '1 - 2 Cloth 3 - 6 Leather 7 Metal 8 - 10 Wood',
            Size: 'T',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Vial Holder, Belt',
            base_material: '1 - 4 Cloth 5 - 10 Leather',
            Size: 'T',
            Adjectives: 2,
            Colors: 2,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Waterskin',
            base_material: 'Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 1
        }
    ],
    [RAW_GOODS]: [
        { weight: 1, entry: 'Clothe' },
        { weight: 2, entry: 'Leather & Fur' },
        { weight: 3, entry: 'Metal' },
        { weight: 4, entry: 'Stone/Earthworks' },
        { weight: 5, entry: 'Wood' },
        { weight: 6, entry: 'Gems' }
    ],
    [RELIGIOUS_ITEMS]: [
        {
            weight: 2,
            entry: 'Altar Cloth',
            base_material: '1 - 9 Cloth 10 Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 7,
            'Engraving/Stitchings': 9,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Aspergillum',
            base_material: 'Metal & Wood',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Brazier',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 7,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Candle, Temple',
            base_material: 'Wax',
            Size: 'M',
            Adjectives: 2,
            Colors: 8,
            'Engraving/Stitchings': 2,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Censer',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 6,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Chalise',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 2,
            Colors: 2,
            'Engraving/Stitchings': 6,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Holy Symbol',
            base_material: '1 - 7 Metal 8 - 10 Wood',
            Size: 'T',
            Adjectives: 2,
            Colors: 3,
            'Engraving/Stitchings': 5,
            Gems: 2,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Incense',
            base_material: 'See Food > Spices & Seasonings',
            Size: 'D',
            Adjectives: 1,
            Colors: 9,
            'Engraving/Stitchings': 0,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Pilgrimage Badge',
            base_material: '1 - 6 Cloth 7 - 8 Leather 9 Wood 10 Metal',
            Size: 'D',
            Adjectives: 2,
            Colors: 7,
            'Engraving/Stitchings': 9,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Prayer Beads',
            base_material: '1 - 6 Wood 7 - 10 Metal',
            Size: 'D',
            Adjectives: 2,
            Colors: 9,
            'Engraving/Stitchings': 5,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sacred Texts',
            base_material: 'Cover: 1 Metal 2 - 7 Cloth 8 - 9 Leather 10 Wood Interior: Paper Product', Size: 'S',
            Adjectives: 3,
            Colors: 6,
            'Engraving/Stitchings': 7,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Snuffing Bell',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 4,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Talisman',
            base_material: '1 - 2 Metal 3 - 6 Wood 7 Leather 8 - 10 Cloth',
            Size: 'T',
            Adjectives: 2,
            Colors: 5,
            'Engraving/Stitchings': 1,
            Gems: 2,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Totem',
            base_material: '1 - 4 Metal 5 - 8 Wood 9 Leather 10 Cloth',
            Size: 'T',
            Adjectives: 1,
            Colors: 4,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 0
        }
    ],
    [SHIELDS]: [
        {
            weight: 1,
            entry: 'Buckler',
            base_material: '1 - 5 Wood 6 - 10 Metal',
            Size: 'S',
            Adjectives: 2,
            Colors: 4,
            'Engraving/Stitchings': 4,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Clothe',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 2,
            Colors: 9,
            'Engraving/Stitchings': 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Figure Eight',
            base_material: 'Wood & Leather',
            Size: 'M',
            Adjectives: 2,
            Colors: 9,
            'Engraving/Stitchings': 3,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Heater',
            base_material: '1 - 8 Wood 9 - 10 Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 6,
            'Engraving/Stitchings': 4,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Hoplon',
            base_material: '1 - 8 Wood 9 - 10 Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 5,
            'Engraving/Stitchings': 3,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Kite',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 2,
            Colors: 7,
            'Engraving/Stitchings': 4,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pavise',
            base_material: 'Wood',
            Size: 'L',
            Adjectives: 2,
            Colors: 9,
            'Engraving/Stitchings': 7,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Round',
            base_material: 'Wood & Metal',
            Size: 'M',
            Adjectives: 2,
            Colors: 6,
            'Engraving/Stitchings': 5,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Tower',
            base_material: 'Wood',
            Size: 'L',
            Adjectives: 2,
            Colors: 7,
            'Engraving/Stitchings': 6,
            Gems: 1,
            Quirks: 1
        }
    ],
    [TRADE_TOOLS]: [
        {
            weight: 1,
            entry: 'Adze',
            base_material: 'Wood & Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 'Auger',
            entry: 'Wood & Metal',
            base_material: 'L',
            Size: 1,
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 'Ax'
        },
        {
            weight: 'Wood & Metal',
            entry: 'M',
            base_material: 1,
            Size: 1,
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 'Bear Trap',
            Quirks: 'Metal'
        },
        {
            weight: 'M',
            entry: 2,
            base_material: 1,
            Size: 1,
            Adjectives: 3,
            Colors: 1,
            'Engraving/Stitchings': 'Bellows',
            Gems: 'Wood with 1 - 8 Leather 9 - 10 Cloth"',
            Quirks: 'M'
        },
        {
            weight: 1,
            entry: 2,
            base_material: 1,
            Size: 2,
            Adjectives: 1,
            Colors: 'Bow Drill',
            'Engraving/Stitchings': 'Wood & Metal',
            Gems: 'S',
            Quirks: 1
        },
        {
            weight: 1,
            entry: 1,
            base_material: 2,
            Size: 1,
            Adjectives: 'Branding Iron',
            Colors: 'Metal',
            'Engraving/Stitchings': 'S',
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 0,
            base_material: 1,
            Size: 'Brush, Cleaning',
            Adjectives: 'Wood',
            Colors: 'S',
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 1,
            base_material: 'Carding Comb',
            Size: 'Wood & Metal',
            Adjectives: 'S',
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 3,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Carpenter’s Square',
            base_material: '1 - 8 Wood 9 -10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 2,
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 'Chisel',
            entry: 'Metal',
            base_material: 'T',
            Size: 1,
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 'Cleaver'
        },
        {
            weight: 'Wood & Metal',
            entry: 'S',
            base_material: 2,
            Size: 1,
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 'Drill',
            Quirks: 'Metal'
        },
        {
            weight: 'T',
            entry: 1,
            base_material: 1,
            Size: 1,
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 'File',
            Gems: 'Metal',
            Quirks: 'T'
        },
        {
            weight: 1,
            entry: 1,
            base_material: 1,
            Size: 1,
            Adjectives: 1,
            Colors: 'Funnel',
            'Engraving/Stitchings': '1 - 8 Waxed Leather 9 - 10 Waxed Cloth',
            Gems: 'S',
            Quirks: 1
        },
        {
            weight: 1,
            entry: 1,
            base_material: 1,
            Size: 1,
            Adjectives: 'Glass Cutter',
            Colors: 'Wood & Metal',
            'Engraving/Stitchings': 'T',
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 1,
            base_material: 1,
            Size: 'Hammer',
            Adjectives: 'Wood & Metal',
            Colors: 'T',
            'Engraving/Stitchings': 2,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 1,
            base_material: 'Hatchet',
            Size: 'Wood & Metal',
            Adjectives: 'S',
            Colors: 2,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Hoe',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 'Horseshoe',
            entry: 'Metal',
            base_material: 'T',
            Size: 1,
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 'Mallet'
        },
        {
            weight: 'Wood',
            entry: 'T',
            base_material: 1,
            Size: 1,
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 'Nail 3”',
            Quirks: 'Metal'
        },
        {
            weight: 'F',
            entry: 1,
            base_material: 1,
            Size: 1,
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 'Oar',
            Gems: 'Wood',
            Quirks: 'M'
        },
        {
            weight: 1,
            entry: 2,
            base_material: 1,
            Size: 1,
            Adjectives: 1,
            Colors: 'Paddle',
            'Engraving/Stitchings': 'Wood',
            Gems: 'L',
            Quirks: 1
        },
        {
            weight: 2,
            entry: 1,
            base_material: 1,
            Size: 1,
            Adjectives: 'Pick',
            Colors: 'Wood & Metal',
            'Engraving/Stitchings': 'L',
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 1,
            base_material: 1,
            Size: 'Pitch Fork',
            Adjectives: 'Wood & Metal',
            Colors: 'L',
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 1,
            base_material: 'Planer',
            Size: 'Wood & Metal',
            Adjectives: 'S',
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 1,
            base_material: 'Pliers',
            Size: 'Metal',
            Adjectives: 'T',
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Powder, Chalk',
            base_material: 'Chalk',
            Size: 'D',
            Adjectives: 1,
            Colors: 4,
            'Engraving/Stitchings': 0,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 'Pully (2:1)',
            entry: 'Wood',
            base_material: 'T',
            Size: 1,
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 'Rake'
        },
        {
            weight: 'Wood & Metal',
            entry: 'L',
            base_material: 1,
            Size: 1,
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 'Saw',
            Quirks: 'Wood & Metal'
        },
        {
            weight: 'S',
            entry: 1,
            base_material: 1,
            Size: 1,
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 'Scissors',
            Gems: 'Wood & Metal',
            Quirks: 'T'
        },
        {
            weight: 1,
            entry: 1,
            base_material: 1,
            Size: 1,
            Adjectives: 1,
            Colors: 'Shears',
            'Engraving/Stitchings': 'Metal',
            Gems: 'T',
            Quirks: 1
        },
        {
            weight: 1,
            entry: 1,
            base_material: 1,
            Size: 1,
            Adjectives: "Shepherd's Crook",
            Colors: 'Wood',
            'Engraving/Stitchings': 'L',
            Gems: 2,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 1,
            base_material: 1,
            Size: 'Shovel',
            Adjectives: 'Wood & Metal',
            Colors: 'L',
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 0,
            base_material: 1,
            Size: 'Sickle',
            Adjectives: 'Wood & Metal',
            Colors: 'S',
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 0,
            base_material: 1,
            Size: 'Sledge',
            Adjectives: 'Wood & Metal',
            Colors: 'S',
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 1,
            base_material: 'Tongs',
            Size: 'Metal',
            Adjectives: 'T',
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Trowel',
            base_material: 'Wood & Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Wedge',
            base_material: '1 - 5 Wood 6 - 10 Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            'Engraving/Stitchings': 1,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Windlass',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 2,
            Colors: 1,
            'Engraving/Stitchings': 2,
            Gems: 2,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Wire, 1d10 * 10 ft',
            base_material: 'Metal',
            Size: 'D',
            Adjectives: 1,
            Colors: 3,
            'Engraving/Stitchings': 0,
            Gems: 0,
            Quirks: 1
        }
    ],
    [WEAPONS]: [
        { weight: 1, entry: [AXES] },
        { weight: 2, entry: [POLEARMS] },
        { weight: 3, entry: [SIDEARMS] },
        { weight: 4, entry: [SWORDS] },
        { weight: 5, entry: [TRAUMA] },
        { weight: 6, entry: [THROWN] },
        { weight: 7, entry: [MECHANICAL_RANGED] },
        { weight: 8, entry: [FIREARMS] }
    ],
    [WORKS_OF_ART]: [
        {
            weight: 1,
            entry: 'Painting',
            base_material: '1 - 3 Cloth 4 - 7 Leather 8 - 9 Wood 10 Metal',
            Size: 'L',
            Adjectives: 3,
            Colors: 9,
            'Engraving/Stitchings': 9,
            Gems: 0,
            Quirks: 1,
            Subject: 10
        },
        {
            weight: 1,
            entry: 'Pottery',
            base_material: 'Stone/Earthwork',
            Size: 'S',
            Adjectives: 3,
            Colors: 7,
            'Engraving/Stitchings': 9,
            Gems: 1,
            Quirks: 1,
            Subject: 10
        },
        {
            weight: 1,
            entry: 'Sculpture',
            base_material: 'Stone/Earthwork',
            Size: 'H',
            Adjectives: 3,
            Colors: 8,
            'Engraving/Stitchings': 9,
            Gems: 1,
            Quirks: 1,
            Subject: 10
        },
        {
            weight: 1,
            entry: 'Book',
            base_material: 'Cover: 1 Metal 2 - 7 Cloth 8 - 9 Leather 10 Wood Interior: Paper Product', Size: 'S',
            Adjectives: 3,
            Colors: 6,
            'Engraving/Stitchings': 9,
            Gems: 0,
            Quirks: 1,
            Subject: 10
        },
        {
            weight: 1,
            entry: 'Glassware',
            base_material: 'Glass',
            Size: 'S',
            Adjectives: 3,
            Colors: 8,
            'Engraving/Stitchings': 9,
            Gems: 1,
            Quirks: 1,
            Subject: 10
        },
        {
            weight: 1,
            entry: 'Tapestry',
            base_material: 'Wool',
            Size: 'H',
            Adjectives: 3,
            Colors: 9,
            'Engraving/Stitchings': 9,
            Gems: 0,
            Quirks: 1,
            Subject: 10
        }
    ],
    [FOOTWEAR]: [
        {
            weight: 1,
            entry: 'Boots, Ankle',
            base_material: 'Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 3,
            Stitchings: 2,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Boots, Calf',
            base_material: 'Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 3,
            Stitchings: 2,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Boots, Climbing',
            base_material: 'Leather & Wax',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            Stitchings: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Boots, Knee',
            base_material: 'Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 3,
            Stitchings: 2,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Boots, Riding, Calf',
            base_material: 'Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 4,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Boots, Riding, Knee',
            base_material: 'Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 4,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Boots, Riding, Thigh',
            base_material: 'Leather',
            Size: 'M',
            Adjectives: 2,
            Colors: 4,
            Stitchings: 2,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Boots, Thigh',
            base_material: 'Leather',
            Size: 'M',
            Adjectives: 2,
            Colors: 4,
            Stitchings: 2,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Chopines',
            base_material: '1 - 5 Leather 6 - 10 Cloth with Wood',
            Size: 'S',
            Adjectives: 2,
            Colors: 3,
            Stitchings: 4,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Clogs',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 3,
            Colors: 2,
            Stitchings: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Moccasins',
            base_material: 'Leather',
            Size: 'S',
            Adjectives: 3,
            Colors: 2,
            Stitchings: 7,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pattens',
            base_material: 'Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sandals',
            base_material: '1 - 3 Leather 4 - 10 Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sandshoes',
            base_material: '1 - 4 Leather 6 - 10 Cloth',
            Size: 'M',
            Adjectives: 3,
            Colors: 1,
            Stitchings: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Shoes, Dress',
            base_material: '1 - 7 Leather 8 - 10 Cloth',
            Size: 'S',
            Adjectives: 4,
            Colors: 9,
            Stitchings: 9,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Shoes, Simple',
            base_material: '1 - 5 Leather 6 - 10 Cloth',
            Size: 'S',
            Adjectives: 2,
            Colors: 3,
            Stitchings: 2,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Slippers',
            base_material: '1 - 5 Cloth 6 - 10 Fur',
            Size: 'S',
            Adjectives: 3,
            Colors: 9,
            Stitchings: 4,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Snowshoes',
            base_material: '1 - 4 Leather 6 - 10 Cloth',
            Size: 'M',
            Adjectives: 2,
            Colors: 1,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Socks',
            base_material: '1 - 8 Fur 9 - 10 Cloth',
            Size: 'S',
            Adjectives: 4,
            Colors: 9,
            Stitchings: 4,
            Quirks: 2
        }
    ],
    [HEADGEAR]: [
        {
            weight: 1,
            entry: 'Bandana',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 3,
            Colors: 6,
            Stitchings: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Barbette & Fillet',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            Stitchings: 3,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Beret',
            base_material: '1 - 7 Cloth 8 - 10 Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 4,
            Stitchings: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Cap',
            base_material: '1 - 4 Cloth 5 - 7 Leather 8 - 9 Fur 10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Caul',
            base_material: '1 - 8 Cloth 9 - 10 Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 2,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Chaperon',
            base_material: 'Cloth',
            Size: 'L',
            Adjectives: 2,
            Colors: 4,
            Stitchings: 4,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Clogs',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 2,
            Colors: 9,
            Stitchings: 1,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Coif',
            base_material: '1 - 8 Cloth 9 - 10 Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Ferroniere',
            base_material: '1 - 7 Cloth 8 - 10 Leather',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Fez',
            base_material: 'Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Stitchings: 1,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Hat',
            base_material: '1 - 3 Felt4 - 7 Straw 8 Cloth 9 Leather 10 Fur',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Headdress',
            base_material: 'Feathers (see Animal > Air) with 1 - 3 Cloth 4 - 10 Leather',
            Size: 'L',
            Adjectives: 3,
            Colors: 9,
            Stitchings: 9,
            Quirks: 2
        },
        {
            weight: 2,
            entry: 'Hood',
            base_material: '1 - 7 Cloth 8 - 10 Leather',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 2,
            entry: 'Skullcap',
            base_material: '1 - 6 Cloth 7 - 9 Leather 10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 2,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Turban',
            base_material: 'Cloth',
            Size: 'L',
            Adjectives: 1,
            Colors: 4,
            Stitchings: 2,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Veil',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Stitchings: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Wimple',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Stitchings: 1,
            Quirks: 1
        }
    ],
    [BODY]: [
        {
            weight: 1,
            entry: 'Apron',
            base_material: '1 - 4 Leather 5 - 10 Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            Stitchings: 1,
            Gems: 0,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Belt',
            base_material: '1 - 8 Leather 9 - 10 Cloth',
            Size: 'S',
            Adjectives: 2,
            Colors: 2,
            Stitchings: 1,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Braies',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 6,
            Stitchings: 3,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Breeches',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 6,
            Stitchings: 3,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Buckle',
            base_material: '1 - 8 Metal 9 - 10 Wood',
            Size: 'S',
            Adjectives: 3,
            Colors: 4,
            Stitchings: 3,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Cape',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'M',
            Adjectives: 3,
            Colors: 6,
            Stitchings: 2,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Cassock',
            base_material: 'Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 4,
            Stitchings: 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Chasbule',
            base_material: 'Cloth',
            Size: 'L',
            Adjectives: 1,
            Colors: 6,
            Stitchings: 3,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Chemise',
            base_material: 'Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 2,
            Stitchings: 2,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Choker',
            base_material: '1 - 7 Cloth 8 Leather 10 Fur',
            Size: 'S',
            Adjectives: 1,
            Colors: 4,
            Stitchings: 3,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Cloak',
            base_material: '1 - 5 Cloth 6 - 8 Leather 9 - 10 Fur',
            Size: 'M',
            Adjectives: 2,
            Colors: 6,
            Stitchings: 2,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Coat',
            base_material: '1 - 3 Cloth 4 - 10 Leather',
            Size: 'M',
            Adjectives: 2,
            Colors: 5,
            Stitchings: 3,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Codpiece',
            base_material: '1 - 6 Cloth 7 - 9 Leather 10 Metal',
            Size: 'T',
            Adjectives: 3,
            Colors: 9,
            Stitchings: 6,
            Gems: 1,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Cote',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 5,
            Stitchings: 5,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Cotehardie',
            base_material: '1 - 3 Leather 4 - 10 Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 7,
            Stitchings: 5,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Cyclas',
            base_material: 'Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 6,
            Stitchings: 5,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Doublet',
            base_material: '1 - 3 Leather 4 - 10 Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 7,
            Stitchings: 6,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Drawers',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 2,
            Colors: 9,
            Stitchings: 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Dress',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'L',
            Adjectives: 2,
            Colors: 9,
            Stitchings: 6,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Fullclothe',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            Stitchings: 5,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Gamash',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            Stitchings: 5,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Gloves',
            base_material: '1 - 3 Cloth 4 - 8 Leather 9 - 10 Fur',
            Size: 'S',
            Adjectives: 1,
            Colors: 4,
            Stitchings: 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Hosiery',
            base_material: 'Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 7,
            Stitchings: 4,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Houpeland',
            base_material: 'Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 6,
            Stitchings: 4,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Jerkin',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 6,
            Stitchings: 7,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Kilt',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'S',
            Adjectives: 2,
            Colors: 9,
            Stitchings: 3,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Liripipe',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'T',
            Adjectives: 1,
            Colors: 5,
            Stitchings: 4,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Mittens',
            base_material: '1 - 3 Cloth 4 - 5 Leather 6 - 10 Fur',
            Size: 'T',
            Adjectives: 1,
            Colors: 6,
            Stitchings: 4,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Robes',
            base_material: 'Cloth',
            Size: 'M',
            Adjectives: 2,
            Colors: 7,
            Stitchings: 6,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sash',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 8,
            Stitchings: 3,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Scarf',
            base_material: '1 - 6 Cloth 7 - 10 Fur',
            Size: 'S',
            Adjectives: 1,
            Colors: 8,
            Stitchings: 4,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Shirt',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 6,
            Stitchings: 4,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Surcote',
            base_material: '1 - 3 Leather 4 - 10 Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 8,
            Stitchings: 7,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sweater',
            base_material: 'Wool',
            Size: 'M',
            Adjectives: 1,
            Colors: 7,
            Stitchings: 9,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Toga',
            base_material: 'Cloth',
            Size: 'M',
            Adjectives: 1,
            Colors: 2,
            Stitchings: 1,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Tunic',
            base_material: '1 Leather 2 - 10 Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 6,
            Stitchings: 3,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Vest',
            base_material: '1 - 4 Leather 5 - 10 Cloth',
            Size: 'S',
            Adjectives: 1,
            Colors: 6,
            Stitchings: 3,
            Gems: 0,
            Quirks: 1
        }
    ],
    [ACCESSORIES]: [
        {
            weight: 1,
            entry: 'Brush, Grooming',
            base_material: '1 - 8 Wood 9 - 10 Metal',
            Size: 'T',
            Adjectives: 3,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Button',
            base_material: '1 - 2 Ivory 3 - 10 Wood',
            Size: 'F',
            Adjectives: 2,
            Colors: 3,
            'Engravings/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Comb',
            base_material: '1 - 8 Wood 9 - 10 Metal',
            Size: 'T',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Dog Collar',
            base_material: '1 - 7 Cloth 8 - 10 Leather',
            Size: 'T',
            Adjectives: 2,
            Colors: 2,
            'Engravings/Stitchings': 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Handkerchief',
            base_material: 'Cloth',
            Size: 'T',
            Adjectives: 2,
            Colors: 3,
            'Engravings/Stitchings': 2,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Horse Shoe',
            base_material: 'Metal',
            Size: 'T',
            Adjectives: 1,
            Colors: 0,
            'Engravings/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Napkin',
            base_material: 'Cloth',
            Size: 'T',
            Adjectives: 2,
            Colors: 2,
            'Engravings/Stitchings': 1,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Saddle',
            base_material: 'Leather',
            Size: 'L',
            Adjectives: 3,
            Colors: 1,
            'Engravings/Stitchings': 3,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Scarf',
            base_material: '1 - 6 Wool 7 - 9 Gauze 10 Silk (see Cloth)',
            Size: 'S',
            Adjectives: 2,
            Colors: 8,
            'Engravings/Stitchings': 3,
            Gems: 0,
            Quirks: 0
        },
        {
            weight: 1,
            entry: 'Staff, Walking',
            base_material: 'Wood',
            Size: 'S',
            Adjectives: 2,
            Colors: 1,
            'Engravings/Stitchings': 1,
            Gems: 1,
            Quirks: 2
        }
    ],
    [PREPPED_FOOD]: [
        {
            weight: 1,
            entry: 'Almond-Cream',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Bear Fat Dumplings',
            base_material: '1 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Bedroll',
            base_material: '2 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Blood',
            base_material: '0.02 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Boe',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Bree',
            base_material: '1.7 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Brose',
            base_material: '0.5 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Broth',
            base_material: '0.02 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Browncap',
            base_material: '0.01 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Butter (1lb)',
            base_material: '1.2 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Candy',
            base_material: '3 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Charmeats',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Cheese (1lb)',
            base_material: '1.2 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Comfirts',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Crips',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Daintiers',
            base_material: '2.3 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Egg',
            base_material: '0.05 sc',
            Size: 'F',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Fish Flay',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Forcemeat',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Fry',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Galainte',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Giblets',
            base_material: '1 - 4 Chicken 5 - 7 Goose (all above 0.01 sc) 8 - 9 Other Animal (0.03 sc) 10 Other Monster (0.1 sc)',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Gut Warmer',
            base_material: '.75 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Handpie',
            base_material: '1.2 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Hot Water Pastries',
            base_material: '1.6 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Lard (1 pt)',
            base_material: '1 sc',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Livers',
            base_material: '0.02 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Muggets',
            base_material: '1 - 3 Calf 4 - 5 Hogs 6 - 7 Sheep (all above 0.01 sc) 8 - 9 Other Animal (0.03 sc) 10 Other Monster (0.1 sc)',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Musted Sauce',
            base_material: '0.4 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Nice Drippings',
            base_material: '0.01 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Numbles',
            base_material: '0.03 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pap',
            base_material: '0.3 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pasta',
            base_material: '0.02 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pie',
            base_material: '1.3 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pottage',
            base_material: '0.3 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Preserves, Fruit',
            base_material: '3.2 sc For type Food > Fruits & Vegetables',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pynepaste',
            base_material: '0.1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Quenelle',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Quoses',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Roe',
            base_material: '2 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sausage, Blood',
            base_material: '0.01 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sausage, Pepper',
            base_material: '0.03 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sausage, Sailor’s',
            base_material: '0.01 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Scratch-Root Stew',
            base_material: '0.3 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Soorea',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Souse',
            base_material: '1.6 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Syrup',
            base_material: '0.1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        }
    ],
    [BREAD]: [
        {
            weight: 1,
            entry: 'Corn Dodgers',
            base_material: '0.3 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Fry Bread',
            base_material: '0.4 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Horse Bread',
            base_material: '0.38 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Manchet Bread',
            base_material: '1.3 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Maslin Bread',
            base_material: '0.48 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pan & Egg Bread',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sop Bread',
            base_material: '0.86 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Strongbread',
            base_material: '.3 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Wastel Bread',
            base_material: '1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 3,
            entry: 'Rations, Day',
            base_material: '2.5 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Biscuit, Hardtack',
            base_material: '0.2 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Bread, Rye',
            base_material: '0.44 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Bread, Wheat',
            base_material: '0.5 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        }
    ],
    [FRUIT_AND_VEGATABLES]: [
        {
            weight: 1,
            entry: 'Barberries',
            base_material: '1.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Bush Tomatoes',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Canabens',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Beets',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Cardoons',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Carrots',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Celozia',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Currants',
            base_material: '1.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Flattops',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Lemon',
            base_material: '2 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Liakeer',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Limes',
            base_material: '2 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Meat Grass',
            base_material: '1.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Mutries',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Onions',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Orange',
            base_material: '2 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pippins',
            base_material: '2 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pomace',
            base_material: '1.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Quadong',
            base_material: '1.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Quinces',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Raisins',
            base_material: '1.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Roundberries',
            base_material: '1.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Rozele',
            base_material: '2 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Salad',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Smalledge',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Skyrwits',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Spinach',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Taola',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Wardons',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Warrigals',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Wortes',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Jam',
            base_material: 'Roll again on this table for type 3 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pickles',
            base_material: '2 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Raisins',
            base_material: '1.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Seed, tobacco',
            base_material: '3 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        }
    ],
    [PROTEIN]: [
        {
            weight: 1,
            entry: 'Meat (1 lb) ',
            base_material: 'Animal > Land Base 4 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Fish (1 lb) ',
            base_material: 'Animal > Water Base 1 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Fowl (1 lb) ',
            base_material: 'Animal > Air Base 2 sc',
            Size: 'T',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        }
    ],
    [NUTS]: [
        {
            weight: 1,
            entry: 'Acorns',
            base_material: '0.3 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Almonds',
            base_material: '0.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Chestnuts',
            base_material: '0.3 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Hazelnuts',
            base_material: '0.3 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pinenuts',
            base_material: '0.3 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pistachios',
            base_material: '0.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sesame Seeds',
            base_material: '0.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Walnuts',
            base_material: '0.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        }
    ],
    [SPICES_AND_SEASONINGS]: [
        {
            weight: 1,
            entry: 'Honey (8 oz)',
            base_material: '1 sc',
            Size: 'D',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sugar (1 lb)',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Cinnamon (1 lb)',
            base_material: '4 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Ginger (1 lb)',
            base_material: '1.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Mace (1 lb)',
            base_material: '5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Molasses (1 lb)',
            base_material: '4 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Mustard (1 lb)',
            base_material: '1 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Nutmeg (1 lb)',
            base_material: '2.5 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Pectin (cup)',
            base_material: '0.2 sc',
            Size: 'D',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Salt (1 lb)',
            base_material: '0.45 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Saffron (1 lb)',
            base_material: '160 sc',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Quirks: 1
        }
    ],
    [AXES]: [
        {
            weight: 1,
            entry: 'Bardiche',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 5,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Battle Axe',
            base_material: 'Wood & Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Engravings: 5,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Handaxe',
            base_material: 'Wood & Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Engravings: 5,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Horsemans Pick',
            base_material: 'Wood & Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Engravings: 5,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Lochaber Axe',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 5,
            Quirks: 1
        }
    ],
    [POLEARMS]: [
        {
            weight: 1,
            entry: 'Ahlspiess',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Bill',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Glaive',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Guisarme',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Halberd',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Lance',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Lucerne',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Military Fork',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Pike',
            base_material: 'Wood & Metal',
            Size: 'H',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Planson',
            base_material: 'Wood & Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Ranseur',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Short Spear',
            base_material: 'Wood & Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Sovnya',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Voulge',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'War-scythe',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 1,
            Engravings: 3,
            Quirks: 2
        }
    ],
    [SIDEARMS]: [
        {
            weight: 1,
            entry: 'Brass Knuckles',
            base_material: 'Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Cinquedea',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Dagger',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Knife',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Stiletto',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Dusack',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Katzbalger',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Scourge',
            base_material: 'Handle: 1 - 3 Wood 4 Metal 5 - 10 Leather',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 1,
            Quirks: 2
        }
    ],
    [SWORDS]: [
        {
            weight: 1,
            entry: 'Arming Sword',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Court Sword',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Estoc',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: "Executioner's Sword ",
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'H',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Falchion',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Koncerz',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Longsword',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Messer',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Rapier',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Sabre',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Schaivona',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Zweihander',
            base_material: 'Hilt: Leather & Wood Blade: Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 2
        }
    ],
    [TRAUMA]: [
        {
            weight: 1,
            entry: 'Bec De Corbin',
            base_material: 'Metal & Wood',
            Size: 'L',
            Adjectives: 1,
            Colors: 2,
            'Engravings/Stitchings': 4,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Bludgeon',
            base_material: '1 - 6 Wood 7 - 10 Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 6,
            'Engravings/Stitchings': 2,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Club',
            base_material: 'Wood',
            Size: 'M',
            Adjectives: 1,
            Colors: 4,
            'Engravings/Stitchings': 2,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Mace',
            base_material: 'Handle: 1 - 7 Wood 8 - 10 Metal Head: Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 2,
            'Engravings/Stitchings': 5,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Maul',
            base_material: 'Handle: 1 - 7 Wood 8 - 10 Metal Head: 1 - 7 Wood 8 - 10 Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 2,
            'Engravings/Stitchings': 4,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Goedendag',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 3,
            Gems: 0,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Great Hammer',
            base_material: 'Wood & Metal',
            Size: 'H',
            Adjectives: 1,
            Colors: 2,
            'Engravings/Stitchings': 6,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: "Peasant's Flail",
            base_material: 'Handle: 1 - 7 Wood 8 - 10 Metal Head: 1 - 7 Wood 8 - 10 Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 2,
            'Engravings/Stitchings': 2,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Quarterstaff',
            base_material: '1 - 8 Wood 9 - 10 Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 7,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'War Flail',
            base_material: 'Wood & Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 5,
            'Engravings/Stitchings': 2,
            Gems: 2,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'War Hammer',
            base_material: 'Wood & Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 2,
            'Engravings/Stitchings': 6,
            Gems: 2,
            Quirks: 1
        }
    ],
    [THROWN]: [
        {
            weight: 1,
            entry: 'Javelin',
            base_material: '1 - 8 Wood 9 - 10 Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 7,
            Engravings: 3,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Throwing Axe',
            base_material: 'Wood & Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 3,
            Engravings: 3,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Throwing Knife',
            base_material: 'Wood & Metal',
            Size: 'S',
            Adjectives: 1,
            Colors: 2,
            Engravings: 4,
            Quirks: 1
        }
    ],
    [MECHANICAL_RANGED]: [
        {
            weight: 1,
            entry: 'Bellybow',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 3,
            'Engravings/Stitchings': 7,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Composite Bow',
            base_material: '1 - 3 Wood 4 - 9 Horn 10 Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 7,
            'Engravings/Stitchings': 3,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Crossbow',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 5,
            'Engravings/Stitchings': 3,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Latchet Crossbow',
            base_material: 'Wood & Metal',
            Size: 'M',
            Adjectives: 1,
            Colors: 6,
            'Engravings/Stitchings': 4,
            Gems: 1,
            Quirks: 2
        },
        {
            weight: 1,
            entry: 'Longbow',
            base_material: '1 - 9 Wood 10 Metal',
            Size: 'L',
            Adjectives: 1,
            Colors: 8,
            'Engravings/Stitchings': 2,
            Gems: 1,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Sling',
            base_material: '1 - 3 Cloth 4 - 6 Twine 7 - 10 Thread',
            Size: 'S',
            Adjectives: 1,
            Colors: 8,
            'Engravings/Stitchings': 5,
            Gems: 0,
            Quirks: 1
        },
        {
            weight: 1,
            entry: 'Warbow',
            base_material: '1 - 6 Wood 7 - 10 Metal',
            Size: 'H',
            Adjectives: 1,
            Colors: 9,
            'Engravings/Stitchings': 3,
            Gems: 2,
            Quirks: 1
        }
    ],
    [FIREARMS]: [
        {
            weight: 3,
            entry: 'Fire Lance',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 2,
            'Weapon Colors': 4,
            'Explosion Colors': 8,
            Engravings: 4,
            Gems: 0,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Hakenbuchse',
            base_material: 'Wood & Metal',
            Size: 'L',
            Adjectives: 2,
            'Weapon Colors': 5,
            'Explosion Colors': 3,
            Engravings: 6,
            Gems: 1,
            Quirks: 3
        },
        {
            weight: 1,
            entry: 'Handgonne',
            base_material: 'Wood & Metal',
            Size: 'M',
            Adjectives: 2,
            'Weapon Colors': 6,
            'Explosion Colors': 5,
            Engravings: 5,
            Gems: 1,
            Quirks: 3
        }
    ],
    [CLOTH]: [
        { weight: 1, entry: 'Serge', value: '.19 sc' },
        { weight: 1, entry: 'Burlap', value: '.3 sc' },
        { weight: 1, entry: 'Canvas', value: '.32 sc' },
        { weight: 1, entry: 'Linen', value: '.37 sc' },
        { weight: 1, entry: 'Cotton', value: '.5 sc' },
        { weight: 1, entry: 'Wool', value: '.54 sc' },
        { weight: 1, entry: 'Calico', value: '.62 sc' },
        { weight: 1, entry: 'Satin', value: '.66 sc' },
        { weight: 1, entry: 'Taffeta', value: '.75 sc' },
        { weight: 1, entry: 'Cambric', value: '.87 sc' },
        { weight: 1, entry: 'Muslin', value: '1 sc' },
        { weight: 1, entry: 'Worsted', value: '1 sc' },
        { weight: 1, entry: 'Hemp', value: '1.25 sc' },
        { weight: 1, entry: 'Fustian', value: '1.87 sc' },
        { weight: 1, entry: 'Bokeram', value: '2.25 sc' },
        { weight: 1, entry: 'Pintado', value: '2.5 sc' },
        { weight: 1, entry: 'Mohair', value: '3.12 sc' },
        { weight: 1, entry: 'Damask', value: '3.75 sc' },
        { weight: 1, entry: 'Tussah', value: '4 sc' },
        { weight: 1, entry: 'Silk', value: '4.125 sc' },
        { weight: 1, entry: 'Tartan', value: '5 sc' },
        { weight: 1, entry: 'Cashmere', value: '5.62 sc' },
        { weight: 1, entry: 'Merino', value: '7.5 sc' },
        { weight: 1, entry: 'Brocade', value: '10.5 sc' },
        { weight: 1, entry: 'Samite', value: '12.5 sc' },
        { weight: 1, entry: 'Velvet', value: '12.5 sc' },
        { weight: 1, entry: EXOTIC_CLOTH, value: 0 }
    ],
    [EXOTIC_CLOTH]: [
        { weight: 1, entry: 'Aegis Cloth', value: 0 },
        { weight: 1, entry: 'Brisingamen Cloth', value: 0 },
        { weight: 1, entry: 'Cloth of Nessus', value: 0 },
        { weight: 1, entry: 'Babr-e Bayan Cloth', value: 0 },
        { weight: 1, entry: 'Spidersilk', value: 0 },
        { weight: 1, entry: 'Woven Metal (See Metal)', value: 0 }
    ],
    [FUR_OR_LEATHER]: [
        { weight: 1, entry: FUR },
        { weight: 1, entry: LEATHER },
    ],
    [FUR]: [
        { weight: 12, entry: 'Marten', value: '2.5 sc' },
        { weight: 12, entry: 'Stoat', value: '12.5 sc' },
        { weight: 12, entry: 'Other Animal', value: '12.5 sc' },
        { weight: 11, entry: 'Sable', value: '18.75 sc' },
        { weight: 10, entry: 'Beaver', value: '25 sc' },
        { weight: 10, entry: 'Ermine', value: '31.25 sc' },
        { weight: 10, entry: 'Vair', value: '37.5 sc' },
        { weight: 4, entry: 'Monster, Common', value: '25 sc' },
        { weight: 3, entry: 'Monster, Uncommon', value: '62.5 sc' },
        { weight: 2, entry: 'Monster, Rare', value: '125 sc' },
        { weight: 1, entry: 'Monster, Legendary', value: '250 sc' }
    ],
    [LEATHER]: [
        { weight: 16, entry: 'Cow', value: '1 sc' },
        { weight: 16, entry: 'Chamois', value: '3.125 sc' },
        { weight: 15, entry: 'Cordovan', value: '20.625 sc' },
        { weight: 14, entry: 'Snakeskin', value: '125 sc' },
        { weight: 14, entry: 'Other Animal', value: '1.25 sc' },
        { weight: 9, entry: 'Monster, Common', value: '25 sc' },
        {
            weight: 4,
            entry: 'Sentient Person (See Race of Origin)',
            value: '60 sc'
        },
        { weight: 4, entry: 'Monster, Uncommon', value: '62.5 sc' },
        { weight: 2, entry: 'Monster, Rare', value: '125 sc' },
        { weight: 1, entry: 'Monster, Legendary', value: '250 sc' }
    ],
    [METAL]: [
        { weight: 13, entry: 'Lead', value: '.05 sc' },
        { weight: 13, entry: 'Iron', value: '.07 sc' },
        { weight: 12, entry: 'Tin', value: '.1 sc' },
        { weight: 12, entry: 'Copper', value: '.15 sc' },
        { weight: 12, entry: 'Brass', value: '.25 sc' },
        { weight: 11, entry: 'Bronze', value: '.5 sc' },
        { weight: 11, entry: 'Silver', value: '1.5 sc' },
        { weight: 10, entry: 'Gold', value: '12 sc' },
        { weight: 1, entry: EXOTIC_METAL, value: 0 }
    ],
    [EXOTIC_METAL]: [
        { weight: 6, entry: 'Adamant', value: 0 },
        { weight: 6, entry: 'Adamantium', value: 0 },
        { weight: 6, entry: 'Administratium', value: 0 },
        { weight: 6, entry: 'Aquelium', value: 0 },
        { weight: 6, entry: 'Chronoton', value: 0 },
        { weight: 6, entry: 'Hedonium', value: 0 },
        { weight: 6, entry: 'Mithril', value: 0 },
        { weight: 6, entry: 'Orichalcum', value: 0 },
        { weight: 6, entry: 'Plutulium', value: 0 },
        { weight: 6, entry: 'Red Mercury', value: 0 },
        { weight: 5, entry: 'Star Metal', value: 0 },
        { weight: 5, entry: 'Terrelium', value: 0 },
        { weight: 5, entry: 'Versamina', value: 0 },
        { weight: 5, entry: 'Volcanic Glass', value: 0 },
        {
            weight: 5,
            entry: 'Enchanted Stone (See Exotic Stone/Earthwork)',
            value: 0
        }
    ],
    [PAPER_PRODUCT]: [
        { weight: 1, entry: 'Paper', value: '.25 sc' },
        { weight: 1, entry: 'Papyrus', value: '1 sc' },
        { weight: 1, entry: PARCHMENT, value: '.75 sc' },
        { weight: 1, entry: VELLUM, value: '.5 sc' }
    ],
    [PARCHMENT]: [
        { weight: 5, entry: 'Cow' },
        { weight: 4, entry: 'Goat' },
        { weight: 4, entry: 'Sheep' },
        { weight: 3, entry: 'Other Common Animal (See Leather)' },
        { weight: 1, entry: 'Other Animal' },
        { weight: 1, entry: 'Monster' },
        { weight: 1, entry: 'Sentient Person (see Race of Origin)' }
    ],
    [VELLUM]: [
        { weight: 5, entry: 'Cow' },
        { weight: 4, entry: 'Goat' },
        { weight: 4, entry: 'Sheep' },
        { weight: 3, entry: 'Other Common Animal (See Leather)' },
        { weight: 1, entry: 'Other Animal' },
        { weight: 1, entry: 'Monster' },
        { weight: 1, entry: 'Sentient Person (see Race of Origin)' }
    ],
    [STONE_EARTHWORK]: [
        { weight: 5, entry: 'Clay', value: '.00095 sc' },
        { weight: 5, entry: 'Armorstone', value: '.001625 sc' },
        { weight: 5, entry: 'Basalt', value: '.005375 sc' },
        { weight: 5, entry: 'Limestone', value: '.0089 sc' },
        { weight: 5, entry: 'Earthenware', value: '.0625 sc' },
        { weight: 5, entry: 'Pottery', value: '.125 sc' },
        { weight: 5, entry: 'Tufa', value: '.3125 sc' },
        { weight: 5, entry: 'Travertine', value: '.375 sc' },
        { weight: 5, entry: 'Wax', value: '1 sc' },
        { weight: 5, entry: 'Slate', value: '1.875 sc' },
        { weight: 4, entry: 'Granite', value: '2.4 sc' },
        { weight: 4, entry: 'Flint', value: '2.5 sc' },
        { weight: 4, entry: 'Alabaster', value: '2.875 sc' },
        { weight: 4, entry: 'Sandstone', value: '2.8725 sc' },
        { weight: 4, entry: 'Quartz', value: '7.5 sc' },
        { weight: 4, entry: 'Marble', value: '9.375 sc' },
        { weight: 4, entry: 'Crystal', value: '11.25 sc' },
        { weight: 3, entry: 'Glass', value: '12.5 sc' },
        { weight: 1, entry: EXOTIC_STONE_EARTHWORK, value: 0 }
    ],
    [EXOTIC_STONE_EARTHWORK]: [
        { weight: 3, entry: 'Adder Stone', value: 0 },
        { weight: 3, entry: 'Alatyr', value: 0 },
        { weight: 3, entry: 'Baetylus', value: 0 },
        { weight: 3, entry: 'Benben', value: 0 },
        { weight: 3, entry: 'Bezoar', value: 0 },
        { weight: 3, entry: 'Charmstone', value: 0 },
        { weight: 3, entry: 'Colored Stone of Nuwa', value: 0 },
        { weight: 3, entry: 'Edun Ara', value: 0 },
        { weight: 3, entry: 'Gjoll', value: 0 },
        { weight: 3, entry: 'Lapis Manalis', value: 0 },
        { weight: 3, entry: 'Lia Fail', value: 0 },
        { weight: 3, entry: 'Llech Ronw', value: 0 },
        { weight: 3, entry: 'Madstone', value: 0 },
        { weight: 2, entry: 'Omphalos', value: 0 },
        { weight: 2, entry: "Philosopher's Stone", value: 0 },
        { weight: 2, entry: 'Seer Stone', value: 0 },
        { weight: 2, entry: 'Sessho-seki', value: 0 },
        { weight: 2, entry: 'Singasteinn', value: 0 },
        { weight: 2, entry: 'Skofnung', value: 0 },
        { weight: 2, entry: 'Sledovik', value: 0 },
        { weight: 2, entry: 'Snakestone', value: 0 },
        { weight: 2, entry: 'Stone of Giramphiel', value: 0 },
        { weight: 2, entry: 'Stone of Scone', value: 0 },
        { weight: 2, entry: 'Thunderstone', value: 0 },
        { weight: 2, entry: 'Toadstone', value: 0 },
        { weight: 2, entry: 'Uluru', value: 0 },
        { weight: 2, entry: 'Urim & Thummim', value: 0 },
        { weight: 2, entry: 'Vaidurya', value: 0 },
        { weight: 2, entry: 'Xirang', value: 0 }
    ],
    [WOOD]: [
        { weight: 3, entry: 'Pine', value: '.35875 sc' },
        { weight: 3, entry: 'Aspen', value: '.5 sc' },
        { weight: 3, entry: 'Oak', value: '.55 sc' },
        { weight: 2, entry: 'Basswood', value: '.575 sc' },
        { weight: 2, entry: 'Hickory', value: '.59375 sc' },
        { weight: 2, entry: 'Poplar', value: '.625 sc' },
        { weight: 2, entry: 'Ash', value: '.625 sc' },
        { weight: 2, entry: 'Cherry', value: '.675 sc' },
        { weight: 2, entry: 'Butternut', value: '.775 sc' },
        { weight: 2, entry: 'Beech', value: '.78625 sc' },
        { weight: 2, entry: 'Ambrosia Maple', value: '.875 sc' },
        { weight: 2, entry: 'Yew', value: '1 sc' },
        { weight: 2, entry: 'Sapele', value: '1 sc' },
        { weight: 2, entry: 'Balsa', value: '1.0625 sc' },
        { weight: 2, entry: 'Mahogany', value: '1.15 sc' },
        { weight: 2, entry: 'Bark Pocket Maple', value: '1.125 sc' },
        { weight: 2, entry: 'Jatoba', value: '1.2375 sc' },
        { weight: 2, entry: 'Acacia', value: '1.3125 sc' },
        { weight: 2, entry: 'Cedar', value: '1.375 sc' },
        { weight: 2, entry: 'Paduk', value: '1.5625 sc' },
        { weight: 2, entry: 'Walnut', value: '1.5875 sc' },
        { weight: 2, entry: 'Birch', value: '1.625 sc' },
        { weight: 2, entry: 'Purpleheart', value: '1.75 sc' },
        { weight: 2, entry: 'Redwood', value: '1.875 sc' },
        { weight: 2, entry: 'Goncalo Alves', value: '2 sc' },
        { weight: 2, entry: 'Chechen', value: '2.02 sc5' },
        { weight: 2, entry: 'Canarywood', value: '2.075 sc' },
        { weight: 2, entry: 'Yellowheart', value: '2.125 sc' },
        { weight: 2, entry: 'Chakte Viga', value: '2.1875 sc' },
        { weight: 2, entry: 'Ebiara', value: '2.20625 sc' },
        { weight: 2, entry: 'Lacewood', value: '2.225 sc' },
        { weight: 2, entry: 'Bloodwood', value: '2.25 sc' },
        { weight: 2, entry: 'Leopardwood', value: '2.33125 sc' },
        { weight: 2, entry: 'Granadillo', value: '2.375 sc' },
        { weight: 2, entry: 'Osage Orange', value: '2.5 sc' },
        { weight: 2, entry: 'Katalox', value: '2.75 sc' },
        { weight: 2, entry: 'Bubinga', value: '2.8125 sc' },
        { weight: 2, entry: 'Wenge', value: '2.875 sc' },
        { weight: 2, entry: 'Zebrawood', value: '2.875 sc' },
        { weight: 2, entry: 'Mango', value: '2.875 sc' },
        { weight: 2, entry: 'Redheart', value: '3.3625 sc' },
        { weight: 2, entry: 'Bocote', value: '4 sc' },
        { weight: 2, entry: 'Rosewood', value: '4.125 sc' },
        { weight: 2, entry: 'Holly', value: '4.375 sc' },
        { weight: 2, entry: 'Olivewood', value: '4.625 sc' },
        { weight: 2, entry: 'Teak', value: '5.325 sc' },
        { weight: 2, entry: 'Cocobolo', value: '8.125 sc' },
        { weight: 2, entry: 'Ebony', value: '18.75 sc' },
        { weight: 1, entry: EXOTIC_WOOD, value: 0 }
    ],
    [EXOTIC_WOOD]: [
        { weight: 1, entry: 'Akshayavat', value: 0 },
        { weight: 1, entry: 'Ashvattha', value: 0 },
        { weight: 1, entry: 'Displacer Tree', value: 0 },
        { weight: 1, entry: 'Dryad Heartwood, Unwillingly Taken', value: 0 },
        { weight: 1, entry: 'Dryad Heartwood, Willingly Given', value: 0 },
        { weight: 1, entry: 'Ent', value: 0 },
        { weight: 1, entry: 'Fusang', value: 0 },
        { weight: 1, entry: 'Guardian Tree', value: 0 },
        { weight: 1, entry: 'Jinmenju', value: 0 },
        { weight: 1, entry: 'Jubokko', value: 0 },
        { weight: 1, entry: 'Kai-n-Tiku-Aba', value: 0 },
        { weight: 1, entry: 'Kapre', value: 0 },
        { weight: 1, entry: 'Lotus Tree', value: 0 },
        { weight: 1, entry: 'Money Tree', value: 0 },
        { weight: 1, entry: 'Nariphon', value: 0 },
        { weight: 1, entry: 'Shatrin', value: 0 },
        { weight: 1, entry: 'Sky-High Tree', value: 0 },
        { weight: 1, entry: 'Talking Tree', value: 0 },
        { weight: 1, entry: 'Tree of Jiva and Atman', value: 0 },
        { weight: 1, entry: 'Tree of Life', value: 0 },
        { weight: 1, entry: 'Tree of Paradise', value: 0 },
        { weight: 1, entry: 'True Maypole Wood', value: 0 },
        { weight: 1, entry: 'Tuba', value: 0 },
        { weight: 1, entry: 'Tulasi', value: 0 },
        { weight: 1, entry: 'Uekera', value: 0 },
        { weight: 1, entry: 'Vine of Sodom', value: 0 },
        { weight: 1, entry: 'Weirdwood', value: 0 },
        { weight: 1, entry: 'White Tree', value: 0 },
        { weight: 1, entry: 'Wishing Tree', value: 0 },
        { weight: 1, entry: 'Wood from the Five Trees', value: 0 },
        { weight: 1, entry: 'World Tree', value: 0 },
        { weight: 1, entry: 'Zapis', value: 0 },
        { weight: 1, entry: 'Zaqqum', value: 0 }
    ],
    [WAX]: [
        { value: '1.368 sc', entry: 'Bee', weight: 1 },
        { value: '5 sc', entry: 'Whale Head', weight: 1 },
        { value: '2.5 sc', entry: 'Bayberry', weight: 1 },
        { value: '0.162 sc', entry: 'Carnauba', weight: 1 },
        { value: '0.179 sc', entry: 'Candelilla', weight: 1 },
        { value: '0.148 sc', entry: 'Rice Bran', weight: 1 },
        { value: '0.028 sc', entry: 'Soy', weight: 1 },
        { value: '0.6 sc', entry: 'Jojoba', weight: 1 }
    ],
    other_table: [
        {
            entry: 'Bone, Animal',
            value: '0.25 sc',
            subtable: 'See Animal subtable'
        },
        { entry: 'Bone, Monster', value: '3 sc', subtable: 0 },
        {
            entry: 'Bone, Sentient',
            value: '5 sc',
            subtable: 'See Race of Origin subtable'
        },
        { entry: 'Chalk', value: '0.1 sc', subtable: 0 },
        { entry: 'Chewing Tobacco', value: '0.873 sc', subtable: 0 },
        { entry: 'Cotton', value: '0.148 sc', subtable: 0 },
        { entry: 'Crystal', value: '3.75 sc', subtable: 0 },
        {
            entry: 'Down',
            value: '1.75 sc',
            subtable: 'See Animal > Air subtable'
        },
        {
            entry: 'Feather',
            value: '1.18 sc',
            subtable: 'See Animal > Air subtable'
        },
        { entry: 'Felt', value: '2.5 sc', subtable: 0 },
        { entry: 'Gauze', value: '1.1725 sc', subtable: 0 },
        { entry: 'Glass', value: '5 sc', subtable: 0 },
        {
            entry: 'Goose Feather',
            value: '1.18 sc',
            subtable: 'See Animal > Air subtable'
        },
        {
            entry: 'Heavy Down',
            value: '2.1 sc',
            subtable: 'See Animal > Air subtable'
        },
        {
            entry: 'Heavy Feather',
            value: '2 sc',
            subtable: 'See Animal > Air subtable'
        },
        { entry: 'Hemp Oil', value: '0.17 sc', subtable: 0 },
        {
            entry: 'Horn',
            value: '2.25 sc',
            subtable: 'See Animal > Land subtable'
        },
        { entry: 'Ivory', value: '5 sc', subtable: 0 },
        { entry: 'Linseed Oil', value: '0.581 sc', subtable: 0 },
        { entry: 'Porcelain', value: '3.75 sc', subtable: 0 },
        { entry: 'Porcupine Spine', value: '0.737 sc', subtable: 0 },
        { entry: 'Smoking Tobacco', value: '1.5 sc', subtable: 0 },
        { entry: 'Straw', value: '0.0005 sc', subtable: 0 },
        { entry: 'Tallow', value: '0.091 sc', subtable: 0 },
        { entry: 'Thread', value: '0.009 sc', subtable: 0 },
        { entry: 'Twine', value: '0.02 sc', subtable: 0 },
        { entry: 'Whale Oil', value: '0.0097 sc', subtable: 0 },
        { entry: 'Wicker', value: '0.08 sc', subtable: 'See Wood subtable' },
        { entry: 'Wool', value: '0.48 sc', subtable: 0 }
    ]
}