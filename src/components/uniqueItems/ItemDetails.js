import React from 'react';
import { mapMaterial } from './materialDisplay'

export default function ItemDetails({ item }) {
    return (
        <div className='item-detail-shell'>
            {item.category && <div className='item-detail'><h3>Item Category</h3> <p>{item.category}</p></div>}
            {item.item && <div className='item-detail'><h3>Item</h3> <p>{item.item}</p></div>}
            {item.materials && item.materials.length > 0 && item.materials[0] && <div><h3>Material(s)</h3> <ul>{item.materials.map((material, i) => (mapMaterial(material, i)))}</ul></div>}
            {item.number > 1 && <div className='item-detail'><h3>Number</h3> <p>{item.number}</p></div>}
            {item.size && <div className='item-detail'><h3>Size</h3> <p>{item.size}</p></div>}
            {item.price > 0 && <div className='item-detail'><h3>Price</h3> <p>{item.price} sc</p></div>}
            {item.engravings && item.engravings.length > 0 && (
                <>
                    <h3>Subject(s)</h3>
                    <ul>
                        {item.engravings.map((engraving, index) => {
                            return (
                                <li key={index}>{engraving.theme} / {engraving.timePeriod}</li>
                            )
                        })}
                    </ul>
                </>
            )
            }
            {item.colors && item.colors.length > 0 && <div><h3>Color(s)</h3> <ul>{item.colors.map((color, i) => (<li key={color + i}>{color}</li>))}</ul></div>}
        </div >
    )
}