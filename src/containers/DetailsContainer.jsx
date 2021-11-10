import React, {useState, useEffect, useParams} from 'react';
import { fetchOneCharacter } from '../services/rickMortyAPI';


const DetailsContainer = (props) => {

    
    const [loading, setLoading] = useState(true);
    const [oneCharacter, setOneCharacter] = useState({});
    
    useEffect(() => {
        

        const characterData = async () => {
          const data = await fetchOneCharacter(props.match.params.id);
 
          setOneCharacter(data);
          setLoading(false);
         
        } 
        characterData();
     },[]); 
 

    return(
        <div>
        {
            loading
                ?
            <h1>Loading...</h1>
                :
            <div>
                <img src={oneCharacter.image} alt={oneCharacter.name} />
            </div>
        }
        </div>
    )

}

export default DetailsContainer;