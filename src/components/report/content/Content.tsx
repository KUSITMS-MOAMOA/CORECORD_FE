import { useNavigate } from 'react-router-dom';
import * as S from './Content.Style';
import { Skill } from '../skill/Skill';
import { Comment } from '../comment/Comment';
import { SkillProps } from '@/types/Analysis';

interface ContentProps {
  data: SkillProps;
}

export const Content = ({ data }: ContentProps) => {
  const navigate = useNavigate();
  const nickname = localStorage.getItem('nickname');

  const goToChatPage = () => {
    if (data.recordType === 'CHAT') {
      navigate(`/chat/${data.chatRoomId}`);
    } else {
      navigate(`memo`); // 수정해야 함
    }
  };

  return (
    <S.Content>
      <S.TopContent>
        <S.Title>{data.recordTitle}</S.Title>
        <S.Description>{data.recordContent}</S.Description>
      </S.TopContent>
      <S.Line />
      <S.MiddleContent>
        <S.MiddleHead>
          <S.Title>{nickname}님의 핵심 역량</S.Title> {/* 유저 이름 */}
          <S.ChatText onClick={goToChatPage}>
            {data.recordType === 'CHAT' ? '채팅' : '메모'} 다시보기
          </S.ChatText>
        </S.MiddleHead>
        {data.abilityDtoList.map((item, index) => (
          <Skill
            key={index}
            keyword={item.keyword}
            description={item.content}
            color={index % 2 !== 0}
          />
        ))}
      </S.MiddleContent>
      <S.Line />
      <Comment comment={data.comment} />
    </S.Content>
  );
};
