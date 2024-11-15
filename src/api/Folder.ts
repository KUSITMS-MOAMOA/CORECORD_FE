import { AxiosError } from 'axios';
import api from './instance';
import { FolderListProps } from '@/types/Folder';

/**
 * [6.1] 폴더 추가하기
 * @returns
 */
export async function postNewFolder(title: string) {
  try {
    const response = await api.post('/api/folders', title, {});

    if (response.data.is_success) {
      return response.data;
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data?.message || '서버 오류가 발생했습니다.';
      alert(errorMessage);
    } else {
      console.error(error);
      alert('서버와의 연결에 실패했습니다.');
    }
  }
}

/**
 * [6.2] 폴더별 경험 기록 리스트 조회
 * @param folder - (optional) 폴더명
 * @param lastRecordId - (optional) 마지막으로 조회한 RecordId
 * @returns
 */
export async function getFolderLists(folder?: string, lastRecordId?: number) {
  try {
    const response = await api.get('/api/records', {
      params: {
        folder: folder || 'all',
        lastRecordId: lastRecordId || 0,
      },
    });

    if (response.data.is_success) {
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * [6.3] 폴더 리스트 조회하기
 * @returns
 */
export async function getFolders() {
  try {
    const response = await api.get('/api/folders');

    if (response.data.is_success) {
      return response.data.data.folderDtoList;
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * [6.4] 폴더명 수정하기
 * @param folderId - 변경할 폴더의 Id
 * @param title - 변경할 폴더 이름
 * @returns
 */
export async function patchFolderName({ folderId, title }: FolderListProps) {
  try {
    const response = await api.patch('/api/folders', {
      folderId,
      title,
    });
    if (response.data.is_success) {
      return response.data;
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage = error.response.data?.message || '서버 오류가 발생했습니다.';
      alert(errorMessage);
    } else {
      console.error(error);
      alert('서버와의 연결에 실패했습니다.');
    }
  }
}

/**
 * [6.5] 폴더 삭제하기
 * @returns
 */
export async function deleteFolder(folderId: number) {
  try {
    const response = await api.delete(`/api/folders/${folderId}`);
    if (response.data.is_success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}
