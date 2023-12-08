'use client';

import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 3.5rem 3rem;
  display: flex;
  border-radius: 0.75rem;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;

export const CardTitle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > span:nth-child(0) {
    font-size: 2rem;
    font-weight: 500;
  }
  > span:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export const CardInfo = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardWord = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 400;
  & > span:first-child {
    color: #407f39;
    font-weight: 700;
  }
`;
