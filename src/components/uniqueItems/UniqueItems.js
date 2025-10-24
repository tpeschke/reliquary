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
    'Beverage': beverages,
    'Accessories': accessories,
    'Body': body,
    'Footwear': footwear,
    'Headgear': headgear,
    'Entertainment': entertainment,
    'Fabrics & Ropes': fabrics,
    'Bread': bread,
    'Fruit & Vegetables': fruit,
    'Nuts': nuts,
    'Prepped Foods': prepped,
    'Protein': protein,
    'Spices': spices,
    'Household Items': household,
    'Illumination': illumination,
    'Jewelry': jewelry,
    'Medical Tools': medical,
    'Musical Instrument': music,
    'Personal Containers': containers,
    'Raw Goods': raw,
    'Religious Items': religious,
    'Shields': shields,
    'Trade Tools': trade,
    'Weapon: Axes': axes,
    'Weapon: Firearms': firearms,
    'Ranged Weapon: Mechanical': mechanical,
    'Weapon: Polearms': polearms,
    'Weapon: Sidearms': sidearms,
    'Weapon: Swords': swords,
    'Ranged Weapon: Thrown': thrown,
    'Ranged Weapon: Trauma': trauma,
    'Works of Art': art
}

export default function UniqueItems() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState(2);
    const [rarity, setRarity] = useState(1);
    const [detail, setDetail] = useState('M');

    useEffect(() => {
        if (items.length === 0) {
            refreshItems()
        }
    }, [loading]);

    function setCategoryOnChange(event) {
        if (category !== event.target.value) {
            const value = event.target.value === 'Any' ? null : event.target.value
            setCategory(value)
            refreshItems({ category: value })
        }
    }

    function setRarityOnChange(event) {
        if (rarity !== event.target.value) {
            setRarity(event.target.value)
            refreshItems({ rarity: event.target.value })
        }
    }

    function setDetailOnChange(event) {
        if (detail !== event.target.value) {
            setDetail(event.target.value)
            refreshItems({ detail: event.target.value })
        }
    }

    function refreshItems(newParams = {}) {
        setLoading(true)
        const params = { category, rarity, format: 'object', version: 2, ...newParams }
        let paramString = ''
        for (const key in params) {
            if (params[key]) {
                paramString += `&${key}=${params[key]}`
            }
        }
        axios.post(constants.baseUrl + '/api/getItems?number=25' + paramString).then(({ data }) => {
            console.log(data)
            if (data.color) {
                toast.error(data.message)
                setLoading(false)
            } else {
                setItems(data);
                setLoading(false)
            }
        })
    }

    function copyToClipboard(event, itemName, description) {
        event.stopPropagation()

        navigator.clipboard.writeText(description);
        toast.success(`${itemName}'s desctipion has been copied`)
    }

    return (
        <div>
            {loading && <Loading />}
            {!loading && (
                <div>
                    <div className='input-shell'>
                        <div>
                            <select onChange={setCategoryOnChange} value={category ? category : ''}>
                                <option>Any</option>
                                {itemCategories.map(({id, category}, index) => {
                                    return <option value={index + 1} key={id}>{category}</option>
                                })}
                            </select>
                            <div>
                                <p className='select-label'>Material Rarity</p>
                                <select onChange={setRarityOnChange} value={rarity}>
                                    <option value={1}>Common</option>
                                    <option value={2}>Uncommon</option>
                                    <option value={3}>Rare</option>
                                    {/* <option value={'L'}>Legendary</option> */}
                                </select>
                            </div>
                            <div>
                                <p className='select-label'>detail</p>
                                <select onChange={setDetailOnChange} value={detail}>
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
                                                <img src={categoryIconDictionary[item.category]} height="50" />
                                                <div>
                                                    <div className='item-title-shell'>
                                                        <h2>{item.item}</h2>
                                                        <p>{item.price} sc {item.wear ? ` with ${item.wear} Wear` : ''}</p>
                                                    </div>
                                                    <div>
                                                        {item.string} <i onClick={e => copyToClipboard(e, item.item, item.string)} className="fa-solid fa-copy"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </Typography>
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
    { id: 1, category: 'Academic Tools' },
    { id: 2, category: 'Adventuring Gear' },
    { id: 3, category: 'Alchemical Substances' },
    { id: 37, category: 'Armor, Light' },
    { id: 38, category: 'Armor, Medium' },
    { id: 39, category: 'Armor, Heavy' },
    { id: 5, category: 'Beverage' },
    { id: 6, category: 'Footwear' },
    { id: 7, category: 'Headgear' },
    { id: 8, category: 'Clothing' },
    { id: 9, category: 'Accessories' },
    { id: 10, category: 'Entertainment' },
    { id: 11, category: 'Fabric & Ropes' },
    { id: 12, category: 'Prepped Foods' },
    { id: 13, category: 'Bread' },
    { id: 14, category: 'Fruits & Veggies' },
    { id: 15, category: 'Meat' },
    { id: 16, category: 'Nuts' },
    { id: 17, category: 'Spices' },
    { id: 18, category: 'Household Items' },
    { id: 19, category: 'Illumination' },
    { id: 20, category: 'Jewelry' },
    { id: 21, category: 'Medical Tools' },
    { id: 22, category: 'Musical Instrument' },
    { id: 23, category: 'Personal Containers' },
    { id: 24, category: 'Raw Goods' },
    { id: 25, category: 'Religious Items' },
    { id: 26, category: 'Shields' },
    { id: 27, category: 'Trade Tools' },
    { id: 28, category: 'Weapon: Axes' },
    { id: 29, category: 'Weapon: Polearms' },
    { id: 30, category: 'Weapon: Sidearms' },
    { id: 31, category: 'Weapon: Swords' },
    { id: 32, category: 'Weapon: Trauma' },
    { id: 33, category: 'Ranged Weapon: Thrown' },
    { id: 34, category: 'Ranged Weapon: Mechanical' },
    { id: 35, category: 'Ranged Weapon: Firearms' },
    { id: 36, category: 'Works of Art' }
  ]