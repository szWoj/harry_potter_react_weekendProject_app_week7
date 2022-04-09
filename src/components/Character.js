const Character = ({character, onFavouriteToggle}) => {

    if(!character){
        return null
    }

    const handleClick =() => {
        onFavouriteToggle(character.name)
    }

    const favouriteButtonText = character.favourite ? 'Remove from favourites' : 'Add to favourites'

    return (
        <>
        
        <h4>Name: {character.name}</h4>
        <h4>House: {character.house}</h4>
        <h4>Date of Birth: {character.dateOfBirth}</h4>
        <h4>Actor: {character.actor}</h4>
        <img src={character.image} alt="Picture not available" />
        <button onClick={handleClick}>{favouriteButtonText}</button>
        </>
    )
}

export default Character;