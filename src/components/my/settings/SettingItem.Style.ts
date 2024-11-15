import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-weight: 500;
`;

export const Text = styled.span`
  font-size: 0.875rem;
  color: #070707;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
