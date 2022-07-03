import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchCharacters } from '../utils/APIUtils';
import { shuffleArray } from '../utils/helpers';
import Card from './Card';
import {
    CardsGrid,
    ScoreBox,
    ScoresWrapper,
    StyledMain,
} from './styles/Main.styled';

const Main = () => {
    const [characters, setCharacters] = useState([]);
    const [clickedCharacters, setClickedCharacters] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        const loadCharacters = async () => {
            const characters = await fetchCharacters();
            const charactersData = characters.map((char) => ({
                name: char.name,
                image: char.img,
            }));
            setCharacters(shuffleArray(charactersData));
        };

        loadCharacters().catch(console.error);
    }, []);

    const resetGame = () => {
        setScore(0);
        setClickedCharacters([]);
    };

    const handleCardClick = (charName) => {
        setCharacters([...shuffleArray(characters)]);

        if (clickedCharacters.includes(charName)) return resetGame();

        const currScore = score + 1;
        setScore(currScore);
        if (currScore > highScore) setHighScore(currScore);
        setClickedCharacters((prevState) => [...prevState, charName]);
    };

    const characterCards = characters.map((char) => (
        <Card
            key={uuidv4()}
            name={char.name}
            image={char.image}
            handleClick={handleCardClick}
        />
    ));

    return (
        <StyledMain>
            <ScoresWrapper>
                <ScoreBox>Score: {score}</ScoreBox>
                <ScoreBox>Best score: {highScore}</ScoreBox>
            </ScoresWrapper>
            <CardsGrid>{characterCards}</CardsGrid>
        </StyledMain>
    );
};

export default Main;
