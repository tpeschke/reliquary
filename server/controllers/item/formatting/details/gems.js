function formatGems(gems) {
    let gemString = 'set with'

    gems.forEach((gem, index) => {
        if (index === gems.length - 1 && index > 0) {
            gemString += `, and a ${gem.size.size} mm ${gem.shape.gem_shape}-Shaped ${gem.name}`
        } else if (index === 0) {
            gemString += ` a ${gem.size.size} mm ${gem.shape.gem_shape}-Shaped ${gem.name}`
        } else {
            gemString += `, a ${gem.size.size} mm ${gem.shape.gem_shape}-Shaped ${gem.name}`
        }
    })

    return gemString
}

module.exports = {
    formatGems
}