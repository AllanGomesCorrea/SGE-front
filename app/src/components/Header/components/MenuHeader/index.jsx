import * as S from "./styles";

function MenuHeader({ text, onClick, active }) {
  return (
    <S.MenuHeader onClick={onClick} active={active}>
      {text}
    </S.MenuHeader>
  );
}

export default MenuHeader;
