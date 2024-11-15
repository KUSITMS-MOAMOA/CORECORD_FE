export interface AbilityProps {
  keyword: string;
  content: string;
}

export interface SkillProps {
  analysisId: number;
  chatRoomId: number | null;
  recordId: number;
  recordType: string;
  recordTitle: string;
  recordContent: string;
  abilityDtoList: AbilityProps[];
  comment: string;
  createdAt: string;
}

export interface KeywordSkillProps {
  analysisId: number;
  recordId: number;
  folder: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface AnalysisProps {
  analysisId: number;
  title?: string;
  content?: string;
  abilityMap?: { [key: string]: string };
}
