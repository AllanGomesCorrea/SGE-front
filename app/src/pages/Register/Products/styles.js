import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Faz com que o contêiner ocupe toda a altura da tela */
`;

export const MainContent = styled.div`
    flex: 1; /* Faz com que este conteúdo ocupe o espaço disponível, empurrando o footer para o fim */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;
