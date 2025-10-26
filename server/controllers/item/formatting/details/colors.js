function formatColors(colors) {
    let colorString = 'colored'

    colors.forEach((color, index) => {
        if (index === colors.length - 1 && index > 0) {
            colorString += ` and ${color.color}`
        } else if (index === 0) {
            colorString += ` ${color.color}`
        } else {
            colorString += `, ${color.color}`
        }
    })

    return colorString
}

module.exports = {
   formatColors 
}