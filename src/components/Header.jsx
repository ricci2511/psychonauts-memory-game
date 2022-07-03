import React from 'react';
import logo from '../assets/logo.png';
import brain from '../assets/brain.webp';
import { Brain, Logo, StyledHeader } from './styles/Header.styled';

const Header = () => {
    return (
        <StyledHeader>
            <Logo src={logo} alt="psychonauts memory logo" />
            <Brain src={brain} alt="psychonauts brain" />
        </StyledHeader>
    );
};

export default Header;
