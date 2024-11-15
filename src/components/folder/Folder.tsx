import * as S from './Folder.Style';

interface FolderProps {
  children: React.ReactNode;
  type: 'folder' | 'plus';
  onClick?: () => void;
}

export const Folder = ({ children, type, onClick }: FolderProps) => {
  return (
    <S.Folder $type={type} onClick={onClick}>
      {children}
    </S.Folder>
  );
};
