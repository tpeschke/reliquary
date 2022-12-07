const { ACADEMIC_TOOLS, ADVENTURING_GEAR, ALCHEMICAL_SUBSTANCES,
    ARMOR, BEVERAGES, CLOTHING, ENTERTAINMENT, FABRICS_AND_ROPES,
    FOOD, HOUSEHOLD_ITEMS, ILLUMINATION, JEWELRY, MEDICAL_TOOLS,
    MUSICAL_INSTRUMENTS, PERSONAL_CONTAINERS, RAW_GOODS, RELIGIOUS_ITEMS,
    SHIELDS, TRADE_TOOLS, WEAPONS, WORKS_OF_ART, ROLL_TWICE, ACCESSORIES, BODY, FOOTWEAR, HEADGEAR } = require('./constants')

module.exports = {
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
    ]
}