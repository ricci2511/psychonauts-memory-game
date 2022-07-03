import React from 'react';
import { StyledCard } from './styles/Card.styled';

const Card = ({ name, image }) => {
    const altText = `Character ${name}`;
    return (
        <StyledCard>
            <img src={image} alt={altText} />
            <p>{name}</p>
        </StyledCard>
    );
};

export default Card;
