'use client';

import * as S from './SearchTable.style';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import fair_black_svg from '$/assets/images/fair_black.svg';
import fair_gray_svg from '$/assets/images/fair_gray.svg';
import meet_black_svg from '$/assets/images/meet_black.svg';
import meet_gray_svg from '$/assets/images/meet_gray.svg';
import oneday_gray_svg from '$/assets/images/oneday_gray.svg';
import oneday_black_svg from '$/assets/images/oneday_black.svg';
import multiday_gray_svg from '$/assets/images/multiday_gray.svg';
import multiday_black_svg from '$/assets/images/multiday_black.svg';
import search_white_svg from '$/assets/images/search_white.svg';
import SearchCard from '../_SearchCard/SearchCard.jsx';

const SearchTable = () => {
  const [search_name, set_search_name] = useState('다회');

  const search_kind_arr = [
    { name: '다회', check_src: meet_black_svg, uncheck_src: meet_gray_svg },
    {
      name: '원데이 클래스',
      check_src: oneday_black_svg,
      uncheck_src: oneday_gray_svg,
    },
    {
      name: '정규 클래스',
      check_src: multiday_black_svg,
      uncheck_src: multiday_gray_svg,
    },
    {
      name: '행사',
      check_src: fair_black_svg,
      uncheck_src: fair_gray_svg,
    },
  ];

  const search_data_arr = [
    {
      title: '차곡차곡',
      sub_title: '<12월 월간 차회 홍차>',
      location: '갤러리일지\n(서울특별시 종로구 윤보선길 38)',
      day: '11월 1일 ~ 30일 (일 월 휴무)',
      hour: '13:00 ~ 18:00',
      member_cnt: '4',
      price: '50,000',
    },
    {
      title: '차곡차곡2',
      sub_title: '<12월 월간 차회 홍차>',
      location: '갤러리일지2\n(서울특별시 종로구 윤보선길 38)',
      day: '12월 2일 ~ 30일 (일 월 휴무)',
      hour: '13:00 ~ 18:00',
      member_cnt: '1',
      price: '10,000',
    },
    {
      title: '차곡차곡2',
      sub_title: '<12월 월간 차회 홍차>',
      location: '갤러리일지2\n(서울특별시 종로구 윤보선길 38)',
      day: '12월 2일 ~ 30일 (일 월 휴무)',
      hour: '13:00 ~ 18:00',
      member_cnt: '1',
      price: '10,000',
    },
    {
      title: '차곡차곡2',
      sub_title: '<12월 월간 차회 홍차>',
      location: '갤러리일지2\n(서울특별시 종로구 윤보선길 38)',
      day: '12월 2일 ~ 30일 (일 월 휴무)',
      hour: '13:00 ~ 18:00',
      member_cnt: '1',
      price: '10,000',
    },
    {
      title: '차곡차곡2',
      sub_title: '<12월 월간 차회 홍차>',
      location: '갤러리일지2\n(서울특별시 종로구 윤보선길 38)',
      day: '12월 2일 ~ 30일 (일 월 휴무)',
      hour: '13:00 ~ 18:00',
      member_cnt: '1',
      price: '10,000',
    },
  ];
  return (
    <S.Container>
      <S.SearchBtnContainer>
        {search_kind_arr.map((search_obj) => (
          <S.SearchBtn
            key={search_obj.name}
            onClick={() => set_search_name(search_obj.name)}
          >
            <input
              type="radio"
              checked={search_name == search_obj.name}
              readOnly
            />
            <Image
              src={
                search_name == search_obj.name
                  ? search_obj.check_src
                  : search_obj.uncheck_src
              }
              width={35}
              height={35}
              alt="검색 이미지"
            />
            <span>{search_obj.name}</span>
          </S.SearchBtn>
        ))}
      </S.SearchBtnContainer>
      <S.SearchInputContainer>
        <S.SearchInput />
        <S.SearchInputBtn>
          <Image
            src={search_white_svg}
            width={18}
            height={18}
            alt="검색 이미지"
          />
        </S.SearchInputBtn>
      </S.SearchInputContainer>
      <S.GridContainer>
        {search_data_arr.map((info_obj, idx) => (
          <SearchCard key={idx} info_obj={info_obj} />
        ))}
      </S.GridContainer>
    </S.Container>
  );
};

export default SearchTable;
