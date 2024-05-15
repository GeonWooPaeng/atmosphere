'use client';

import styled from 'styled-components';

// header 전체
export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  padding: 1.5rem 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

// 로고 부분
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;

  > span {
    color: #407f39;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.0625rem;
  }
`;

// user 부분
export const User = styled.div`
  padding: 0.5rem 0.5625rem 0.5rem 0.9375rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  border-radius: 1.875rem;
  border: 1px solid #ddd;
  cursor: pointer;
`;
