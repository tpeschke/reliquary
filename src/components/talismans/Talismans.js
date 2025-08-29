import axios from 'axios';
import React, { useState, useEffect } from 'react';
import constants from '../../constants'
import Button from '@mui/material/Button';
import Loading from '../loading/Loading'
import RefreshIcon from '@mui/icons-material/Refresh';
import Athletics from '../../assets/icons/talismans/athletics.svg'
import Lore from '../../assets/icons/talismans/lore.svg'
import Streetwise from '../../assets/icons/talismans/streetwise.svg'
import Strategy from '../../assets/icons/talismans/strategy.svg'
import Survival from '../../assets/icons/talismans/survival.svg'
import Trades from '../../assets/icons/talismans/trades.svg'
import Weirdcraft from '../../assets/icons/talismans/weirdcraft.svg'
import Combat from '../../assets/icons/talismans/combat.svg'

import toast from 'react-hot-toast';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const categoryIconDictionary = {
    'Athletics': Athletics,
    'Lore': Lore,
    'Streetwise': Streetwise,
    'Strategy': Strategy,
    'Survival': Survival,
    'Trades': Trades,
    'Weirdcraft': Weirdcraft,
    'Combat': Combat
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

export default function Talismans() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (items.length === 0) {
            axios.post(constants.baseUrl + '/api/getTalismans?numberOfItems=10').then(({ data }) => {
                setItems(data);
                setLoading(false)
            })
        }
    }, [loading]);

    function refreshItems(event, rarity = null) {
        setLoading(true)
        axios.post(constants.baseUrl + '/api/getTalismans?numberOfItems=10').then(({ data }) => {
            setItems(data);
            setLoading(false)
        })
    }

    function copyToClipboard(event, talisman) {
        event.stopPropagation()

        navigator.clipboard.writeText(`Talisman of ${talisman.skill}: ${talisman.explanation}`);
        toast.success(`The Talisman of ${talisman.skill} has been copied`)
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
                                    <img src={categoryIconDictionary[item.skillsuite]} height="50" />
                                    <div>
                                        <div className='item-title-shell'>
                                            <h2>Talisman of {item.skill}</h2>
                                        </div>
                                        <div>
                                            {item.explanation} <i onClick={e => copyToClipboard(e, item)} className="fa-solid fa-copy"></i>
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