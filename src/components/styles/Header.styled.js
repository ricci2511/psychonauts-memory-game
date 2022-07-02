import styled from 'styled-components';

export const StyledHeader = styled.header`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    width: min(100%, 800px);
`;

export const Brain = styled.img`
    max-height: 6rem;
    max-width: 6rem;
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
