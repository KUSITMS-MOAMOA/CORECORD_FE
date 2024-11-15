import { CategoryChip } from '@/components/common/chip/CategoryChip';
import * as S from './KeywordSkill.style';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeywordList } from '../keywordList/KeywordList';
import { Empty } from '@/components/common/empty/Empty';
import { KeywordSkillProps } from '@/types/Analysis';
import { getKeywordList, getRecords } from '@/api/Analysis';

export const KeywordSkill = () => {
  const navigate = useNavigate();
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [recordList, setRecordList] = useState<KeywordSkillProps[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<string | undefined>(undefined);
  const [lastRecordId, setLastRecordId] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  // 키워드 데이터 및 리스트 데이터 가져오기
  const getKeywordData = useCallback(
    async (keyword: string, recordId: number) => {
      if (!keyword || isFetching) return;
      setIsFetching(true);
      try {
        const listResponse = await getRecords(keyword, recordId);
        if (listResponse.recordDtoList) {
          setRecordList((prev) =>
            recordId === 0 ? listResponse.recordDtoList : [...prev, ...listResponse.recordDtoList],
          );
          setLastRecordId(
            listResponse.recordDtoList[listResponse.recordDtoList.length - 1].recordId,
          );
          setHasNext(listResponse.hasNext);
        } else {
          setHasNext(false);
        }
      } finally {
        setIsFetching(false);
      }
    },
    [isFetching],
  );

  // 키워드 목록 가져오기
  const fetchKeywordList = async () => {
    const keywordResponse = await getKeywordList();
    if (keywordResponse.length > 0) {
      setKeywordList(keywordResponse);
      setSelectedKeyword(keywordResponse[0]);
    }
  };

  // 초기 데이터 로드
  useEffect(() => {
    fetchKeywordList();
  }, []);

  useEffect(() => {
    if (selectedKeyword) {
      const fetchData = async () => {
        setRecordList([]);
        setLastRecordId(0);
        await getKeywordData(selectedKeyword, 0);
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKeyword]);

  // 무한 스크롤 데이터 로드
  const fetchMoreData = useCallback(async () => {
    if (isFetching || !hasNext || !selectedKeyword) return;

    setIsFetching(true);
    try {
      await getKeywordData(selectedKeyword, lastRecordId);
    } finally {
      setIsFetching(false);
    }
  }, [isFetching, hasNext, lastRecordId, getKeywordData, selectedKeyword]);

  // Intersection Observer 설정
  useEffect(() => {
    if (!hasNext || isFetching) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          fetchMoreData();
        }
      },
      { rootMargin: '200px', threshold: 0.1 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchMoreData, hasNext]);

  return (
    <S.Container>
      <S.ChipsContainer>
        {keywordList.length > 0 &&
          keywordList.map((item, index) => (
            <CategoryChip
              isSelected={selectedKeyword === item}
              onClick={() => {
                setSelectedKeyword(item);
              }}
              key={index}
            >
              {item}
            </CategoryChip>
          ))}
      </S.ChipsContainer>
      {recordList.length > 0 ? (
        <S.KeywordListContainer>
          {recordList.map((item) => (
            <KeywordList
              key={item.analysisId}
              chip={item.folder}
              title={item.title}
              description={item.content}
              date={item.createdAt}
              onClick={() => {
                navigate(`/report/${item.analysisId}`);
              }}
            />
          ))}
          <div ref={observerRef} style={{ height: '20px' }} />
        </S.KeywordListContainer>
      ) : (
        <Empty />
      )}
    </S.Container>
  );
};
