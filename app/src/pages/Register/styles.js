import styled from 'styled-components';
import colors from '../../styles/colors';

export const RegisterContainer = styled.div`
    width: calc(100% - 50px);
    height: 15vh;
    padding-left: 2vw;
    padding-right: 2vw;
    background-color: ${colors.darkBlue};

    display: flex;
    flex-direction: row;
    justify-content: flex-end; 
    align-items: center;
    gap: 2vw;

    /* Media queries para ajustar o layout em dispositivos móveis */
    @media (max-width: 768px) {
        height: 15vh;
        padding-left: 5vw;
        padding-right: 5vw;
        flex-direction: column; /* Coloca as colunas em linha vertical em telas menores */
        justify-content: flex-start;
    }

    @media (max-width: 480px) {
        height: 20vh;
        padding-left: 10vw;
        padding-right: 10vw;
    }
`;