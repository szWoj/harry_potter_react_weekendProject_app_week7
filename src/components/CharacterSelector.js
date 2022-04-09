const CharacterSelector = ({characters, onCharacterSelected}) => {

    const handleChange = event => {
        onCharacterSelected(event.target.value)
    }

    return (
        <>
        <h3>Please select a character</h3>
        <select defaultValue="" onChange={handleChange}>
            <option value="" disabled>Choose a character</option>{
                characters.map( (character, index) => {
                    return (< 
                        option key = {index} 
                        value = {character.name} >{character.name}</option>

                    )
                })
            }

        </select>
        </>
    )
}

export default CharacterSelector;