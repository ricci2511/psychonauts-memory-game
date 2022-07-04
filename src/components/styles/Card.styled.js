import styled from 'styled-components';

export const StyledCard = styled.figure`
    background-color: rgba(0, 0, 0, 0.7);
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
        max-height: 220px;
        max-width: 150px;
    }

    figcaption {
        color: white;
        text-align: center;
        font-weight: 600;
    }

    &:hover {
        transform: scale(1.02);
        box-shadow: #00bbf1 0px 3px 18px 0px, #00bbf1 0px 0px 0px 1px;
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
