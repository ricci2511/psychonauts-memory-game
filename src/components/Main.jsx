import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchCharacters } from '../utils/APIUtils';
import { capitalizeWords, shuffleArray } from '../utils/helpers';
import Card from './Card';
import LoadingBrain from './LoadingBrain';
import {
    CardsGrid,
    ScoreBox,
    ScoresWrapper,
    StyledMain,
} from './styles/Main.styled';

const Main = () => {
    const [characters, setCharacters] = useState([]);
    // stores the names of the clicked characters
    const [clickedCharacters, setClickedCharacters] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCharacters = async () => {
            try {
                const characters = await fetchCharacters();
                const charactersData = characters.map((char) => ({
                    id: uuidv4(),
                    name: capitalizeWords(char.name),
                    image: char.img,
                }));
                setCharacters(shuffleArray(charactersData));
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadCharacters();
    }, []);

    const resetGame = () => {
        setScore(0);
        setClickedCharacters([]);
    };

    const handleCardClick = (charName) => {
        setCharacters([...shuffleArray(characters)]);
        if (clickedCharacters.includes(charName)) return resetGame();
        setClickedCharacters((prevState) => [...prevState, charName]);
        const currScore = score + 1;
        setScore(currScore);
        if (currScore > highScore) setHighScore(currScore);
    };

    const characterCards = characters.map((char) => (
        <Card
            key={char.id}
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
            {loading && <LoadingBrain />}
            <CardsGrid>{characterCards}</CardsGrid>
        </StyledMain>
    );
};

export default Main;
