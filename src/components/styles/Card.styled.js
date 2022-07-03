import styled from 'styled-components';

export const StyledCard = styled.article`
    background-color: rgba(0, 0, 0, 0.7);
    padding: 1rem 0rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    img {
        max-height: 220px;
    }

    p {
        color: white;
        text-align: center;
        font-weight: 600;
    }

    &:hover {
        transform: scale(1.02);
        box-shadow: #00bbf1 0px 3px 18px 0px, #00bbf1 0px 0px 0px 1px;
    }
`;
