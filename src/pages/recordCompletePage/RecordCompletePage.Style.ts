import styled from 'styled-components';
import { Input as OriginalInput } from '@/components/common/input/Input';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 12.6875rem;
  background-image: url('/images/HeaderImage.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Title = styled.h4`
  margin-top: 6rem;
  margin-bottom: 0.75rem;
  margin-left: 3rem;
`;

export const SubTitle = styled.h6`
  line-height: 140%;
  margin-bottom: 1rem;
  margin-left: 3rem;
  white-space: pre-line;
`;

export const TextArea = styled.textarea`
  font-family: 'Pretendard';
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  border: none;
  resize: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  &:focus {
    outline: none;
  }
`;

export const Line = styled.div`
  width: 95%;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray50};
  align-self: center;
  margin-bottom: 0.625rem;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  font-weight: 400;
  line-height: 145%;
  margin-left: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 1.25rem;
  left: 1.25rem;
  right: 1.25rem;
  width: calc(100% - 2.5rem);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  padding: 0 1.25rem;
  padding-bottom: 5rem;
  position: relative;
  margin-top: 1rem;
`;

export const Input = styled(OriginalInput)`
  width: 95%;
  margin-bottom: 0rem;
  font-weight: 400;
  border: none;
  &:focus {
    border: none;
  }
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
