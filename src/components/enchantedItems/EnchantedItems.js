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
import relic from '../../assets/icons/relic.svg'
import major from '../../assets/icons/major.svg'
import link from '../../assets/link.svg'
import toast from 'react-hot-toast';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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

const secondarytheme = createTheme({
    palette: {
        primary: {
            main: '#f5f5f5',
        }
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
    'Works of Art': art,
    'Relic': relic
}

function formatItemCategoryName(name) {
    if (name.includes('_')) {
        return name.split('_')[1]
    }
    return name
}

export default function EnchantedItems() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [singleItem, setSingleItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);

    useEffect(() => {
        const splitUrl = window.location.href.split('/')
        if (splitUrl.length > 4) {
            toast.promise(
                axios.get(constants.baseUrl + '/api/getSingleEnchantedItem/' + splitUrl[4]).then(({ data }) => {
                    if (data[0].itemcategory) {
                        setSingleItem(data[0])
                        return true
                    } else {
                        return false
                    }
                }),
                {
                    success: 'Fetched',
                    loading: 'Fetching Item...',
                    error: 'Uh oh.'
                }
            );
        }
    }, [])

    useEffect(() => {
        if (items.length === 0) {
            axios.get(constants.baseUrl + '/api/getEnchantedItem?numberOfItems=10').then(({ data }) => {
                setItems(data);
                setLoading(false)
            })
        }
    }, [loading]);

    function refreshItems(event, status = null) {
        setLoading(true)
        axios.get(constants.baseUrl + '/api/getEnchantedItem?numberOfItems=10' + (status ? '&status=' + status : '')).then(({ data }) => {
            setItems(data);
            setLoading(false)
        })
    }

    function copyLink(id) {
        navigator.clipboard.writeText(window.location.origin + '/enchanted/' + id)
        toast.success('Link to Enchanted Item Copied')
    }

    function getEnchantedItems(event) {
        setLoading(true)
        setSearchTerm(event.target.value)
        axios.post(constants.baseUrl + '/api/searchEnchantedItems?searchTerm=' + event.target.value).then(({ data }) => {
            setItems(data);
            setLoading(false)
        })
    }

    function copyToClipboard(event, item) {
        event.stopPropagation()

        navigator.clipboard.writeText(`${item.name}: 
        - Description: ${item.description}
        - Price: ${item.price}
        - Power: ${item.power}
        - Size: ${item.size}`);
        toast.success(`${item.name}'s info has been copied`)
    }

    return (
        <div>
            {loading && <Loading />}
            {!loading && (
                <div>
                    <div className='input-shell'>
                        <div>
                            <input onBlur={getEnchantedItems} placeholder={searchTerm}></input>
                            <p>Search Enchanted Items</p>
                        </div>
                        <div>
                            <Button variant="contained" onClick={e => refreshItems(e, false)} theme={secondarytheme}>Minor</Button>
                            <Button variant="contained" onClick={e => refreshItems(e, true)} theme={secondarytheme}>Major</Button>
                            <Button variant="contained" onClick={_ => refreshItems()} theme={theme}><RefreshIcon /></Button>
                        </div>
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
                                        <Typography component={'span'} variant={'body2'}>
                                            <div className='potion-shell'>
                                                <div className='enchanted-item-image'>
                                                    <img src={categoryIconDictionary[item.itemcategory]} height="50" />
                                                    <img className={item.major ? 'major-item' : 'display-none'} src={major} height="25" />
                                                </div>
                                                <div>
                                                    <div className='item-title-shell'>
                                                        <h2>{item.name}</h2>
                                                        <p>{item.size}</p>
                                                    </div>
                                                    <span className='span-flex'>
                                                        <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                                        <i onClick={e => copyToClipboard(e, item)} class="fa-solid fa-copy"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography component={'span'} variant={'body2'}>
                                            <div>
                                                {item.itemcategory && <div className='item-detail'><h3>Item Category</h3> <p>{formatItemCategoryName(item.itemcategory)}</p></div>}
                                                {item.itemcategory && <div className='item-detail'><h3>Status</h3> <p>{item.major ? 'Major' : 'Minor'}</p></div>}
                                                <h3>Price</h3>
                                                <div className='bottom-margin' dangerouslySetInnerHTML={{ __html: item.price }}></div>
                                                <h3>Power</h3>
                                                <div className='bottom-margin' dangerouslySetInnerHTML={{ __html: item.power }}></div>
                                                <h3 className={item.history ? '' : 'display-none'}>History</h3>
                                                <div dangerouslySetInnerHTML={{ __html: item.history }}></div>
                                                {item.itemcategory && <div className='item-detail id-details'><h3>ID</h3> <p>{item.id}</p> <span><i onClick={_ => copyLink(item.id)} class="fa-solid fa-copy"></i></span></div>}
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </div>
                    <Popup open={singleItem} closeOnDocumentClick >
                        <div className="modal">
                            <div>
                                <div className='item-title-shell pop-up'>
                                    <div className='enchanted-item-image'>
                                        <img src={singleItem && singleItem.itemcategory ? categoryIconDictionary[singleItem.itemcategory] : categoryIconDictionary['Raw Good']} height="50" />
                                        <img className={singleItem && singleItem.major ? 'major-item' : 'display-none'} src={major} height="25" />
                                    </div>
                                    <h2>{singleItem ? singleItem.name : ''}</h2>
                                </div>
                                <h3>Description</h3>
                                <div className='bottom-margin' dangerouslySetInnerHTML={{ __html: singleItem ? singleItem.description : '' }}></div>
                                {singleItem && singleItem.itemcategory && <div className='item-detail'><h3>Item Category</h3> <p>{formatItemCategoryName(singleItem.itemcategory)}</p></div>}
                                {singleItem && singleItem.itemcategory && <div className='item-detail'><h3>Status</h3> <p>{singleItem.major ? 'Major' : 'Minor'}</p></div>}
                                {singleItem && singleItem.itemcategory && <div className='item-detail bottom-margin'><h3>Size</h3> <p>{singleItem.size}</p></div>}
                                <h3>Price</h3>
                                <div className='bottom-margin' dangerouslySetInnerHTML={{ __html: singleItem ? singleItem.price : '' }}></div>
                                <h3>Power</h3>
                                <div className='bottom-margin' dangerouslySetInnerHTML={{ __html: singleItem ? singleItem.power : '' }}></div>
                                <h3 className={singleItem && singleItem.history ? '' : 'display-none'}>History</h3>
                                <div dangerouslySetInnerHTML={{ __html: singleItem ? singleItem.history : '' }}></div>
                            </div>
                        </div>
                    </Popup>
                </div>
            )}
        </div>
    );
}