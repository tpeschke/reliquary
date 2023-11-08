import React from 'react';

export function mapSubject(subjects) {

    if (!subjects || subjects.length === 0) {
        return <div></div>
    }
    return (
        <div>
            <h3>Subject(s)</h3>
            {subjects.map((subject, i) => {
                return (
                    <div key={subject.subject + i} className='subject-shell'>
                        {subject.subject && <div className='item-detail'><h4>Subject</h4> <p>{subject.subject}</p></div>}
                        {subject.secondary_subject && mapSecondary(subject.secondary_subject)}
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

export function mapSecondary(subjects) {
    if (!subjects || subjects.length === 0) {
        return <div></div>
    }
    return (
        <div>
            <h4>Secondary Subject(s)</h4>
            {subjects.map((subject, i) => {
                return (
                    <div key={subject.subject + i} className='subject-shell'>
                        {subject.subject && <div className='item-detail'><h5>Subject</h5> <p>{subject.subject}</p></div>}
                        {subject.secondary_subject && mapSecondary(subject.secondary_subject)}
                        {subject.persons ? (<>
                            <h5>Person(s)</h5>
                            <ul>
                                {subject.persons.map((person, i) => (<li key={person.detail + i}>{person.detail}</li>))}
                            </ul></>) : <div></div>
                        }
                        {subject.animal_subtype ? (<>
                            <h5>Animal(s)</h5>
                            <ul>
                                {subject.animal_subtype.map((animal, i) => (<li key={animal.submaterial.detail + i}>{animal.submaterial.detail}</li>))}
                            </ul></>) : <div></div>
                        }
                        {subject.body_parts ? (<>
                            <h5>Body Part(s)</h5>
                            <ul>
                                {subject.body_parts.map((body_part, i) => (<li key={body_part.submaterial.detail + i}>{body_part.submaterial.detail}</li>))}
                            </ul></>) : <div></div>
                        }
                        {subject.events ? (<>
                            <h5>Event(s)</h5>
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
                            <h5>Color(s)</h5>
                            <ul>
                                {subject.colors.map((color, i) => (<li key={color.detail + i}>{color.detail}</li>))}
                            </ul></>) : <div></div>
                        }
                        {subject.adjectives ? (<>
                            <h5>Adjective(s)</h5>
                            <ul>
                                {subject.adjectives.map((adjective, i) => (<li key={adjective.detail + i}>{adjective.detail}{adjective.submaterial ? ' ' + adjective.submaterial.detail : ''}</li>))}
                            </ul></>) : <div></div>
                        }
                        {subject.quirks ? (<>
                            <h5>Quirk(s)</h5>
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

export function mapSecondaryObject(subject) {
    if (!subject) {
        return <div></div>
    }
    return (
        <div>
            <h4>Subject</h4>
            <div className='subject-shell'>
                {subject.subject && <div className='item-detail'><h5>Subject</h5> <p>{subject.subject}</p></div>}
                {subject.persons ? (<>
                    <h5>Person(s)</h5>
                    <ul>
                        {subject.persons.map((person, i) => (<li key={person.detail + i}>{person.detail}</li>))}
                    </ul></>) : <div></div>
                }
                {subject.animal_subtype ? (<>
                    <h5>Animal(s)</h5>
                    <ul>
                        {subject.animal_subtype.map((animal, i) => (<li key={animal.submaterial.detail + i}>{animal.submaterial.detail}</li>))}
                    </ul></>) : <div></div>
                }
                {subject.body_parts ? (<>
                    <h5>Body Part(s)</h5>
                    <ul>
                        {subject.body_parts.map((body_part, i) => (<li key={body_part.submaterial.detail + i}>{body_part.submaterial.detail}</li>))}
                    </ul></>) : <div></div>
                }
                {subject.events ? (<>
                    <h5>Event(s)</h5>
                    <ul>
                        {subject.events.map((event, index) => (
                            <li key={event.subject + event.time_period + index}>Event {index + 1}
                                <ul>
                                    <li>{event.subject}</li>
                                    <li>{event.time_period}</li>
                                </ul>
                            </li>))}
                    </ul></>) : <div></div>
                }
                {subject.colors ? (<>
                    <h5>Color(s)</h5>
                    <ul>
                        {subject.colors.map((color, i) => (<li key={color.detail + i}>{color.detail}</li>))}
                    </ul></>) : <div></div>
                }
                {subject.adjectives ? (<>
                    <h5>Adjective(s)</h5>
                    <ul>
                        {subject.adjectives.map((adjective, i) => (<li key={adjective.detail + i}>{adjective.detail}{adjective.submaterial ? ' ' + adjective.submaterial.detail : ''}</li>))}
                    </ul></>) : <div></div>
                }
                {subject.quirks ? (<>
                    <h5>Quirk(s)</h5>
                    <ul>
                        {subject.quirks.map((quirk, i) => (<li key={quirk.detail + i}>{quirk.detail}</li>))}
                    </ul></>) : <div></div>
                }
            </div>
        </div >
    )
}