import { BottomSheet } from '../BottomSheet';
import { Textarea } from './Textarea';
import * as S from './ReportBottomSheet.Style';
import CloseIcon from '@icons/CloseIcon.svg';
import { Chip } from '../../chip/Chip';
import { AnalysisProps } from '@/types/Analysis';

interface ReportBottomSheet {
  onClick: () => void;
  onClickStore: () => void;
  data: AnalysisProps | null;
  onChange: (key: keyof AnalysisProps, value: string) => void;
  onAbilityChange: (index: number, value: string) => void;
}

export const ReportBottomSheet = ({
  onClick,
  onClickStore,
  data,
  onChange,
  onAbilityChange,
}: ReportBottomSheet) => {
  return (
    <BottomSheet onClick={onClick}>
      <S.Header>
        <S.Icon src={CloseIcon} alt="모달 닫기" onClick={onClick} />
        <S.Title>AI 역량 분석 편집</S.Title>
        <h6 onClick={onClickStore}>저장</h6>
      </S.Header>
      <S.ContentContainer>
        <Textarea
          isTitle={true}
          value={data?.title || ''}
          onChange={(e) => onChange('title', e.target.value)}
        />
        <Textarea
          value={data?.content || ''}
          onChange={(e) => onChange('content', e.target.value)}
        />
        {data?.abilityMap &&
          Object.keys(data.abilityMap).map((keyword, index) => (
            <S.Keyword key={index}>
              <Chip size="large" color={index % 2 !== 0}>
                {keyword}
              </Chip>
              <Textarea
                value={data.abilityMap?.[keyword] ?? ''}
                onChange={(e) => onAbilityChange(index, e.target.value)}
              />
            </S.Keyword>
          ))}
      </S.ContentContainer>
    </BottomSheet>
  );
};
