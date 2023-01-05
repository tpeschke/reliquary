import React from 'react';
import { mapSubject, mapSecondaryObject } from './SubjectDisplays';

const materialCategoriesToInclude = ['Leather', 'Wood', 'Wax']

export default function ItemDetails({ item }) {

    return (
        <div className='item-detail-shell'>
            {item.itemcategory && <div className='item-detail'><h3>Item Category</h3> <p>{item.itemcategory}</p></div>}
            {item.item && <div className='item-detail'><h3>Item</h3> <p>{item.item}</p></div>}
            {item.materials && item.materials.length > 0 && <div><h3>Material(s)</h3> <ul>{item.materials.map((material, i) => (<li key={material.material + i}>{material.label && material.label !== 'NONE' ? material.label + ': ' : ''}{material.submaterial ? material.submaterial : material.material}{materialCategoriesToInclude.includes(material.materialcategory) ? " " + material.materialcategory : ''}</li>))}</ul></div>}
            {item.number > 1 && <div className='item-detail'><h3>Number</h3> <p>{item.number}</p></div>}
            {item.size && <div className='item-detail'><h3>Size</h3> <p>{item.size}</p></div>}
            {item.finalPrice && <div className='item-detail'><h3>Price</h3> <p>{item.finalPrice} sc</p></div>}
            {item.wear && <div className='item-detail'><h3>Wear</h3> <p>{item.wear}</p></div>}
            {mapSubject(item.subject)}
            {item.engravings && item.engravings.length > 0 && <div><h3>Engravings(s)</h3> {item.engravings.map((engraving, i) => {
                return (
                    <div key={i + engraving.type.detail}>
                        <div className='item-detail'><h4>Type</h4> <p>{engraving.type.detail}</p></div>
                        {mapSecondaryObject(engraving.subject)}
                    </div>
                )
            })}</div>}
            {item.stitchings && item.stitchings.length > 0 && <div><h3>Stitchings(s)</h3> {item.stitchings.map((stitching, i) => {
                return (
                    <div key={i + stitching.type.detail}>
                        <div className='item-detail'><h4>Type</h4> <p>{stitching.type.detail}</p></div>
                        {mapSecondaryObject(stitching.subject)}
                    </div>
                )
            })}</div>}
            {item.colors && item.colors.length > 0 && <div><h3>Color(s)</h3> <ul>{item.colors.map((color, i) => (<li key={color.detail + i}>{color.detail}</li>))}</ul></div>}
            {item.adjectives && item.adjectives.length > 0 && <div><h3>Adjective(s)</h3> <ul>{item.adjectives.map((adjective, i) => (<li key={adjective.detail + i}>{adjective.detail}{adjective.submaterial ? ' ' + adjective.submaterial.detail : ''}</li>))}</ul></div>}
            {item.quirks && item.quirks.length > 0 && <div><h3>Quirk(s)</h3> <ul>{item.quirks.map((quirk, i) => (<li key={quirk.detail + i}>{quirk.detail}</li>))}</ul></div>}
        </div>
    )
}