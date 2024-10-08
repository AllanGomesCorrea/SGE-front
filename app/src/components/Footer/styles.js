import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const FooterContainer = styled.div`
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

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
`;

export const Title = styled.div`
    color: ${colors.white};
    font-size: 24px;
    font-family: ${fonts.text1};
    font-weight: 300;
    line-height: 36px;
    cursor: pointer;
`;

export const Text = styled.div`
    color: ${colors.white};
    font-size: 18px;
    font-family: ${fonts.text1};
    line-height: 27px;
    cursor: pointer;
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 10px; 
    margin-top: 5px; 
`;

export const SocialLink = styled.a`
    color: ${colors.white}; 
    font-size: 24px; 
    text-decoration: none;
`;
