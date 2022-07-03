import React from 'react';
import { StyledCard } from './styles/Card.styled';
import cruller from '../assets/ford-cruller.png';

const Card = ({ name, image }) => {
    return (
        <StyledCard>
            <img src={image} alt="Character" />
            <p>{name}</p>
        </StyledCard>
    );
};

export default Card;
