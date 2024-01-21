'use client';

import * as S from './SearchTable.style';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useDebounce from '@/app/_utils/hooks/useDebounce.jsx';
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
  const total_search_data_arr = [
    {
      kind: '0',
      title: '차곡차곡',
      sub_title: '<12월 월간 차회 홍차>',
      location: '갤러리일지\n(서울특별시 종로구 윤보선길 38)',
      day: '11월 1일 ~ 30일 (일 월 휴무)',
      hour: '13:00 ~ 18:00',
      member_cnt: '4',
      price: '50,000',
    },
    {
      kind: '1',
      title: '차곡차곡2',
      sub_title: '<12월 월간 차회 홍차>',
      location: '갤러리일지2\n(서울특별시 종로구 윤보선길 38)',
      day: '12월 2일 ~ 30일 (일 월 휴무)',
      hour: '13:00 ~ 18:00',
      member_cnt: '1',
      price: '10,000',
    },
    {
      kind: '0',
      title: '길리2',
      sub_title: '<12월 월간 회 홍차>',
      location: '갤러리일지2\n(서울특별시 종로구 윤보선길 38)',
      day: '12월 2일 ~ 30일 (일 월 휴무)',
      hour: '13:00 ~ 18:00',
      member_cnt: '1',
      price: '10,000',
    },
    {
      kind: '2',
      title: '차곡차곡2',
      sub_title: '<12월 월간 차회 홍차>',
      location: '갤러리일지2\n(서울특별시 종로구 윤보선길 38)',
      day: '12월 2일 ~ 30일 (일 월 휴무)',
      hour: '13:00 ~ 18:00',
      member_cnt: '1',
      price: '10,000',
    },
    {
      kind: '2',
      title: '차곡차곡2',
      sub_title: '<12월 월간 차회 홍차>',
      location: '갤러리일지2\n(서울특별시 종로구 윤보선길 38)',
      day: '12월 2일 ~ 30일 (일 월 휴무)',
      hour: '13:00 ~ 18:00',
      member_cnt: '1',
      price: '10,000',
    },
  ];

  const [search_kind, set_search_kind] = useState('0');
  const [btn_data_arr, set_btn_data_arr] = useState([]); // kind 버튼으로만 setting
  const [search_data_arr, set_search_data_arr] = useState([]); // kind 버튼 + input setting

  const search_kind_arr = [
    // 0: 다회, 1: 원데이클래스, 2: 정규클래스, 3: 행사
    {
      kind: '0',
      name: '다회',
      check_src: meet_black_svg,
      uncheck_src: meet_gray_svg,
    },
    {
      kind: '1',
      name: '원데이 클래스',
      check_src: oneday_black_svg,
      uncheck_src: oneday_gray_svg,
    },
    {
      kind: '2',
      name: '정규 클래스',
      check_src: multiday_black_svg,
      uncheck_src: multiday_gray_svg,
    },
    {
      kind: '3',
      name: '행사',
      check_src: fair_black_svg,
      uncheck_src: fair_gray_svg,
    },
  ];

  useEffect(() => {
    const filter_search_data_arr = total_search_data_arr.filter(
      (search) => search.kind === '0',
    );
    set_btn_data_arr(filter_search_data_arr);
    set_search_data_arr(filter_search_data_arr);
  }, []);

  const btn_search = (selected_kind) => {
    //버튼을 이용하여 검색
    const filter_search_data_arr = total_search_data_arr.filter(
      (search) => search.kind === selected_kind,
    );

    set_search_kind(selected_kind);
    set_btn_data_arr(filter_search_data_arr);
    set_search_data_arr(filter_search_data_arr);
  };

  const keydown_search = (event) => {
    // 값을 입력 후 Enter 눌렀을 경우
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      input_search(event.target.value);
    }
  };

  const input_search = (input_text) => {
    const filter_search_data_arr = btn_data_arr.filter((search) => {
      return (
        search.title.includes(input_text) ||
        search.sub_title.includes(input_text) ||
        search.location.includes(input_text)
      );
    });
    console.log('>>>>>> ', input_text);
    set_search_data_arr(filter_search_data_arr);
  };

  return (
    <S.Container>
      <S.SearchHeaderContainer>
        <S.SearchBtnContainer>
          {search_kind_arr.map((search_obj) => (
            <S.SearchBtn
              key={search_obj.kind}
              onClick={() => btn_search(search_obj.kind)}
            >
              <input
                type="radio"
                checked={search_kind == search_obj.kind}
                readOnly
              />
              <Image
                src={
                  search_kind == search_obj.kind
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
          <S.SearchInput
            onChange={useDebounce((e) => input_search(e.target.value), 500)}
            onKeyDown={keydown_search}
          />
          <S.SearchInputBtn>
            <Image
              src={search_white_svg}
              width={18}
              height={18}
              alt="검색 이미지"
            />
          </S.SearchInputBtn>
        </S.SearchInputContainer>
      </S.SearchHeaderContainer>
      <S.GridContainer>
        {search_data_arr.map((info_obj, idx) => (
          <SearchCard key={idx} info_obj={info_obj} />
        ))}
      </S.GridContainer>
    </S.Container>
  );
};

export default SearchTable;
