import Character from "./Character";
import { useState } from "react";

const CharactersList = ({characters, onFavouriteToggle}) => {

    const [searchTerm, setSearchTerm] = useState('')


    const charactersItemsSearched = characters.filter((character) => {
        if (searchTerm == ""){
            return character
        } else if (character.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return character
        }
        
    }).map((character, index) => {
        return <Character character={character} key={index} onFavouriteToggle={onFavouriteToggle} />
    })

    

    return (
    <>
    <p>or search for it using search bar below</p>
    <input type='text' placeholder="Search for name" onChange={event => {setSearchTerm(event.target.value)} }/>

    
    
    {charactersItemsSearched}
    </>
    )

}

export default CharactersList;