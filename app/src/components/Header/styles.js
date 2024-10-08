import styled from 'styled-components';

export const Header = styled.div`
  width: calc(100% - 50px);
  height: 10vh;
  padding-left: 2vw;
  padding-right: 2vw;
  background: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.10);

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 2vw;

  /* Media queries para ajustar o layout em dispositivos móveis */
  @media (max-width: 768px) {
    height: 15vh; /* Aumenta a altura em telas menores */
    padding-left: 5vw;
    padding-right: 5vw;
  }

  @media (max-width: 480px) {
    height: 20vh;
    padding-left: 10vw;
    padding-right: 10vw;
  }
`;
