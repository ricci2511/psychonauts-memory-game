import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import {
    CardsGrid,
    ScoreBox,
    ScoresWrapper,
    StyledMain,
} from './styles/Main.styled';

const Main = () => {
    const API_URL =
        'https://psychonauts-api.herokuapp.com/api/characters?limit=12';

    const [characters, setCharacters] = useState([]);
    const [score, setScore] = useState(0);

    const fetchCharacters = async () => {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        fetchCharacters()
            .then((data) => {
                const charactersData = data.map((char) => ({
                    name: char.name,
                    image: char.img,
                }));
                setCharacters(charactersData);
            })
            .catch(console.error);
    }, []);

    const characterCards = characters.map((char) => (
        <Card key={uuidv4()} name={char.name} image={char.image} />
    ));

    return (
        <StyledMain>
            <ScoresWrapper>
                <ScoreBox>Score: {score}</ScoreBox>
                <ScoreBox>Best score: {score}</ScoreBox>
            </ScoresWrapper>
            <CardsGrid>{characterCards}</CardsGrid>
        </StyledMain>
    );
};

export default Main;
