import styled from 'styled-components';

export const StyledCardsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 1.25rem;
    margin-top: 4rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 568px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 368px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
