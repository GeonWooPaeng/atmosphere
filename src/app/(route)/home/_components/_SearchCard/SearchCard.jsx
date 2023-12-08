import * as S from './SearchCard.style.js';

const SearchCard = ({ info_obj }) => {
  return (
    <S.CardContainer>
      <S.CardTitle>
        <span>{info_obj.title}</span>
        <span>{info_obj.sub_title}</span>
      </S.CardTitle>
      <S.CardInfo>
        <S.CardWord>
          <span>장소:</span>
          <span>{info_obj.location}</span>
        </S.CardWord>
        <S.CardWord>
          <span>요일:</span>
          <span>{info_obj.day}</span>
        </S.CardWord>
        <S.CardWord>
          <span>시간:</span>
          <span>{info_obj.hour}</span>
        </S.CardWord>
        <div>
          <S.CardWord>
            <span>인원:</span>
            <span>{info_obj.member_cnt}명</span>
          </S.CardWord>
          <S.CardWord>
            <span>참가비:</span>
            <span>{info_obj.price}</span>
          </S.CardWord>
        </div>
      </S.CardInfo>
    </S.CardContainer>
  );
};

export default SearchCard;
