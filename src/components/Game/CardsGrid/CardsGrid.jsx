import React from 'react';
import { StyledCardsGrid } from '../../styles/CardsGrid.styled';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

const CardsGrid = ({ characters, handleCardClick }) => {
    /**
     * generating a new key for every rerender to force the render on every array item
     * Reason: if only some items rerender only those items will have the scale animation
     */
    const characterCards = characters.map((char) => (
        <Card
            key={uuidv4()}
            name={char.name}
            image={char.image}
            handleClick={handleCardClick}
        />
    ));

    return <StyledCardsGrid>{characterCards}</StyledCardsGrid>;
};

export default CardsGrid;
