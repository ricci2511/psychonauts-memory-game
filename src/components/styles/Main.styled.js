import styled from 'styled-components';

export const StyledMain = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    gap: 1.25rem;
    margin-top: 4rem;

    @media (max-width: 540px) {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
`;
