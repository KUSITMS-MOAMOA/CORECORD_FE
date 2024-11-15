import styled from 'styled-components';

interface TextProps {
  $isDisabled?: boolean;
}

export const TabBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.375rem;
  width: 100%;
  padding: 0rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray50};
  z-index: 1000;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`;
export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const CenterText = styled.h6`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.gray900};
  line-height: 140%;
`;

export const Text = styled.p<TextProps>`
  font-size: 0.875rem;
  line-height: 145%;
  color: ${({ $isDisabled, theme }) => ($isDisabled ? theme.colors.gray300 : theme.colors.gray700)};
  cursor: pointer;
`;

export const LeftText = styled.h5`
  position: absolute;
  top: 0.875rem;
  left: 4rem;
  line-height: 140%;
`;
