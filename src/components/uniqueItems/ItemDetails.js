import React from 'react';
import { mapSubject, mapSecondaryObject } from './SubjectDisplays';

const materialCategoriesToInclude = ['Leather', 'Wood', 'Wax']

function formatItemCategoryName (name) {
    if (name.includes('_')) {
        return name.split('_')[1]
    }
    return name
}

export default function ItemDetails({ item }) {
    return (
        <div className='item-detail-shell'>
            {item.itemcategory && <div className='item-detail'><h3>Item Category</h3> <p>{formatItemCategoryName(item.itemcategory)}</p></div>}
            {item.item && <div className='item-detail'><h3>Item</h3> <p>{item.item}</p></div>}
            {item.materials && item.materials.length > 0 && item.materials[0] && <div><h3>Material(s)</h3> <ul>{item.materials.map((material, i) => (<li key={'material' + i}>{material.label && material.label !== 'NONE' ? material.label + ': ' : ''}{material.submaterial ? material.submaterial : material.material}{materialCategoriesToInclude.includes(material.materialcategory) ? " " + material.materialcategory : ''}</li>))}</ul></div>}
            {item.number > 1 && <div className='item-detail'><h3>Number</h3> <p>{item.number}</p></div>}
            {item.size && <div className='item-detail'><h3>Size</h3> <p>{item.size}</p></div>}
            {item.finalPrice && <div className='item-detail'><h3>Price</h3> <p>{item.finalPrice} sc</p></div>}
            {/* <div className='item-detail'><h3>Wear</h3> <p>{item.wear}</p></div> */}
            {mapSubject(item.subject)}
            {item.engravings && item.engravings.length > 0 && <div><h3>Engravings(s)</h3> {item.engravings.map((engraving, i) => {
                return (
                    <div key={i + engraving.type.type}>
                        <div className='item-detail'><h4>Type</h4> <p>{engraving.type.type}</p></div>
                        {mapSecondaryObject(engraving.subject)}
                    </div>
                )
            })}</div>}
            {item.stitchings && item.stitchings.length > 0 && <div><h3>Stitchings(s)</h3> {item.stitchings.map((stitching, i) => {
                return (
                    <div key={i + stitching.type.type}>
                        <div className='item-detail'><h4>Type</h4> <p>{stitching.type.type}</p></div>
                        {mapSecondaryObject(stitching.subject)}
                    </div>
                )
            })}</div>}
            {item.colors && item.colors.length > 0 && <div><h3>Color(s)</h3> <ul>{item.colors.map((color, i) => (<li key={color + i}>{color}</li>))}</ul></div>}
            {item.adjectives && item.adjectives.length > 0 && <div><h3>Adjective(s)</h3> <ul>{item.adjectives.map((adjective, i) => (<li key={adjective + i}>{adjective}{adjective.submaterial ? ' ' + adjective.submaterial : ''}</li>))}</ul></div>}
        </div>
    )
}