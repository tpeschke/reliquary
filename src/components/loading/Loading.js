import React from 'react';
import './loading.css'

export default function Loading() {
    return (
        <div className='loading-shell'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}