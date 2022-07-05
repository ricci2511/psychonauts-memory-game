import React from 'react';
import { StyledCard } from '../../styles/Card.styled';

const Card = ({ name, image, handleClick }) => {
    const altText = `Character ${name}`;
    return (
        <StyledCard onClick={() => handleClick(name)}>
            <img src={image} alt={altText} />
            <figcaption>{name}</figcaption>
        </StyledCard>
    );
};

export default Card;
