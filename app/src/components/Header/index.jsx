import MenuHeader from "./components/MenuHeader";
import * as S from "./styles";
import { useState } from 'react';

function Header() {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // Altera o menu ativo
    console.log(`Você clicou em: ${menu}`);
  };

  return (
    <S.Header>
      <MenuHeader 
        text={'Home'} 
        onClick={() => handleMenuClick('Home')} 
        active={activeMenu === 'Home'}
      />
      <MenuHeader 
        text={'Cadastro'} 
        onClick={() => handleMenuClick('Cadastro')} 
        active={activeMenu === 'Cadastro'}
      />
      <MenuHeader 
        text={'Recompensas'} 
        onClick={() => handleMenuClick('Recompensas')} 
        active={activeMenu === 'Recompensas'}
      />
      <MenuHeader 
        text={'Campanhas'} 
        onClick={() => handleMenuClick('Campanhas')} 
        active={activeMenu === 'Campanhas'}
      />
      <MenuHeader 
        text={'Taxas'} 
        onClick={() => handleMenuClick('Taxas')} 
        active={activeMenu === 'Taxas'}
      />
    </S.Header>
  );
}

export default Header;
