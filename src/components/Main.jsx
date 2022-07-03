import React from 'react';
import Card from './Card';
import {
    CardsGrid,
    ScoreBox,
    ScoresWrapper,
    StyledMain,
} from './styles/Main.styled';

const Main = () => {
    return (
        <StyledMain>
            <ScoresWrapper>
                <ScoreBox>Score:</ScoreBox>
                <ScoreBox>Best score:</ScoreBox>
            </ScoresWrapper>
            <CardsGrid>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardsGrid>
        </StyledMain>
    );
};

export default Main;
