import { Note } from '../common/note/Note';
import * as S from './Record.Style';

interface RecordProps {
  children: React.ReactNode;
}

export const Record = ({ children }: RecordProps) => {
  return (
    <Note color="blue">
      <S.Text>{children} </S.Text>
    </Note>
  );
};
