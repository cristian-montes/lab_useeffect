import React from 'react'

const Character = ({id, name, gender, image, origin, status, species}) => {
    return(
        <div>
            <img src={image} alt={id}/>
            <p>{name}</p>
        </div>
    )
}

export default Character;