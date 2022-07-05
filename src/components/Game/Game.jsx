import React from 'react';
import Scores from './Scores/Scores';
import LoadingBrain from './LoadingBrain';
import CardsGrid from './CardsGrid';

const Game = ({ characters, handleCardClick, score, highScore, loading }) => {
    return (
        <>
            <Scores score={score} highScore={highScore} />
            {loading ? (
                <LoadingBrain />
            ) : (
                <CardsGrid
                    characters={characters}
                    handleCardClick={handleCardClick}
                />
            )}
        </>
    );
};

export default Game;
