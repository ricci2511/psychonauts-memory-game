import styled from 'styled-components';

const cardHover = ({ theme }) => theme.colors.cardHover;

export const StyledCard = styled.figure`
    background-color: ${({ theme }) => theme.colors.transparentBlack};
    padding: 1rem 0rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: scale 500ms ease;

    img {
        max-height: ${({ theme }) => theme.sizes.imgHeight};
        max-width: ${({ theme }) => theme.sizes.imgWidth};
    }

    figcaption {
        color: white;
        text-align: center;
        font-weight: 600;
    }

    &:hover {
        transform: scale(1.02);
        box-shadow: ${cardHover} 0px 3px 18px 0px, ${cardHover} 0px 0px 0px 1px;
    }

    @keyframes scale {
        0% {
            transform: scale(0);
        }

        100% {
            transform: scale(1);
        }
    }
`;
