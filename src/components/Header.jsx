import React from 'react';
import logo from '../assets/logo.png';
import brain from '../assets/brain.webp';
import {
    Brain,
    Logo,
    ScoreBox,
    ScoresWrapper,
    StyledHeader,
} from './styles/Header.styled';

const Header = () => {
    return (
        <StyledHeader>
            <Logo src={logo} alt="psychonauts memory logo" />
            <Brain src={brain} alt="psychonauts brain" />
            <ScoresWrapper>
                <ScoreBox>Score:</ScoreBox>
                <ScoreBox>Best score:</ScoreBox>
            </ScoresWrapper>
        </StyledHeader>
    );
};

export default Header;
