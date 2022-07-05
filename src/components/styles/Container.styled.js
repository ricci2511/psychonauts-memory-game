import styled from 'styled-components';

export const Container = styled.div`
    width: ${({ theme }) => theme.sizes.containerWidth};
    max-width: 100%;
    margin: 0 auto;
    padding: 0 1.2rem;
    padding-bottom: 6rem;
`;
