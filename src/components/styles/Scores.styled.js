import styled from 'styled-components';

export const ScoresWrapper = styled.section`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
`;

export const ScoreBox = styled.div`
    width: min(100%, 12rem);
    background-color: ${({ theme }) => theme.colors.transparentBlack};
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.psychonautsYellow};
    color: white;
    padding: 0.75rem;
    text-align: center;
    font-weight: 700;
`;
