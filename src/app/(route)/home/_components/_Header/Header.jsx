import logo_svg from '$/assets/images/logo.svg';
import menu_svg from '$/assets/images/menu.svg';
import user_svg from '$/assets/images/user.svg';

import Image from 'next/image';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <Image src={logo_svg} alt="로고" />
        <span>GREEN CUP</span>
      </S.Logo>
      <S.User>
        <Image src={menu_svg} alt="메뉴" />
        <Image src={user_svg} alt="user" />
      </S.User>
    </S.Container>
  );
};

export default Header;
