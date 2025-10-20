const weirdTables = {
    shapeTable: {
        max: 8,
        rows: [
            {
                weight: 1,
                rudiment: 'Circle'
            },
            {
                weight: 1,
                rudiment: 'Chain'
            },
            {
                weight: 1,
                rudiment: 'Cone'
            },
            {
                weight: 1,
                rudiment: 'Salvo'
            },
            {
                weight: 1,
                rudiment: 'Singular'
            },
            {
                weight: 1,
                rudiment: 'Sphere'
            },
            {
                weight: 1,
                rudiment: 'Ray'
            },
            {
                weight: 1,
                rudiment: 'Wall'
            },
        ],
    },
    originTable: {
        max: 8,
        rows: [
            {
                weight: 1,
                rudiment: 'Aura'
            },
            {
                weight: 1,
                rudiment: 'Zone'
            },
            {
                weight: 1,
                rudiment: 'Touch'
            },
            {
                weight: 1,
                rudiment: 'Burst'
            },
            {
                weight: 1,
                rudiment: 'Shield'
            },
            {
                weight: 2,
                rudiment: 'Near'
            },
            {
                weight: 1,
                rudiment: 'Far'
            },
        ]
    },
    traditionTable: {
        max: 10,
        rows: [
            {
                weight: 1,
                rudiment: 'Animism'
            },
            {
                weight: 1,
                rudiment: 'Calling'
            },
            {
                weight: 1,
                rudiment: 'Charm'
            },
            {
                weight: 1,
                rudiment: 'Glamour'
            },
            {
                weight: 1,
                rudiment: 'Hexing'
            },
            {
                weight: 1,
                rudiment: 'Investiture'
            },
            {
                weight: 1,
                rudiment: 'Occultism'
            },
            {
                weight: 1,
                rudiment: 'Sortilege'
            },
            {
                weight: 2,
                rudiment: 'Reroll'
            },
        ]
    },
    effectsTables: {
        Animism: {
            max: 20,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Animate Corpse'
                },
                {
                    weight: 1,
                    rudiment: 'Battle Frenzy'
                },
                {
                    weight: 2,
                    rudiment: 'Bestial Sight'
                },
                {
                    weight: 1,
                    rudiment: 'Corpse Hide'
                },
                {
                    weight: 1,
                    rudiment: 'Endow with Power'
                },
                {
                    weight: 1,
                    rudiment: 'Haste'
                },
                {
                    weight: 2,
                    rudiment: 'High Jump'
                },
                {
                    weight: 1,
                    rudiment: 'Icarian Flight'
                },
                {
                    weight: 1,
                    rudiment: 'Imbue with Confidence'
                },
                {
                    weight: 1,
                    rudiment: 'Leadfeet'
                },
                {
                    weight: 1,
                    rudiment: 'Outcry'
                },
                {
                    weight: 3,
                    rudiment: 'Primal Power'
                },
                {
                    weight: 1,
                    rudiment: 'Pulse Calm'
                },
                {
                    weight: 1,
                    rudiment: 'Sap Power'
                },
                {
                    weight: 1,
                    rudiment: 'Slow Metabolism'
                },
                {
                    weight: 1,
                    rudiment: 'Stitch Flesh'
                },
            ]
        },
        Calling: {
            max: 20,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Banish'
                },
                {
                    weight: 1,
                    rudiment: 'Bind Elemental Heart'
                },
                {
                    weight: 1,
                    rudiment: 'Break Summoning'
                },
                {
                    weight: 2,
                    rudiment: 'Comprehension'
                },
                {
                    weight: 1,
                    rudiment: 'Corpse Tongue'
                },
                {
                    weight: 1,
                    rudiment: 'Dominate'
                },
                {
                    weight: 2,
                    rudiment: 'Dream Stride'
                },
                {
                    weight: 2,
                    rudiment: 'Essence Link'
                },
                {
                    weight: 1,
                    rudiment: 'Force Bind Spirit'
                },
                {
                    weight:1,
                    rudiment: 'Fortify Connection'
                },
                {
                    weight: 1,
                    rudiment: 'Gestalt Minds'
                },
                {
                    weight: 2,
                    rudiment: 'Hookgate'
                },
                {
                    weight: 1,
                    rudiment: 'Lockdown'
                },
                {
                    weight: 1,
                    rudiment: 'Phantom Binding'
                },
                {
                    weight: 1,
                    rudiment: 'Touch of the Otherworld'
                },
                {
                    weight: 1,
                    rudiment: 'Turn'
                },
            ]
        },
        Charm: {
            max: 20,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Bar Portal'
                },
                {
                    weight: 1,
                    rudiment: 'Detraction'
                },
                {
                    weight: 1,
                    rudiment: 'Dispel Enchantment'
                },
                {
                    weight: 1,
                    rudiment: 'Dragonhide'
                },
                {
                    weight: 1,
                    rudiment: 'Eiderdown'
                },
                {
                    weight: 1,
                    rudiment: 'Flatten'
                },
                {
                    weight: 2,
                    rudiment: 'Hermetic Dweomer'
                },
                {
                    weight: 2,
                    rudiment: 'Illuminate'
                },
                {
                    weight: 2,
                    rudiment: 'Liminal Platform'
                },
                {
                    weight: 3,
                    rudiment: 'Magic Circle'
                },
                {
                    weight: 1,
                    rudiment: 'Power Shield'
                },
                {
                    weight: 1,
                    rudiment: 'Shock'
                },
                {
                    weight: 1,
                    rudiment: 'Silence'
                },
                {
                    weight: 1,
                    rudiment: 'Smokescreen'
                },
                {
                    weight: 1,
                    rudiment: 'Telekinesis'
                },
            ]
        },
        Glamour: {
            max: 20,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Alarm'
                },
                {
                    weight: 1,
                    rudiment: 'Alto Scream'
                },
                {
                    weight: 1,
                    rudiment: 'Charismatic Glamour'
                },
                {
                    weight: 1,
                    rudiment: 'Darkness'
                },
                {
                    weight: 1,
                    rudiment: 'Doppelganger'
                },
                {
                    weight: 1,
                    rudiment: 'Mask of Zal'
                },
                {
                    weight: 1,
                    rudiment: 'Message'
                },
                {
                    weight: 2,
                    rudiment: 'Mimic'
                },
                {
                    weight: 1,
                    rudiment: 'Mystic Mark'
                },
                {
                    weight: 1,
                    rudiment: 'Perfume'
                },
                {
                    weight: 1,
                    rudiment: 'Pseudo'
                },
                {
                    weight: 3,
                    rudiment: 'Reorient'
                },
                {
                    weight: 1,
                    rudiment: 'Shroud of Innocence'
                },
                {
                    weight: 1,
                    rudiment: 'Terror'
                },
                {
                    weight: 1,
                    rudiment: 'Vertigo'
                },
                {
                    weight: 2,
                    rudiment: 'Visual Illusion'
                },
            ]
        },
        Hexing: {
            max: 20,
            rows: [
                {
                    weight: 2,
                    rudiment: 'Backlash'
                },
                {
                    weight: 2,
                    rudiment: 'Binding Oath'
                },
                {
                    weight: 1,
                    rudiment: 'Discombobulate'
                },
                {
                    weight: 1,
                    rudiment: 'Dread Ward'
                },
                {
                    weight: 1,
                    rudiment: 'Indecision Spike'
                },
                {
                    weight: 1,
                    rudiment: 'Inflict Doubt'
                },
                {
                    weight: 1,
                    rudiment: 'Maenad\'s Kiss'
                },
                {
                    weight: 2,
                    rudiment: 'Mind Wipe'
                },
                {
                    weight: 1,
                    rudiment: 'Myopic Curse'
                },
                {
                    weight: 1,
                    rudiment: 'Open Mind'
                },
                {
                    weight: 1,
                    rudiment: 'Snag Ward'
                },
                {
                    weight: 1,
                    rudiment: 'Staying Hand'
                },
                {
                    weight: 2,
                    rudiment: 'Suggestion'
                },
                {
                    weight: 1,
                    rudiment: 'Unlock Heart'
                },
                {
                    weight: 1,
                    rudiment: 'Wilding Reaction'
                },
                {
                    weight: 1,
                    rudiment: 'Twist Tongue'
                },
            ]
        },
        Investiture: {
            max: 20,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Binding Glyph'
                },
                {
                    weight: 2,
                    rudiment: 'Blinding Light'
                },
                {
                    weight: 1,
                    rudiment: 'Burden'
                },
                {
                    weight: 1,
                    rudiment: 'Divine Object'
                },
                {
                    weight: 1,
                    rudiment: 'Fleeting Enchantment'
                },
                {
                    weight: 1,
                    rudiment: 'Impression Gleam'
                },
                {
                    weight: 1,
                    rudiment: 'Kinetic Burst'
                },
                {
                    weight: 2,
                    rudiment: 'Marionette'
                },
                {
                    weight: 1,
                    rudiment: 'Phasing'
                },
                {
                    weight: 2,
                    rudiment: 'Reinforce'
                },
                {
                    weight: 1,
                    rudiment: 'Smoothing'
                },
                {
                    weight: 2,
                    rudiment: 'Strobe'
                },
                {
                    weight: 2,
                    rudiment: 'Weaken'
                },
                {
                    weight: 1,
                    rudiment: 'Weaponsharp'
                },
                {
                    weight: 1,
                    rudiment: 'Wall Walk'
                },
            ]
        },
        Occultism: {
            max: 20,
            rows: [
                {
                    weight: 2,
                    rudiment: 'Ancestral Lore'
                },
                {
                    weight: 1,
                    rudiment: 'Arcane Reading'
                },
                {
                    weight: 1,
                    rudiment: 'Augur Secret'
                },
                
                {
                    weight: 1,
                    rudiment: 'Banding'
                },
                {
                    weight: 1,
                    rudiment: 'Deep Thought Inspiration'
                },
                {
                    weight: 2,
                    rudiment: 'Detect Magic'
                },
                {
                    weight: 1,
                    rudiment: 'Divination'
                },
                {
                    weight: 1,
                    rudiment: 'Hindsight'
                },
                {
                    weight: 1,
                    rudiment: 'Invoke Belligerence'
                },
                {
                    weight: 2,
                    rudiment: 'Lore Mysterium'
                },
                {
                    weight: 1,
                    rudiment: 'Mook Boost'
                },
                {
                    weight: 1,
                    rudiment: 'Skill Mob'
                },
                {
                    weight: 1,
                    rudiment: 'Sourcerous Tutor'
                },
                {
                    weight: 1,
                    rudiment: 'Strengthen Ymir'
                },
                {
                    weight: 1,
                    rudiment: 'Syncretism'
                },
                {
                    weight: 1,
                    rudiment: 'Synergize'
                },
                {
                    weight: 1,
                    rudiment: 'Tongues'
                },
            ]
        },
        Sortilege: {
            max: 20,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Arcane Vortex'
                },
                {
                    weight: 2,
                    rudiment: 'Bind to the Average'
                },
                {
                    weight: 3,
                    rudiment: 'Evil Eye'
                },
                {
                    weight: 1,
                    rudiment: 'Fair Luck'
                },
                {
                    weight: 2,
                    rudiment: 'Fate Well'
                },
                {
                    weight: 1,
                    rudiment: 'Foil Fates'
                },
                {
                    weight: 1,
                    rudiment: 'Fortify Luck'
                },
                {
                    weight: 1,
                    rudiment: 'Heroic Moment'
                },
                {
                    weight: 1,
                    rudiment: 'Improbable Stair'
                },
                {
                    weight: 1,
                    rudiment: 'Increase Margin'
                },
                {
                    weight: 1,
                    rudiment: 'Inflict Bad Luck'
                },
                {
                    weight: 1,
                    rudiment: 'Mislay'
                },
                {
                    weight: 2,
                    rudiment: 'Rebalance'
                },
                {
                    weight: 2,
                    rudiment: 'Ricochet'
                },
            ]
        }
    }
}

module.exports = weirdTables