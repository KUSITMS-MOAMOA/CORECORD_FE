export interface SkillData {
  keyword: string;
  count: number;
  percent: number;
}

export const dummySkills: SkillData[] = [
  { keyword: '커뮤니케이션', count: 150, percent: 45 },
  { keyword: '협업', count: 120, percent: 30 },
  { keyword: '논리력', count: 100, percent: 15 },
  { keyword: '친화력', count: 60, percent: 6 },
  { keyword: '책임감', count: 40, percent: 4 },
];
