import React, { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import { fetchRequest } from "../services/rickMortyAPI";


const RickMortyContainer = () => {
    const [loading, setLoading] = useState(true);
    const [ characters, setCharacters] = useState([]);

    useEffect(() => {
       const charactersData = async () => {
         const data = await fetchRequest();

         setCharacters(data);
         setLoading(false);
         console.log(characters)
       } 
       charactersData();

    },[]); 

    return (
            <div>
                {loading? (<h1>Loading...</h1>)
                    :(
                    <div>
                        <CharacterList
                            loading={loading}
                            characters={characters}
                        />
                    </div>
                )}           
            </div>
    )
}

export default RickMortyContainer;