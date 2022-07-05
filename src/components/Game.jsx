import React from 'react';
import LoadingBrain from './LoadingBrain';
import { CardsGrid, ScoreBox, ScoresWrapper } from './styles/Main.styled';

const Game = ({ characterCards, score, highScore, loading }) => {
    return (
        <>
            <ScoresWrapper>
                <ScoreBox>Score: {score}</ScoreBox>
                <ScoreBox>Best score: {highScore}</ScoreBox>
            </ScoresWrapper>
            {loading ? (
                <LoadingBrain />
            ) : (
                <CardsGrid>{characterCards}</CardsGrid>
            )}
        </>
    );
};

export default Game;
