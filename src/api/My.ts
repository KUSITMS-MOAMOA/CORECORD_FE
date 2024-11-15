import { AxiosError } from 'axios';
import api from './instance';

/**
 * [8.1] 마이페이지 조회
 * @returns
 */
export async function getUsers() {
  try {
    const response = await api.get('/api/users');
    if (response.data.is_success) {
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * [8.2] 로그아웃
 * @returns
 */
export async function postLogout() {
  try {
    const response = await api.post('/api/users/logout');
    if (response.data.is_success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}

interface UserInfoProps {
  nickname?: string;
  status?: string;
}

/**
 * [8.3] 내 정보 수정
 * @returns
 */
export async function patchUserInfo({ nickname, status }: UserInfoProps) {
  try {
    const response = await api.patch('/api/users', {
      ...(nickname && { nickName: nickname }),
      ...(status && { status }),
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
 * [8.4] 회원 탈퇴
 * @returns
 */
export async function deleteUser() {
  try {
    const response = await api.delete('/api/users');
    if (response.data.is_success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}
