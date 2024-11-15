import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3.75rem);
  padding: 0 1.25rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1.4625rem 0 2.5rem 0;
  text-align: left;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;  
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
  line-height: 1.575rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: 0;
  right: 0;
  padding: 0 1.25rem;
  width: 100%;
  box-sizing: border-box;
`;