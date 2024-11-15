export interface FolderListProps {
  folderId: number;
  title: string;
}

export interface ListProps {
  analysisId: number;
  recordId: number;
  folder: string;
  title: string;
  keywordList: string[];
  createdAt: string;
}
