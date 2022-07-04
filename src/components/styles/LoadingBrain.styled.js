import styled from 'styled-components';

export const LoadingBrainWrapper = styled.div`
    width: 100%;
    margin-top: 3rem;
    display: flex;
    justify-content: center;

    svg {
        width: 4rem;
        height: 4rem;
        animation: spin 1s infinite linear;

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }
`;
