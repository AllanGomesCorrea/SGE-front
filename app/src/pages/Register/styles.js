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
    justify-content: center;
    align-items: center;
    padding: 20px;
`;
