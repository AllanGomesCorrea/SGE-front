import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: ${colors.white};
    padding: 20px;
    border-radius: 8px;
    width: 600px;
    max-width: 100%;
    transform: translateY(0%) translateX(15%); /* Mover para cima */
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px; /* Espaçamento entre o header e o conteúdo */
`;

export const ModalTitle = styled.div`
    color: ${colors.darkBlue};
    font-family: ${fonts.text1};
    font-size: 27px;
    font-weight: 600;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: ${colors.darkBlue};
`;

export const ModalBody = styled.div`
    padding-top: 0px;
`;
