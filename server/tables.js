const { ACADEMIC_TOOLS, ADVENTURING_GEAR, ALCHEMICAL_SUBSTANCES,
    ARMOR, BEVERAGES, CLOTHING, ENTERTAINMENT, FABRICS_AND_ROPES,
    FOOD, HOUSEHOLD_ITEMS, ILLUMINATION, JEWELRY, MEDICAL_TOOLS,
    MUSICAL_INSTRUMENTS, PERSONAL_CONTAINERS, RAW_GOODS, RELIGIOUS_ITEMS,
    SHIELDS, TRADE_TOOLS, WEAPONS, WORKS_OF_ART, ROLL_TWICE } = require('./constants')

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
    ]
}