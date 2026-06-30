import axios from 'axios';
import React, { useState, useEffect } from 'react';
import constants from '../../constants'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Loading from '../../components/loading/Loading'
import leaves from '../../assets/icons/ingredients/leaves.svg'
import './Ingredients.css'

import toast from 'react-hot-toast';
import ReactivityHex from './components/ReactivityHex';

const iconDictionary = {
    'Leaves': leaves
}

export default function Ingredients() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (items.length === 0) {
            // axios.post(constants.baseUrl + '/api/getRandomPotions?numberOfItems=10').then(({ data }) => {
            //     setItems(data);
            // })

            setItems([{
                "id": 0,
                "harvestablePart": 'Leaves',
                "ingredientName": "Afocin Fruit",
                "locations": [
                    {
                        "adjacency": "By",
                        "location": "Forests"
                    },
                    {
                        "adjacency": "In",
                        "location": "Grasslands"
                    },
                    {
                        "adjacency": "By",
                        "location": "Deep Water"
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
                    "Mediterranean (warm summer)",
                    "Mediterranean-influenced hot-summer humid",
                    "Mediterranean-influenced extremely cold subarctic",
                    "Continental (dry winter, cold summer)"
                ],
                "potionInfo": {
                    "id": 30,
                    "potion": "Rare Potion 31",
                    "rarity": "Rare"
                }
            },
            {
                "id": 1,
                "harvestablePart": 'Leaves',
                "ingredientName": "April Heart",
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
                    null,
                    null,
                    null,
                    "Damage",
                    null,
                    "Damage"
                ],
                "classifications": [
                    "Tropical monsoon",
                    "Tropical savanna (dry winter)",
                    "Hot deserts",
                    "Cold deserts",
                    "Steppe, Hot",
                    "Steppe, Cold",
                    "Dry-winter subtropical (humid)",
                    "Temperate oceanic",
                    "Continental (dry winter, warm summer)",
                    "Continental (dry winter, cold summer)",
                    "Continental (no dry season, warm summer)",
                    "Subarctic/boreal"
                ],
                "potionInfo": {
                    "id": 21,
                    "potion": "Uncommon Potion 22",
                    "rarity": "Uncommon"
                }
            }])
            setLoading(false)
        }
    }, [loading]);

    function refreshItems(event, rarity = null) {
        setLoading(true)
        // axios.post(constants.baseUrl + '/api/getRandomPotions?numberOfItems=10' + (rarity ? '&rarity=' + rarity : '')).then(({ data }) => {
        //     setItems(data);
        setLoading(false)
        // })
    }

    function getIngredientByNameOrPotion(event) {
        refreshItems()
    }

    return (
        <div>
            {loading && <Loading />}
            {!loading && (
                <div className='ingredients'>
                    <div className='input-shell'>
                        <div>
                            <input onBlur={getIngredientByNameOrPotion}></input>
                            <p>Search Ingredients by Name or Potion</p>
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
                                                <img src={iconDictionary[item.harvestablePart]} height="50" />
                                                <div className='ingredient-basic-info'>
                                                    <div className='item-title-shell'>
                                                        <h2>{item.ingredientName}</h2>
                                                    </div>
                                                    <div>
                                                        {item.potionInfo.potion}
                                                    </div>
                                                </div>
                                                <ReactivityHex reactivity={item.reactivity} />
                                            </div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography component={'span'} variant={'body2'}>
                                            <div className='item-detail-shell'>
                                                <div className='item-detail'><h3>Harvestable Part</h3> <p>{item.harvestablePart}</p></div>
                                                {item.classifications && item.classifications.length > 0 && <div><h3>Climates(s)</h3> <ul>{item.classifications.map((climate, i) => (<li key={climate + i}>{climate}</li>))}</ul></div>}
                                                {item.locations && item.locations.length > 0 && <div><h3>Location(s)</h3> <ul>{item.locations.map(({adjacency, location}, i) => (<li key={adjacency + location + i}>{adjacency} {location}</li>))}</ul></div>}
                                            </div>
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