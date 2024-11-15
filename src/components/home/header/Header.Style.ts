import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 14.5rem;
  padding: 0 1.25rem 1.25rem;
  color: ${({ theme }) => theme.colors.gray900};
  background-image: url('/images/HeaderImage.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h3`
  margin-top: 3.75rem;
  line-height: 135%;
`;
