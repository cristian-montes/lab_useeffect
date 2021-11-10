import React from 'react'
import { Link } from 'react-router-dom';

const Character = ({id, name, gender, image, origin, status, species}) => {
    return(
        <div>
            <Link to={`/details/${id}`}>
            <img src={image} alt={id}/>
            <p>{name}</p>
            </Link>
        </div>
    )
}

export default Character;