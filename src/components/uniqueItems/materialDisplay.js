import React from 'react';

const materialCategoriesToInclude = ['Leather', 'Wood', 'Wax']

export function mapMaterial(material, i) {
    return (<li key={'material' + i}>
                {material.label && material.label !== 'NONE' ? material.label + ': ' : ''}{material.submaterial ? material.submaterial : material.material}{materialCategoriesToInclude.includes(material.materialcategory) ? " " + material.materialcategory : ''}
                {material.bonus && (<ul>
                    <li>{material.bonus}</li>
                    {material.confbonus && <li>{material.confbonus}</li>}
                </ul>)}
            </li>)
}