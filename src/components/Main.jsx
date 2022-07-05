import React, { useLayoutEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchCharacters } from '../utils/APIUtils';
import { capitalizeWords, shuffleArray } from '../utils/helpers';
import Card from './Card';
import Game from './Game';
import Modal from './Modal';
import { StyledMain } from './styles/Main.styled';

const Main = () => {
    const [characters, setCharacters] = useState([]);
    // stores the names of the clicked characters
    const [clickedCharacters, setClickedCharacters] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(true);
    const [currentDifficulty, setCurrentDifficulty] = useState({});
    const [isWinner, setIsWinner] = useState(false);

    useLayoutEffect(() => {
        const loadCharacters = async () => {
            try {
                setLoading(true);
                // amount of fetched characters varies depending on the difficulty
                const characters = await fetchCharacters(currentDifficulty);
                const charactersData = characters.map((char) => ({
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
    }, [currentDifficulty]);

    const resetRound = () => {
        setScore(0);
        setClickedCharacters([]);
    };

    const playRound = (charName) => {
        if (clickedCharacters.includes(charName)) return resetRound();
        setClickedCharacters((prevState) => [...prevState, charName]);
        const currScore = score + 1;
        setScore(currScore);
        if (currScore > highScore) setHighScore(currScore);
        if (currScore === currentDifficulty.maxScore) {
            resetRound();
            setIsWinner(true);
            setShowModal(true);
        }
    };

    const handleCardClick = (charName) => {
        setCharacters([...shuffleArray(characters)]);
        playRound(charName);
    };

    const handleDifficultyClick = (currentDifficulty) => {
        let maxScore = 0;
        if (currentDifficulty === 'Easy') {
            maxScore = 4;
        } else if (currentDifficulty === 'Medium') {
            maxScore = 8;
        } else {
            maxScore = 12;
        }
        setCurrentDifficulty({
            currentDifficulty: currentDifficulty,
            maxScore: maxScore,
        });
        setShowModal(false);
    };

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

    return (
        <StyledMain>
            {showModal ? (
                <Modal
                    changeDifficulty={handleDifficultyClick}
                    difficulty={currentDifficulty}
                    isWinner={isWinner}
                />
            ) : (
                <Game
                    characterCards={characterCards}
                    score={score}
                    highScore={highScore}
                    loading={loading}
                />
            )}
        </StyledMain>
    );
};

export default Main;
