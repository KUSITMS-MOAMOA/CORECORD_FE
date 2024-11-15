import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 3.75rem;
  padding: 0.875rem 0rem;
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const Title = styled.h6`
  position: absolute;
  top: 1.1875rem;
  left: 50%;
  transform: translateX(-50%);
  line-height: 140%;
  color: ${({ theme }) => theme.colors.gray900};
`;
