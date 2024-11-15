import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
`;

export const SelectBox = styled.div<{ open: boolean }>`
  position: relative;
  width: 100%;
  height: 3rem;
  padding: 0.75rem 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid
    ${(props) => (props.open ? props.theme.colors.blue200 : props.theme.colors.gray50)}; // pr 머지 되면 이거 바꿔야함!
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  line-height: 145%;
`;

export const SelectText = styled.span<{ $hasValue: boolean }>`
  color: ${(props) => (props.$hasValue ? props.theme.colors.gray900 : props.theme.colors.gray300)};
`;

export const Icon = styled.img`
  position: absolute;
  top: 0.75rem;
  right: 0.5rem;
`;

export const Option = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0.75rem 0.625rem;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.blue200};
`;

export const Text = styled.div`
  font-size: 1rem;
  line-height: 145%;
`;
