import { Chip } from '../chip/Chip';
import * as S from './List.Style';

interface ListProps {
  title: string;
  chips: string[];
  date: string;
  onClick: () => void;
}

/**
 *
 * @param title - 제목
 * @param cihps - 역량 chip의 배열
 * @param date - 날짜
 * @param onClick - 클릭하면 이동할 곳
 * @returns
 */
export const List = ({ title, chips, date, onClick }: ListProps) => {
  return (
    <S.List onClick={onClick}>
      <S.ChipContainer>
        {chips.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </S.ChipContainer>
      <S.Title>{title}</S.Title>
      <S.DateText>{date}</S.DateText>
    </S.List>
  );
};
