const ingredients = [
    {
        "id": 0,
        "ingredientName": "Agepersa",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Subpolar oceanic",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 13,
            "potion": "Common Potion 14",
            "rarity": "Common"
        }
    },
    {
        "id": 1,
        "ingredientName": "Ancherla Bloom",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Stress",
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 33,
            "potion": "Rare Potion 34",
            "rarity": "Rare"
        }
    },
    {
        "id": 2,
        "ingredientName": "Aniper Wax",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            "Stress"
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Cold",
            "Humid subtropical",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 18,
            "potion": "Rare Potion 19",
            "rarity": "Rare"
        }
    },
    {
        "id": 3,
        "ingredientName": "Anruecur",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 4,
            "potion": "Uncommon Potion 5",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 4,
        "ingredientName": "April Cumsa",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Sand"
            }
        ],
        "reactivity": [
            "Stress",
            "Stress",
            null,
            "Stress",
            "Stress",
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Humid subtropical",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 21,
            "potion": "Uncommon Potion 22",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 5,
        "ingredientName": "April Grese",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 1,
            "potion": "Uncommon Potion 2",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 6,
        "ingredientName": "Armorer's Hand\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Continental (dry winter, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 19,
            "potion": "Uncommon Potion 20",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 7,
        "ingredientName": "Autumn Hair",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Hot deserts",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 11,
            "potion": "Uncommon Potion 12",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 8,
        "ingredientName": "Autumn Head",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 15,
            "potion": "Rare Potion 16",
            "rarity": "Rare"
        }
    },
    {
        "id": 9,
        "ingredientName": "Badger's Will",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 19,
            "potion": "Rare Potion 20",
            "rarity": "Rare"
        }
    },
    {
        "id": 10,
        "ingredientName": "Baker's Sepal",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Stress",
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 34,
            "potion": "Rare Potion 35",
            "rarity": "Rare"
        }
    },
    {
        "id": 11,
        "ingredientName": "Bat's Foot\nNAME CORRUPTED",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 28,
            "potion": "Uncommon Potion 29",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 12,
        "ingredientName": "Beige Hand",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 18,
            "potion": "Uncommon Potion 19",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 13,
        "ingredientName": "Beothar's Coffin",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Stress",
            "Damage",
            "Stress",
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Cold deserts",
            "Steppe, Hot",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 20,
            "potion": "Common Potion 21",
            "rarity": "Common"
        }
    },
    {
        "id": 14,
        "ingredientName": "Beothar's Fairy",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Mediterranean (hot summer)",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 2,
            "potion": "Common Potion 3",
            "rarity": "Common"
        }
    },
    {
        "id": 15,
        "ingredientName": "Beothar's Leviathan",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 37,
            "potion": "Rare Potion 38",
            "rarity": "Rare"
        }
    },
    {
        "id": 16,
        "ingredientName": "Beothar's Tongue",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 33,
            "potion": "Common Potion 34",
            "rarity": "Common"
        }
    },
    {
        "id": 17,
        "ingredientName": "Beryise",
        "harvestablePart": "Moss",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Cold deserts",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 3,
            "potion": "Common Potion 4",
            "rarity": "Common"
        }
    },
    {
        "id": 18,
        "ingredientName": "Black Logweed\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 20,
            "potion": "Uncommon Potion 21",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 19,
        "ingredientName": "Bloot Purple",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Damage",
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 28,
            "potion": "Uncommon Potion 29",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 20,
        "ingredientName": "Blootfern\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 11,
            "potion": "Common Potion 12",
            "rarity": "Common"
        }
    },
    {
        "id": 21,
        "ingredientName": "Blue Latch",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Cold deserts",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 36,
            "potion": "Rare Potion 37",
            "rarity": "Rare"
        }
    },
    {
        "id": 22,
        "ingredientName": "Blushing Hair",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 4,
            "potion": "Rare Potion 5",
            "rarity": "Rare"
        }
    },
    {
        "id": 23,
        "ingredientName": "Blushing Mule",
        "harvestablePart": "Moss",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            "Damage",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 10,
            "potion": "Common Potion 11",
            "rarity": "Common"
        }
    },
    {
        "id": 24,
        "ingredientName": "Bright Ereyule\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Moss",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 40,
            "potion": "Rare Potion 41",
            "rarity": "Rare"
        }
    },
    {
        "id": 25,
        "ingredientName": "Bruno's Nails",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 23,
            "potion": "Rare Potion 24",
            "rarity": "Rare"
        }
    },
    {
        "id": 26,
        "ingredientName": "Bushy Orc",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Damage",
            null,
            "Stress",
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 4,
            "potion": "Rare Potion 5",
            "rarity": "Rare"
        }
    },
    {
        "id": 27,
        "ingredientName": "Bushy Toe\nNAME CORRUPTED",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 31,
            "potion": "Uncommon Potion 32",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 28,
        "ingredientName": "Calf Yabimus",
        "harvestablePart": "Moss",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 15,
            "potion": "Uncommon Potion 16",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 29,
        "ingredientName": "Calf's Latch\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Cliffs"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            "Stress",
            "Stress",
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)"
        ],
        "potionInfo": {
            "id": 29,
            "potion": "Uncommon Potion 30",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 30,
        "ingredientName": "Candler's Indigo\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Damage",
            "Stress",
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Cold",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 13,
            "potion": "Rare Potion 14",
            "rarity": "Rare"
        }
    },
    {
        "id": 31,
        "ingredientName": "Carpenter's Street",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 33,
            "potion": "Rare Potion 34",
            "rarity": "Rare"
        }
    },
    {
        "id": 32,
        "ingredientName": "Cassafrice",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 32,
            "potion": "Common Potion 33",
            "rarity": "Common"
        }
    },
    {
        "id": 33,
        "ingredientName": "Cherafoin Spice",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Hot",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 9,
            "potion": "Rare Potion 10",
            "rarity": "Rare"
        }
    },
    {
        "id": 34,
        "ingredientName": "Chisia",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Stress",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Temperate oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 37,
            "potion": "Rare Potion 38",
            "rarity": "Rare"
        }
    },
    {
        "id": 35,
        "ingredientName": "Chistatro",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            "Damage",
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 16,
            "potion": "Rare Potion 17",
            "rarity": "Rare"
        }
    },
    {
        "id": 36,
        "ingredientName": "Clara's Fairy",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            "Stress",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 29,
            "potion": "Uncommon Potion 30",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 37,
        "ingredientName": "Climbing Fenuekpars",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Mediterranean (warm summer)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 15,
            "potion": "Rare Potion 16",
            "rarity": "Rare"
        }
    },
    {
        "id": 38,
        "ingredientName": "Climbing Spring",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 3,
            "potion": "Rare Potion 4",
            "rarity": "Rare"
        }
    },
    {
        "id": 39,
        "ingredientName": "Climbing Summer",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Hot",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced extremely cold subarctic"
        ],
        "potionInfo": {
            "id": 42,
            "potion": "Rare Potion 43",
            "rarity": "Rare"
        }
    },
    {
        "id": 40,
        "ingredientName": "Clodill Bark",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 5,
            "potion": "Common Potion 6",
            "rarity": "Common"
        }
    },
    {
        "id": 41,
        "ingredientName": "Cockatrice Flower\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 25,
            "potion": "Rare Potion 26",
            "rarity": "Rare"
        }
    },
    {
        "id": 42,
        "ingredientName": "Comare Vesginbur",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 8,
            "potion": "Uncommon Potion 9",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 43,
        "ingredientName": "Comaremulch\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Mediterranean (hot summer)",
            "Subpolar oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 28,
            "potion": "Rare Potion 29",
            "rarity": "Rare"
        }
    },
    {
        "id": 44,
        "ingredientName": "Copse Toe\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Damage",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 13,
            "potion": "Rare Potion 14",
            "rarity": "Rare"
        }
    },
    {
        "id": 45,
        "ingredientName": "Corelsil",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 21,
            "potion": "Rare Potion 22",
            "rarity": "Rare"
        }
    },
    {
        "id": 46,
        "ingredientName": "Crack Livery",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 22,
            "potion": "Uncommon Potion 23",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 47,
        "ingredientName": "Crack Sheath",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 2,
            "potion": "Rare Potion 3",
            "rarity": "Rare"
        }
    },
    {
        "id": 48,
        "ingredientName": "Creeping Hippogriff",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Stress",
            null,
            "Stress",
            "Damage"
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Mediterranean (warm summer)",
            "Humid subtropical",
            "Continental (dry winter, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 27,
            "potion": "Rare Potion 28",
            "rarity": "Rare"
        }
    },
    {
        "id": 49,
        "ingredientName": "Creeping Lolele",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "By",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Damage",
            null,
            "Damage"
        ],
        "classifications": [
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 22,
            "potion": "Uncommon Potion 23",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 50,
        "ingredientName": "Creeping Peck",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Stress",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Cold",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 31,
            "potion": "Rare Potion 32",
            "rarity": "Rare"
        }
    },
    {
        "id": 51,
        "ingredientName": "Cutter's Sepal",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 13,
            "potion": "Rare Potion 14",
            "rarity": "Rare"
        }
    },
    {
        "id": 52,
        "ingredientName": "Cutter's Vine",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 37,
            "potion": "Rare Potion 38",
            "rarity": "Rare"
        }
    },
    {
        "id": 53,
        "ingredientName": "Cyan Mantle",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            "Stress",
            "Stress",
            null,
            "Stress",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 21,
            "potion": "Uncommon Potion 22",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 54,
        "ingredientName": "Damkina's Finger",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Stress",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 27,
            "potion": "Rare Potion 28",
            "rarity": "Rare"
        }
    },
    {
        "id": 55,
        "ingredientName": "Damkina's Hook",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 7,
            "potion": "Uncommon Potion 8",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 56,
        "ingredientName": "Damkina's Mint",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Still Water"
            },
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 9,
            "potion": "Uncommon Potion 10",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 57,
        "ingredientName": "Damkina's Nettles\nNAME CORRUPTED",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 34,
            "potion": "Rare Potion 35",
            "rarity": "Rare"
        }
    },
    {
        "id": 58,
        "ingredientName": "Damkina's Troll\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 6,
            "potion": "Rare Potion 7",
            "rarity": "Rare"
        }
    },
    {
        "id": 59,
        "ingredientName": "Dark Ereyule Willow",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 33,
            "potion": "Rare Potion 34",
            "rarity": "Rare"
        }
    },
    {
        "id": 60,
        "ingredientName": "Dark Litha Mulch\nNAME CORRUPTED",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical monsoon",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 24,
            "potion": "Rare Potion 25",
            "rarity": "Rare"
        }
    },
    {
        "id": 61,
        "ingredientName": "Dava",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Still Water"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 20,
            "potion": "Common Potion 21",
            "rarity": "Common"
        }
    },
    {
        "id": 62,
        "ingredientName": "Dorothea's Wyrm\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 21,
            "potion": "Rare Potion 22",
            "rarity": "Rare"
        }
    },
    {
        "id": 63,
        "ingredientName": "Dryad's Head",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 38,
            "potion": "Rare Potion 39",
            "rarity": "Rare"
        }
    },
    {
        "id": 64,
        "ingredientName": "Dwarf's Bread",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Low Tide"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Temperate oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 35,
            "potion": "Uncommon Potion 36",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 65,
        "ingredientName": "Earsepal\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 42,
            "potion": "Rare Potion 43",
            "rarity": "Rare"
        }
    },
    {
        "id": 66,
        "ingredientName": "Earth Shireleaf\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Still Water"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Stress",
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 21,
            "potion": "Common Potion 22",
            "rarity": "Common"
        }
    },
    {
        "id": 67,
        "ingredientName": "Earthy Dasor",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 2,
            "potion": "Rare Potion 3",
            "rarity": "Rare"
        }
    },
    {
        "id": 68,
        "ingredientName": "Earthy Gold\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 0,
            "potion": "Rare Potion 1",
            "rarity": "Rare"
        }
    },
    {
        "id": 69,
        "ingredientName": "Earthy Olive\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            "Stress",
            "Stress",
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Humid subtropical",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 36,
            "potion": "Rare Potion 37",
            "rarity": "Rare"
        }
    },
    {
        "id": 70,
        "ingredientName": "Earthy Wyrm\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 4,
            "potion": "Common Potion 5",
            "rarity": "Common"
        }
    },
    {
        "id": 71,
        "ingredientName": "Elf Foot",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            "Stress",
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 24,
            "potion": "Uncommon Potion 25",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 72,
        "ingredientName": "Elf's Belt",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            "Damage",
            "Damage"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 9,
            "potion": "Rare Potion 10",
            "rarity": "Rare"
        }
    },
    {
        "id": 73,
        "ingredientName": "Elf's Breeches\nNAME CORRUPTED",
        "harvestablePart": "Moss",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 0,
            "potion": "Uncommon Potion 1",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 74,
        "ingredientName": "Elf's Fulth",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Stress",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Mediterranean (hot summer)",
            "Temperate oceanic",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 18,
            "potion": "Common Potion 19",
            "rarity": "Common"
        }
    },
    {
        "id": 75,
        "ingredientName": "Elf's Mill\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Still Water"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            "Damage",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 28,
            "potion": "Rare Potion 29",
            "rarity": "Rare"
        }
    },
    {
        "id": 76,
        "ingredientName": "Elisabeth's Cyclops",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 2,
            "potion": "Rare Potion 3",
            "rarity": "Rare"
        }
    },
    {
        "id": 77,
        "ingredientName": "Elmira's Coffin",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Still Water"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 18,
            "potion": "Rare Potion 19",
            "rarity": "Rare"
        }
    },
    {
        "id": 78,
        "ingredientName": "Ent's Finger",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 34,
            "potion": "Common Potion 35",
            "rarity": "Common"
        }
    },
    {
        "id": 79,
        "ingredientName": "Ereyule Hide",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Continental (dry winter, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 16,
            "potion": "Rare Potion 17",
            "rarity": "Rare"
        }
    },
    {
        "id": 80,
        "ingredientName": "Eruhantale Cyclops",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 22,
            "potion": "Rare Potion 23",
            "rarity": "Rare"
        }
    },
    {
        "id": 81,
        "ingredientName": "Eruhantale Maroon\nNAME CORRUPTED",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Dry-winter subtropical (cold)",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 33,
            "potion": "Rare Potion 34",
            "rarity": "Rare"
        }
    },
    {
        "id": 82,
        "ingredientName": "Eruhantale Maveda",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 9,
            "potion": "Common Potion 10",
            "rarity": "Common"
        }
    },
    {
        "id": 83,
        "ingredientName": "Estra's Selkie\nNAME CORRUPTED",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 13,
            "potion": "Rare Potion 14",
            "rarity": "Rare"
        }
    },
    {
        "id": 84,
        "ingredientName": "Estra's Sleep",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 9,
            "potion": "Rare Potion 10",
            "rarity": "Rare"
        }
    },
    {
        "id": 85,
        "ingredientName": "Estra's Vine",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            "Damage"
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 24,
            "potion": "Common Potion 25",
            "rarity": "Common"
        }
    },
    {
        "id": 86,
        "ingredientName": "Estra's Walk\nNAME CORRUPTED",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 9,
            "potion": "Rare Potion 10",
            "rarity": "Rare"
        }
    },
    {
        "id": 87,
        "ingredientName": "Ewe's Hide\nNAME CORRUPTED",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 1,
            "potion": "Uncommon Potion 2",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 88,
        "ingredientName": "Fairy's Song",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Still Water"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            "Damage",
            "Damage"
        ],
        "classifications": [
            "Steppe, Hot",
            "Steppe, Cold",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 26,
            "potion": "Common Potion 27",
            "rarity": "Common"
        }
    },
    {
        "id": 89,
        "ingredientName": "Falcon Creeper",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 21,
            "potion": "Uncommon Potion 22",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 90,
        "ingredientName": "Fall Etimusse",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Hot deserts",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 21,
            "potion": "Rare Potion 22",
            "rarity": "Rare"
        }
    },
    {
        "id": 91,
        "ingredientName": "Fall Heron",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Damage",
            null,
            "Stress",
            "Stress"
        ],
        "classifications": [
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 32,
            "potion": "Rare Potion 33",
            "rarity": "Rare"
        }
    },
    {
        "id": 92,
        "ingredientName": "Fall Human",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 5,
            "potion": "Uncommon Potion 6",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 93,
        "ingredientName": "Fall's Will",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 17,
            "potion": "Rare Potion 18",
            "rarity": "Rare"
        }
    },
    {
        "id": 94,
        "ingredientName": "Farm Silver",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 27,
            "potion": "Uncommon Potion 28",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 95,
        "ingredientName": "Farmer's Branch",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Stress",
            "Damage",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 26,
            "potion": "Rare Potion 27",
            "rarity": "Rare"
        }
    },
    {
        "id": 96,
        "ingredientName": "Farmer's Cowl\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical monsoon",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 23,
            "potion": "Common Potion 24",
            "rarity": "Common"
        }
    },
    {
        "id": 97,
        "ingredientName": "Ferret Cotton",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 20,
            "potion": "Uncommon Potion 21",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 98,
        "ingredientName": "Fisherman's Doublet",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 30,
            "potion": "Uncommon Potion 31",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 99,
        "ingredientName": "Fisherman's Elf",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Hot deserts",
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 36,
            "potion": "Rare Potion 37",
            "rarity": "Rare"
        }
    },
    {
        "id": 100,
        "ingredientName": "Fletchery's Hut",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Mediterranean (warm summer)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 4,
            "potion": "Rare Potion 5",
            "rarity": "Rare"
        }
    },
    {
        "id": 101,
        "ingredientName": "Forest Nest",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 7,
            "potion": "Uncommon Potion 8",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 102,
        "ingredientName": "Fresh Laugh\nNAME CORRUPTED",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 19,
            "potion": "Rare Potion 20",
            "rarity": "Rare"
        }
    },
    {
        "id": 103,
        "ingredientName": "Friedrich's Belt\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 32,
            "potion": "Rare Potion 33",
            "rarity": "Rare"
        }
    },
    {
        "id": 104,
        "ingredientName": "Gander Corpse\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 16,
            "potion": "Uncommon Potion 17",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 105,
        "ingredientName": "Gertrud's Cockatrice\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 12,
            "potion": "Uncommon Potion 13",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 106,
        "ingredientName": "Gertrud's Wyvern\nNAME CORRUPTED",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Stress",
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 26,
            "potion": "Uncommon Potion 27",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 107,
        "ingredientName": "Giant's Kiss\nNAME CORRUPTED",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 7,
            "potion": "Uncommon Potion 8",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 108,
        "ingredientName": "Ginchice Grass",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 34,
            "potion": "Rare Potion 35",
            "rarity": "Rare"
        }
    },
    {
        "id": 109,
        "ingredientName": "Glossy Heart",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            "Damage",
            "Stress",
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Humid subtropical",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 35,
            "potion": "Uncommon Potion 36",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 110,
        "ingredientName": "Goat Russet\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            "Damage",
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 20,
            "potion": "Rare Potion 21",
            "rarity": "Rare"
        }
    },
    {
        "id": 111,
        "ingredientName": "Goat's Weed\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Cold deserts",
            "Steppe, Cold",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 0,
            "potion": "Rare Potion 1",
            "rarity": "Rare"
        }
    },
    {
        "id": 112,
        "ingredientName": "Goblin Grass\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 20,
            "potion": "Uncommon Potion 21",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 113,
        "ingredientName": "Goblin's Bone\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Cold deserts",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 8,
            "potion": "Common Potion 9",
            "rarity": "Common"
        }
    },
    {
        "id": 114,
        "ingredientName": "Goblin's Laugh",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 16,
            "potion": "Uncommon Potion 17",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 115,
        "ingredientName": "Gold Blood\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            "Stress",
            "Damage",
            "Damage",
            null
        ],
        "classifications": [
            "Steppe, Hot",
            "Steppe, Cold",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 34,
            "potion": "Uncommon Potion 35",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 116,
        "ingredientName": "Good Vesper Fulth\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Stress",
            "Stress",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 21,
            "potion": "Common Potion 22",
            "rarity": "Common"
        }
    },
    {
        "id": 117,
        "ingredientName": "Goose Olive",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 15,
            "potion": "Rare Potion 16",
            "rarity": "Rare"
        }
    },
    {
        "id": 118,
        "ingredientName": "Goose Saffron",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 14,
            "potion": "Uncommon Potion 15",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 119,
        "ingredientName": "Goose's Spoon",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Humid subtropical",
            "Mediterranean-influenced subarctic",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 12,
            "potion": "Rare Potion 13",
            "rarity": "Rare"
        }
    },
    {
        "id": 120,
        "ingredientName": "Gray Thumb",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 28,
            "potion": "Rare Potion 29",
            "rarity": "Rare"
        }
    },
    {
        "id": 121,
        "ingredientName": "Green Hillweed\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Damage",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 10,
            "potion": "Common Potion 11",
            "rarity": "Common"
        }
    },
    {
        "id": 122,
        "ingredientName": "Green Horsilcher",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Mediterranean (warm summer)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 37,
            "potion": "Rare Potion 38",
            "rarity": "Rare"
        }
    },
    {
        "id": 123,
        "ingredientName": "Green Man Resin\nNAME CORRUPTED",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 18,
            "potion": "Common Potion 19",
            "rarity": "Common"
        }
    },
    {
        "id": 124,
        "ingredientName": "Green Pebblenut",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            "Stress",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 40,
            "potion": "Rare Potion 41",
            "rarity": "Rare"
        }
    },
    {
        "id": 125,
        "ingredientName": "Griffin's Blood\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 36,
            "potion": "Rare Potion 37",
            "rarity": "Rare"
        }
    },
    {
        "id": 126,
        "ingredientName": "Griffin's Eye\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Subpolar oceanic",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 24,
            "potion": "Rare Potion 25",
            "rarity": "Rare"
        }
    },
    {
        "id": 127,
        "ingredientName": "Gudrun's Ent\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 40,
            "potion": "Rare Potion 41",
            "rarity": "Rare"
        }
    },
    {
        "id": 128,
        "ingredientName": "Hand Ear\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "By",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Cold deserts",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 32,
            "potion": "Rare Potion 33",
            "rarity": "Rare"
        }
    },
    {
        "id": 129,
        "ingredientName": "Hare Wasnetpep",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Stress",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 10,
            "potion": "Rare Potion 11",
            "rarity": "Rare"
        }
    },
    {
        "id": 130,
        "ingredientName": "Heap Gray\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 21,
            "potion": "Rare Potion 22",
            "rarity": "Rare"
        }
    },
    {
        "id": 131,
        "ingredientName": "Heartsyrup",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Deep Water"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            "Stress",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (highland)",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic"
        ],
        "potionInfo": {
            "id": 1,
            "potion": "Rare Potion 2",
            "rarity": "Rare"
        }
    },
    {
        "id": 132,
        "ingredientName": "Herbalist's Bull",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Cold deserts",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 7,
            "potion": "Rare Potion 8",
            "rarity": "Rare"
        }
    },
    {
        "id": 133,
        "ingredientName": "Hermann's Rush",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            "Stress",
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 42,
            "potion": "Rare Potion 43",
            "rarity": "Rare"
        }
    },
    {
        "id": 134,
        "ingredientName": "Heron's Bone",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 28,
            "potion": "Rare Potion 29",
            "rarity": "Rare"
        }
    },
    {
        "id": 135,
        "ingredientName": "Hide Nose",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 29,
            "potion": "Rare Potion 30",
            "rarity": "Rare"
        }
    },
    {
        "id": 136,
        "ingredientName": "Hill Farmleaf\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 31,
            "potion": "Uncommon Potion 32",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 137,
        "ingredientName": "Hill's Walk",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Damage",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 20,
            "potion": "Rare Potion 21",
            "rarity": "Rare"
        }
    },
    {
        "id": 138,
        "ingredientName": "Honey May",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 33,
            "potion": "Uncommon Potion 34",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 139,
        "ingredientName": "Honey Pech",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 29,
            "potion": "Common Potion 30",
            "rarity": "Common"
        }
    },
    {
        "id": 140,
        "ingredientName": "Honey Winter Floil",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Steppe, Cold",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 32,
            "potion": "Common Potion 33",
            "rarity": "Common"
        }
    },
    {
        "id": 141,
        "ingredientName": "Human Tongue",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            "Damage",
            "Damage",
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 24,
            "potion": "Rare Potion 25",
            "rarity": "Rare"
        }
    },
    {
        "id": 142,
        "ingredientName": "Human's Cotton",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 6,
            "potion": "Uncommon Potion 7",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 143,
        "ingredientName": "Human's Petal\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 13,
            "potion": "Uncommon Potion 14",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 144,
        "ingredientName": "Hut Beige\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Hot deserts",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 2,
            "potion": "Rare Potion 3",
            "rarity": "Rare"
        }
    },
    {
        "id": 145,
        "ingredientName": "Iccinger Bloom",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 31,
            "potion": "Rare Potion 32",
            "rarity": "Rare"
        }
    },
    {
        "id": 146,
        "ingredientName": "Indigo Autumn Grass",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 12,
            "potion": "Uncommon Potion 13",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 147,
        "ingredientName": "Indigo Doublet",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 28,
            "potion": "Common Potion 29",
            "rarity": "Common"
        }
    },
    {
        "id": 148,
        "ingredientName": "Indigo Eye",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Stress",
            "Stress",
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 29,
            "potion": "Common Potion 30",
            "rarity": "Common"
        }
    },
    {
        "id": 149,
        "ingredientName": "Indigo Samhain Oil",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Still Water"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Damage",
            "Stress",
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 0,
            "potion": "Rare Potion 1",
            "rarity": "Rare"
        }
    },
    {
        "id": 150,
        "ingredientName": "Isemasil",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 2,
            "potion": "Uncommon Potion 3",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 151,
        "ingredientName": "Isesor",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Shallow Water"
            },
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Damage",
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)"
        ],
        "potionInfo": {
            "id": 22,
            "potion": "Rare Potion 23",
            "rarity": "Rare"
        }
    },
    {
        "id": 152,
        "ingredientName": "Jester's Flower\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 25,
            "potion": "Rare Potion 26",
            "rarity": "Rare"
        }
    },
    {
        "id": 153,
        "ingredientName": "Jester's Manticore\nNAME CORRUPTED",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Deep Water"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Damage",
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 10,
            "potion": "Uncommon Potion 11",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 154,
        "ingredientName": "Jester's Teeth",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 30,
            "potion": "Rare Potion 31",
            "rarity": "Rare"
        }
    },
    {
        "id": 155,
        "ingredientName": "July Heron",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 0,
            "potion": "Common Potion 1",
            "rarity": "Common"
        }
    },
    {
        "id": 156,
        "ingredientName": "Kelpie's Hat\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 8,
            "potion": "Rare Potion 9",
            "rarity": "Rare"
        }
    },
    {
        "id": 157,
        "ingredientName": "Kiss's Human\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 6,
            "potion": "Rare Potion 7",
            "rarity": "Rare"
        }
    },
    {
        "id": 158,
        "ingredientName": "Kissing Ditch\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Hot deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 35,
            "potion": "Rare Potion 36",
            "rarity": "Rare"
        }
    },
    {
        "id": 159,
        "ingredientName": "Kissing Mulch",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 35,
            "potion": "Rare Potion 36",
            "rarity": "Rare"
        }
    },
    {
        "id": 160,
        "ingredientName": "Knight's Saffron\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            "Stress",
            "Damage"
        ],
        "classifications": [
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 7,
            "potion": "Rare Potion 8",
            "rarity": "Rare"
        }
    },
    {
        "id": 161,
        "ingredientName": "Lake Soul\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (highland)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 16,
            "potion": "Rare Potion 17",
            "rarity": "Rare"
        }
    },
    {
        "id": 162,
        "ingredientName": "Lammas Perven",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 1,
            "potion": "Common Potion 2",
            "rarity": "Common"
        }
    },
    {
        "id": 163,
        "ingredientName": "Lammas White\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            "Damage",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 25,
            "potion": "Uncommon Potion 26",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 164,
        "ingredientName": "Laughing Finger",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Hot deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 31,
            "potion": "Rare Potion 32",
            "rarity": "Rare"
        }
    },
    {
        "id": 165,
        "ingredientName": "Laughing Head",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Subpolar oceanic",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 8,
            "potion": "Rare Potion 9",
            "rarity": "Rare"
        }
    },
    {
        "id": 166,
        "ingredientName": "Leopold's Ent\nNAME CORRUPTED",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Still Water"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 22,
            "potion": "Rare Potion 23",
            "rarity": "Rare"
        }
    },
    {
        "id": 167,
        "ingredientName": "Leopold's Laugh",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Subpolar oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 3,
            "potion": "Rare Potion 4",
            "rarity": "Rare"
        }
    },
    {
        "id": 168,
        "ingredientName": "Leyic",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            }
        ],
        "reactivity": [
            "Stress",
            "Damage",
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 22,
            "potion": "Common Potion 23",
            "rarity": "Common"
        }
    },
    {
        "id": 169,
        "ingredientName": "Liesl's Bellows",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Stress",
            "Stress",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 23,
            "potion": "Uncommon Potion 24",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 170,
        "ingredientName": "Liesl's Coffin",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Shallow Water"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 15,
            "potion": "Uncommon Potion 16",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 171,
        "ingredientName": "Liesl's Pen\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            "Damage",
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 2,
            "potion": "Uncommon Potion 3",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 172,
        "ingredientName": "Litha Fur",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 39,
            "potion": "Rare Potion 40",
            "rarity": "Rare"
        }
    },
    {
        "id": 173,
        "ingredientName": "Lobed Pech",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 29,
            "potion": "Rare Potion 30",
            "rarity": "Rare"
        }
    },
    {
        "id": 174,
        "ingredientName": "Log Teal",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            "Stress",
            "Damage"
        ],
        "classifications": [
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 41,
            "potion": "Rare Potion 42",
            "rarity": "Rare"
        }
    },
    {
        "id": 175,
        "ingredientName": "Lowland Pentimber",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Still Water"
            },
            {
                "adjacency": "By",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            "Damage",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Steppe, Cold",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 12,
            "potion": "Rare Potion 13",
            "rarity": "Rare"
        }
    },
    {
        "id": 176,
        "ingredientName": "Magenta Finger",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Stress",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 27,
            "potion": "Uncommon Potion 28",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 177,
        "ingredientName": "Magenta Human Anther\nNAME CORRUPTED",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Humid subtropical",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 35,
            "potion": "Uncommon Potion 36",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 178,
        "ingredientName": "Magenta Lammas Bloom",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 27,
            "potion": "Rare Potion 28",
            "rarity": "Rare"
        }
    },
    {
        "id": 179,
        "ingredientName": "Magenta Sheep Resin",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Damage",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 17,
            "potion": "Rare Potion 18",
            "rarity": "Rare"
        }
    },
    {
        "id": 180,
        "ingredientName": "Map Loom\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            "Damage",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 10,
            "potion": "Uncommon Potion 11",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 181,
        "ingredientName": "Mapper's Red\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 8,
            "potion": "Rare Potion 9",
            "rarity": "Rare"
        }
    },
    {
        "id": 182,
        "ingredientName": "Margarete's Surcoat",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 19,
            "potion": "Common Potion 20",
            "rarity": "Common"
        }
    },
    {
        "id": 183,
        "ingredientName": "Marlem",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 26,
            "potion": "Common Potion 27",
            "rarity": "Common"
        }
    },
    {
        "id": 184,
        "ingredientName": "Maroon June Fruit\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 5,
            "potion": "Common Potion 6",
            "rarity": "Common"
        }
    },
    {
        "id": 185,
        "ingredientName": "Maroon Spring Cotton\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 29,
            "potion": "Rare Potion 30",
            "rarity": "Rare"
        }
    },
    {
        "id": 186,
        "ingredientName": "Maroonnut",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Deep Water"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            "Stress",
            "Stress",
            null,
            "Damage",
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 4,
            "potion": "Rare Potion 5",
            "rarity": "Rare"
        }
    },
    {
        "id": 187,
        "ingredientName": "Marten's Blanket",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Stress",
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 1,
            "potion": "Rare Potion 2",
            "rarity": "Rare"
        }
    },
    {
        "id": 188,
        "ingredientName": "May Horecur",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Shallow Water"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 40,
            "potion": "Rare Potion 41",
            "rarity": "Rare"
        }
    },
    {
        "id": 189,
        "ingredientName": "Mejo",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 16,
            "potion": "Common Potion 17",
            "rarity": "Common"
        }
    },
    {
        "id": 190,
        "ingredientName": "Merchant's Farm",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Steppe, Hot",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 5,
            "potion": "Uncommon Potion 6",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 191,
        "ingredientName": "Mettare Bergnelgin",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Stress",
            "Damage",
            null,
            "Stress",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 25,
            "potion": "Rare Potion 26",
            "rarity": "Rare"
        }
    },
    {
        "id": 192,
        "ingredientName": "Midnightgrass",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 1,
            "potion": "Common Potion 2",
            "rarity": "Common"
        }
    },
    {
        "id": 193,
        "ingredientName": "Midsummer Cyan",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            "Damage",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 33,
            "potion": "Common Potion 34",
            "rarity": "Common"
        }
    },
    {
        "id": 194,
        "ingredientName": "Midsummer Fenurice",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 18,
            "potion": "Uncommon Potion 19",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 195,
        "ingredientName": "Midwinter Lyper",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Mediterranean (cold summer)",
            "Humid subtropical",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 30,
            "potion": "Common Potion 31",
            "rarity": "Common"
        }
    },
    {
        "id": 196,
        "ingredientName": "Midwinter Oread",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 39,
            "potion": "Rare Potion 40",
            "rarity": "Rare"
        }
    },
    {
        "id": 197,
        "ingredientName": "Mill Gold\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 32,
            "potion": "Uncommon Potion 33",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 198,
        "ingredientName": "Millseed\nNAME CORRUPTED",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Cold",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 24,
            "potion": "Uncommon Potion 25",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 199,
        "ingredientName": "Miner's Goblin",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Damage",
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 0,
            "potion": "Rare Potion 1",
            "rarity": "Rare"
        }
    },
    {
        "id": 200,
        "ingredientName": "Moned",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 6,
            "potion": "Uncommon Potion 7",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 201,
        "ingredientName": "Monk's Tongue\nNAME CORRUPTED",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Mediterranean (cold summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 15,
            "potion": "Uncommon Potion 16",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 202,
        "ingredientName": "Morjana's Creeper",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Stress",
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 14,
            "potion": "Common Potion 15",
            "rarity": "Common"
        }
    },
    {
        "id": 203,
        "ingredientName": "Morjana's Stable\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 6,
            "potion": "Rare Potion 7",
            "rarity": "Rare"
        }
    },
    {
        "id": 204,
        "ingredientName": "Morjana's Touch",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 31,
            "potion": "Common Potion 32",
            "rarity": "Common"
        }
    },
    {
        "id": 205,
        "ingredientName": "Morjana's Weep",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Damage",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 25,
            "potion": "Rare Potion 26",
            "rarity": "Rare"
        }
    },
    {
        "id": 206,
        "ingredientName": "Morning Gown\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 41,
            "potion": "Rare Potion 42",
            "rarity": "Rare"
        }
    },
    {
        "id": 207,
        "ingredientName": "Mule's Hose\nNAME CORRUPTED",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Humid subtropical",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 23,
            "potion": "Rare Potion 24",
            "rarity": "Rare"
        }
    },
    {
        "id": 208,
        "ingredientName": "Musty Gelan",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Humid subtropical",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 27,
            "potion": "Uncommon Potion 28",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 209,
        "ingredientName": "Musty Weep\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "By",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Damage",
            "Damage",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 19,
            "potion": "Rare Potion 20",
            "rarity": "Rare"
        }
    },
    {
        "id": 210,
        "ingredientName": "Musva",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            "Damage",
            "Stress",
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 11,
            "potion": "Rare Potion 12",
            "rarity": "Rare"
        }
    },
    {
        "id": 211,
        "ingredientName": "Nelce",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)"
        ],
        "potionInfo": {
            "id": 18,
            "potion": "Rare Potion 19",
            "rarity": "Rare"
        }
    },
    {
        "id": 212,
        "ingredientName": "Noon Olive",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Steppe, Cold",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 7,
            "potion": "Common Potion 8",
            "rarity": "Common"
        }
    },
    {
        "id": 213,
        "ingredientName": "Noon White\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Cold deserts",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 13,
            "potion": "Uncommon Potion 14",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 214,
        "ingredientName": "Northern Cloak",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 14,
            "potion": "Rare Potion 15",
            "rarity": "Rare"
        }
    },
    {
        "id": 215,
        "ingredientName": "Norycost",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Still Water"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, very cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 3,
            "potion": "Uncommon Potion 4",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 216,
        "ingredientName": "Noseresin\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            "Stress",
            null,
            "Stress",
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 14,
            "potion": "Rare Potion 15",
            "rarity": "Rare"
        }
    },
    {
        "id": 217,
        "ingredientName": "Nosesyrup",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            "Damage",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 36,
            "potion": "Uncommon Potion 37",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 218,
        "ingredientName": "Nymph Fern\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Hot",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 0,
            "potion": "Common Potion 1",
            "rarity": "Common"
        }
    },
    {
        "id": 219,
        "ingredientName": "Ogre's Peck",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            },
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 36,
            "potion": "Uncommon Potion 37",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 220,
        "ingredientName": "Onran",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 19,
            "potion": "Uncommon Potion 20",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 221,
        "ingredientName": "Orc Hair",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Stress",
            "Stress",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Mediterranean (hot summer)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 28,
            "potion": "Common Potion 29",
            "rarity": "Common"
        }
    },
    {
        "id": 222,
        "ingredientName": "Orc Song\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 17,
            "potion": "Uncommon Potion 18",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 223,
        "ingredientName": "Orc's Nut\nNAME CORRUPTED",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Steppe, Hot",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 11,
            "potion": "Rare Potion 12",
            "rarity": "Rare"
        }
    },
    {
        "id": 224,
        "ingredientName": "Ornutar",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            "Damage",
            "Stress",
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)"
        ],
        "potionInfo": {
            "id": 29,
            "potion": "Uncommon Potion 30",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 225,
        "ingredientName": "Ostara Mule\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 19,
            "potion": "Rare Potion 20",
            "rarity": "Rare"
        }
    },
    {
        "id": 226,
        "ingredientName": "Ostara Rat\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 24,
            "potion": "Rare Potion 25",
            "rarity": "Rare"
        }
    },
    {
        "id": 227,
        "ingredientName": "Ostara White",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 25,
            "potion": "Common Potion 26",
            "rarity": "Common"
        }
    },
    {
        "id": 228,
        "ingredientName": "Ostara's Will",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 38,
            "potion": "Rare Potion 39",
            "rarity": "Rare"
        }
    },
    {
        "id": 229,
        "ingredientName": "Otto's Barn",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic"
        ],
        "potionInfo": {
            "id": 17,
            "potion": "Rare Potion 18",
            "rarity": "Rare"
        }
    },
    {
        "id": 230,
        "ingredientName": "Oval Turuhalme",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 22,
            "potion": "Rare Potion 23",
            "rarity": "Rare"
        }
    },
    {
        "id": 231,
        "ingredientName": "Owl Beige\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            "Stress",
            "Stress"
        ],
        "classifications": [
            "Hot deserts",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 18,
            "potion": "Uncommon Potion 19",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 232,
        "ingredientName": "Owl's Weep",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 24,
            "potion": "Uncommon Potion 25",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 233,
        "ingredientName": "Ox's Weep\nNAME CORRUPTED",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic"
        ],
        "potionInfo": {
            "id": 8,
            "potion": "Rare Potion 9",
            "rarity": "Rare"
        }
    },
    {
        "id": 234,
        "ingredientName": "Pagan's Kiss\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            "Stress",
            "Stress"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 5,
            "potion": "Uncommon Potion 6",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 235,
        "ingredientName": "Pagan's Laugh\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            "Damage",
            null
        ],
        "classifications": [
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 9,
            "potion": "Rare Potion 10",
            "rarity": "Rare"
        }
    },
    {
        "id": 236,
        "ingredientName": "Page's House",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 19,
            "potion": "Rare Potion 20",
            "rarity": "Rare"
        }
    },
    {
        "id": 237,
        "ingredientName": "Page's Shoes\nNAME CORRUPTED",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Deep Water"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)"
        ],
        "potionInfo": {
            "id": 7,
            "potion": "Rare Potion 8",
            "rarity": "Rare"
        }
    },
    {
        "id": 238,
        "ingredientName": "Pecking Foot\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Still Water"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Humid subtropical",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 37,
            "potion": "Rare Potion 38",
            "rarity": "Rare"
        }
    },
    {
        "id": 239,
        "ingredientName": "Pecking Saffron\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 34,
            "potion": "Uncommon Potion 35",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 240,
        "ingredientName": "Peddler's Troll\nNAME CORRUPTED",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Stress",
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 42,
            "potion": "Rare Potion 43",
            "rarity": "Rare"
        }
    },
    {
        "id": 241,
        "ingredientName": "Pentimber",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Subpolar oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 22,
            "potion": "Uncommon Potion 23",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 242,
        "ingredientName": "Perhor",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Hot deserts",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 27,
            "potion": "Rare Potion 28",
            "rarity": "Rare"
        }
    },
    {
        "id": 243,
        "ingredientName": "Pilot's Meat",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 2,
            "potion": "Uncommon Potion 3",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 244,
        "ingredientName": "Pink Human Nettles",
        "harvestablePart": "Moss",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            "Stress",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 17,
            "potion": "Rare Potion 18",
            "rarity": "Rare"
        }
    },
    {
        "id": 245,
        "ingredientName": "Pink Muscecher",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 9,
            "potion": "Uncommon Potion 10",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 246,
        "ingredientName": "Pure Mule\nNAME CORRUPTED",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 15,
            "potion": "Rare Potion 16",
            "rarity": "Rare"
        }
    },
    {
        "id": 247,
        "ingredientName": "Purple Desertrush",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 12,
            "potion": "Common Potion 13",
            "rarity": "Common"
        }
    },
    {
        "id": 248,
        "ingredientName": "Queen's Maroon",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 30,
            "potion": "Uncommon Potion 31",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 249,
        "ingredientName": "Rabbit Beige",
        "harvestablePart": "Moss",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 2,
            "potion": "Rare Potion 3",
            "rarity": "Rare"
        }
    },
    {
        "id": 250,
        "ingredientName": "Ratfolk Foot",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 34,
            "potion": "Rare Potion 35",
            "rarity": "Rare"
        }
    },
    {
        "id": 251,
        "ingredientName": "Ratfolk's Chemise",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 27,
            "potion": "Rare Potion 28",
            "rarity": "Rare"
        }
    },
    {
        "id": 252,
        "ingredientName": "Relise Grass",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 26,
            "potion": "Rare Potion 27",
            "rarity": "Rare"
        }
    },
    {
        "id": 253,
        "ingredientName": "Ridged May",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 24,
            "potion": "Common Potion 25",
            "rarity": "Common"
        }
    },
    {
        "id": 254,
        "ingredientName": "Ridged Nymph",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Hot",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 6,
            "potion": "Common Potion 7",
            "rarity": "Common"
        }
    },
    {
        "id": 255,
        "ingredientName": "Ridged Owl",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Stress",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Hot",
            "Steppe, Cold",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 29,
            "potion": "Rare Potion 30",
            "rarity": "Rare"
        }
    },
    {
        "id": 256,
        "ingredientName": "Robecur",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced subarctic"
        ],
        "potionInfo": {
            "id": 19,
            "potion": "Common Potion 20",
            "rarity": "Common"
        }
    },
    {
        "id": 257,
        "ingredientName": "Rock Saffron",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Still Water"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            "Damage",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 21,
            "potion": "Rare Potion 22",
            "rarity": "Rare"
        }
    },
    {
        "id": 258,
        "ingredientName": "Rooster Russet\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Shallow Water"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Subpolar oceanic",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 22,
            "potion": "Common Potion 23",
            "rarity": "Common"
        }
    },
    {
        "id": 259,
        "ingredientName": "Rooster's Head",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 15,
            "potion": "Rare Potion 16",
            "rarity": "Rare"
        }
    },
    {
        "id": 260,
        "ingredientName": "Rooster's Tongue",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 26,
            "potion": "Rare Potion 27",
            "rarity": "Rare"
        }
    },
    {
        "id": 261,
        "ingredientName": "Rough Liesl",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 25,
            "potion": "Common Potion 26",
            "rarity": "Common"
        }
    },
    {
        "id": 262,
        "ingredientName": "Rough Thumb",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            "Damage",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 28,
            "potion": "Uncommon Potion 29",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 263,
        "ingredientName": "Rusty Venlyise",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Temperate oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 19,
            "potion": "Uncommon Potion 20",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 264,
        "ingredientName": "Ryymon",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            "Stress",
            "Stress",
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 32,
            "potion": "Rare Potion 33",
            "rarity": "Rare"
        }
    },
    {
        "id": 265,
        "ingredientName": "Saffron Kraken Rush",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 34,
            "potion": "Uncommon Potion 35",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 266,
        "ingredientName": "Saffronmulch",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Stress",
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 3,
            "potion": "Rare Potion 4",
            "rarity": "Rare"
        }
    },
    {
        "id": 267,
        "ingredientName": "Samhain Beige",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Steppe, Hot",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 12,
            "potion": "Rare Potion 13",
            "rarity": "Rare"
        }
    },
    {
        "id": 268,
        "ingredientName": "Sand Pan\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            "Damage",
            "Stress",
            "Damage",
            "Damage"
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 30,
            "potion": "Rare Potion 31",
            "rarity": "Rare"
        }
    },
    {
        "id": 269,
        "ingredientName": "Scribe's Barn",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Mediterranean (hot summer)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 27,
            "potion": "Common Potion 28",
            "rarity": "Common"
        }
    },
    {
        "id": 270,
        "ingredientName": "Serpent Venmintmar",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Cold deserts",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 30,
            "potion": "Common Potion 31",
            "rarity": "Common"
        }
    },
    {
        "id": 271,
        "ingredientName": "Shady Beltane",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 5,
            "potion": "Rare Potion 6",
            "rarity": "Rare"
        }
    },
    {
        "id": 272,
        "ingredientName": "Shrew Bloom",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 8,
            "potion": "Common Potion 9",
            "rarity": "Common"
        }
    },
    {
        "id": 273,
        "ingredientName": "Shrew Yellow\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Cold deserts",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid"
        ],
        "potionInfo": {
            "id": 7,
            "potion": "Common Potion 8",
            "rarity": "Common"
        }
    },
    {
        "id": 274,
        "ingredientName": "Siegen's Horn",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            "Stress",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Humid subtropical",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 16,
            "potion": "Uncommon Potion 17",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 275,
        "ingredientName": "Siegen's Mill\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 20,
            "potion": "Rare Potion 21",
            "rarity": "Rare"
        }
    },
    {
        "id": 276,
        "ingredientName": "Silver Dwarf Wort\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            "Stress",
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 29,
            "potion": "Rare Potion 30",
            "rarity": "Rare"
        }
    },
    {
        "id": 277,
        "ingredientName": "Silver Elf Syrup",
        "harvestablePart": "Moss",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 1,
            "potion": "Uncommon Potion 2",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 278,
        "ingredientName": "Silver Forestwax",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 17,
            "potion": "Uncommon Potion 18",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 279,
        "ingredientName": "Silver Naiad Oil\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Stress",
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Mediterranean (cold summer)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 1,
            "potion": "Rare Potion 2",
            "rarity": "Rare"
        }
    },
    {
        "id": 280,
        "ingredientName": "Silver Noon Willow",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 14,
            "potion": "Rare Potion 15",
            "rarity": "Rare"
        }
    },
    {
        "id": 281,
        "ingredientName": "Silverblossom\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Continental (dry winter, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 25,
            "potion": "Rare Potion 26",
            "rarity": "Rare"
        }
    },
    {
        "id": 282,
        "ingredientName": "Skiping Chapel",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 4,
            "potion": "Rare Potion 5",
            "rarity": "Rare"
        }
    },
    {
        "id": 283,
        "ingredientName": "Skiping Hide\nNAME CORRUPTED",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 6,
            "potion": "Rare Potion 7",
            "rarity": "Rare"
        }
    },
    {
        "id": 284,
        "ingredientName": "Sleeping Black",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Cold",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 26,
            "potion": "Rare Potion 27",
            "rarity": "Rare"
        }
    },
    {
        "id": 285,
        "ingredientName": "Sleeping Chapel\nNAME CORRUPTED",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 11,
            "potion": "Uncommon Potion 12",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 286,
        "ingredientName": "Smith's Black",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 14,
            "potion": "Rare Potion 15",
            "rarity": "Rare"
        }
    },
    {
        "id": 287,
        "ingredientName": "Smooth Imbolc Fulth",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Continental (dry winter, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 31,
            "potion": "Rare Potion 32",
            "rarity": "Rare"
        }
    },
    {
        "id": 288,
        "ingredientName": "Smooth Orc",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 26,
            "potion": "Uncommon Potion 27",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 289,
        "ingredientName": "Soal Thatch\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Still Water"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Stress",
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 32,
            "potion": "Rare Potion 33",
            "rarity": "Rare"
        }
    },
    {
        "id": 290,
        "ingredientName": "Sofie's Well\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 9,
            "potion": "Common Potion 10",
            "rarity": "Common"
        }
    },
    {
        "id": 291,
        "ingredientName": "Soft Badger",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 23,
            "potion": "Common Potion 24",
            "rarity": "Common"
        }
    },
    {
        "id": 292,
        "ingredientName": "Soft Boar",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 40,
            "potion": "Rare Potion 41",
            "rarity": "Rare"
        }
    },
    {
        "id": 293,
        "ingredientName": "Soft Wolf",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 14,
            "potion": "Rare Potion 15",
            "rarity": "Rare"
        }
    },
    {
        "id": 294,
        "ingredientName": "Songing Copse\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            "Damage",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 39,
            "potion": "Rare Potion 40",
            "rarity": "Rare"
        }
    },
    {
        "id": 295,
        "ingredientName": "Soul Nose",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 3,
            "potion": "Uncommon Potion 4",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 296,
        "ingredientName": "Souloil",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Deep Water"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Stress",
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Cold deserts",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 25,
            "potion": "Uncommon Potion 26",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 297,
        "ingredientName": "Sour Bear",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 11,
            "potion": "Rare Potion 12",
            "rarity": "Rare"
        }
    },
    {
        "id": 298,
        "ingredientName": "Sour Weep",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Cliffs"
            },
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 15,
            "potion": "Common Potion 16",
            "rarity": "Common"
        }
    },
    {
        "id": 299,
        "ingredientName": "Sovalle Dillruedill",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 4,
            "potion": "Uncommon Potion 5",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 300,
        "ingredientName": "Sovalle Yle",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Mediterranean-influenced warm-summer humid",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 20,
            "potion": "Rare Potion 21",
            "rarity": "Rare"
        }
    },
    {
        "id": 301,
        "ingredientName": "Sovalleweed\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 17,
            "potion": "Uncommon Potion 18",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 302,
        "ingredientName": "Spring Borsilsor",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 34,
            "potion": "Rare Potion 35",
            "rarity": "Rare"
        }
    },
    {
        "id": 303,
        "ingredientName": "Spring Breeches",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 18,
            "potion": "Rare Potion 19",
            "rarity": "Rare"
        }
    },
    {
        "id": 304,
        "ingredientName": "Spring Dwarf",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            },
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Stress",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 24,
            "potion": "Rare Potion 25",
            "rarity": "Rare"
        }
    },
    {
        "id": 305,
        "ingredientName": "Spring Green",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Deep Water"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            "Damage",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Tundra"
        ],
        "potionInfo": {
            "id": 14,
            "potion": "Uncommon Potion 15",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 306,
        "ingredientName": "Spring Ogre\nNAME CORRUPTED",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 35,
            "potion": "Rare Potion 36",
            "rarity": "Rare"
        }
    },
    {
        "id": 307,
        "ingredientName": "Spring Roe",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            "Damage",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Mediterranean (cold summer)",
            "Humid subtropical",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Tundra"
        ],
        "potionInfo": {
            "id": 23,
            "potion": "Rare Potion 24",
            "rarity": "Rare"
        }
    },
    {
        "id": 308,
        "ingredientName": "Spring Saffron",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 30,
            "potion": "Rare Potion 31",
            "rarity": "Rare"
        }
    },
    {
        "id": 309,
        "ingredientName": "Spring Sheath",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 38,
            "potion": "Rare Potion 39",
            "rarity": "Rare"
        }
    },
    {
        "id": 310,
        "ingredientName": "Spring Spindle",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 16,
            "potion": "Common Potion 17",
            "rarity": "Common"
        }
    },
    {
        "id": 311,
        "ingredientName": "Spring Teeth",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 10,
            "potion": "Rare Potion 11",
            "rarity": "Rare"
        }
    },
    {
        "id": 312,
        "ingredientName": "Spring Wyvern",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Cliffs"
            },
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)"
        ],
        "potionInfo": {
            "id": 13,
            "potion": "Common Potion 14",
            "rarity": "Common"
        }
    },
    {
        "id": 313,
        "ingredientName": "Spring's Skip",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            "Damage",
            "Stress",
            null
        ],
        "classifications": [
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 23,
            "potion": "Uncommon Potion 24",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 314,
        "ingredientName": "Spring's Skip",
        "harvestablePart": "Moss",
        "locations": [
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Cold",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 22,
            "potion": "Rare Potion 23",
            "rarity": "Rare"
        }
    },
    {
        "id": 315,
        "ingredientName": "Squire's Well\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 11,
            "potion": "Common Potion 12",
            "rarity": "Common"
        }
    },
    {
        "id": 316,
        "ingredientName": "Stallion's Peck",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 41,
            "potion": "Rare Potion 42",
            "rarity": "Rare"
        }
    },
    {
        "id": 317,
        "ingredientName": "Stork Lanmegsia",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 14,
            "potion": "Common Potion 15",
            "rarity": "Common"
        }
    },
    {
        "id": 318,
        "ingredientName": "Stream Millsepal",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 30,
            "potion": "Rare Potion 31",
            "rarity": "Rare"
        }
    },
    {
        "id": 319,
        "ingredientName": "Summer Candle",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Stress",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Mediterranean (cold summer)",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 0,
            "potion": "Uncommon Potion 1",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 320,
        "ingredientName": "Summer Dragon",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            "Stress",
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 17,
            "potion": "Common Potion 18",
            "rarity": "Common"
        }
    },
    {
        "id": 321,
        "ingredientName": "Summer Elf\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 3,
            "potion": "Common Potion 4",
            "rarity": "Common"
        }
    },
    {
        "id": 322,
        "ingredientName": "Summer Gander",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 39,
            "potion": "Rare Potion 40",
            "rarity": "Rare"
        }
    },
    {
        "id": 323,
        "ingredientName": "Summer Goblin",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Mediterranean (warm summer)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 31,
            "potion": "Common Potion 32",
            "rarity": "Common"
        }
    },
    {
        "id": 324,
        "ingredientName": "Summer Hair",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean-influenced extremely cold subarctic"
        ],
        "potionInfo": {
            "id": 5,
            "potion": "Rare Potion 6",
            "rarity": "Rare"
        }
    },
    {
        "id": 325,
        "ingredientName": "Summer Hippogriff",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Low Tide"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 27,
            "potion": "Common Potion 28",
            "rarity": "Common"
        }
    },
    {
        "id": 326,
        "ingredientName": "Summer Labor",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "By",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 8,
            "potion": "Uncommon Potion 9",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 327,
        "ingredientName": "Summer Sash",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 11,
            "potion": "Rare Potion 12",
            "rarity": "Rare"
        }
    },
    {
        "id": 328,
        "ingredientName": "Summer Silchi",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 8,
            "potion": "Uncommon Potion 9",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 329,
        "ingredientName": "Summer's Touch",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            "Damage",
            "Stress",
            null,
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 4,
            "potion": "Uncommon Potion 5",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 330,
        "ingredientName": "Sweet Blush",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 16,
            "potion": "Rare Potion 17",
            "rarity": "Rare"
        }
    },
    {
        "id": 331,
        "ingredientName": "Sweet Konrad\nNAME CORRUPTED",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Forests"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (cold)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 10,
            "potion": "Rare Potion 11",
            "rarity": "Rare"
        }
    },
    {
        "id": 332,
        "ingredientName": "Tanner's Song",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Damage",
            "Stress",
            null,
            "Damage",
            "Damage",
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 20,
            "potion": "Rare Potion 21",
            "rarity": "Rare"
        }
    },
    {
        "id": 333,
        "ingredientName": "Theresia's Boots\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Temperate oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 14,
            "potion": "Uncommon Potion 15",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 334,
        "ingredientName": "Thorned Eagle\nNAME CORRUPTED",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            null,
            "Stress",
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 6,
            "potion": "Common Potion 7",
            "rarity": "Common"
        }
    },
    {
        "id": 335,
        "ingredientName": "Thorned Indigo",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Damage",
            "Damage",
            "Stress",
            "Stress"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 7,
            "potion": "Rare Potion 8",
            "rarity": "Rare"
        }
    },
    {
        "id": 336,
        "ingredientName": "Thorned Pech\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (no dry season, hot summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 10,
            "potion": "Uncommon Potion 11",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 337,
        "ingredientName": "Thorned Ratfolk\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Moss",
        "locations": [
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Cold deserts",
            "Mediterranean (cold summer)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 41,
            "potion": "Rare Potion 42",
            "rarity": "Rare"
        }
    },
    {
        "id": 338,
        "ingredientName": "Thorned Turuhalme Honey",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 18,
            "potion": "Rare Potion 19",
            "rarity": "Rare"
        }
    },
    {
        "id": 339,
        "ingredientName": "Thresher's Flower",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            "Stress",
            "Damage",
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 17,
            "potion": "Common Potion 18",
            "rarity": "Common"
        }
    },
    {
        "id": 340,
        "ingredientName": "Tiny Fruit",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Low Tide"
            },
            {
                "adjacency": "By",
                "location": "Still Water"
            },
            {
                "adjacency": "In",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            "Damage",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 12,
            "potion": "Uncommon Potion 13",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 341,
        "ingredientName": "Tiny Staceler",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Stress",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 9,
            "potion": "Uncommon Potion 10",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 342,
        "ingredientName": "Tongue Soul\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 3,
            "potion": "Rare Potion 4",
            "rarity": "Rare"
        }
    },
    {
        "id": 343,
        "ingredientName": "Tor Boots",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            "Damage",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 12,
            "potion": "Common Potion 13",
            "rarity": "Common"
        }
    },
    {
        "id": 344,
        "ingredientName": "Tor Magenta\nNAME CORRUPTED",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 7,
            "potion": "Rare Potion 8",
            "rarity": "Rare"
        }
    },
    {
        "id": 345,
        "ingredientName": "Touching Cyan",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Humid subtropical",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 0,
            "potion": "Uncommon Potion 1",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 346,
        "ingredientName": "Touching Ditch",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            "Stress",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 5,
            "potion": "Rare Potion 6",
            "rarity": "Rare"
        }
    },
    {
        "id": 347,
        "ingredientName": "Touching Lybur",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "By",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 2,
            "potion": "Common Potion 3",
            "rarity": "Common"
        }
    },
    {
        "id": 348,
        "ingredientName": "Touching Soul",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Damage",
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 36,
            "potion": "Uncommon Potion 37",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 349,
        "ingredientName": "Touching Tongue",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "By",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 34,
            "potion": "Common Potion 35",
            "rarity": "Common"
        }
    },
    {
        "id": 350,
        "ingredientName": "Towering Rita",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Damage",
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Hot",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)"
        ],
        "potionInfo": {
            "id": 33,
            "potion": "Rare Potion 34",
            "rarity": "Rare"
        }
    },
    {
        "id": 351,
        "ingredientName": "Towering Yestare\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced extremely cold subarctic",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 30,
            "potion": "Uncommon Potion 31",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 352,
        "ingredientName": "Troll Mint\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            null,
            "Damage",
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 23,
            "potion": "Rare Potion 24",
            "rarity": "Rare"
        }
    },
    {
        "id": 353,
        "ingredientName": "Turuhalmespice",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Cold deserts",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 33,
            "potion": "Uncommon Potion 34",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 354,
        "ingredientName": "Turuhalmespice\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            "Damage",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 5,
            "potion": "Rare Potion 6",
            "rarity": "Rare"
        }
    },
    {
        "id": 355,
        "ingredientName": "Ulrich's Anther",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            "Stress",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 3,
            "potion": "Uncommon Potion 4",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 356,
        "ingredientName": "Vacin Willow",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "High Tide"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            "Stress",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Subpolar oceanic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 17,
            "potion": "Rare Potion 18",
            "rarity": "Rare"
        }
    },
    {
        "id": 357,
        "ingredientName": "Vintner's Laugh\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 1,
            "potion": "Rare Potion 2",
            "rarity": "Rare"
        }
    },
    {
        "id": 358,
        "ingredientName": "Vintner's Wax",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 23,
            "potion": "Uncommon Potion 24",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 359,
        "ingredientName": "Vitharr's Brownie\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "By",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Stress",
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Hot deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 30,
            "potion": "Rare Potion 31",
            "rarity": "Rare"
        }
    },
    {
        "id": 360,
        "ingredientName": "Vitharr's Fairy\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Stress",
            "Stress",
            "Damage"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 35,
            "potion": "Rare Potion 36",
            "rarity": "Rare"
        }
    },
    {
        "id": 361,
        "ingredientName": "Vitharr's Farm",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            "Stress",
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 1,
            "potion": "Rare Potion 2",
            "rarity": "Rare"
        }
    },
    {
        "id": 362,
        "ingredientName": "Vitharr's Griffin",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            "Damage",
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Hot deserts",
            "Steppe, Hot",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 10,
            "potion": "Rare Potion 11",
            "rarity": "Rare"
        }
    },
    {
        "id": 363,
        "ingredientName": "Vitharr's Hand",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Still Water"
            },
            {
                "adjacency": "By",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 11,
            "potion": "Uncommon Potion 12",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 364,
        "ingredientName": "Vomarrue",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Stress",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced subarctic",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 12,
            "potion": "Rare Potion 13",
            "rarity": "Rare"
        }
    },
    {
        "id": 365,
        "ingredientName": "Wagon White",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced subarctic",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 12,
            "potion": "Rare Potion 13",
            "rarity": "Rare"
        }
    },
    {
        "id": 366,
        "ingredientName": "Walking Ditch",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 8,
            "potion": "Rare Potion 9",
            "rarity": "Rare"
        }
    },
    {
        "id": 367,
        "ingredientName": "Weaver's Fulth\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Mediterranean (hot summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 35,
            "potion": "Rare Potion 36",
            "rarity": "Rare"
        }
    },
    {
        "id": 368,
        "ingredientName": "Weep's Elf\nNAME CORRUPTED",
        "harvestablePart": "Vines",
        "locations": [
            {
                "adjacency": "In",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            "Damage",
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Cold deserts",
            "Steppe, Hot",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 31,
            "potion": "Rare Potion 32",
            "rarity": "Rare"
        }
    },
    {
        "id": 369,
        "ingredientName": "Weeping Auroch",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Hills"
            },
            {
                "adjacency": "In",
                "location": "Farmland"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)"
        ],
        "potionInfo": {
            "id": 31,
            "potion": "Uncommon Potion 32",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 370,
        "ingredientName": "Weeping Bone\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "By",
                "location": "Hills"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 5,
            "potion": "Rare Potion 6",
            "rarity": "Rare"
        }
    },
    {
        "id": 371,
        "ingredientName": "Weeping Reljoise",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 13,
            "potion": "Uncommon Potion 14",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 372,
        "ingredientName": "Weeping Water",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Still Water"
            },
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Steppe, Hot",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal",
            "Tundra"
        ],
        "potionInfo": {
            "id": 42,
            "potion": "Rare Potion 43",
            "rarity": "Rare"
        }
    },
    {
        "id": 373,
        "ingredientName": "Western Broom",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Hot deserts",
            "Cold deserts",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 26,
            "potion": "Uncommon Potion 27",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 374,
        "ingredientName": "White Highlandwort",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Low Tide"
            }
        ],
        "reactivity": [
            "Stress",
            "Damage",
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 32,
            "potion": "Uncommon Potion 33",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 375,
        "ingredientName": "White Mantle",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "In",
                "location": "Sand"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            "Damage",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 4,
            "potion": "Common Potion 5",
            "rarity": "Common"
        }
    },
    {
        "id": 376,
        "ingredientName": "White Troll Branch",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Shallow Water"
            },
            {
                "adjacency": "In",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Humid subtropical",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, hot summer)",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 6,
            "potion": "Rare Potion 7",
            "rarity": "Rare"
        }
    },
    {
        "id": 377,
        "ingredientName": "Will's Dwarf",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "By",
                "location": "Mountains"
            },
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Hot deserts",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 6,
            "potion": "Uncommon Potion 7",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 378,
        "ingredientName": "Willing Cluster",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Steppe, Cold",
            "Dry-winter subtropical (humid)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 11,
            "potion": "Rare Potion 12",
            "rarity": "Rare"
        }
    },
    {
        "id": 379,
        "ingredientName": "Willing Desert",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            null,
            "Damage",
            null,
            "Stress"
        ],
        "classifications": [
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 16,
            "potion": "Rare Potion 17",
            "rarity": "Rare"
        }
    },
    {
        "id": 380,
        "ingredientName": "Willing Duck",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Forested Hills"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            "Stress",
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical monsoon",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Subpolar oceanic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal",
            "Subarctic/boreal (severe winter)"
        ],
        "potionInfo": {
            "id": 25,
            "potion": "Uncommon Potion 26",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 381,
        "ingredientName": "Willing Eye",
        "harvestablePart": "Stalks",
        "locations": [
            {
                "adjacency": "In",
                "location": "Running Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            "Stress",
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Mediterranean (warm summer)",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Temperate oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 28,
            "potion": "Rare Potion 29",
            "rarity": "Rare"
        }
    },
    {
        "id": 382,
        "ingredientName": "Willing Fern",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forests"
            },
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Forested Mountains"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced subarctic",
            "Continental (no dry season, hot summer)"
        ],
        "potionInfo": {
            "id": 33,
            "potion": "Uncommon Potion 34",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 383,
        "ingredientName": "Winter Donkey\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Farmland"
            },
            {
                "adjacency": "In",
                "location": "Hills"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical monsoon",
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Dry-winter subtropical (cold)",
            "Temperate oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (no dry season, hot summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 15,
            "potion": "Common Potion 16",
            "rarity": "Common"
        }
    },
    {
        "id": 384,
        "ingredientName": "Winter Lorama",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Mountains"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Damage",
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Steppe, Hot",
            "Mediterranean (cold summer)",
            "Dry-winter subtropical (highland)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, cold summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 23,
            "potion": "Rare Potion 24",
            "rarity": "Rare"
        }
    },
    {
        "id": 385,
        "ingredientName": "Winter Maroon",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "By",
                "location": "Shallow Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            null,
            "Stress"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 38,
            "potion": "Rare Potion 39",
            "rarity": "Rare"
        }
    },
    {
        "id": 386,
        "ingredientName": "Winter Ratfolk\nNAME CORRUPTED",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "By",
                "location": "Sand"
            }
        ],
        "reactivity": [
            null,
            null,
            "Damage",
            "Stress",
            null,
            null
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (highland)",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, hot summer)",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 38,
            "potion": "Rare Potion 39",
            "rarity": "Rare"
        }
    },
    {
        "id": 387,
        "ingredientName": "Winter White",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "In",
                "location": "Still Water"
            }
        ],
        "reactivity": [
            "Stress",
            null,
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical savanna (dry summers)",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (cold summer)",
            "Subpolar oceanic",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 3,
            "potion": "Rare Potion 4",
            "rarity": "Rare"
        }
    },
    {
        "id": 388,
        "ingredientName": "Winterrush\nNAME CORRUPTED",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "In",
                "location": "Swamps"
            },
            {
                "adjacency": "By",
                "location": "Low Tide"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            "Damage",
            null,
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Steppe, Hot",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (cold)",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (dry winter, cold summer)"
        ],
        "potionInfo": {
            "id": 41,
            "potion": "Rare Potion 42",
            "rarity": "Rare"
        }
    },
    {
        "id": 389,
        "ingredientName": "Wistful May Berry",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Grasslands"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            "Stress",
            null,
            "Damage",
            null,
            null
        ],
        "classifications": [
            "Tropical rainforest",
            "Tropical monsoon",
            "Tropical savanna (dry winter)",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Hot",
            "Mediterranean (warm summer)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal (severe winter)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 13,
            "potion": "Rare Potion 14",
            "rarity": "Rare"
        }
    },
    {
        "id": 390,
        "ingredientName": "Wolfgang's Shed\nNAME CORRUPTED",
        "harvestablePart": "Roots",
        "locations": [
            {
                "adjacency": "In",
                "location": "Cliffs"
            },
            {
                "adjacency": "By",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            "Damage",
            "Damage",
            null,
            null,
            null,
            null
        ],
        "classifications": [
            "Cold deserts",
            "Mediterranean (hot summer)",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (highland)",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, cold summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 36,
            "potion": "Rare Potion 37",
            "rarity": "Rare"
        }
    },
    {
        "id": 391,
        "ingredientName": "Wolfgang's Spindle",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Swamps"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            "Damage",
            "Damage",
            null,
            "Damage"
        ],
        "classifications": [
            "Tropical rainforest",
            "Hot deserts",
            "Steppe, Cold",
            "Mediterranean (hot summer)",
            "Dry-winter subtropical (humid)",
            "Temperate oceanic",
            "Subpolar oceanic",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)"
        ],
        "potionInfo": {
            "id": 32,
            "potion": "Uncommon Potion 33",
            "rarity": "Uncommon"
        }
    },
    {
        "id": 392,
        "ingredientName": "Woodwose's Touch",
        "harvestablePart": "Blossoms",
        "locations": [
            {
                "adjacency": "By",
                "location": "Forested Mountains"
            },
            {
                "adjacency": "In",
                "location": "Running Water"
            },
            {
                "adjacency": "By",
                "location": "Deep Water"
            }
        ],
        "reactivity": [
            null,
            "Damage",
            null,
            null,
            "Damage",
            "Damage"
        ],
        "classifications": [
            "Tropical savanna (dry winter)",
            "Steppe, Hot",
            "Dry-winter subtropical (humid)",
            "Dry-winter subtropical (cold)",
            "Continental (dry winter, very cold summer)",
            "Subarctic/boreal"
        ],
        "potionInfo": {
            "id": 26,
            "potion": "Rare Potion 27",
            "rarity": "Rare"
        }
    },
    {
        "id": 393,
        "ingredientName": "Wyvern's Tongue\nTRANSLATE TO ANOTHER LANGUAGE",
        "harvestablePart": "Leaves",
        "locations": [
            {
                "adjacency": "By",
                "location": "High Tide"
            },
            {
                "adjacency": "In",
                "location": "Cliffs"
            }
        ],
        "reactivity": [
            null,
            null,
            null,
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Tropical savanna (dry summers)",
            "Steppe, Hot",
            "Steppe, Cold",
            "Continental (dry winter, warm summer)"
        ],
        "potionInfo": {
            "id": 0,
            "potion": "Rare Potion 1",
            "rarity": "Rare"
        }
    },
    {
        "id": 394,
        "ingredientName": "Yellow Kraken Bloom\nNAME CORRUPTED",
        "harvestablePart": "Fruit",
        "locations": [
            {
                "adjacency": "In",
                "location": "Hills"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            "Stress",
            "Stress",
            "Stress",
            null,
            null,
            null
        ],
        "classifications": [
            "Tropical monsoon",
            "Hot deserts",
            "Cold deserts",
            "Steppe, Cold",
            "Mediterranean (warm summer)",
            "Mediterranean-influenced hot-summer humid",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced extremely cold subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, hot summer)",
            "Continental (no dry season, warm summer)",
            "Tundra"
        ],
        "potionInfo": {
            "id": 39,
            "potion": "Rare Potion 40",
            "rarity": "Rare"
        }
    },
    {
        "id": 395,
        "ingredientName": "Yellow Spring Weed",
        "harvestablePart": "Seeds",
        "locations": [
            {
                "adjacency": "In",
                "location": "Still Water"
            },
            {
                "adjacency": "By",
                "location": "Shallow Water"
            },
            {
                "adjacency": "In",
                "location": "Grasslands"
            }
        ],
        "reactivity": [
            null,
            null,
            "Stress",
            null,
            "Stress",
            null
        ],
        "classifications": [
            "Cold deserts",
            "Mediterranean (warm summer)",
            "Dry-winter subtropical (cold)",
            "Humid subtropical",
            "Subpolar oceanic",
            "Mediterranean-influenced warm-summer humid",
            "Mediterranean-influenced subarctic",
            "Continental (dry winter, warm summer)",
            "Continental (no dry season, warm summer)"
        ],
        "potionInfo": {
            "id": 10,
            "potion": "Rare Potion 11",
            "rarity": "Rare"
        }
    }
]

module.exports = ingredients