import React, { useEffect, useState } from 'react';
import { fetchRequest } from "../services/rickMortyAPI";


const RickMortyContainer = () => {
    const [loading, setLoading] = useState(true);
    const [ characters, setCharacters] = useState([]);

    useEffect(() => {
       const charactersData = async () => {
         const data = await fetchRequest();
         setCharacters(data);
         setLoading(false);
       } 
        charactersData();

    },[]); 

    return (
            <div>
                {loading? (<h1>Loading...</h1>)
                    :(
                    <div>
                        <h1 characters={characters}>HOLA</h1>
                    </div>
                )}           
            </div>
    )
}

export default RickMortyContainer;