import React from 'react';

function mapSubject(subjects, secondary = false) {
    // secondary_subject

    if (!subjects || subjects.length === 0) {
        return <div></div>
    }
    return (
        <div>
            <h3>Subject(s)</h3>
            {subjects.map((subject, i) => {
                return (
                    <div key={subject.subject + i} className='subject-shell'>
                        {subject.subject && <div className='item-detail'><h3>Subject</h3> <p>{subject.subject}</p></div>}
                        {subject.persons ? (<>
                            <h4>Person(s)</h4>
                            <ul>
                                {subject.persons.map((person, i) => (<li key={person.detail + i}>{person.detail}</li>))}
                            </ul></>) : <div></div>
                        }
                        {subject.animal_subtype ? (<>
                            <h4>Animal(s)</h4>
                            <ul>
                                {subject.animal_subtype.map((animal, i) => (<li key={animal.submaterial.detail + i}>{animal.submaterial.detail}</li>))}
                            </ul></>) : <div></div>
                        }
                        {subject.body_parts ? (<>
                            <h4>Body Part(s)</h4>
                            <ul>
                                {subject.body_parts.map((body_part, i) => (<li key={body_part.submaterial.detail + i}>{body_part.submaterial.detail}</li>))}
                            </ul></>) : <div></div>
                        }
                        {subject.events ? (<>
                            <h4>Event(s)</h4>
                            <ul>
                                {subject.events.map((event, index) => (
                                    <li key={event.subject + event.time_period + i}>Event {index + 1}
                                        <ul>
                                            <li>{event.subject}</li>
                                            <li>{event.time_period}</li>
                                        </ul>
                                    </li>))}
                            </ul></>) : <div></div>
                        }
                        {subject.colors ? (<>
                            <h4>Color(s)</h4>
                            <ul>
                                {subject.colors.map((color, i) => (<li key={color.detail + i}>{color.detail}</li>))}
                            </ul></>) : <div></div>
                        }
                        {subject.adjectives ? (<>
                            <h4>Adjective(s)</h4>
                            <ul>
                                {subject.adjectives.map((adjective, i) => (<li key={adjective.detail + i}>{adjective.detail}{adjective.submaterial ? ' ' + adjective.submaterial.detail : ''}</li>))}
                            </ul></>) : <div></div>
                        }
                        {subject.quirks ? (<>
                            <h4>Quirk(s)</h4>
                            <ul>
                                {subject.quirks.map((quirk, i) => (<li key={quirk.detail + i}>{quirk.detail}</li>))}
                            </ul></>) : <div></div>
                        }
                    </div>
                )
            })}
        </div >
    )
}

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
            {item.colors && item.colors.length > 0 && <div><h3>Color(s)</h3> <ul>{item.colors.map((color, i) => (<li key={color.detail + i}>{color.detail}</li>))}</ul></div>}
            {item.adjectives && item.adjectives.length > 0 && <div><h3>Adjective(s)</h3> <ul>{item.adjectives.map((adjective, i) => (<li key={adjective.detail + i}>{adjective.detail}{adjective.submaterial ? ' ' + adjective.submaterial.detail : ''}</li>))}</ul></div>}
            {item.quirks && item.quirks.length > 0 && <div><h3>Quirk(s)</h3> <ul>{item.quirks.map((quirk, i) => (<li key={quirk.detail + i}>{quirk.detail}</li>))}</ul></div>}
            {mapSubject(item.subject)}
        </div>
    )
}