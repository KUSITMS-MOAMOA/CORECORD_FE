import * as S from './Note.Style';

interface NoteProps {
  children: React.ReactNode;
  color: 'blue' | 'yellow';
}

/**
 *
 * @param color - 노트의 색깔
 * @param children - 노트 안 content
 * @returns
 */
export const Note = ({ children, color }: NoteProps) => {
  return (
    <S.Note $color={color}>
      <S.Icon />
      {children}
      <S.SmallBlur $color={color} />
      <S.BigBlur $color={color} />
    </S.Note>
  );
};
