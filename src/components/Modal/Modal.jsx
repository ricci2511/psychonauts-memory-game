import React from 'react';
import { ModalButton, StyledModal } from '../styles/Modal.styled';

const Modal = ({ changeDifficulty, difficulty, isWinner }) => {
    return (
        <StyledModal>
            {isWinner && (
                <p>
                    Congrats, you've beaten the game on{' '}
                    {difficulty.currentDifficulty} difficulty!
                </p>
            )}
            <ModalButton onClick={() => changeDifficulty('Easy')}>
                <span className="btn-front">Easy</span>
            </ModalButton>
            <ModalButton onClick={() => changeDifficulty('Medium')}>
                <span className="btn-front">Medium</span>
            </ModalButton>
            <ModalButton onClick={() => changeDifficulty('Hard')}>
                <span className="btn-front">Hard</span>
            </ModalButton>
        </StyledModal>
    );
};

export default Modal;
