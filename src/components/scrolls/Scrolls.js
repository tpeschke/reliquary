import axios from 'axios';
import React, { useState, useEffect } from 'react';
import constants from '../../constants'
import Button from '@mui/material/Button';
import Loading from '../loading/Loading'
import RefreshIcon from '@mui/icons-material/Refresh';
import Animism from '../../assets/icons/scrolls/Animism.svg'
import Calling from '../../assets/icons/scrolls/Calling.svg'
import Charm from '../../assets/icons/scrolls/Charm.svg'
import Glamour from '../../assets/icons/scrolls/Glamour.svg'
import Investiture from '../../assets/icons/scrolls/Investiture.svg'
import Occultism from '../../assets/icons/scrolls/Occultism.svg'
import Sortilege from '../../assets/icons/scrolls/Sortilege.svg'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const categoryIconDictionary = {
    'Animism': Animism,
    'Calling': Calling,
    'Charm': Charm,
    'Glamour': Glamour,
    'Investiture': Investiture,
    'Occultism': Occultism,
    'Sortilege': Sortilege,
}

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

export default function Scrolls() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (items.length === 0) {
            axios.post(constants.baseUrl + '/api/getScrolls?numberOfItems=10').then(({data}) => {
                setItems(data);
                setLoading(false)
            })
        }
    }, [loading]);

    function refreshItems(event, rarity = null) {
        setLoading(true)
        axios.post(constants.baseUrl + '/api/getScrolls?numberOfItems=10').then(({ data }) => {
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
                        </div>
                        <Button variant="contained" onClick={_ => refreshItems()} theme={theme}><RefreshIcon /></Button>
                    </div>
                    <div className='accordion-shell-talisman'>
                        {items.map((item, i) => {
                            return (
                                <div key={i} className='talisman-shell'>
                                    <img src={categoryIconDictionary[item.tradition]} height="50" />
                                    <div>
                                        <div className='item-title-shell'>
                                            <h2>{item.name}</h2>
                                        </div>
                                        <div>
                                            {item.tooltip}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}