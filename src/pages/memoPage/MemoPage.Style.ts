import styled from 'styled-components';
import { Input as OriginalInput } from '@components/common/input/Input';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 14.5rem;
  background-image: url('/images/HeaderImage.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.button`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  top: 2.8125rem;
  left: 1.25rem;
`;

export const Title = styled.h4`
  line-height: 135%;
  margin-top: 125px;
  margin-left: 1.25rem;
  white-space: pre-wrap;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  font-weight: 400;
  line-height: 145%;
  margin-left: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  padding: 0 1.25rem;
  padding-bottom: 5rem;
  position: relative;
`;

export const Input = styled(OriginalInput)`
  width: 95%;
  margin-bottom: 0rem;
  border: none;
  &:focus {
    border: none;
  }
`;

export const Line = styled.div`
  width: 95%;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray50};
  align-self: center;
  margin-bottom: 0.625rem;
`;

export const Content = styled.textarea`
  font-family: 'Pretendard';
  font-size: 1rem;
  font-weight: 400;
  line-height: 145%;
  width: 95%;
  min-height: 10rem;
  border: none;
  outline: none;
  padding: 0.5rem;
  resize: none;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    font-size: 1rem;
    font-weight: 400;
    line-height: 145%;
  }
`;

export const Count = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.gray500};
  width: 95%;
  align-self: flex-end;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 1.25rem;
  left: 1.25rem;
  right: 1.25rem;
  width: calc(100% - 2.5rem);
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

export const Icon = styled.svg`
  width: 38px;
  height: 38px;
`;

