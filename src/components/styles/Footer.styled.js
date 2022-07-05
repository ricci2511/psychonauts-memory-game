import styled from 'styled-components';

export const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.footer};
    font-weight: 700;
    font-size: 1.15rem;
    border-top: 2px solid black;
`;
