import { ChangeEvent } from 'react';
import * as S from './Memo.Style';
import { Note } from '../common/note/Note';

interface MemoProps {
  memo: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Memo = ({ memo, onChange }: MemoProps) => {
  return (
    <Note color="yellow">
      <S.TextFiled
        placeholder="경험 당시의 상황, 행동, 문제, 결과 등을 기록해주세요."
        value={memo}
        onChange={onChange}
      />
    </Note>
  );
};
