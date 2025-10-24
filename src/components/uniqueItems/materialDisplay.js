export function mapMaterial({ material, materialCategory, bonus, confBonus }, i) {
    return (
        <li key={'material' + i}>
            <li>{material} {materialCategory ? `( ${materialCategory} )` : ''}</li>
            <ul>
                {bonus && (
                    <>
                        <li>{bonus}</li>
                        {confBonus && <li>{confBonus}</li>}
                    </>
                )}
            </ul>
        </li>
    )
}