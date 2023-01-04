import axios from 'axios';
import React, { useState, useEffect } from 'react';
import constants from '../constants'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import Loading from './loading/Loading'
import ItemDetails from './ItemDetails'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#CD7F32',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });

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
                                            <div className='item-title-shell'>
                                                <h2>{item.item}</h2>
                                                <p>{item.finalPrice} sc</p>
                                            </div>
                                            <div>
                                                {item.description}
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