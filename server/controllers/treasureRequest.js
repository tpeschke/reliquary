// The Bestiary posts scrolls as { numberOfScrolls, power }. The scroll route
// uses numberOfItems. Accept either so a hoard still rolls scrolls.
function scrollRequestCount(scroll) {
    if (!scroll || typeof scroll !== 'object') {
        return 0
    }

    const raw = scroll.numberOfItems ?? scroll.numberOfScrolls
    const count = Number(raw)
    if (!Number.isFinite(count) || count <= 0) {
        return 0
    }

    return Math.min(25, Math.floor(count))
}

module.exports = {
    scrollRequestCount
}
