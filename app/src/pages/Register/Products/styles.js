import styled from "styled-components";

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
  gap: 20px;
`;

export const HeaderAndSearchContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    gap: 100px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

// Novo estilo para o select
export const Select = styled.select`
  margin: 10px 0;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

// Contêiner para a paginação
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

// Botões de paginação
export const Button = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Indicador de página
export const PageIndicator = styled.span`
  margin: 0 10px;
  font-size: 16px;
`;
