import axios from 'axios';
import React, { useState, useEffect } from 'react';
import constants from '../../constants'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Loading from '../loading/Loading'
import potion from '../../assets/icons/potions/potion.svg'
import salve from '../../assets/icons/potions/salve.svg'

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

export default function Potions() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (items.length === 0) {
            axios.post(constants.baseUrl + '/api/getRandomPotions?numberOfItems=25').then(({ data }) => {
                setItems(data);
                setLoading(false)
            })
        }
    }, [loading]);

    function refreshItems(event, rarity = null) {
        setLoading(true)
        axios.post(constants.baseUrl + '/api/getRandomPotions?numberOfItems=25' + (rarity ? '&rarity=' + rarity : '')).then(({ data }) => {
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
                            <Button variant="contained" onClick={e=>refreshItems(e, 'Common')} theme={secondarytheme}>Common</Button>
                            <Button variant="contained" onClick={e=>refreshItems(e, 'Uncommon')} theme={secondarytheme}>Uncommon</Button>
                            <Button variant="contained" onClick={e=>refreshItems(e, 'Rare')} theme={secondarytheme}>Rare</Button>
                        </div>
                        <Button variant="contained" onClick={_=>refreshItems()} theme={theme}>Any</Button>
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
                                                <img src={item.isSalve ? salve : potion} height="50" />
                                                <div>
                                                    <div className='item-title-shell'>
                                                        <h2>{item.name}</h2>
                                                        <p>w/ {item.swigs} {item.isSalve ? 'application' : 'swig'}{item.swigs > 1 ? 's' : ''}</p>
                                                    </div>
                                                    <div>
                                                        {item.effect}
                                                    </div>
                                                </div>
                                            </div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography component={'span'} variant={'body2'}>
                                            <div>
                                                <p>{item.typeTooltip}</p>
                                                <p className='bottom-margin'>{item.generalTooltip}</p>
                                                <div className='item-detail'><h3>Price</h3> <p>{item.price} sc</p></div>
                                                <div className='item-detail'><h3>Rarity</h3> <p>{item.rarity}</p></div>
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