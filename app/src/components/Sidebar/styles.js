import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const SidebarContainer = styled.div`
    width: 200px;
    height: calc(100vh - 25vh); /* Altura dinâmica para evitar sobreposição */
    background-color: ${colors.darkBlue};
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 13px;
    padding-top: 50px;
    padding-left: 2vw;
    position: sticky; /* Fixa o elemento quando você rola a página */
    top: 10vh; /* Define a distância do topo, abaixo do Header */
`;

export const SidebarLink = styled(Link)`
    color: ${colors.white}; /* Adicione o ponto e vírgula aqui */
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    cursor: pointer;
    font-family: ${fonts.text1};
    
    &:hover {
        color: ${colors.white}; /* Adiciona a cor ao passar o mouse */
    }

    &.active {
        color: ${colors.white}; /* Mantém a cor branca quando ativo */
    }
`;

