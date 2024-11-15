import { useEffect, useState } from 'react';
import { Folder } from '@components/folder/Folder';
import { TabBar } from '@components/layout/tabBar/TabBar';
import * as S from './FolderPage.Style';
import { FolderBottomSheet } from '@components/common/bottomSheet/FolderBottomSheet';
import { DetailModal } from '@components/common/modal/DetailModal';
import DeleteIcon from '@icons/DeleteIcon.svg';
import PlusIcon from '@icons/PlusIcon.svg';
import { deleteFolder, getFolders, patchFolderName } from '@/api/Folder';
import { FolderListProps } from '@/types/Folder';

export const FolderPage = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [folderList, setFolderList] = useState<FolderListProps[]>([]);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const folderList = await getFolders();
      if (folderList) {
        setFolderList(folderList);
      }
    };
    fetchUser();
  }, [openBottom]);

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const toggleModal = (folderId?: number) => {
    setSelectedFolderId(folderId ?? null);
    setOpenModal((prev) => !prev);
  };

  const handleDeleteFolder = async (folderId: number | null) => {
    if (folderId === null) return;

    const response = await deleteFolder(folderId);
    if (response.is_success) {
      setFolderList((prev) => prev.filter((folder) => folder.folderId !== folderId));
      setOpenModal((prev) => !prev);
    }
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
    folderId: number,
    title: string,
  ) => {
    if (event.key === 'Enter') {
      await patchFolderName({ folderId, title });
    }
  };

  return (
    <div>
      <TabBar centerText="경험 폴더 관리" rightText="편집" onClick={handleEdit} />
      <S.Content>
        {!isEditing && (
          <Folder type="plus" onClick={toggleBottomSheet}>
            <img src={PlusIcon} alt="plusButton" />
          </Folder>
        )}
        {folderList.length > 0 &&
          folderList.map((folder) => (
            <S.FolderContainer key={folder.folderId}>
              {isEditing && (
                <S.Icon
                  src={DeleteIcon}
                  alt="delete"
                  onClick={() => toggleModal(folder.folderId)}
                />
              )}
              <Folder type="folder">
                {isEditing ? (
                  <S.Input
                    value={folder.title}
                    type="text"
                    onChange={(e) => {
                      setFolderList((prev) =>
                        prev.map((f) =>
                          f.folderId === folder.folderId ? { ...f, title: e.target.value } : f,
                        ),
                      );
                    }}
                    onKeyDown={(e) => {
                      handleKeyDown(e, folder.folderId, folder.title);
                    }}
                  />
                ) : (
                  <h6>{folder.title}</h6>
                )}
              </Folder>
            </S.FolderContainer>
          ))}
      </S.Content>
      {openBottom && <FolderBottomSheet onClick={toggleBottomSheet} />}
      {openModal && (
        <DetailModal
          text="폴더를 삭제 하시겠어요?"
          description="폴더 내 모든 레코드도 함께 삭제됩니다"
          leftButtonText="돌아가기"
          rightButtonText="삭제하기"
          onClickBackground={toggleModal}
          onClickLeft={toggleModal}
          onClickRight={() => handleDeleteFolder(selectedFolderId)}
        />
      )}
    </div>
  );
};
