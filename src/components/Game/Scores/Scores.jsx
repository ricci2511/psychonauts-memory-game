import React from 'react';
import { ScoreBox, ScoresWrapper } from '../../styles/Scores.styled';

const Scores = ({ score, highScore }) => {
    return (
        <ScoresWrapper>
            <ScoreBox>Score: {score}</ScoreBox>
            <ScoreBox>Best score: {highScore}</ScoreBox>
        </ScoresWrapper>
    );
};

export default Scores;
