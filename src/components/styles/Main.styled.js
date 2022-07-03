import styled from 'styled-components';

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 2.5rem;
`;

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    gap: 1.25rem;
    margin-top: 4rem;

    @media (max-width: 540px) {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
`;

export const ScoresWrapper = styled.article`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 1rem;
`;

export const ScoreBox = styled.div`
    width: min(100%, 12rem);
    background: rgba(24, 41, 11, 0.58);
    border-radius: 5px;
    border: 2px solid yellow;
    color: white;
    padding: 0.75rem;
    text-align: center;
    font-weight: 700;
`;
