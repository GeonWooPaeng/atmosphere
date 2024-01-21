'use client';

import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 15rem;
  height: 20rem;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-radius: 0.75rem;
  border: 1px solid #ddd;
  background: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 5rem;
  right: 3%;
  z-index: 3;
`;

export const ModalHeader = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ModalInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
`;

export const ModalInfo = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  cursor: pointer;
`;
