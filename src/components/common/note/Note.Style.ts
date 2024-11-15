import styled, { css } from 'styled-components';
import WhiteCirclesIcon from '@icons/WhiteCirclesIcon.svg';

export const Note = styled.section<{ $color: 'blue' | 'yellow' }>`
  position: relative;
  display: flex;
  gap: 0.5625rem;
  width: 100%;
  height: 11.625rem;
  padding: 1.25rem 0.6875rem 1.25rem 0.4375rem;
  background-color: ${(props) =>
    props.$color === 'yellow' ? props.theme.colors.yellow100 : props.theme.colors.blue50};
  border-radius: 0.125rem;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.04);
`;

export const Icon = styled.div`
  width: 0.4375rem;
  height: 100%;
  background-image: url(${WhiteCirclesIcon});
  background-repeat: no-repeat;
`;

const blurMixin = css`
  position: absolute;
  border-radius: 100%;
  filter: blur(4.6875rem);
`;

export const BigBlur = styled.div<{ $color: 'blue' | 'yellow' }>`
  ${blurMixin};
  background-color: ${(props) =>
    props.$color === 'yellow' ? props.theme.colors.yellow100 : '#657cff'};
  bottom: 0.375rem;
  right: -0.6875rem;
  width: 6.25rem;
  height: 6.25rem;
  opacity: 0.6;
`;

export const SmallBlur = styled.div<{ $color: 'blue' | 'yellow' }>`
  ${blurMixin};
  background-color: ${(props) =>
    props.$color === 'yellow' ? props.theme.colors.yellow100 : '#657cff'};
  top: 0.8125rem;
  left: -1rem;
  width: 3.75rem;
  height: 3.75rem;
`;
