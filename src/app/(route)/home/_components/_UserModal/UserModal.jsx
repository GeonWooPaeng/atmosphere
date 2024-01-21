import instagram_svg from '$/assets/images/instagram.svg';
import blog_svg from '$/assets/images/blog.svg';

import * as S from './UserModal.style';
import Image from 'next/image';

const UserModal = () => {
  return (
    <S.ModalContainer>
      <S.ModalHeader>
        제작자 정보 <br /> (로그인 부분을 제작 예정입니다.)
      </S.ModalHeader>
      <S.ModalInfoWrap>
        <S.ModalInfo
          href="https://www.instagram.com/paeng_._/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={instagram_svg} alt="인스타그램" width={32} height={32} />
          <div>인스타그램</div>
        </S.ModalInfo>
        <S.ModalInfo
          href="https://gwpaeng.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={blog_svg} alt="블로그" width={32} height={32} />
          <div>블로그</div>
        </S.ModalInfo>
      </S.ModalInfoWrap>
    </S.ModalContainer>
  );
};

export default UserModal;
