import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

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

Character.propTypes ={
    id:  PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    image:  PropTypes.string.isRequired,
}

export default Character;