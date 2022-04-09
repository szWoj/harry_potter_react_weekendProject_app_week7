const FavouriteCharacters = ({characters, onCharacterSelected}) => {

    const favouriteCharacters = characters.filter((character, index) => character.favourite)
    return(
        <>
        <h4>User's fav will appear here</h4>
        <ul>{favouriteCharacters.map(character => {
            return (
                <li key={character.name}>
                    <button onClick={() => onCharacterSelected(character.name)}>{character.name}</button>
                </li>
            )
        })
        }
        </ul>
        </>
    )
}

export default FavouriteCharacters;