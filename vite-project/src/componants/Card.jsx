// /C:/Users/DELL/Desktop/pokemon_projects/vite-project/src/componants/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ name, image, types }) => {
    ;
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <h2 className="card-name">{name}</h2>
            <p className="card-type">{types.map(currType => currType.type.name).join(',')}</p>
        </div>
    );
};

export default Card;