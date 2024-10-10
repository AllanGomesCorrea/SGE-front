import * as S from './styles';


function Sidebar() {
  return (
    <S.SidebarContainer>
      <S.SidebarLink to="/register/products">Produtos</S.SidebarLink>
      <S.SidebarLink to="/register/suppliers">Fornecedores</S.SidebarLink>
      <S.SidebarLink to="/register/inflows">Entradas</S.SidebarLink>
      <S.SidebarLink to="/register/outflows">Saídas</S.SidebarLink>
    </S.SidebarContainer>
  );
}

export default Sidebar;
