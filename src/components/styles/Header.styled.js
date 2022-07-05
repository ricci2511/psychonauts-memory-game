import styled from 'styled-components';

export const StyledHeader = styled.header`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const Logo = styled.img`
    width: ${({ theme }) => theme.sizes.logoWidth};
`;

export const Brain = styled.img`
    max-height: 6rem;
    max-width: 6rem;
`;
