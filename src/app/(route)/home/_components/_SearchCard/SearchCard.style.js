'use client';

import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 3rem 2rem;

  display: flex;
  gap: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateY(-0.25rem);
    cursor: pointer;
  }
`;

export const CardTitle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;

  & > span:nth-child(0) {
    font-size: 2.5rem;
    font-weight: 800;
  }
  & > span:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export const CardInfo = styled.div`
  flex-grow: 2;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;

  & > div:last-child {
    display: flex;
    justify-content: space-between;
  }
`;

export const CardWord = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  font-weight: 300;
  white-space: pre-wrap;

  & > span:first-child {
    color: #407f39;
    font-size: 1.25rem;
    font-weight: 600;
    white-space: nowrap;
  }
`;
