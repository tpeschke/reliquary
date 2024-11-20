getDetailPriceModifier = (finalPrice, item, type) => {
    let detailPrice = 0;
    if (item[type]) {
        detailPrice += (finalPrice * item[type].length * .1)
    }
    return +detailPrice.toFixed(2)
}

itemFormatHelper = {
    getFormat: function (item, format) {
        if (format && format.toUpperCase() === 'JSON') {
            delete item.description
            return item
        } else if (format && format.toUpperCase() === 'STRING') {
            return item.description
        } else {
            return item
        }
    },
    cleanUpItem: (item) => {
        for (const key in item) {
            if (!item[key] || item[key].length === 0) {
                delete item[key]
            }
        }
        delete item.quirks
        delete item.amount_min
        delete item.amount_max
        return item
    },
    calculateFinalPrice: (item) => {
        let finalPrice = 0;

        if (item.materials) {
            item.materials.forEach(material => {
                if (material.multiplier) {
                    finalPrice += (item.price / item.materials.length) * material.multiplier
                } else if (material.price) {
                    finalPrice += material.price
                }
            })
        } else {
            finalPrice = item.price
        }

        finalPrice += getDetailPriceModifier(finalPrice, item, 'adjectives') + getDetailPriceModifier(finalPrice, item, 'colors')

        if (item.engravings) {
            finalPrice += item.engravings.reduce((accumulator, engravings) => accumulator + engravings.type.price, 0)
        }
        if (item.stitchings) {
            finalPrice += item.stitchings.reduce((accumulator, stitchings) => accumulator + stitchings.type.price, 0)
        }

        if (item.gems) {
            finalPrice += item.gems.reduce((accumulator, gems) => accumulator + gems.price, 0)
        }

        return +finalPrice.toFixed(2)
    },
    getStringDescription: function ({ number, item, type: itemtype, materials, colors, adjectives, wear, finalPrice, gems, subject, itemcategory, engravings, stitchings }) {
        let itemDescription = createBaseNameString(item, itemtype, itemcategory, materials, number)

        if (materials && materials[0] && materials.length > 0) { itemDescription += createMaterialsString(materials, itemcategory) }

        itemDescription += "."

        if (colors && colors.length > 0) { itemDescription += createColorsString(colors) }

        if (gems && gems.length > 0) { itemDescription += createGemString(gems) }

        if (subject && subject.length > 0) { itemDescription += createSubjectString(subject) }

        if (engravings && engravings.length > 0) { itemDescription += createEngravingsString(engravings) }
        if (stitchings && stitchings.length > 0) { itemDescription += createStitchingString(stitchings) }

        if (adjectives && adjectives.length > 0) { itemDescription += createAdjectiveString(adjectives) }

        if (wear) { itemDescription += createDescriptiveWear(wear) }

        itemDescription += createDescriptivePrice(finalPrice, wear)

        return itemDescription
    },
}

createBaseNameString = (item, itemtype, itemcategory, materials, number) => {
    let itemName = item.trim().toLowerCase()
    let itemDescription = ''

    if (itemcategory === 'Raw Good') {
        if (materials) {
            itemDescription = `Some ${materials[0].material.toLowerCase()}`
        } else {
            itemDescription = `Some ${itemName}`
        }
    } else {
        if (itemName.includes(',')) {
            let itemArray = itemName.split(', ')
            itemName = [itemArray[1], itemArray[0]].join(' ')
        }
        if (number > 1) {
            if (itemtype) {
                itemDescription += `${number} ${itemtype}${itemtype === 'ft' ? '' : 's'} of ${itemName}`
            } else {
                itemDescription += `${number} ${itemName}s`
            }
        } else {
            itemDescription += `A ${itemtype ? `${itemtype} of ` : ''}${itemName}`
        }

        if (itemcategory === 'Shields') {
            itemDescription += ` ${itemcategory.slice(0, -1)}`
        } else if (itemcategory === 'Armor' || itemcategory === 'Cloth') {
            itemDescription += ` ${itemcategory.toLowerCase()}`
        }
    }

    return itemDescription
}

createMaterialsString = (materials, itemcategory) => {
    let baseString = ''
    materials.forEach((material, index) => {
        let materialToShow = material.material.toLowerCase()
        if (material.subtableResults) {
            materialToShow = material.subtableResults[0].material
        }
        if (material.submaterial) {
            materialToShow = material.submaterial
        }
        if (index === 0 && material.label) {
            baseString += ` with a ${material.label} of ${materialToShow}`
        } else if (material.label) {
            baseString += ` and a ${material.label} of ${materialToShow}`
        } else if (index === 0 && !material.label && itemcategory !== 'Raw Good') {
            baseString += ` made of ${materialToShow}`
        } else if (!material.label && itemcategory !== 'Raw Good') {
            baseString += ` and ${materialToShow}`
        }

        if (material.bonus || material.confbonus) {
            baseString += ` (`
            if (material.bonus) {
                baseString += material.bonus
                if (material.confbonus) {
                    baseString += ` / `
                }
            }
            if (material.confbonus) {
                baseString += material.confbonus
            }
            baseString += `) `
        }

        const materialCategoriesToInclude = ['Leather', 'Wood', 'Wax']
        if (materialCategoriesToInclude.includes(material.materialcategory)) {
            baseString += ` ${material.materialcategory.toLowerCase()}`
        }
    })
    return baseString;
}

createColorsString = (colors) => {
    const plural = colors.length > 1
    let baseString = ` It's primary color${plural ? 's are' : ' is'}`
    colors.forEach((detail, index) => {
        if (index === colors.length - 1 && colors.length > 1) {
            baseString += ' and'
        }
        baseString += ` ${detail.toLowerCase()}`
        if (index < colors.length - 1) {
            baseString += ','
        }
    })
    baseString += "."
    return baseString
}

createGemString = (gems) => {
    const plural = gems.length > 1
    let baseString = ''

    if (plural) {
        baseString += ` It has ${gems.length - 1} gems:`
        gems.forEach((gem, index) => {
            if (index === gems.length - 1 && gems.length > 1) {
                baseString += ' and'
            }
            baseString += ` a ${gem.shape.toLowerCase()} ${gem.type.toLowerCase()} about ${gem.size} mm in size`
            if (index < gems.length - 1) {
                baseString += ','
            }
        })
        baseString += '.'
    } else {
        baseString += ` It has a single gem: a ${gems[0].shape.toLowerCase()} ${gems[0].type.toLowerCase()} about ${gems[0].size} mm in size.`
    }

    return baseString
}

createSubjectString = (subject) => {
    let baseString = ` The subject of the work appears to be ${subject[0].subject.toLowerCase()} in nature`
    if (subject[0].secondary_subject && subject[0].secondary_subject[0].length > 0) {
        baseString += ` as well as`
        subject[0].secondary_subject[0].forEach((subject, index) => {
            if (index === subject[0].secondary_subject[0].length - 1 && subject[0].secondary_subject[0].length > 1) {
                baseString += ' and'
            }
            baseString += ` ${subject[0].shape.toLowerCase()}`
            if (index < subject[0].secondary_subject[0].length - 1) {
                baseString += ','
            }
        })
    }
    baseString += '.'

    if (subject[0].events && subject[0].events.length > 0) {
        baseString += ` It depicts`
        subject[0].events.forEach((event, index) => {
            if (index === 0) {
                baseString += ` ${event.subject.toLowerCase()} events from ${event.time_period.toLowerCase()} times`
            } else if (index === 1) {
                baseString += `. It also draws parallels to ${event.subject.toLowerCase()} events from ${event.time_period.toLowerCase()} times`
            } else {
                if (index === subject[0].events.length - 1 && subject[0].events.length > 1) {
                    baseString += ' and'
                }
                baseString += ` ${event.subject.toLowerCase()} events from ${event.time_period.toLowerCase()} times`
                if (index < subject[0].events.length - 1) {
                    baseString += ','
                }
            }
        })
        baseString += '.'
    }

    if (subject[0].persons && subject[0].persons.length > 0) {
        baseString += ` Its main character appears to be`
        subject[0].persons.forEach((detail, index) => {
            if (index === subject[0].persons.length - 1 && subject[0].persons.length > 1) {
                baseString += ' and'
            }
            baseString += ` ${detail.toLowerCase()}`
            if (index < subject[0].persons.length - 1) {
                baseString += ','
            }
        })
        baseString += ' in nature.'
    }

    let thereAreBodyParts = false
    if (subject[0].body_parts && subject[0].body_parts.length > 0) {
        thereAreBodyParts = true
        const plural = subject[0].body_parts.length > 1
        baseString += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`

        subject[0].body_parts.forEach(({ submaterial }, index) => {
            if (index === subject[0].body_parts.length - 1 && subject[0].body_parts.length > 1) {
                baseString += ' and'
            }
            baseString += ` ${submaterial.detail.toLowerCase()}`
            if (submaterial.detail.charAt(submaterial.detail.length - 1) !== 's') {
                baseString += 's'
            }
            if (index < subject[0].body_parts.length - 1) {
                baseString += ','
            }
        })

        if (!subject[0].animal_subtype || !subject[0].animal_subtype.length > 0) {
            baseString += '.'
        }
    }

    if (subject[0].animal_subtype && subject[0].animal_subtype.length > 0) {
        const plural = subject[0].animal_subtype.length > 1
        if (thereAreBodyParts) {
            baseString += ` as well as`
        } else {
            baseString += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`
        }

        subject[0].animal_subtype.forEach(({ submaterial }, index) => {
            if (index === subject[0].animal_subtype.length - 1 && subject[0].animal_subtype.length > 1) {
                baseString += ' and'
            }
            baseString += ` ${submaterial.detail.toLowerCase()}s`
            if (index < subject[0].animal_subtype.length - 1) {
                baseString += ','
            }
        })
        baseString += '.'
    }

    if (subject[0].colors && subject[0].colors.length > 0) {
        const plural = subject[0].colors.length > 1

        baseString += ` The color${plural ? 's ' : ''}`
        subject[0].colors.forEach(({ detail }, index) => {
            if (index === subject[0].colors.length - 1 && subject[0].colors.length > 1) {
                baseString += ' and'
            }
            baseString += ` ${detail.toLowerCase()}`
            if (index < subject[0].colors.length - 1) {
                baseString += ','
            }
        })
        baseString += "feature prominantly."
    }

    if (subject[0].adjectives && subject[0].adjectives.length > 0) {
        baseString += ` You'd probably describe the work as`
        subject[0].adjectives.forEach(({ detail, submaterial }, index) => {
            if (index === subject[0].adjectives.length - 1 && subject[0].adjectives.length > 1) {
                baseString += ' and'
            }
            baseString += ` ${detail.toLowerCase()}`
            if (submaterial) {
                baseString += ` ${submaterial.detail.toLowerCase()}`
            }
            if (index < subject[0].adjectives.length - 1) {
                baseString += ','
            }
        })
        baseString += "."
    }

    return baseString;
}

createEngravingsString = (engravings) => {
    const plural = engravings.length > 1
    let baseString = '';

    if (plural) {
        baseString += ' The item has a number of engravings on it'
    } else if (engravings[0].detail === 'Gem Engraving') {
        baseString += ` It appears as if the gem has an engraving`
    } else {
        baseString += ` There is an inside engraving on the item`
    }

    if (engravings[0].subject) {
        const subject = engravings[0].subject
        baseString += ` which appear to be ${subject.subject.toLowerCase()} in nature`
        if (subject.secondary_subject && subject.secondary_subject.length > 0) {
            baseString += ` as well as`
            subject.secondary_subject.forEach((innerSubject, index) => {
                if (index === subject.secondary_subject.length - 1 && subject.secondary_subject.length > 1) {
                    baseString += ' and'
                }
                baseString += ` ${innerSubject.subject.toLowerCase()}`
                if (index < subject.secondary_subject.length - 1) {
                    baseString += ','
                }
            })
        }
        baseString += '.'

        if (subject.events && subject.events.length > 0) {
            baseString += ` It depicts`
            subject.events.forEach((event, index) => {
                if (index === 0) {
                    baseString += ` ${event.subject.toLowerCase()} events from ${event.time_period.toLowerCase()} times`
                } else if (index === 1) {
                    baseString += `. It also draws parallels to ${event.subject.toLowerCase()} events from ${event.time_period.toLowerCase()} times`
                } else {
                    if (index === subject.events.length - 1 && subject.events.length > 1) {
                        baseString += ' and'
                    }
                    baseString += ` ${event.subject.toLowerCase()} events from ${event.time_period.toLowerCase()} times`
                    if (index < subject.events.length - 1) {
                        baseString += ','
                    }
                }
            })
            baseString += '.'
        }

        if (subject.persons && subject.persons.length > 0) {
            baseString += ` Its main character appears to be`
            subject.persons.forEach((detail, index) => {
                if (index === subject.persons.length - 1 && subject.persons.length > 1) {
                    baseString += ' and'
                }
                baseString += ` ${detail.toLowerCase()}`
                if (index < subject.persons.length - 1) {
                    baseString += ','
                }
            })
            baseString += ' in nature.'
        }

        let thereAreBodyParts = false
        if (subject.body_parts && subject.body_parts.length > 0) {
            thereAreBodyParts = true
            const plural = subject.body_parts.length > 1
            baseString += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`

            subject.body_parts.forEach((detail, index) => {
                if (index === subject.body_parts.length - 1 && subject.body_parts.length > 1) {
                    baseString += ' and'
                }
                baseString += ` ${detail.toLowerCase()}`
                if (detail.charAt(detail.length - 1) !== 's') {
                    baseString += 's'
                }
                if (index < subject.body_parts.length - 1) {
                    baseString += ','
                }
            })

            if (!subject.animal_subtype || !subject.animal_subtype.length > 0) {
                baseString += '.'
            }
        }

        if (subject.animal_subtype && subject.animal_subtype.length > 0) {
            const plural = subject.animal_subtype.length > 1
            if (thereAreBodyParts) {
                baseString += ` as well as`
            } else {
                baseString += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`
            }

            subject.animal_subtype.forEach((detail, index) => {
                if (index === subject.animal_subtype.length - 1 && subject.animal_subtype.length > 1) {
                    baseString += ' and'
                }
                baseString += ` ${detail.toLowerCase()}s`
                if (index < subject.animal_subtype.length - 1) {
                    baseString += ','
                }
            })
            baseString += '.'
        }
    }

    if (engravings[0].colors && engravings[0].colors.length > 0) {
        const colors = engravings[0].colors
        const plural = colors.length > 1

        baseString += ` The color${plural ? 's ' : ''}`
        colors.forEach(({ detail }, index) => {
            if (index === colors.length - 1 && colors.length > 1) {
                baseString += ' and'
            }
            baseString += ` ${detail.toLowerCase()}`
            if (index < colors.length - 1) {
                baseString += ','
            }
        })
        baseString += "feature prominantly."
    }

    if (engravings[0].adjectives && engravings[0].adjectives.length > 0) {
        const adjectives = engravings[0].adjectives
        baseString += ` You'd probably describe the work as`
        adjectives.forEach((detail, index) => {
            if (index === adjectives.length - 1 && adjectives.length > 1) {
                baseString += ' and'
            }
            baseString += ` ${detail.toLowerCase()}`
            if (index < adjectives.length - 1) {
                baseString += ','
            }
        })
        baseString += "."
    }

    return baseString
}

createStitchingString = (stitchings) => {
    let baseString = ' The item also has hand stitching'

    if (stitchings[0].subject) {
        const subject = stitchings[0].subject
        baseString += ` which are ${subject.subject.toLowerCase()} in nature`
        if (subject.secondary_subject && subject.secondary_subject.length > 0) {
            baseString += ` as well as`
            subject.secondary_subject.forEach((innerSubject, index) => {
                if (index === subject.secondary_subject.length - 1 && subject.secondary_subject.length > 1) {
                    baseString += ' and'
                }
                baseString += ` ${innerSubject.subject.toLowerCase()}`
                if (index < subject.secondary_subject.length - 1) {
                    baseString += ','
                }
            })
        }
        baseString += '.'

        if (subject.events && subject.events.length > 0) {
            baseString += ` It depicts`
            subject.events.forEach((event, index) => {
                if (index === 0) {
                    baseString += ` ${event.subject.toLowerCase()} events from ${event.time_period.toLowerCase()} times`
                } else if (index === 1) {
                    baseString += `. It also draws parallels to ${event.subject.toLowerCase()} events from ${event.time_period.toLowerCase()} times`
                } else {
                    if (index === subject.events.length - 1 && subject.events.length > 1) {
                        baseString += ' and'
                    }
                    baseString += ` ${event.subject.toLowerCase()} events from ${event.time_period.toLowerCase()} times`
                    if (index < subject.events.length - 1) {
                        baseString += ','
                    }
                }
            })
            baseString += '.'
        }

        if (subject.persons && subject.persons.length > 0) {
            baseString += ` Its main character appears to be`
            subject.persons.forEach((detail, index) => {
                if (index === subject.persons.length - 1 && subject.persons.length > 1) {
                    baseString += ' and'
                }
                baseString += ` ${detail.toLowerCase()}`
                if (index < subject.persons.length - 1) {
                    baseString += ','
                }
            })
            baseString += ' in nature.'
        }

        let thereAreBodyParts = false
        if (subject.body_parts && subject.body_parts.length > 0) {
            thereAreBodyParts = true
            const plural = subject.body_parts.length > 1
            baseString += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`

            subject.body_parts.forEach((detail, index) => {
                if (index === subject.body_parts.length - 1 && subject.body_parts.length > 1) {
                    baseString += ' and'
                }
                baseString += ` ${detail.toLowerCase()}`
                if (detail.charAt(detail.length - 1) !== 's') {
                    baseString += 's'
                }
                if (index < subject.body_parts.length - 1) {
                    baseString += ','
                }
            })

            if (!subject.animal_subtype || !subject.animal_subtype.length > 0) {
                baseString += '.'
            }
        }

        if (subject.animal_subtype && subject.animal_subtype.length > 0) {
            const plural = subject.animal_subtype.length > 1
            if (thereAreBodyParts) {
                baseString += ` as well as`
            } else {
                baseString += ` There ${plural ? 'are' : 'is a'} motif${plural ? 's' : ''} of`
            }

            subject.animal_subtype.forEach((detail, index) => {
                if (index === subject.animal_subtype.length - 1 && subject.animal_subtype.length > 1) {
                    baseString += ' and'
                }
                baseString += ` ${detail.toLowerCase()}s`
                if (index < subject.animal_subtype.length - 1) {
                    baseString += ','
                }
            })
            baseString += '.'
        }
    }

    if (stitchings[0].colors && stitchings[0].colors.length > 0) {
        const colors = stitchings[0].colors
        const plural = colors.length > 1

        itemDescription += ` The color${plural ? 's ' : ''}`
        colors.forEach(({ detail }, index) => {
            if (index === colors.length - 1 && colors.length > 1) {
                itemDescription += ' and'
            }
            itemDescription += ` ${detail.toLowerCase()}`
            if (index < colors.length - 1) {
                itemDescription += ','
            }
        })
        itemDescription += "feature prominantly."
    }

    if (stitchings[0].adjectives && stitchings[0].adjectives.length > 0) {
        const adjectives = stitchings[0].adjectives
        itemDescription += ` You'd probably describe the work as`
        adjectives.forEach(({ detail }, index) => {
            if (index === adjectives.length - 1 && adjectives.length > 1) {
                itemDescription += ' and'
            }
            itemDescription += ` ${detail.toLowerCase()}`
            if (index < adjectives.length - 1) {
                itemDescription += ','
            }
        })
        itemDescription += "."
    }

    return baseString;
}

createAdjectiveString = (adjectives) => {
    let baseString = ` You'd probably describe the craftsmanship as`
    adjectives.forEach((detail, index) => {
        if (index === adjectives.length - 1 && adjectives.length > 1) {
            baseString += ' and'
        }
        baseString += ` ${detail.toLowerCase()}`
        if (index < adjectives.length - 1) {
            baseString += ','
        }
    })
    baseString += "."
    return baseString;
}

createDescriptiveWear = (wear) => {
    if (wear <= 2) {
        return ` It has a little worn (${wear} Wear).`
    } else if (wear <= 4) {
        return ` It's slightly worn (${wear} Wear).`
    } else if (wear <= 6) {
        return ` It's pretty worn (${wear} Wear).`
    } else if (wear <= 8) {
        return ` It's very worn (${wear} Wear).`
    } else if (wear <= 10) {
        return ` It's about to break (${wear} Wear).`
    } else {
        return ` It's broken (${wear} Wear).`
    }
}

createDescriptivePrice = (finalPrice, wear) => {
    if (wear) {
        return ` It would probably worth about ${finalPrice} sc after it's repaired.`
    } else {
        return ` It's probably worth about ${finalPrice} sc.`
    }
}

module.exports = itemFormatHelper