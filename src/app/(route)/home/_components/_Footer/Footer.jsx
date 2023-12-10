import instagram_svg from '$/assets/images/instagram.svg';
import blog_svg from '$/assets/images/blog.svg';

import Image from 'next/image';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.Container>
      <S.CompanyInfo>© 2023 Paeng, Inc.</S.CompanyInfo>
      <S.Link>
        <span>KOREA</span>
        <Image src={instagram_svg} alt="인스타그램" width={24} height={24} />
        <Image src={blog_svg} alt="블로그" width={24} height={24} />
      </S.Link>
    </S.Container>
  );
};

export default Footer;
