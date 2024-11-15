import { dummySkills, SkillData } from './SkillData';
import * as S from './SkillList.Style';

interface Props {
  skills?: SkillData[];
}

export const SkillList = ({ skills = dummySkills }: Props) => {
  return (
    <S.Container>
      <S.Line />
      {skills.map((skill) => (
        <S.ListItem key={skill.keyword} $percent={skill.percent}>
          <S.TitleWrapper>
            <S.Title>{skill.keyword}</S.Title>
            <S.Percent>{skill.percent}%</S.Percent>
          </S.TitleWrapper>
          <S.CountCircle $percent={skill.percent}>
            <S.Count>{skill.count}</S.Count>
          </S.CountCircle>
        </S.ListItem>
      ))}
    </S.Container>
  );
};