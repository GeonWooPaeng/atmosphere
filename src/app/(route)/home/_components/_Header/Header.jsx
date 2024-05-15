'use client';

import logo_svg from '$/assets/images/logo.svg';
import menu_svg from '$/assets/images/menu.svg';
import user_svg from '$/assets/images/user.svg';

import Image from 'next/image';

import * as S from './Header.style';
import { useState } from 'react';

const Header = () => {
  const [user_modal_isopen, set_user_modal_isopen] = useState(false);

  function on_click_reload() {
    window.location.reload();
    window.scrollTo(0, 0);
  }

  function on_click_user() {
    set_user_modal_isopen(!user_modal_isopen);
  }

  return (
    <S.Container>
      <S.Logo onClick={on_click_reload}>
        <Image src={logo_svg} alt="로고" />
        <span>팽주팽</span>
      </S.Logo>
      <S.User onClick={on_click_user}>
        <Image src={menu_svg} alt="메뉴" />
        <Image src={user_svg} alt="user" />
      </S.User>
      {/* {user_modal_isopen && <C.UserModal />} */}
    </S.Container>
  );
};

export default Header;
