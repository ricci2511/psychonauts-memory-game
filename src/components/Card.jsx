import React from 'react';
import { StyledCard } from './styles/Card.styled';
import cruller from '../assets/ford-cruller.png';

const Card = () => {
    return (
        <StyledCard>
            <img src={cruller} alt="Character Ford Cruller" />
            <p>Ford Cruller</p>
        </StyledCard>
    );
};

export default Card;
