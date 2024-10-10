import styled from 'styled-components';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const ModalButton = styled.button`
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    font-family: ${fonts.text1};
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    position: absolute;
    right: 25px; /* Alinha o botão à direita */
    margin-top: 35px;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${colors.lightBlue}; /* Altera a cor ao passar o mouse */
    }
`;
