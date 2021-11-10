import React from 'react'
import Character from './Character';
import PropTypes from 'prop-types'


const CharacterList = ({loading, characters}) => {
    return(
        <div>
            {
                loading
                    ?
                 <h1>Loading...</h1>
                    :
                 <ul aria-label="character-list">
                    {characters.map((character) =>(
                        <li key={character.id}>
                            <Character
                                id={character.id}
                                name={character.name}
                                gender={character.gender}
                                image={character.image}
                                origin={character.origin}
                                status={character.status}
                                species={character.species}
                            />
                        </li>
                    ))}
                 </ul>
            }
        </div>
    )
}

CharacterList.propTypes = { 
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}


export default CharacterList;