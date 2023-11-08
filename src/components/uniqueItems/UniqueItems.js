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
    'Academic Tools': alchemical,
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
    'Illumination':  illumination,
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
    const [budget, setBudget] = useState(100);

    useEffect(() => {
        if (items.length === 0) {
            axios.post(constants.baseUrl + constants.endpoint + budget).then(({ data }) => {
                setItems(data);
                setLoading(false)
            })
        }
    }, [loading]);

    function getBudget(event) {
        if (budget !== event.target.value) {
            setLoading(true)
            setBudget(event.target.value)
            axios.post(constants.baseUrl + constants.endpoint + event.target.value).then(({ data }) => {
                setItems(data);
                setLoading(false)
            })
        }
    }

    function refreshItems() {
        setLoading(true)
        axios.post(constants.baseUrl + constants.endpoint + budget).then(({ data }) => {
            setItems(data);
            setLoading(false)
        })
    }

    return (
        <div>
            {loading && <Loading />}
            {!loading && (
                <div>
                    <div className='input-shell'>
                        <div>
                            <input onBlur={getBudget} placeholder={budget}></input>
                            <p>Budget (sc)</p>
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
                                            <ItemDetails item={item} ></ItemDetails>
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