import styled from 'styled-components';

const lightBlue = ({ theme }) => theme.colors.cardHover;

export const StyledModal = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    height: 600px;
    width: 100%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: ${lightBlue} 0px 4px 8px -2px, ${lightBlue} 0px 0px 0px 1px;

    /* winner text */
    p {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 1.25rem;
        color: white;
        font-weight: 700;
    }
`;

export const ModalButton = styled.button`
    width: min(90%, 20rem);
    align-self: center;
    background-color: ${({ theme }) => theme.colors.darkerPink};
    border-radius: 12px;
    border: none;
    cursor: pointer;
    outline-offset: 4px;

    .btn-front {
        display: block;
        padding: 1rem 2rem;
        border-radius: inherit;
        background-color: ${({ theme }) => theme.colors.lighterPink};
        font-size: 1.25rem;
        font-weight: 700;
        color: white;
        transform: translateY(-2px);
        will-change: transform;
        transition: transform 250ms;
    }

    &:hover .btn-front {
        transform: translateY(-6px);
        transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    }

    &:active .btn-front {
        transform: translateY(-2px);
        transition: transform 34ms;
    }
`;
