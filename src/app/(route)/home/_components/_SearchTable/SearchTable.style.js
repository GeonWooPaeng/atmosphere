'use client';

import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 3%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SearchHeaderContainer = styled.div`
  position: sticky;
  top: 6.1rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
`;

//검색에 따른 버튼(박람회 및 행사, 모임, MY)
export const SearchBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const SearchBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #717171;
  gap: 0.5rem;
  > span {
    padding-bottom: 0.6rem;
  }
  > input {
    display: none;
  }
  > input[type='radio']:checked ~ span {
    color: black;
    border-bottom: 2px solid black;
  }
  cursor: pointer;
`;

// 검색 입력 부분
export const SearchInputContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 40rem;
  margin-left: 2.5rem;
  padding: 1rem 2rem;

  font-size: 1.2rem;
  outline: none;
  border-radius: 2.5rem;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow:
    0px 4px 12px 0px rgba(0, 0, 0, 0.05),
    0px 1px 2px 0px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
`;

export const SearchInputBtn = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  padding: 0.625rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: #407f39;
  right: 3rem;
  cursor: pointer;
`;

// grid 부분
export const GridContainer = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  grid-template-rows: auto;

  @media screen and (max-width: 50rem) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;
