import MenuHeader from "./components/MenuHeader";
import * as S from "./styles";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const menuMap = {
  '/': 'Home',
  '/register': 'Cadastro',
  '/recompensas': 'Recompensas',
  '/campanhas': 'Campanhas',
  '/taxas': 'Taxas'
};


function Header() {
  const [activeMenu, setActiveMenu] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveMenu(menuMap[location.pathname] || '');
  }, [location.pathname]);

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <S.Header>
      {Object.entries(menuMap).map(([path, label]) => (
        <MenuHeader
          key={label}
          text={label}
          onClick={() => handleMenuClick(path)}
          active={activeMenu === label}
        />
      ))}
    </S.Header>
  );
}

export default Header;
