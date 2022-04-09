import React, {useState, useEffect} from "react";
import CharacterSelector from "../components/CharacterSelector";
import Character from "../components/Character";
import FavouriteCharacters from "../components/FavouriteCharacters";

const HarryPotterContainer = () => {

    const [characters, setCharacters] = useState([]);
    const [selectedCharacterString, setSelectedCharacterString] = useState("");


    useEffect(() => {
        getCharacters()
    }, [])
    
    const getCharacters = () => {
        fetch("http://hp-api.herokuapp.com/api/characters")
        .then(res => res.json())
        // .then(song=> console.log(song))
        .then(characters => setCharacters(characters))
    }

    const handleCharacterSelected = (characterString) => {
        setSelectedCharacterString(characterString)
    }

    const handleFavouriteCharacters = (characterString) => {
        const updatedCharacters = characters.map((character, index)=> {
            if(character.name === characterString) {
                character.favourite = !character.favourite
            }
            return character
        })
        setCharacters(updatedCharacters)
    }

    const selectedCharacter = characters.find(character => character.name === selectedCharacterString)


    return (
        <>
        <h2>Harry Potter's Characters</h2>
        <CharacterSelector characters = {characters} onCharacterSelected={handleCharacterSelected}/>
        <Character character = {selectedCharacter} onFavouriteToggle={handleFavouriteCharacters}/>
        <FavouriteCharacters characters={characters} onCharacterSelected={handleCharacterSelected}/>
        </>
    )
}





export default HarryPotterContainer;