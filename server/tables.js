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
    METAL, WOOD, WAX, SIZE, ADJECTIVES, COLORS, ENGRAVINGS, STITCHINGS,
    GEMS, QUIRKS, RACE_OF_ORIGIN, ANIMAL_SUBTYPE, ANIMAL_AIR, ANIMAL_LAND, ANIMAL_WATER } = require('./constants')

module.exports = {
    item_tables_with_subtables: [CLOTHING, FOOD, WEAPONS, RAW_GOODS, FUR_OR_LEATHER, WAX, PARCHMENT, VELLUM, EXOTIC_CLOTH, EXOTIC_METAL, EXOTIC_STONE_EARTHWORK, EXOTIC_WOOD, ANIMAL_SUBTYPE],
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
            base_material: METAL,
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 3,
            [GEMS]: 4,
            [QUIRKS]: 3
        },
        {
            weight: 6,
            entry: 'Astrolabe',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 3,
            [GEMS]: 3,
            [QUIRKS]: 3
        },
        {
            weight: 7,
            entry: 'Balance & Weights',
            base_material: METAL,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 7,
            entry: 'Book, Hollow',
            base_material: [{ label: 'Cover', materials: [{ weight: 1, material: METAL }, { weight: 5, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 1, material: WOOD }] }, { label: 'Interior', materials: PAPER_PRODUCT }],
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 5,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 6,
            entry: 'Hourglass',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 7,
            entry: 'Inkwell',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [ENGRAVINGS]: 1,
            [GEMS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 6,
            entry: 'Magnifying Glass',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 7,
            entry: 'Paper (per 50 sheets)',
            base_material: PAPER_PRODUCT,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [ENGRAVINGS]: 0,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 7,
            entry: 'Personal Seal',
            base_material: METAL,
            [SIZE]: 'D',
            [ADJECTIVES]: 4,
            [COLORS]: 8,
            [ENGRAVINGS]: 9,
            [GEMS]: 3,
            [QUIRKS]: 1
        },
        {
            weight: 7,
            entry: 'Quill',
            base_material: [{ weight: 3, material: 'Porcupine Spine' }, { weight: 6, material: 'Goose Feather' }],
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 0,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 7,
            entry: 'Scale, Merchant’s',
            base_material: METAL,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 3
        },
        {
            weight: 7,
            entry: 'Sealing WAX',
            base_material: WAX,
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 9,
            [ENGRAVINGS]: 0,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 7,
            entry: 'Writing Tablet',
            base_material: [{ weight: 6, material: 'Clay', subtable: STONE_EARTHWORK }, { weight: 2, material: WAX }, { weight: 1, material: 'Slate', subtable: STONE_EARTHWORK }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        }
    ],
    [ADVENTURING_GEAR]: [
        {
            weight: 2,
            entry: 'Bedroll',
            base_material: [{ weight: 4, material: CLOTH }, { weight: 3, material: LEATHER }, { weight: 2, material: FUR }],
            [SIZE]: 'M',
            [ADJECTIVES]: 4,
            [COLORS]: 4,
            [STITCHINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Blade Pole',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Blanket',
            base_material: [{ weight: 6, material: CLOTH }, { weight: 1, material: LEATHER }, { weight: 2, material: FUR }],
            [SIZE]: 'S',
            [ADJECTIVES]: 4,
            [COLORS]: 4,
            [STITCHINGS]: 4,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Block & Tackle',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Cage, Rabbit Trap',
            base_material: METAL,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 3
        },
        {
            weight: 2,
            entry: 'Caltrops',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Camp Bed',
            base_material: [{ weight: 5, material: CLOTH }, { weight: 3, material: LEATHER }, { weight: 1, material: FUR }],
            [SIZE]: 'L',
            [ADJECTIVES]: 5,
            [COLORS]: 5,
            [STITCHINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Chain, 1d10 ft',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Chalk Stick',
            base_material: 'Chalk',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 7,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Climbing Harness',
            base_material: [{ weight: 3, material: CLOTH }, { weight: 6, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [STITCHINGS]: 2,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Compass',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 3
        },
        {
            weight: 2,
            entry: 'Crampons, pair',
            base_material: [LEATHER, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Cross-Staff',
            base_material: [{ weight: 3, material: WOOD }, { weight: 6, material: METAL }],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Crowbar',
            base_material: METAL,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Darksuit',
            base_material: [{ weight: 8, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [STITCHINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Dowsing Rod',
            base_material: [{ weight: 8, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Firestarter',
            base_material: [WOOD, METAL],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Fish Trap',
            base_material: [{ weight: 9, material: 'Wicker' }, { weight: 10, material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Fishhook',
            base_material: [{ weight: 1, material: 'Bone, Sentient', subtable: RACE_OF_ORIGIN }, { weight: 6, material: 'Bone, Animal', subtable: ANIMAL_SUBTYPE }, { weight: 1, material: 'Bone, Monster' }, { weight: 2, material: METAL }],
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Fishing Line ',
            base_material: [{ weight: 6, material: 'Thread' }, { weight: 3, material: 'Twine' }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Fishing Net (25 sq ft)',
            base_material: [{ weight: 6, material: 'Thread' }, { weight: 3, material: 'Twine' }],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Fishing Pole',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Footpads',
            base_material: [{ weight: 8, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Grapnel Hook',
            base_material: METAL,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Hammock',
            base_material: [{ weight: 9, material: CLOTH }, { weight: 1, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 4,
            [STITCHINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Hooked Pole',
            base_material: [{ weight: 3, material: METAL }, { weight: 6, material: WOOD }],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Horseshoe',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Insect Netting',
            base_material: [{ weight: 6, material: 'Thread' }, { weight: 3, material: 'Twine' }],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Ladder, 10 ft',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Lard (pint)',
            value: '1 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Listening Cone',
            base_material: [{ weight: 4, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 3, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Lock',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 4,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 3
        },
        {
            weight: 2,
            entry: 'Lock Chisel',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Lockpicks, Set',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 4,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Manacles',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 4,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 4
        },
        {
            weight: 1,
            entry: 'Marbles',
            base_material: [{ weight: 3, material: METAL }, { weight: 6, material: WOOD }],
            [SIZE]: 'D',
            [ADJECTIVES]: 6,
            [COLORS]: 9,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Mini-blade',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Mirror Pole',
            base_material: [{ weight: 1, material: 'Glass' }, { weight: 2, material: 'Silver', subtable: METAL }, { weight: 3, material: 'Brass', subtable: METAL }],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Pegleg',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 4,
            [COLORS]: 3,
            [ENGRAVINGS]: 4,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Pell',
            base_material: [{ weight: 7, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Pole, 10 ft',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Quintain',
            base_material: WOOD,
            [SIZE]: 'H',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Reed, Hollow',
            base_material: WOOD,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sewing Needle',
            base_material: [{ weight: 4, material: WOOD }, { weight: 2, material: METAL }, { weight: 1, material: 'Bone, Sentient', subtable: RACE_OF_ORIGIN }, { weight: 2, material: 'Bone, Animal', subtable: ANIMAL_SUBTYPE }, { weight: 1, material: 'Bone, Monster' }],
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Sextant',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 1,
            [ENGRAVINGS]: 4,
            [QUIRKS]: 3
        },
        {
            weight: 2,
            entry: 'Stake, Anti-Vampire',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Tack, 3/4”',
            base_material: METAL,
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Tar Paper',
            base_material: PAPER_PRODUCT,
            [SIZE]: 'F',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Tent (1-man)',
            base_material: [{ weight: 7, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 1, material: FUR }],
            [SIZE]: 'M',
            [ADJECTIVES]: 3,
            [COLORS]: 4,
            [STITCHINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Tent (2-man)',
            base_material: [{ weight: 7, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 1, material: FUR }],
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 4,
            [STITCHINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Tinderbox',
            base_material: WOOD,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Whetstone',
            base_material: STONE_EARTHWORK,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Whistle',
            base_material: [{ weight: 8, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        }
    ],
    [ALCHEMICAL_SUBSTANCES]: [
        {
            weight: 5,
            entry: 'Acid, metal-eating (1 oz)',
            value: '13.74 sc',
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 5,
            entry: 'Alchemist’s Fire (pint)',
            value: '124 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [QUIRKS]: 4
        },
        {
            weight: 2,
            entry: 'Ambergris (1 oz)',
            value: '141 sc',
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [QUIRKS]: 0
        },
        {
            weight: 5,
            entry: 'Aniseed (1 oz)',
            value: '0.21 sc',
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 5,
            entry: 'Antitoxin (1 dose)',
            value: '10 sc',
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [QUIRKS]: 1
        },
        {
            weight: 6,
            entry: 'Blinding Powder (1 handful)',
            value: '16 sc',
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 5,
            [QUIRKS]: 2
        },
        {
            weight: 6,
            entry: 'Coal (1 lb)',
            value: '0.02 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 5,
            entry: 'Disappearing Ink (1 oz)',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [QUIRKS]: 2
        },
        {
            weight: 6,
            entry: 'Faceblack (1 pint)',
            value: '0.6 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 5,
            entry: 'Healing Salve',
            value: '7 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 7,
            [QUIRKS]: 3
        },
        {
            weight: 5,
            entry: 'Holy Water',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 5,
            entry: 'Oil',
            base_material: [{ weight: 3, material: 'Hemp Oil' }, { weight: 4, material: 'Linseed Oil' }, { weight: 2, material: 'Whale Oil' }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [QUIRKS]: 0
        },
        {
            weight: 5,
            entry: 'Pearlash (1 lb)',
            value: '4 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [QUIRKS]: 0
        },
        {
            weight: 3,
            entry: 'Poison',
            base_material: [{ weight: 1, material: 'Blacknessel' }, { weight: 1, material: 'Blue Glory' }, { weight: 1, material: 'Bondweed' }, { weight: 1, material: 'Griffin Hair' }, { weight: 1, material: 'Lylullin' }, { weight: 1, material: 'Maidenscap' }, { weight: 1, material: 'Palm of St Germain' }, { weight: 1, material: 'Tears of Sicyon' }, { weight: 1, material: 'Unknown' }, { weight: 1, material: 'Monster Poison' }],
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 9,
            [QUIRKS]: 4
        },
        {
            weight: 6,
            entry: 'Potash (1 lb)',
            value: '1 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [QUIRKS]: 0
        },
        {
            weight: 5,
            entry: 'Shell, Pearly',
            value: '0.03 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 6,
            entry: 'Soap (1 oz)',
            value: '0.05 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [QUIRKS]: 0
        },
        {
            weight: 5,
            entry: 'Talcum Powder',
            value: '1.3 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [QUIRKS]: 0
        },
        {
            weight: 5,
            entry: 'WAX',
            base_material: WAX,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 9,
            [QUIRKS]: 0
        },
        {
            weight: 5,
            entry: 'Weaponblack',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 0
        }
    ],
    [ARMOR]: [
        {
            weight: 9,
            entry: 'Brigandine',
            base_material: [LEATHER, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 7,
            [STITCHINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 9,
            entry: 'Buff Coat',
            base_material: LEATHER,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 8,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 9,
            entry: 'Chainmail',
            base_material: METAL,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 9,
            entry: 'Coat of Plates',
            base_material: [LEATHER, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 9,
            entry: 'Gambeson',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 8,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 9,
            entry: 'Lamellar',
            base_material: [LEATHER, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [ENGRAVINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 9,
            entry: 'Laminar (Banded Mail)',
            base_material: METAL,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 9,
            entry: 'Leather',
            base_material: LEATHER,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 9,
            entry: 'Full Plate',
            base_material: METAL,
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 7,
            [GEMS]: 2,
            [QUIRKS]: 3
        },
        {
            weight: 9,
            entry: 'Plated Mail',
            base_material: METAL,
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 6,
            [GEMS]: 2,
            [QUIRKS]: 3
        },
        {
            weight: 9,
            entry: 'Scale',
            base_material: METAL,
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 6,
            [GEMS]: 2,
            [QUIRKS]: 3
        }
    ],
    [BEVERAGES]: [
        {
            weight: 4,
            entry: 'Ale (gallon)',
            value: '0.8 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Almond Milk (pint)',
            value: '1 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Applejack (pint)',
            value: '2 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Barley-Broth',
            value: '0.01 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Beer (gallon)',
            value: '0.8 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Bitter Broth (pint)',
            value: '1 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Braggart (pint)',
            value: '1 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Brandy (gallon)',
            value: '4 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Cider, Hard (gallon)',
            value: '3.2 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Cider, Sweet (Gallon)',
            value: '2 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Decoction (pint)',
            value: '1 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'FURmore (pint)',
            value: '1 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Grog (gallon)',
            value: '0.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Lemon Juice (gallon)',
            value: '4 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Liver Squeezings (cup)',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Mead (gallon)',
            value: '3.8 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Milk (gallon)',
            value: '0.2 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Miracle Water (cup)',
            value: '5 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Must (cup)',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Posset',
            value: '.5 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Rum (gallon)',
            value: '15 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Tea (cup)',
            value: '4 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Vinegar (gallon)',
            value: '6 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Whiskey (gallon)',
            value: '0.4 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Wine (gallon)',
            value: '5.4 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
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
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 1,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Bean Bags',
            base_material: [{ weight: 3, material: LEATHER }, { weight: 6, material: CLOTH }],
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 8,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Cane, Collapsing',
            base_material: [{ weight: 7, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 7,
            [ENGRAVINGS]: 1,
            [GEMS]: 6,
            [QUIRKS]: 3,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Cards',
            base_material: PAPER_PRODUCT,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 8,
            [GEMS]: 0,
            [QUIRKS]: 0,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Cards, Marked',
            base_material: PAPER_PRODUCT,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 8,
            [GEMS]: 0,
            [QUIRKS]: 0,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Cards, Tarot',
            base_material: PAPER_PRODUCT,
            [SIZE]: 'T',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [GEMS]: 0,
            [QUIRKS]: 0,
            Subject: 9
        },
        {
            weight: 5,
            entry: 'Chest Set',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 3,
            [COLORS]: 3,
            [ENGRAVINGS]: 2,
            [GEMS]: 3,
            [QUIRKS]: 1,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Dice',
            base_material: [{ weight: 5, material: WOOD }, { weight: 1, material: 'Ivory' }, { weight: 1, material: 'Bone, Sentient', subtable: RACE_OF_ORIGIN }, { weight: 2, material: 'Bone, Animal', subtable: ANIMAL_SUBTYPE }, { weight: 1, material: 'Bone, Monster' }],
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [ENGRAVINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 1,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Dice, Loaded',
            base_material: [{ weight: 5, material: WOOD }, { weight: 1, material: 'Ivory' }, { weight: 1, material: 'Bone, Sentient', subtable: RACE_OF_ORIGIN }, { weight: 2, material: 'Bone, Animal', subtable: ANIMAL_SUBTYPE }, { weight: 1, material: 'Bone, Monster' }],
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [ENGRAVINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 1,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Fan, Handheld',
            base_material: [{ weight: 4, material: CLOTH }, { weight: 2, material: WOOD }, { weight: 2, material: PAPER_PRODUCT }],
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [STITCHINGS]: 6,
            [GEMS]: 0,
            [QUIRKS]: 0,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Finger Cymbals',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 0,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Hair Dye',
            value: '5 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 9,
            [GEMS]: 0,
            [QUIRKS]: 0,
            Subject: 0
        },
        {
            weight: 4,
            entry: 'Hair Extensions',
            value: '1 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 7,
            [GEMS]: 0,
            [QUIRKS]: 0,
            Subject: 0
        },
        {
            weight: 64,
            entry: 'Horn, Speaking',
            base_material: [{ weight: 4, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 2, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [ENGRAVINGS]: 2,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1,
            Subject: 0
        },
        {
            weight: 4,
            entry: 'Knife, Juggling',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 5,
            [ENGRAVINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 0,
            Subject: 0
        },
        {
            weight: 4,
            entry: 'Knife, Retractable',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 5,
            [ENGRAVINGS]: 2,
            [GEMS]: 3,
            [QUIRKS]: 2,
            Subject: 0
        },
        {
            weight: 4,
            entry: 'Marionette',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [ENGRAVINGS]: 5,
            [GEMS]: 1,
            [QUIRKS]: 3,
            Subject: 9
        },
        {
            weight: 5,
            entry: 'Perfumes',
            value: '3 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 7,
            [ENGRAVINGS]: 3,
            [GEMS]: 4,
            [QUIRKS]: 2,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Puppet',
            base_material: [{ weight: 5, material: CLOTH }, { weight: 4, material: LEATHER }],
            [SIZE]: 'T',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 1,
            Subject: 9
        },
        {
            weight: 5,
            entry: 'Tobacco',
            base_material: [{ weight: 5, material: 'Chewing Tabacco' }, { weight: 4, material: 'Smoking Tabacco' }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0,
            Subject: 0
        },
        {
            weight: 5,
            entry: 'Toy Sword',
            base_material: WOOD,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1,
            Subject: 0
        }
    ],
    [FABRICS_AND_ROPES]: [
        {
            weight: 3,
            entry: 'Comforter (3.5’ x 6’)',
            base_material: [[{ weight: 2, material: 'Down', subtable: ANIMAL_AIR }, { weight: 2, material: 'Feather', subtable: ANIMAL_AIR }, { weight: 2, material: 'Heavy Down', subtable: ANIMAL_AIR }, { weight: 2, material: 'Heavy Feather', subtable: ANIMAL_AIR }], CLOTH],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 7,
            [STITCHINGS]: 4,
            [QUIRKS]: 1
        },
        {
            weight: 4,
            entry: 'Cut of Fabric (1 sq yards)',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [STITCHINGS]: 2,
            [QUIRKS]: 0
        },
        {
            weight: 3,
            entry: 'Flag',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [STITCHINGS]: 3,
            [QUIRKS]: 1
        },
        {
            weight: 3,
            entry: 'Thread, 1d4 yards',
            base_material: [{ weight: 7, material: 'Thread' }, { weight: 2, material: 'Twine' }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 3,
            entry: 'Yarn, 1d4 yards',
            base_material: [{ weight: 5, material: 'Cotton' }, { weight: 4, material: 'Wool' }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [STITCHINGS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 4,
            entry: 'Rope',
            base_material: [{ weight: 4, material: 'Hemp' }, { weight: 2, material: 'Cotton' }, { weight: 2, material: CLOTH }, { weight: 1, material: 'Silk', subtable: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [STITCHINGS]: 2,
            [QUIRKS]: 1
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
            base_material: CLOTH,
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 3,
            entry: 'Curtains',
            base_material: [{ weight: 8, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'H',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 3,
            entry: 'Sleeping FURs',
            base_material: FUR,
            [SIZE]: 'H',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 3,
            entry: 'Bench, 1-person',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'H',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 3,
            entry: 'Carpet',
            base_material: [{ weight: 3, material: CLOTH }, { weight: 6, material: 'Wool' }],
            [SIZE]: 'G',
            [ADJECTIVES]: 3,
            [COLORS]: 5,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 3,
            entry: 'Chair',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'H',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 3,
            entry: 'Chandelier',
            base_material: METAL,
            [SIZE]: 'G',
            [ADJECTIVES]: 3,
            [COLORS]: 1,
            [ENGRAVINGS]: 4,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 3,
            entry: 'Seat Cushion',
            base_material: [{ weight: 8, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 3,
            entry: 'Stool',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 3,
            entry: 'Tapestry',
            base_material: [{ weight: 8, material: 'Wool' }, { weight: 1, material: LEATHER }, { weight: 1, material: CLOTH }],
            [SIZE]: 'G',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [STITCHINGS]: 9,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 3,
            entry: 'Bolter CLOTH',
            base_material: CLOTH,
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 3,
            entry: 'Cauldron',
            base_material: METAL,
            [SIZE]: 'H',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Coffin, Pastry',
            base_material: [{ weight: 7, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Galley-pot',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Larding Needle',
            base_material: [{ weight: 3, material: METAL }, { weight: 2, material: WOOD }, { weight: 1, material: 'Bone, Sentient', subtable: RACE_OF_ORIGIN }, { weight: 2, material: 'Bone, Animal', subtable: ANIMAL_SUBTYPE }, { weight: 1, material: 'Bone, Monster' }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Pipkin',
            base_material: STONE_EARTHWORK,
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Porringers',
            base_material: [{ weight: 8, material: METAL }, { weight: 2, material: STONE_EARTHWORK }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Querne',
            base_material: [{ weight: 8, material: STONE_EARTHWORK }, { weight: 2, material: WOOD }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Rowel',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Salamander Plate',
            base_material: STONE_EARTHWORK,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Trencher',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Tripod',
            base_material: METAL,
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Bowl',
            base_material: [{ weight: 6, material: WOOD }, { weight: 3, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 4,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Drinking Horn',
            base_material: 'Horn',
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Fork',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Goblet',
            base_material: [{ weight: 3, material: 'Glass' }, { weight: 4, material: 'Crystal' }, { weight: 4, material: METAL }],
            [SIZE]: 'T',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Kettle',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Knife',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Ladle',
            base_material: [{ weight: 7, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Mug',
            base_material: [{ weight: 4, material: WOOD }, { weight: 2, material: METAL }, { weight: 3, material: STONE_EARTHWORK }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Pan',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Pitcher',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Platter',
            base_material: [{ weight: 7, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Pot hanger',
            base_material: METAL,
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Salt Cellar',
            base_material: [{ weight: 8, material: METAL }, { weight: 2, material: WOOD }],
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Spit, Small',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Spoon',
            base_material: [{ weight: 7, material: METAL }, { weight: 2, material: WOOD }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Drinking Glass',
            base_material: 'Glass',
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 3,
            entry: 'Pillow',
            base_material: [{ weight: 8, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 3,
            entry: 'Rug, Woven',
            base_material: [{ weight: 3, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 4, material: 'Wool' }],
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 8,
            [STITCHINGS]: 5,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 3,
            entry: 'Rug, FUR',
            base_material: FUR,
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 3,
            entry: 'Stein',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 3,
            [COLORS]: 1,
            [ENGRAVINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 1
        }
    ],
    [ILLUMINATION]: [
        {
            weight: 1,
            entry: 'Candelabra',
            base_material: METAL,
            [SIZE]: 'H',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Candle',
            base_material: [{ weight: 8, material: 'Tallow' }, { weight: 2, material: WAX }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Candle, Timekeeping',
            base_material: [{ weight: 8, material: 'Tallow' }, { weight: 2, material: WAX }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 0,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Candlestick',
            base_material: METAL,
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Lamp',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Lantern, Beacon',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Lantern, Bullseye',
            base_material: [METAL, PAPER_PRODUCT],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Lantern, Hooded',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Lantern, Storm',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Torch',
            base_material: [{ weight: 5, material: 'Tallow' }, { weight: 5, material: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [GEMS]: 0,
            [QUIRKS]: 0
        }
    ],
    [JEWELRY]: [
        {
            weight: 2,
            entry: 'Ring',
            base_material: METAL,
            [SIZE]: 'D',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 3,
            [GEMS]: 4,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Necklace',
            base_material: [{ weight: 7, material: METAL }, { weight: 2, material: CLOTH }, { weight: 1, material: 'BOTH' }],
            [SIZE]: 'D',
            [ADJECTIVES]: 4,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 3,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Fake Teeth',
            base_material: [{ weight: 6, material: 'Ivory' }, { weight: 2, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [ENGRAVINGS]: 5,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Earings',
            base_material: METAL,
            [SIZE]: 'F',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 4,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Pendant',
            base_material: METAL,
            [SIZE]: 'F',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 4,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Bangle',
            base_material: METAL,
            [SIZE]: 'F',
            [ADJECTIVES]: 3,
            [COLORS]: 3,
            [ENGRAVINGS]: 2,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Belly Chain',
            base_material: METAL,
            [SIZE]: 'F',
            [ADJECTIVES]: 3,
            [COLORS]: 3,
            [ENGRAVINGS]: 1,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Chatelaine',
            base_material: [{ weight: 2, material: METAL }, { weight: 2, material: CLOTH }, { weight: 3, material: LEATHER }, { weight: 1, material: 'TWO' }, { weight: 1, material: 'ALL THREE' }],
            [SIZE]: 'D',
            [ADJECTIVES]: 4,
            [COLORS]: 4,
            [ENGRAVINGS]: 2,
            [STITCHINGS]: 2,
            [GEMS]: 2,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Pin',
            base_material: METAL,
            [SIZE]: 'F',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 4,
            [QUIRKS]: 4
        },
        {
            weight: 1,
            entry: 'Torc',
            base_material: [{ weight: 7, material: METAL }, { weight: 2, material: LEATHER }, { weight: 1, material: 'BOTH' }],
            [SIZE]: 'D',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 4,
            [STITCHINGS]: 4,
            [GEMS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Bracelet',
            base_material: [{ weight: 7, material: METAL }, { weight: 2, material: LEATHER }, { weight: 1, material: 'BOTH' }],
            [SIZE]: 'F',
            [ADJECTIVES]: 3,
            [COLORS]: 5,
            [ENGRAVINGS]: 4,
            [STITCHINGS]: 4,
            [GEMS]: 2,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Choker',
            base_material: [{ weight: 5, material: METAL }, { weight: 6, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 1, material: 'TWO' }, { weight: 1, material: 'ALL THREE' }],
            [SIZE]: 'F',
            [ADJECTIVES]: 3,
            [COLORS]: 5,
            [ENGRAVINGS]: 2,
            [STITCHINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Anklet',
            base_material: [{ weight: 8, material: METAL }, { weight: 1, material: CLOTH }, { weight: 1, material: 'BOTH' }],
            [SIZE]: 'F',
            [ADJECTIVES]: 3,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [STITCHINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Armlet/Bracer',
            base_material: [{ weight: 5, material: METAL }, { weight: 1, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 1, material: 'TWO' }, { weight: 1, material: 'ALL THREE' }],
            [SIZE]: 'F',
            [ADJECTIVES]: 3,
            [COLORS]: 4,
            [ENGRAVINGS]: 3,
            [STITCHINGS]: 3,
            [GEMS]: 3,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Slave Bracelet',
            base_material: METAL,
            [SIZE]: 'F',
            [ADJECTIVES]: 3,
            [COLORS]: 4,
            [ENGRAVINGS]: 1,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Prayer Beads',
            base_material: [{ weight: 6, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 1, material: 'BOTH' }],
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Brooch',
            base_material: METAL,
            [SIZE]: 'D',
            [ADJECTIVES]: 4,
            [COLORS]: 2,
            [ENGRAVINGS]: 4,
            [GEMS]: 4,
            [QUIRKS]: 4
        },
        {
            weight: 1,
            entry: 'Locket',
            base_material: METAL,
            [SIZE]: 'D',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 4,
            [QUIRKS]: 4
        },
        {
            weight: 1,
            entry: 'Crown/Tiara',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 5,
            [COLORS]: 3,
            [ENGRAVINGS]: 4,
            [GEMS]: 5,
            [QUIRKS]: 3
        }
    ],
    [MEDICAL_TOOLS]: [
        {
            weight: 4,
            entry: 'Bandages',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [STITCHINGS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Basin, Bleeding',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Crutches',
            base_material: [{ weight: 1, material: METAL }, { weight: 8, material: WOOD }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Eyeglasses',
            base_material: [[{ weight: 6, material: METAL }, { weight: 4, material: WOOD }], 'Glass'],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Probe',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Scalpel',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Lancet',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Litter',
            base_material: WOOD,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Sutures',
            base_material: [{ weight: 6, material: 'Thread' }, { weight: 3, material: 'Animal Guts', subtable: ANIMAL_SUBTYPE }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Pegleg',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Saw, Amputation',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Stretcher',
            base_material: [WOOD, CLOTH],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Tooth Wrench',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Arrow Extractor',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Arm Sling',
            base_material: CLOTH,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        }
    ],
    [MUSICAL_INSTRUMENTS]: [
        {
            weight: 4,
            entry: 'Adufe',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Bagpipes',
            base_material: [[{ weight: 8, material: WOOD }, { weight: 2, material: METAL }], CLOTH],
            [SIZE]: 'M',
            [ADJECTIVES]: 3,
            [COLORS]: 3,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Bladder Pipe',
            base_material: [[{ weight: 8, material: WOOD }, { weight: 2, material: METAL }], CLOTH],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Citole',
            base_material: WOOD,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Crumhorn',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Dulcimer',
            base_material: WOOD,
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Fiddle',
            base_material: WOOD,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Frame Drum',
            base_material: [WOOD, LEATHER],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Gittern',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Glockenspiel',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Guitarra',
            base_material: WOOD,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Harp',
            base_material: WOOD,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Hurdy-Gurdy',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Lute',
            base_material: WOOD,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Mandolin',
            base_material: WOOD,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Naqareh',
            base_material: [WOOD, LEATHER],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Oud',
            base_material: WOOD,
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Psalterium',
            base_material: WOOD,
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [GEMS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Rebec',
            base_material: WOOD,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Recorder',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Sackbut',
            base_material: METAL,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Shawm',
            base_material: WOOD,
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'String Drum',
            base_material: WOOD,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Tabor Drum',
            base_material: [WOOD, LEATHER],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Tabor Pipe',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Timbrel',
            base_material: [METAL, WOOD],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Viol',
            base_material: WOOD,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Zampogna',
            base_material: [WOOD, [{ weight: 2, material: CLOTH }, { weight: 8, material: LEATHER }]],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 4,
            entry: 'Hunting Horn',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 2
        }
    ],
    [PERSONAL_CONTAINERS]: [
        {
            weight: 2,
            entry: 'Amphora',
            base_material: STONE_EARTHWORK,
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [ENGRAVINGS]: 7,
            [GEMS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Backpack, Large',
            base_material: [{ weight: 7, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Backpack, Medium',
            base_material: [{ weight: 7, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Backpack, Small',
            base_material: [{ weight: 7, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Bag, Medium',
            base_material: [{ weight: 8, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Bag, Small',
            base_material: [{ weight: 8, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Bandoleer',
            base_material: [{ weight: 4, material: CLOTH }, { weight: 6, material: LEATHER }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Barrel, 12 gal',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Basket, Medium',
            base_material: 'Wicker',
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Basket, Small',
            base_material: 'Wicker',
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Beaker',
            base_material: 'Glass',
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Bottle',
            base_material: [{ weight: 5, material: 'Glass' }, { weight: 5, material: METAL }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Box, Medium',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Box, Small',
            base_material: [{ weight: 8, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Bucket, 1 gal',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Bucket, 5 gal',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 0,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Canteen',
            base_material: [{ weight: 8, material: METAL }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [STITCHINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Case, Map/Scroll',
            base_material: [{ weight: 2, material: WOOD }, { weight: 2, material: METAL }, { weight: 2, material: LEATHER }, { wieght: 3, material: 'Waxed Cloth' }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [ENGRAVINGS]: 4,
            [STITCHINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Cask, 2 gallon',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Chest, Medium',
            base_material: [{ weight: 8, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Chest, Small',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Coin Purse',
            base_material: [{ weight: 5, material: CLOTH }, { weight: 4, material: LEATHER }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Cup',
            base_material: [{ weight: 3, material: METAL }, { weight: 5, material: STONE_EARTHWORK }, { weight: 1, material: 'Porcelain' }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Flask',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Jar',
            base_material: [{ weight: 3, material: 'Glass' }, { weight: 7, material: STONE_EARTHWORK }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Jug',
            base_material: [{ weight: 3, material: METAL }, { weight: 7, material: STONE_EARTHWORK }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Mug',
            base_material: STONE_EARTHWORK,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Pitcher',
            base_material: STONE_EARTHWORK,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Pot, Small',
            base_material: [{ weight: 3, material: METAL }, { weight: 7, material: STONE_EARTHWORK }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Pouch, Belt, Medium',
            base_material: [{ weight: 5, material: CLOTH }, { weight: 4, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Pouch, Belt, Small',
            base_material: [{ weight: 5, material: CLOTH }, { weight: 4, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 2,
            entry: 'Quiver',
            base_material: [{ weight: 2, material: CLOTH }, { weight: 1, material: LEATHER }, { weight: 1, material: METAL }, { weight: 2, material: WOOD }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Ring, Poison Container',
            base_material: METAL,
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [ENGRAVINGS]: 4,
            [GEMS]: 3,
            [QUIRKS]: 3
        },
        {
            weight: 2,
            entry: 'Saddlebags, Large',
            base_material: [{ weight: 4, material: CLOTH }, { weight: 6, material: LEATHER }],
            [SIZE]: 'H',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Saddlebags, Medium',
            base_material: [{ weight: 4, material: CLOTH }, { weight: 6, material: LEATHER }],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Saddlebags, Small',
            base_material: [{ weight: 4, material: CLOTH }, { weight: 6, material: LEATHER }],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Scabbard',
            base_material: [{ weight: 2, material: CLOTH }, { weight: 1, material: LEATHER }, { weight: 1, material: METAL }, { weight: 2, material: WOOD }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [STITCHINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Sheathe, Small',
            base_material: [{ weight: 2, material: CLOTH }, { weight: 1, material: LEATHER }, { weight: 1, material: METAL }, { weight: 2, material: WOOD }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [STITCHINGS]: 2,
            [GEMS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Sheathe, Wrist',
            base_material: [{ weight: 2, material: CLOTH }, { weight: 1, material: LEATHER }, { weight: 1, material: METAL }, { weight: 2, material: WOOD }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Vial Holder, Belt',
            base_material: [{ weight: 4, material: CLOTH }, { weight: 6, material: LEATHER }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Waterskin',
            base_material: LEATHER,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        }
    ],
    [RAW_GOODS]: [
        { weight: 1, entry: CLOTH },
        { weight: 2, entry: FUR_OR_LEATHER },
        { weight: 3, entry: METAL },
        { weight: 4, entry: STONE_EARTHWORK },
        { weight: 5, entry: WOOD },
        { weight: 6, entry: [GEMS] }
    ],
    [RELIGIOUS_ITEMS]: [
        {
            weight: 2,
            entry: 'Altar CLOTH',
            base_material: [{ weight: 9, material: CLOTH }, { weight: 1, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 7,
            [STITCHINGS]: 9,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Aspergillum',
            base_material: [METAL, WOOD],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Brazier',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 7,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Candle, Temple',
            base_material: WAX,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 8,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Censer',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 6,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Chalise',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [ENGRAVINGS]: 6,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Holy Symbol',
            base_material: [{ weight: 7, material: METAL }, { weight: 2, material: WOOD }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [ENGRAVINGS]: 5,
            [GEMS]: 2,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Incense',
            base_material: SPICES_AND_SEASONINGS,
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 9,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Pilgrimage Badge',
            base_material: [{ weight: 6, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 1, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 7,
            [ENGRAVINGS]: 9,
            [STITCHINGS]: 9,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Prayer Beads',
            base_material: [{ weight: 6, material: WOOD }, { weight: 3, material: METAL }],
            [SIZE]: 'D',
            [ADJECTIVES]: 2,
            [COLORS]: 9,
            [ENGRAVINGS]: 5,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sacred Texts',
            base_material: [{ label: 'Cover', materials: [{ weight: 1, material: METAL }, { weight: 6, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 1, material: WOOD }] }, { label: 'Interior', materials: PAPER_PRODUCT }],
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 6,
            [ENGRAVINGS]: 7,
            [STITCHINGS]: 7,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Snuffing Bell',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Talisman',
            base_material: [{ weight: 2, material: METAL }, { weight: 3, material: WOOD }, { weight: 1, material: LEATHER }, { weight: 2, material: CLOTH }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 5,
            [ENGRAVINGS]: 1,
            [STITCHINGS]: 1,
            [GEMS]: 2,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Totem',
            base_material: [{ weight: 4, material: METAL }, { weight: 4, material: WOOD }, { weight: 1, material: LEATHER }, { weight: 1, material: CLOTH }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [ENGRAVINGS]: 1,
            [STITCHINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 0
        }
    ],
    [SHIELDS]: [
        {
            weight: 1,
            entry: 'Buckler',
            base_material: [{ weight: 5, material: WOOD }, { weight: 5, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [ENGRAVINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'CLOTHe',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 9,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Figure Eight',
            base_material: [WOOD, LEATHER],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 9,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Heater',
            base_material: [{ weight: 8, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 6,
            [ENGRAVINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Hoplon',
            base_material: [{ weight: 8, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 5,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Kite',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 7,
            [ENGRAVINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pavise',
            base_material: WOOD,
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 9,
            [ENGRAVINGS]: 7,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Round',
            base_material: [WOOD, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 6,
            [ENGRAVINGS]: 5,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Tower',
            base_material: WOOD,
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 7,
            [ENGRAVINGS]: 6,
            [GEMS]: 1,
            [QUIRKS]: 1
        }
    ],
    [TRADE_TOOLS]: [
        {
            weight: 1,
            entry: 'Adze',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Auger',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Ax',
            base_material: [WOOD, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Bear Trap',
            base_material: METAL,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Bellows',
            base_material: [WOOD, [{ weight: 8, material: LEATHER }, { weight: 2, material: CLOTH }]],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Bow Drill',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Branding Iron',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Brush, Cleaning',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Carding Comb',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Carpenter’s Square',
            base_material: [{ weight: 8, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Chisel',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Cleaver',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Drill',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'File',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Funnel',
            base_material: [{ weight: 8, material: 'Waxed Leather' }, { weight: 2, material: 'Waxed Cloth' }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Glass Cutter',
            base_material: [WOOD, METAL],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Hammer',
            base_material: [WOOD, METAL],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Hatchet',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Hoe',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Horseshoe',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Mallet',
            base_material: WOOD,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Nail 3”',
            base_material: METAL,
            [SIZE]: 'F',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Oar',
            base_material: WOOD,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Paddle',
            base_material: WOOD,
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pick',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pitch Fork',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Planer',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pliers',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Powder, Chalk',
            base_material: 'Chalk',
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Pully (2:1)',
            base_material: WOOD,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Rake',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Saw',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Scissors',
            base_material: [WOOD, METAL],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Shears',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: "Shepherd's Crook",
            base_material: WOOD,
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Shovel',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sickle',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sledge',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Tongs',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Trowel',
            base_material: [WOOD, METAL],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Wedge',
            base_material: [{ weight: 5, material: WOOD }, { weight: 5, material: METAL }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Windlass',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Wire, 1d10 * 10 ft',
            base_material: METAL,
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 0,
            [QUIRKS]: 0
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
            base_material: [{ weight: 3, material: CLOTH }, { weight: 3, material: LEATHER }, { weight: 2, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [ENGRAVINGS]: 9,
            [GEMS]: 0,
            [QUIRKS]: 1,
            Subject: 10
        },
        {
            weight: 1,
            entry: 'Pottery',
            base_material: STONE_EARTHWORK,
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 7,
            [ENGRAVINGS]: 9,
            [GEMS]: 1,
            [QUIRKS]: 1,
            Subject: 10
        },
        {
            weight: 1,
            entry: 'Sculpture',
            base_material: STONE_EARTHWORK,
            [SIZE]: 'H',
            [ADJECTIVES]: 3,
            [COLORS]: 8,
            [ENGRAVINGS]: 9,
            [GEMS]: 1,
            [QUIRKS]: 1,
            Subject: 10
        },
        {
            weight: 1,
            entry: 'Book',
            base_material: [{ label: 'Cover', materials: [{ weight: 1, material: METAL }, { weight: 5, material: CLOTH }, { weight: 2, material: LEATHER }, { weight: 1, material: WOOD }] }, { label: 'Interior', material: PAPER_PRODUCT }],
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 6,
            [ENGRAVINGS]: 9,
            [STITCHINGS]: 9,
            [GEMS]: 0,
            [QUIRKS]: 1,
            Subject: 10
        },
        {
            weight: 1,
            entry: 'Glassware',
            base_material: 'Glass',
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 8,
            [ENGRAVINGS]: 9,
            [GEMS]: 1,
            [QUIRKS]: 1,
            Subject: 10
        },
        {
            weight: 1,
            entry: 'Tapestry',
            base_material: 'Wool',
            [SIZE]: 'H',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [STITCHINGS]: 9,
            [GEMS]: 0,
            [QUIRKS]: 1,
            Subject: 10
        }
    ],
    [FOOTWEAR]: [
        {
            weight: 1,
            entry: 'Boots, Ankle',
            base_material: LEATHER,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Boots, Calf',
            base_material: LEATHER,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Boots, Climbing',
            base_material: [LEATHER, WAX],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Boots, Knee',
            base_material: LEATHER,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Boots, Riding, Calf',
            base_material: LEATHER,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Boots, Riding, Knee',
            base_material: LEATHER,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Boots, Riding, Thigh',
            base_material: LEATHER,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Boots, Thigh',
            base_material: LEATHER,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Chopines',
            base_material: [[{ weight: 5, material: LEATHER }, { weight: 5, material: CLOTH }], WOOD],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 4,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Clogs',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [STITCHINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Moccasins',
            base_material: LEATHER,
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 2,
            [STITCHINGS]: 7,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pattens',
            base_material: LEATHER,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sandals',
            base_material: [{ weight: 3, material: LEATHER }, { weight: 6, material: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sandshoes',
            base_material: [{ weight: 4, material: LEATHER }, { weight: 6, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 3,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Shoes, Dress',
            base_material: [{ weight: 7, material: LEATHER }, { weight: 3, material: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 4,
            [COLORS]: 9,
            [STITCHINGS]: 9,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Shoes, Simple',
            base_material: [{ weight: 5, material: LEATHER }, { weight: 5, material: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Slippers',
            base_material: [{ weight: 5, material: CLOTH }, { weight: 5, material: FUR }],
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [STITCHINGS]: 4,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Snowshoes',
            base_material: [{ weight: 4, material: LEATHER }, { weight: 6, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Socks',
            base_material: [{ weight: 8, material: CLOTH }, { weight: 2, material: FUR }],
            [SIZE]: 'S',
            [ADJECTIVES]: 4,
            [COLORS]: 9,
            [STITCHINGS]: 4,
            [QUIRKS]: 2
        }
    ],
    [HEADGEAR]: [
        {
            weight: 1,
            entry: 'Bandana',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 6,
            [STITCHINGS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Barbette & Fillet',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [STITCHINGS]: 3,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Beret',
            base_material: [{ weight: 7, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Cap',
            base_material: [{ weight: 4, material: CLOTH }, { weight: 3, material: LEATHER }, { weight: 2, material: FUR }, { weight: 1, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Caul',
            base_material: [{ weight: 8, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Chaperon',
            base_material: CLOTH,
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 4,
            [STITCHINGS]: 4,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Clogs',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 9,
            [STITCHINGS]: 1,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Coif',
            base_material: [{ weight: 8, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Ferroniere',
            base_material: [{ weight: 7, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Fez',
            base_material: CLOTH,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Hat',
            base_material: [{ weight: 3, material: 'Felt' }, { weight: 3, material: 'Straw' }, { weight: 1, material: CLOTH }, { weight: 1, material: LEATHER }, { weight: 1, material: FUR }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Headdress',
            base_material: [{ material: 'Feathers', subtable: ANIMAL_AIR }, [{ weight: 3, material: CLOTH }, { weight: 6, material: LEATHER }]],
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [STITCHINGS]: 9,
            [QUIRKS]: 2
        },
        {
            weight: 2,
            entry: 'Hood',
            base_material: [{ weight: 7, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 2,
            entry: 'Skullcap',
            base_material: [{ weight: 6, material: CLOTH }, { weight: 3, material: LEATHER }, { weight: 1, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Turban',
            base_material: CLOTH,
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [STITCHINGS]: 2,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Veil',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Wimple',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [STITCHINGS]: 1,
            [QUIRKS]: 1
        }
    ],
    [BODY]: [
        {
            weight: 1,
            entry: 'Apron',
            base_material: [{ weight: 4, material: LEATHER }, { weight: 6, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Belt',
            base_material: [{ weight: 8, material: LEATHER }, { weight: 2, material: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [STITCHINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Braies',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Breeches',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Buckle',
            base_material: [{ weight: 8, material: METAL }, { weight: 2, material: WOOD }],
            [SIZE]: 'S',
            [ADJECTIVES]: 3,
            [COLORS]: 4,
            [STITCHINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Cape',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 3,
            [COLORS]: 6,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Cassock',
            base_material: CLOTH,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [STITCHINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Chasbule',
            base_material: CLOTH,
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Chemise',
            base_material: CLOTH,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Choker',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 7, material: CLOTH }, { weight: 1, material: FUR }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [STITCHINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Cloak',
            base_material: [{ weight: 3, material: LEATHER }, { weight: 5, material: CLOTH }, { weight: 2, material: FUR }],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 6,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Coat',
            base_material: [{ weight: 7, material: LEATHER }, { weight: 3, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 5,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Codpiece',
            base_material: [{ weight: 6, material: CLOTH }, { weight: 3, material: LEATHER }, { weight: 1, material: METAL }],
            [SIZE]: 'T',
            [ADJECTIVES]: 3,
            [COLORS]: 9,
            [STITCHINGS]: 6,
            [GEMS]: 1,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Cote',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 5,
            [STITCHINGS]: 5,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Cotehardie',
            base_material: [{ weight: 3, material: LEATHER }, { weight: 6, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 7,
            [STITCHINGS]: 5,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Cyclas',
            base_material: CLOTH,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [STITCHINGS]: 5,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Doublet',
            base_material: [{ weight: 3, material: LEATHER }, { weight: 6, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 7,
            [STITCHINGS]: 6,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Drawers',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 9,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Dress',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            [COLORS]: 9,
            [STITCHINGS]: 6,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Fullclothe',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [STITCHINGS]: 5,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Gamash',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [STITCHINGS]: 5,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Gloves',
            base_material: [{ weight: 5, material: LEATHER }, { weight: 3, material: CLOTH }, { weight: 2, material: FUR }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Hosiery',
            base_material: CLOTH,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 7,
            [STITCHINGS]: 4,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Houpeland',
            base_material: CLOTH,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [STITCHINGS]: 4,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Jerkin',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [STITCHINGS]: 7,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Kilt',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 9,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Liripipe',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 5,
            [STITCHINGS]: 4,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Mittens',
            base_material: [{ weight: 3, material: LEATHER }, { weight: 3, material: CLOTH }, { weight: 4, material: FUR }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [STITCHINGS]: 4,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Robes',
            base_material: CLOTH,
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            [COLORS]: 7,
            [STITCHINGS]: 6,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sash',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 8,
            [STITCHINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Scarf',
            base_material: [{ weight: 6, material: CLOTH }, { weight: 4, material: FUR }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 8,
            [STITCHINGS]: 4,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Shirt',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [STITCHINGS]: 4,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Surcote',
            base_material: [{ weight: 3, material: LEATHER }, { weight: 6, material: CLOTH }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 8,
            [STITCHINGS]: 7,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sweater',
            base_material: 'Wool',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 7,
            [STITCHINGS]: 9,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Toga',
            base_material: CLOTH,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Tunic',
            base_material: [{ weight: 1, material: LEATHER }, { weight: 9, material: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Vest',
            base_material: [{ weight: 4, material: LEATHER }, { weight: 6, material: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 1
        }
    ],
    [ACCESSORIES]: [
        {
            weight: 1,
            entry: 'Brush, Grooming',
            base_material: [{ weight: 8, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'T',
            [ADJECTIVES]: 3,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Button',
            base_material: [{ weight: 2, material: 'Ivory' }, { weight: 8, material: WOOD }],
            [SIZE]: 'F',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Comb',
            base_material: [{ weight: 8, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Dog Collar',
            base_material: [{ weight: 7, material: CLOTH }, { weight: 2, material: LEATHER }],
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [STITCHINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Handkerchief',
            base_material: CLOTH,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 3,
            [STITCHINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Horse Shoe',
            base_material: METAL,
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 0,
            [ENGRAVINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Napkin',
            base_material: CLOTH,
            [SIZE]: 'T',
            [ADJECTIVES]: 2,
            [COLORS]: 2,
            [STITCHINGS]: 1,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Saddle',
            base_material: LEATHER,
            [SIZE]: 'L',
            [ADJECTIVES]: 3,
            [COLORS]: 1,
            [STITCHINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Scarf',
            base_material: [{ weight: 6, material: 'Wool' }, { weight: 2, material: 'Gauze' }, { weight: 1, material: "Silk", subtable: CLOTH }],
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 8,
            [STITCHINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 0
        },
        {
            weight: 1,
            entry: 'Staff, Walking',
            base_material: WOOD,
            [SIZE]: 'S',
            [ADJECTIVES]: 2,
            [COLORS]: 1,
            [ENGRAVINGS]: 1,
            [GEMS]: 1,
            [QUIRKS]: 2
        }
    ],
    [PREPPED_FOOD]: [
        {
            weight: 1,
            entry: 'Almond-Cream',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Bear Fat Dumplings',
            value: '1 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Bedroll',
            value: '2 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Blood',
            value: '0.02 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Boe',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Bree',
            value: '1.7 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Brose',
            value: '0.5 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Broth',
            value: '0.02 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Browncap',
            value: '0.01 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Butter (1lb)',
            value: '1.2 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Candy',
            value: '3 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Charmeats',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Cheese (1lb)',
            value: '1.2 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Comfirts',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Crips',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Daintiers',
            value: '2.3 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Egg',
            value: '0.05 sc',
            [SIZE]: 'F',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Fish Flay',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Forcemeat',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Fry',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Galainte',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Giblets',
            base_material: [{ weight: 4, material: 'Chicken', valuie: '0.01 sc' }, { weight: 3, material: 'Goose', valuie: '0.01 sc' }, { weight: 2, material: 'Animal', subtable: ANIMAL_SUBTYPE, value: '0.03 sc' }, { weight: 1, material: 'Monster', value: '0.1 sc' }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Gut Warmer',
            value: '.75 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Handpie',
            value: '1.2 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Hot Water Pastries',
            value: '1.6 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Lard (1 pt)',
            value: '1 sc',
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Livers',
            value: '0.02 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Muggets',
            base_material: [{ weight: 3, material: 'Calf', value: '0.01 sc' }, { weight: 2, material: 'Hog', value: '0.01 sc' }, { weight: 2, material: 'Sheep', value: '0.01 sc' }, { weight: 2, material: 'Animal', subtable: ANIMAL_SUBTYPE, value: '0.03 sc' }, { weight: 1, material: 'Monster', value: '0.1 sc' }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Musted Sauce',
            value: '0.4 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Nice Drippings',
            value: '0.01 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Numbles',
            value: '0.03 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pap',
            value: '0.3 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pasta',
            value: '0.02 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pie',
            value: '1.3 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pottage',
            value: '0.3 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Preserves, Fruit',
            base_material: [{ value: '3.2 sc', material: FRUIT_AND_VEGATABLES }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pynepaste',
            value: '0.1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Quenelle',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Quoses',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Roe',
            value: '2 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sausage, Blood',
            value: '0.01 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sausage, Pepper',
            value: '0.03 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sausage, Sailor’s',
            value: '0.01 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Scratch-Root Stew',
            value: '0.3 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Soorea',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Souse',
            value: '1.6 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Syrup',
            value: '0.1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        }
    ],
    [BREAD]: [
        {
            weight: 1,
            entry: 'Corn Dodgers',
            value: '0.3 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Fry Bread',
            value: '0.4 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Horse Bread',
            value: '0.38 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Manchet Bread',
            value: '1.3 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Maslin Bread',
            value: '0.48 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pan & Egg Bread',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sop Bread',
            value: '0.86 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Strongbread',
            value: '.3 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Wastel Bread',
            value: '1 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 3,
            entry: 'Rations, Day',
            value: '2.5 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Biscuit, Hardtack',
            value: '0.2 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Bread, Rye',
            value: '0.44 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Bread, Wheat',
            value: '0.5 sc',
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        }
    ],
    [FRUIT_AND_VEGATABLES]: [
        {
            weight: 1,
            entry: 'Barberries',
            value: '1.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Bush Tomatoes',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Canabens',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Beets',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Cardoons',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Carrots',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Celozia',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Currants',
            value: '1.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Flattops',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Lemon',
            value: '2 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Liakeer',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Limes',
            value: '2 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Meat Grass',
            value: '1.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Mutries',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Onions',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Orange',
            value: '2 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pippins',
            value: '2 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pomace',
            value: '1.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Quadong',
            value: '1.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Quinces',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Raisins',
            value: '1.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Roundberries',
            value: '1.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Rozele',
            value: '2 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Salad',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Smalledge',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Skyrwits',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Spinach',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Taola',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Wardons',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Warrigals',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Wortes',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Jam',
            base_material: [{ material: FRUIT_AND_VEGATABLES, exclude: 'JAM', value: '3 sc' }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pickles',
            value: '2 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Raisins',
            value: '1.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Seed, tobacco',
            value: '3 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        }
    ],
    [PROTEIN]: [
        {
            weight: 1,
            entry: 'Meat (1 lb) ',
            base_material: [{ material: ANIMAL_LAND, value: '4 sc' }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Fish (1 lb) ',
            base_material: [{ material: ANIMAL_WATER, value: '1 sc' }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Fowl (1 lb) ',
            base_material: [{ material: ANIMAL_AIR, value: '2 sc' }],
            [SIZE]: 'T',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        }
    ],
    [NUTS]: [
        {
            weight: 1,
            entry: 'Acorns',
            value: '0.3 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Almonds',
            value: '0.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Chestnuts',
            value: '0.3 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Hazelnuts',
            value: '0.3 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pinenuts',
            value: '0.3 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pistachios',
            value: '0.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sesame Seeds',
            value: '0.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Walnuts',
            value: '0.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        }
    ],
    [SPICES_AND_SEASONINGS]: [
        {
            weight: 1,
            entry: 'Honey (8 oz)',
            value: '1 sc',
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sugar (1 lb)',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Cinnamon (1 lb)',
            value: '4 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Ginger (1 lb)',
            value: '1.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Mace (1 lb)',
            value: '5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Molasses (1 lb)',
            value: '4 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Mustard (1 lb)',
            value: '1 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Nutmeg (1 lb)',
            value: '2.5 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Pectin (cup)',
            value: '0.2 sc',
            [SIZE]: 'D',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Salt (1 lb)',
            value: '0.45 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Saffron (1 lb)',
            value: '160 sc',
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [QUIRKS]: 1
        }
    ],
    [AXES]: [
        {
            weight: 1,
            entry: 'Bardiche',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 5,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Battle Axe',
            base_material: [WOOD, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 5,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Handaxe',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 5,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Horsemans Pick',
            base_material: [WOOD, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 5,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Lochaber Axe',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 5,
            [QUIRKS]: 1
        }
    ],
    [POLEARMS]: [
        {
            weight: 1,
            entry: 'Ahlspiess',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Bill',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Glaive',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Guisarme',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Halberd',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Lance',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Lucerne',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Military Fork',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Pike',
            base_material: [WOOD, METAL],
            [SIZE]: 'H',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Planson',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Ranseur',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Short Spear',
            base_material: [WOOD, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Sovnya',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Voulge',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'War-scythe',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 1,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 2
        }
    ],
    [SIDEARMS]: [
        {
            weight: 1,
            entry: 'Brass Knuckles',
            base_material: METAL,
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Cinquedea',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Dagger',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Knife',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Stiletto',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Dusack',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Katzbalger',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Scourge',
            base_material: [{ weight: 3, material: WOOD }, { weight: 1, material: METAL }, { weight: 6, material: LEATHER }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 2
        }
    ],
    [SWORDS]: [
        {
            weight: 1,
            entry: 'Arming Sword',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Court Sword',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Estoc',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: "Executioner's Sword ",
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'H',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Falchion',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Koncerz',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Longsword',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Messer',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Rapier',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Sabre',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Schaivona',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Zweihander',
            base_material: [{ label: 'Hilt', materials: [LEATHER, WOOD] }, { label: 'Blade', material: METAL }],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 2
        }
    ],
    [TRAUMA]: [
        {
            weight: 1,
            entry: 'Bec De Corbin',
            base_material: [METAL, WOOD],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Bludgeon',
            base_material: [{ weight: 6, material: WOOD }, { weight: 3, material: METAL }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Club',
            base_material: WOOD,
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 4,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Mace',
            base_material: [{ label: 'Handle', materials: [{ weight: 7, material: WOOD }, { weight: 2, material: METAL }] }, { label: 'Head', material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 5,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Maul',
            base_material: [{ label: 'Handle', materials: [{ weight: 7, material: WOOD }, { weight: 2, material: METAL }] }, { label: 'Head', materials: [{ weight: 7, material: WOOD }, { weight: 3, material: METAL }] }],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Goedendag',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [GEMS]: 0,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Great Hammer',
            base_material: [WOOD, METAL],
            [SIZE]: 'H',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 6,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: "Peasant's Flail",
            base_material: [{ label: 'Handle', materials: [{ weight: 7, material: WOOD }, { weight: 2, material: METAL }] }, { label: 'Head', materials: [{ weight: 7, material: WOOD }, { weight: 3, material: METAL }] }],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 2,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Quarterstaff',
            base_material: [{ weight: 8, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 7,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'War Flail',
            base_material: [WOOD, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 5,
            [ENGRAVINGS]: 2,
            [GEMS]: 2,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'War Hammer',
            base_material: [WOOD, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 6,
            [GEMS]: 2,
            [QUIRKS]: 1
        }
    ],
    [THROWN]: [
        {
            weight: 1,
            entry: 'Javelin',
            base_material: [{ weight: 8, material: WOOD }, { weight: 2, material: METAL }],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 7,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Throwing Axe',
            base_material: [WOOD, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 3,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Throwing Knife',
            base_material: [WOOD, METAL],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 2,
            [ENGRAVINGS]: 4,
            [QUIRKS]: 1
        }
    ],
    [MECHANICAL_RANGED]: [
        {
            weight: 1,
            entry: 'Bellybow',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 3,
            [ENGRAVINGS]: 7,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Composite Bow',
            base_material: [{ weight: 3, material: WOOD }, { weight: 6, material: 'Horn' }, { weight: 1, material: METAL }],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 7,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Crossbow',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 5,
            [ENGRAVINGS]: 3,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Latchet Crossbow',
            base_material: [WOOD, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 1,
            [COLORS]: 6,
            [ENGRAVINGS]: 4,
            [GEMS]: 1,
            [QUIRKS]: 2
        },
        {
            weight: 1,
            entry: 'Longbow',
            base_material: [{ weight: 9, material: WOOD }, { weight: 1, material: METAL }],
            [SIZE]: 'L',
            [ADJECTIVES]: 1,
            [COLORS]: 8,
            [ENGRAVINGS]: 2,
            [GEMS]: 1,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Sling',
            base_material: [{ weight: 3, material: CLOTH }, { weight: 2, material: 'Twine' }, { weight: 3, material: 'Thread' }],
            [SIZE]: 'S',
            [ADJECTIVES]: 1,
            [COLORS]: 8,
            [STITCHINGS]: 5,
            [GEMS]: 0,
            [QUIRKS]: 1
        },
        {
            weight: 1,
            entry: 'Warbow',
            base_material: [{ weight: 6, material: WOOD }, { weight: 3, material: METAL }],
            [SIZE]: 'H',
            [ADJECTIVES]: 1,
            [COLORS]: 9,
            [ENGRAVINGS]: 3,
            [GEMS]: 2,
            [QUIRKS]: 1
        }
    ],
    [FIREARMS]: [
        {
            weight: 3,
            entry: 'Fire Lance',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            'Weapon Colors': 4,
            'Explosion Colors': 8,
            [ENGRAVINGS]: 4,
            [GEMS]: 0,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Hakenbuchse',
            base_material: [WOOD, METAL],
            [SIZE]: 'L',
            [ADJECTIVES]: 2,
            'Weapon Colors': 5,
            'Explosion Colors': 3,
            [ENGRAVINGS]: 6,
            [GEMS]: 1,
            [QUIRKS]: 3
        },
        {
            weight: 1,
            entry: 'Handgonne',
            base_material: [WOOD, METAL],
            [SIZE]: 'M',
            [ADJECTIVES]: 2,
            'Weapon [COLORS]': 6,
            'Explosion [COLORS]': 5,
            [ENGRAVINGS]: 5,
            [GEMS]: 1,
            [QUIRKS]: 3
        }
    ],
    [CLOTH]: [
        { weight: 1, material: 'Serge', value: '.19 sc' },
        { weight: 1, material: 'Burlap', value: '.3 sc' },
        { weight: 1, material: 'Canvas', value: '.32 sc' },
        { weight: 1, material: 'Linen', value: '.37 sc' },
        { weight: 1, material: 'Cotton', value: '.5 sc' },
        { weight: 1, material: 'Wool', value: '.54 sc' },
        { weight: 1, material: 'Calico', value: '.62 sc' },
        { weight: 1, material: 'Satin', value: '.66 sc' },
        { weight: 1, material: 'Taffeta', value: '.75 sc' },
        { weight: 1, material: 'Cambric', value: '.87 sc' },
        { weight: 1, material: 'Muslin', value: '1 sc' },
        { weight: 1, material: 'Worsted', value: '1 sc' },
        { weight: 1, material: 'Hemp', value: '1.25 sc' },
        { weight: 1, material: 'Fustian', value: '1.87 sc' },
        { weight: 1, material: 'Bokeram', value: '2.25 sc' },
        { weight: 1, material: 'Pintado', value: '2.5 sc' },
        { weight: 1, material: 'Mohair', value: '3.12 sc' },
        { weight: 1, material: 'Damask', value: '3.75 sc' },
        { weight: 1, material: 'Tussah', value: '4 sc' },
        { weight: 1, material: 'Silk', value: '4.125 sc' },
        { weight: 1, material: 'Tartan', value: '5 sc' },
        { weight: 1, material: 'Cashmere', value: '5.62 sc' },
        { weight: 1, material: 'Merino', value: '7.5 sc' },
        { weight: 1, material: 'Brocade', value: '10.5 sc' },
        { weight: 1, material: 'Samite', value: '12.5 sc' },
        { weight: 1, material: 'Velvet', value: '12.5 sc' },
        { weight: 1, material: EXOTIC_CLOTH, value: 0 }
    ],
    [EXOTIC_CLOTH]: [
        { weight: 1, material: 'Aegis CLOTH', value: 0 },
        { weight: 1, material: 'Brisingamen CLOTH', value: 0 },
        { weight: 1, material: 'CLOTH of Nessus', value: 0 },
        { weight: 1, material: 'Babr-e Bayan CLOTH', value: 0 },
        { weight: 1, material: 'Spidersilk', value: 0 },
        { weight: 1, material: 'Woven METAL (See METAL)', value: 0 }
    ],
    [FUR_OR_LEATHER]: [
        { weight: 1, material: FUR },
        { weight: 1, material: LEATHER },
    ],
    [FUR]: [
        { weight: 12, material: 'Marten', value: '2.5 sc' },
        { weight: 12, material: 'Stoat', value: '12.5 sc' },
        { weight: 12, material: 'Other Animal', value: '12.5 sc' },
        { weight: 11, material: 'Sable', value: '18.75 sc' },
        { weight: 10, material: 'Beaver', value: '25 sc' },
        { weight: 10, material: 'Ermine', value: '31.25 sc' },
        { weight: 10, material: 'Vair', value: '37.5 sc' },
        { weight: 4, material: 'Monster, Common', value: '25 sc' },
        { weight: 3, material: 'Monster, Uncommon', value: '62.5 sc' },
        { weight: 2, material: 'Monster, Rare', value: '125 sc' },
        { weight: 1, material: 'Monster, Legendary', value: '250 sc' }
    ],
    [LEATHER]: [
        { weight: 16, material: 'Cow', value: '1 sc' },
        { weight: 16, material: 'Chamois', value: '3.125 sc' },
        { weight: 15, material: 'Cordovan', value: '20.625 sc' },
        { weight: 14, material: 'Snakeskin', value: '125 sc' },
        { weight: 14, material: 'Other Animal', value: '1.25 sc' },
        { weight: 9, material: 'Monster, Common', value: '25 sc' },
        {
            weight: 4,
            material: 'Sentient Person (See Race of Origin)',
            value: '60 sc'
        },
        { weight: 4, material: 'Monster, Uncommon', value: '62.5 sc' },
        { weight: 2, material: 'Monster, Rare', value: '125 sc' },
        { weight: 1, material: 'Monster, Legendary', value: '250 sc' }
    ],
    [METAL]: [
        { weight: 13, material: 'Lead', value: '.05 sc' },
        { weight: 13, material: 'Iron', value: '.07 sc' },
        { weight: 12, material: 'Tin', value: '.1 sc' },
        { weight: 12, material: 'Copper', value: '.15 sc' },
        { weight: 12, material: 'Brass', value: '.25 sc' },
        { weight: 11, material: 'Bronze', value: '.5 sc' },
        { weight: 11, material: 'Silver', value: '1.5 sc' },
        { weight: 10, material: 'Gold', value: '12 sc' },
        { weight: 1, material: EXOTIC_METAL, value: 0 }
    ],
    [EXOTIC_METAL]: [
        { weight: 6, material: 'Adamant', value: 0 },
        { weight: 6, material: 'Adamantium', value: 0 },
        { weight: 6, material: 'Administratium', value: 0 },
        { weight: 6, material: 'Aquelium', value: 0 },
        { weight: 6, material: 'Chronoton', value: 0 },
        { weight: 6, material: 'Hedonium', value: 0 },
        { weight: 6, material: 'Mithril', value: 0 },
        { weight: 6, material: 'Orichalcum', value: 0 },
        { weight: 6, material: 'Plutulium', value: 0 },
        { weight: 6, material: 'Red Mercury', value: 0 },
        { weight: 5, material: 'Star METAL', value: 0 },
        { weight: 5, material: 'Terrelium', value: 0 },
        { weight: 5, material: 'Versamina', value: 0 },
        { weight: 5, material: 'Volcanic Glass', value: 0 },
        {
            weight: 5,
            material: 'Enchanted Stone',
            value: 0,
            subtable: STONE_EARTHWORK
        }
    ],
    [PAPER_PRODUCT]: [
        { weight: 1, material: 'Paper', value: '.25 sc' },
        { weight: 1, material: 'Papyrus', value: '1 sc' },
        { weight: 1, material: PARCHMENT, value: '.75 sc' },
        { weight: 1, material: VELLUM, value: '.5 sc' }
    ],
    [PARCHMENT]: [
        { weight: 5, material: 'Cow' },
        { weight: 4, material: 'Goat' },
        { weight: 4, material: 'Sheep' },
        { weight: 3, material: 'Other Common Animal (See LEATHER)' },
        { weight: 1, material: 'Other Animal' },
        { weight: 1, material: 'Monster' },
        { weight: 1, material: 'Sentient Person (see Race of Origin)' }
    ],
    [VELLUM]: [
        { weight: 5, material: 'Cow' },
        { weight: 4, material: 'Goat' },
        { weight: 4, material: 'Sheep' },
        { weight: 3, material: 'Other Common Animal (See LEATHER)' },
        { weight: 1, material: 'Other Animal' },
        { weight: 1, material: 'Monster' },
        { weight: 1, material: 'Sentient Person (see Race of Origin)' }
    ],
    [STONE_EARTHWORK]: [
        { weight: 5, material: 'Clay', value: '.00095 sc' },
        { weight: 5, material: 'Armorstone', value: '.001625 sc' },
        { weight: 5, material: 'Basalt', value: '.005375 sc' },
        { weight: 5, material: 'Limestone', value: '.0089 sc' },
        { weight: 5, material: 'Earthenware', value: '.0625 sc' },
        { weight: 5, material: 'Pottery', value: '.125 sc' },
        { weight: 5, material: 'Tufa', value: '.3125 sc' },
        { weight: 5, material: 'Travertine', value: '.375 sc' },
        { weight: 5, material: WAX, value: '1 sc', subtable: WAX },
        { weight: 5, material: 'Slate', value: '1.875 sc' },
        { weight: 4, material: 'Granite', value: '2.4 sc' },
        { weight: 4, material: 'Flint', value: '2.5 sc' },
        { weight: 4, material: 'Alabaster', value: '2.875 sc' },
        { weight: 4, material: 'Sandstone', value: '2.8725 sc' },
        { weight: 4, material: 'Quartz', value: '7.5 sc' },
        { weight: 4, material: 'Marble', value: '9.375 sc' },
        { weight: 4, material: 'Crystal', value: '11.25 sc' },
        { weight: 3, material: 'Glass', value: '12.5 sc' },
        { weight: 1, material: EXOTIC_STONE_EARTHWORK, value: 0 }
    ],
    [EXOTIC_STONE_EARTHWORK]: [
        { weight: 3, material: 'Adder Stone', value: 0 },
        { weight: 3, material: 'Alatyr', value: 0 },
        { weight: 3, material: 'Baetylus', value: 0 },
        { weight: 3, material: 'Benben', value: 0 },
        { weight: 3, material: 'Bezoar', value: 0 },
        { weight: 3, material: 'Charmstone', value: 0 },
        { weight: 3, material: 'Colored Stone of Nuwa', value: 0 },
        { weight: 3, material: 'Edun Ara', value: 0 },
        { weight: 3, material: 'Gjoll', value: 0 },
        { weight: 3, material: 'Lapis Manalis', value: 0 },
        { weight: 3, material: 'Lia Fail', value: 0 },
        { weight: 3, material: 'Llech Ronw', value: 0 },
        { weight: 3, material: 'Madstone', value: 0 },
        { weight: 2, material: 'Omphalos', value: 0 },
        { weight: 2, material: "Philosopher's Stone", value: 0 },
        { weight: 2, material: 'Seer Stone', value: 0 },
        { weight: 2, material: 'Sessho-seki', value: 0 },
        { weight: 2, material: 'Singasteinn', value: 0 },
        { weight: 2, material: 'Skofnung', value: 0 },
        { weight: 2, material: 'Sledovik', value: 0 },
        { weight: 2, material: 'Snakestone', value: 0 },
        { weight: 2, material: 'Stone of Giramphiel', value: 0 },
        { weight: 2, material: 'Stone of Scone', value: 0 },
        { weight: 2, material: 'Thunderstone', value: 0 },
        { weight: 2, material: 'Toadstone', value: 0 },
        { weight: 2, material: 'Uluru', value: 0 },
        { weight: 2, material: 'Urim & Thummim', value: 0 },
        { weight: 2, material: 'Vaidurya', value: 0 },
        { weight: 2, material: 'Xirang', value: 0 }
    ],
    [WOOD]: [
        { weight: 3, material: 'Pine', value: '.35875 sc' },
        { weight: 3, material: 'Aspen', value: '.5 sc' },
        { weight: 3, material: 'Oak', value: '.55 sc' },
        { weight: 2, material: 'Basswood', value: '.575 sc' },
        { weight: 2, material: 'Hickory', value: '.59375 sc' },
        { weight: 2, material: 'Poplar', value: '.625 sc' },
        { weight: 2, material: 'Ash', value: '.625 sc' },
        { weight: 2, material: 'Cherry', value: '.675 sc' },
        { weight: 2, material: 'Butternut', value: '.775 sc' },
        { weight: 2, material: 'Beech', value: '.78625 sc' },
        { weight: 2, material: 'Ambrosia Maple', value: '.875 sc' },
        { weight: 2, material: 'Yew', value: '1 sc' },
        { weight: 2, material: 'Sapele', value: '1 sc' },
        { weight: 2, material: 'Balsa', value: '1.0625 sc' },
        { weight: 2, material: 'Mahogany', value: '1.15 sc' },
        { weight: 2, material: 'Bark Pocket Maple', value: '1.125 sc' },
        { weight: 2, material: 'Jatoba', value: '1.2375 sc' },
        { weight: 2, material: 'Acacia', value: '1.3125 sc' },
        { weight: 2, material: 'Cedar', value: '1.375 sc' },
        { weight: 2, material: 'Paduk', value: '1.5625 sc' },
        { weight: 2, material: 'Walnut', value: '1.5875 sc' },
        { weight: 2, material: 'Birch', value: '1.625 sc' },
        { weight: 2, material: 'Purpleheart', value: '1.75 sc' },
        { weight: 2, material: 'Redwood', value: '1.875 sc' },
        { weight: 2, material: 'Goncalo Alves', value: '2 sc' },
        { weight: 2, material: 'Chechen', value: '2.02 sc5' },
        { weight: 2, material: 'Canarywood', value: '2.075 sc' },
        { weight: 2, material: 'Yellowheart', value: '2.125 sc' },
        { weight: 2, material: 'Chakte Viga', value: '2.1875 sc' },
        { weight: 2, material: 'Ebiara', value: '2.20625 sc' },
        { weight: 2, material: 'Lacewood', value: '2.225 sc' },
        { weight: 2, material: 'Bloodwood', value: '2.25 sc' },
        { weight: 2, material: 'Leopardwood', value: '2.33125 sc' },
        { weight: 2, material: 'Granadillo', value: '2.375 sc' },
        { weight: 2, material: 'Osage Orange', value: '2.5 sc' },
        { weight: 2, material: 'Katalox', value: '2.75 sc' },
        { weight: 2, material: 'Bubinga', value: '2.8125 sc' },
        { weight: 2, material: 'Wenge', value: '2.875 sc' },
        { weight: 2, material: 'Zebrawood', value: '2.875 sc' },
        { weight: 2, material: 'Mango', value: '2.875 sc' },
        { weight: 2, material: 'Redheart', value: '3.3625 sc' },
        { weight: 2, material: 'Bocote', value: '4 sc' },
        { weight: 2, material: 'Rosewood', value: '4.125 sc' },
        { weight: 2, material: 'Holly', value: '4.375 sc' },
        { weight: 2, material: 'Olivewood', value: '4.625 sc' },
        { weight: 2, material: 'Teak', value: '5.325 sc' },
        { weight: 2, material: 'Cocobolo', value: '8.125 sc' },
        { weight: 2, material: 'Ebony', value: '18.75 sc' },
        { weight: 1, material: EXOTIC_WOOD, value: 0 }
    ],
    [EXOTIC_WOOD]: [
        { weight: 1, material: 'Akshayavat', value: 0 },
        { weight: 1, material: 'Ashvattha', value: 0 },
        { weight: 1, material: 'Displacer Tree', value: 0 },
        { weight: 1, material: 'Dryad Heartwood, Unwillingly Taken', value: 0 },
        { weight: 1, material: 'Dryad Heartwood, Willingly Given', value: 0 },
        { weight: 1, material: 'Ent', value: 0 },
        { weight: 1, material: 'Fusang', value: 0 },
        { weight: 1, material: 'Guardian Tree', value: 0 },
        { weight: 1, material: 'Jinmenju', value: 0 },
        { weight: 1, material: 'Jubokko', value: 0 },
        { weight: 1, material: 'Kai-n-Tiku-Aba', value: 0 },
        { weight: 1, material: 'Kapre', value: 0 },
        { weight: 1, material: 'Lotus Tree', value: 0 },
        { weight: 1, material: 'Money Tree', value: 0 },
        { weight: 1, material: 'Nariphon', value: 0 },
        { weight: 1, material: 'Shatrin', value: 0 },
        { weight: 1, material: 'Sky-High Tree', value: 0 },
        { weight: 1, material: 'Talking Tree', value: 0 },
        { weight: 1, material: 'Tree of Jiva and Atman', value: 0 },
        { weight: 1, material: 'Tree of Life', value: 0 },
        { weight: 1, material: 'Tree of Paradise', value: 0 },
        { weight: 1, material: 'True Maypole Wood', value: 0 },
        { weight: 1, material: 'Tuba', value: 0 },
        { weight: 1, material: 'Tulasi', value: 0 },
        { weight: 1, material: 'Uekera', value: 0 },
        { weight: 1, material: 'Vine of Sodom', value: 0 },
        { weight: 1, material: 'Weirdwood', value: 0 },
        { weight: 1, material: 'White Tree', value: 0 },
        { weight: 1, material: 'Wishing Tree', value: 0 },
        { weight: 1, material: 'Wood from the Five Trees', value: 0 },
        { weight: 1, material: 'World Tree', value: 0 },
        { weight: 1, material: 'Zapis', value: 0 },
        { weight: 1, material: 'Zaqqum', value: 0 }
    ],
    [WAX]: [
        { value: '1.368 sc', material: 'Bee', weight: 1 },
        { value: '5 sc', material: 'Whale Head', weight: 1 },
        { value: '2.5 sc', material: 'Bayberry', weight: 1 },
        { value: '0.162 sc', material: 'Carnauba', weight: 1 },
        { value: '0.179 sc', material: 'Candelilla', weight: 1 },
        { value: '0.148 sc', material: 'Rice Bran', weight: 1 },
        { value: '0.028 sc', material: 'Soy', weight: 1 },
        { value: '0.6 sc', material: 'Jojoba', weight: 1 }
    ],
    other_table: [
        {
            material: 'Animal',
            value: '0.03 sc',
            subtable: ANIMAL_SUBTYPE
        }, {
            material: 'Chicken',
            value: '0.01 sc'
        },
        {
            material: 'Goose',
            value: '0.01 sc'
        },
        {
            material: 'Monster',
            value: '0.1 sc'
        },
        {
            material: 'Bone, Animal',
            value: '0.25 sc',
            subtable: ANIMAL_SUBTYPE
        },
        { material: 'Bone, Monster', value: '3 sc' },
        {
            material: 'Bone, Sentient',
            value: '5 sc',
            subtable: RACE_OF_ORIGIN
        },
        { material: 'Chalk', value: '0.1 sc' },
        { material: 'Chewing Tobacco', value: '0.873 sc' },
        { material: 'Cotton', value: '0.148 sc' },
        { material: 'Crystal', value: '3.75 sc' },
        {
            material: 'Down',
            value: '1.75 sc',
            subtable: ANIMAL_AIR
        },
        {
            material: 'Feather',
            value: '1.18 sc',
            subtable: ANIMAL_AIR
        },
        { material: 'Felt', value: '2.5 sc' },
        { material: 'Gauze', value: '1.1725 sc' },
        { material: 'Glass', value: '5 sc' },
        {
            material: 'Goose Feather',
            value: '1.18 sc'
        },
        {
            material: 'Heavy Down',
            value: '2.1 sc',
            subtable: ANIMAL_AIR
        },
        {
            material: 'Heavy Feather',
            value: '2 sc',
            subtable: ANIMAL_AIR
        },
        { material: 'Hemp Oil', value: '0.17 sc' },
        {
            material: 'Horn',
            value: '2.25 sc',
            subtable: ANIMAL_LAND
        },
        { material: 'Feathers', value: '1 sc', subtable: ANIMAL_AIR },
        { material: 'Ivory', value: '5 sc' },
        { material: 'Linseed Oil', value: '0.581 sc' },
        { material: 'Porcelain', value: '3.75 sc' },
        { material: 'Porcupine Spine', value: '0.737 sc' },
        { material: 'Smoking Tobacco', value: '1.5 sc' },
        { material: 'Straw', value: '0.0005 sc' },
        { material: 'Tallow', value: '0.091 sc' },
        { material: 'Thread', value: '0.009 sc' },
        { material: 'Twine', value: '0.02 sc' },
        { material: 'Whale Oil', value: '0.0097 sc' },
        { material: 'Wicker', value: '0.08 sc', subtable: WOOD },
        { material: 'Wool', value: '0.48 sc' },
        { material: 'Waxed Cloth', subtables: [WAX, CLOTH] },
        { material: 'Waxed Leather', subtables: [WAX, LEATHER] },
    ]
}