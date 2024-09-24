import axios from 'axios';
import React, { useState, useEffect } from 'react';
import constants from '../../constants'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import Loading from '../loading/Loading'
import ItemDetails from './ItemDetails'
import academic from '../../assets/icons/equipment/academic-tools.svg'
import adventuring from '../../assets/icons/equipment/adventuring-gear.svg'
import alchemical from '../../assets/icons/equipment/alchemical-substances.svg'
import armor from '../../assets/icons/equipment/armor.svg'
import beverages from '../../assets/icons/equipment/beverages.svg'
import accessories from '../../assets/icons/equipment/clothing-accessories.svg'
import body from '../../assets/icons/equipment/clothing-body.svg'
import footwear from '../../assets/icons/equipment/clothing-footwear.svg'
import headgear from '../../assets/icons/equipment/clothing-headgear.svg'
import entertainment from '../../assets/icons/equipment/entertainment.svg'
import fabrics from '../../assets/icons/equipment/fabrics-n-ropes.svg'
import bread from '../../assets/icons/equipment/food-bread.svg'
import fruit from '../../assets/icons/equipment/food-fruit-n-vegetables.svg'
import nuts from '../../assets/icons/equipment/food-nuts.svg'
import prepped from '../../assets/icons/equipment/food-prepped-food.svg'
import protein from '../../assets/icons/equipment/food-protein.svg'
import spices from '../../assets/icons/equipment/food-spices-n-seasonings.svg'
import household from '../../assets/icons/equipment/household-items.svg'
import illumination from '../../assets/icons/equipment/illumination.svg'
import jewelry from '../../assets/icons/equipment/jewelry.svg'
import medical from '../../assets/icons/equipment/medical-tools.svg'
import music from '../../assets/icons/equipment/musical-instruments.svg'
import containers from '../../assets/icons/equipment/personal-containers.svg'
import raw from '../../assets/icons/equipment/raw-good.svg'
import religious from '../../assets/icons/equipment/religious-items.svg'
import shields from '../../assets/icons/equipment/shields.svg'
import trade from '../../assets/icons/equipment/trade-tools.svg'
import sidearms from '../../assets/icons/equipment/weapons-sidearms.svg'
import axes from '../../assets/icons/equipment/weapons-axes.svg'
import firearms from '../../assets/icons/equipment/weapons-firearms.svg'
import mechanical from '../../assets/icons/equipment/weapons-mechanical-ranged.svg'
import polearms from '../../assets/icons/equipment/weapons-polearms.svg'
import swords from '../../assets/icons/equipment/weapons-swords.svg'
import thrown from '../../assets/icons/equipment/weapons-thrown.svg'
import trauma from '../../assets/icons/equipment/weapons-trauma.svg'
import art from '../../assets/icons/equipment/works-of-art.svg'

import toast from 'react-hot-toast';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#a36528',
        },
        secondary: {
            main: '#11cb5f',
        },
    },
});

const categoryIconDictionary = {
    'Academic Tools': academic,
    'Adventuring Gear': adventuring,
    'Alchemical Substances': alchemical,
    'Armor': armor,
    'Beverages': beverages,
    'Clothing_Accessories': accessories,
    'Clothing_Body': body,
    'Clothing_Footwear': footwear,
    'Clothing_Headgear': headgear,
    'Entertainment': entertainment,
    'Fabrics & Ropes': fabrics,
    'Food_Bread': bread,
    'Food_Fruit & Vegetables': fruit,
    'Food_Nuts': nuts,
    'Food_Prepped Food': prepped,
    'Food_Protein': protein,
    'Food_Spices & Seasonings': spices,
    'Household Items': household,
    'Illumination': illumination,
    'Jewelry': jewelry,
    'Medical Tools': medical,
    'Musical Instruments': music,
    'Personal Containers': containers,
    'Raw Good': raw,
    'Religious Items': religious,
    'Shields': shields,
    'Trade Tools': trade,
    'Weapons_Axes': axes,
    'Weapons_Firearms': firearms,
    'Weapons_Mechanical Ranged': mechanical,
    'Weapons_Polearms': polearms,
    'Weapons_Sidearms': sidearms,
    'Weapons_Swords': swords,
    'Weapons_Thrown': thrown,
    'Weapons_Trauma': trauma,
    'Works of Art': art
}

export default function UniqueItems() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [itemcategory, setitemCategory] = useState(null);
    const [materialrarity, setmaterialRarity] = useState('C');
    const [detailing, setdetailing] = useState('M');

    useEffect(() => {
        if (items.length === 0) {
            refreshItems()
        }
    }, [loading]);

    function setItemCategory(event) {
        if (itemcategory !== event.target.value) {
            const value = event.target.value === 'Any' ? null : event.target.value
            setitemCategory(value)
            refreshItems({ itemcategory: value })
        }
    }

    function setMaterialRarity(event) {
        if (materialrarity !== event.target.value) {
            setmaterialRarity(event.target.value)
            refreshItems({ materialrarity: event.target.value })
        }
    }

    function setDetailing(event) {
        if (detailing !== event.target.value) {
            setdetailing(event.target.value)
            refreshItems({ detailing: event.target.value })
        }
    }

    function refreshItems(newParams = {}) {
        setLoading(true)
        const params = { itemcategory, materialrarity, ...newParams }
        let paramString = ''
        for (const key in params) {
            if (params[key]) {
                paramString += `&${key}=${params[key]}`
            }
        }
        axios.post(constants.baseUrl + '/api/getItems?number=10' + paramString).then(({ data }) => {
            if (data.color) {
                toast.error(data.message)
                setLoading(false)
            } else {
                setItems(data);
                setLoading(false)
            }
        })
    }

    return (
        <div>
            {loading && <Loading />}
            {!loading && (
                <div>
                    <div className='input-shell'>
                        <div>
                            <select onChange={setItemCategory} value={itemcategory ? itemcategory : ''}>
                                <option>Any</option>
                                {itemCategories.map((category, i) => {
                                    return <option value={category.id} key={category.label + i}>{category.label}</option>
                                })}
                            </select>
                            <div>
                                <p className='select-label'>Material Rarity</p>
                                <select onChange={setMaterialRarity} value={materialrarity}>
                                    <option value={'C'}>Common</option>
                                    <option value={'U'}>Uncommon</option>
                                    <option value={'R'}>Rare</option>
                                    <option value={'L'}>Legendary</option>
                                </select>
                            </div>
                            <div>
                                <p className='select-label'>Detailing</p>
                                <select onChange={setDetailing} value={detailing}>
                                    <option value={'N'}>None</option>
                                    <option value={'L'}>Low</option>
                                    <option value={'M'}>Normal</option>
                                    <option value={'H'}>High</option>
                                </select>
                            </div>
                        </div>
                        <Button variant="contained" onClick={refreshItems} theme={theme}><RefreshIcon /></Button>
                    </div>
                    <div className='accordion-shell'>
                        {items.map((item, i) => {
                            return (
                                <Accordion key={i}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography component={'span'} variant={'body2'}><div>
                                            <div className='potion-shell'>
                                                <img src={categoryIconDictionary[item.itemcategory]} height="50" />
                                                <div>
                                                    <div className='item-title-shell'>
                                                        <h2>{item.item}</h2>
                                                        <p>{item.finalPrice} sc {item.wear ? ` with ${item.wear} Wear` : ''}</p>
                                                    </div>
                                                    <div>
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography component={'span'} variant={'body2'}>
                                            <ItemDetails item={item}></ItemDetails>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

const itemCategories = [
    {
        "label": "Academic Tools",
        "id": 29
    },
    {
        "label": "Accessories",
        "id": 6
    },
    {
        "label": "Adventuring Gear",
        "id": 37
    },
    {
        "label": "Alchemical Substances",
        "id": 30
    },
    {
        "label": "Armor, Light",
        "id": 2
    },
    {
        "label": "Armor, Medium",
        "id": 3
    },
    {
        "label": "Armor, Heavy",
        "id": 4
    },
    {
        "label": "Beverages",
        "id": 14
    },
    {
        "label": "Clothing, Body",
        "id": 34
    },
    {
        "label": "Clothing, Footwear",
        "id": 35
    },
    {
        "label": "Clothing, Headgear",
        "id": 23
    },
    {
        "label": "Entertainment",
        "id": 7
    },
    {
        "label": "Fabrics & Ropes",
        "id": 25
    },
    {
        "label": "Food, Bread",
        "id": 9
    },
    {
        "label": "Food, Fruit & Vegetables",
        "id": 36
    },
    {
        "label": "Food, Nuts",
        "id": 10
    },
    {
        "label": "Food, Prepped",
        "id": 16
    },
    {
        "label": "Food, Protein",
        "id": 12
    },
    {
        "label": "Food, Spices & Seasonings",
        "id": 21
    },
    {
        "label": "Household Items",
        "id": 15
    },
    {
        "label": "Illumination",
        "id": 22
    },
    {
        "label": "Jewelry",
        "id": 24
    },
    {
        "label": "Medical Tools",
        "id": 33
    },
    {
        "label": "Musical Instruments",
        "id": 5
    },
    {
        "label": "Personal Containers",
        "id": 1
    },
    {
        "label": "Raw Goods",
        "id": 38
    },
    {
        "label": "Religious Items",
        "id": 26
    },
    {
        "label": "Shields",
        "id": 11
    },
    {
        "label": "Trade Tools",
        "id": 31
    },
    {
        "label": "Weapons, Axes",
        "id": 32
    },
    {
        "label": "Weapons, Firearms",
        "id": 13
    },
    {
        "label": "Weapons, Mechanical Ranged",
        "id": 18
    },
    {
        "label": "Weapons, Polearms",
        "id": 27
    },
    {
        "label": "Weapons, Sidearms",
        "id": 8
    },
    {
        "label": "Weapons, Swords",
        "id": 19
    },
    {
        "label": "Weapons, Thrown",
        "id": 17
    },
    {
        "label": "Weapons, Trauma",
        "id": 20
    },
    {
        "label": "Works of Art",
        "id": 28
    }
]