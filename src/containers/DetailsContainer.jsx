import React, {useState, useEffect, useParams} from 'react';
import { Link } from 'react-router-dom';
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
                <p>{oneCharacter.name}</p>
                <p>{oneCharacter.status}</p>
                <p>{oneCharacter.species}</p>
                <p>Location: {oneCharacter.origin.name}</p>
                <Link to="/"><button>Go back </button></Link>
                
            </div>
        }
        </div>
    )

}

export default DetailsContainer;