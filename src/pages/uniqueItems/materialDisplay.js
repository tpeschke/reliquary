export function mapMaterial({ material, materialCategory, bonus, confBonus }, i) {
    return (
        <ul key={'material' + i}>
            <li>{material} {materialCategory ? `( ${materialCategory} )` : ''}</li>
            <ul>
                {bonus && (
                    <>
                        <li>{bonus}</li>
                        {confBonus && <li>{confBonus}</li>}
                    </>
                )}
            </ul>
        </ul>
    )
}