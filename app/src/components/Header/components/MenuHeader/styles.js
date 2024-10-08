import styled from 'styled-components';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const MenuHeader = styled.div`
  color: ${props => props.active ? colors.lightBlue : colors.darkBlue};
  font-size: 20px;
  font-family: ${fonts.text1};
  font-weight: 500;
  text-transform: uppercase;
  line-height: 27.43px;
  cursor: pointer;

  /* Estilo de hover */
  &:hover {
    color: ${colors.lightBlue}; 
  }
`;
