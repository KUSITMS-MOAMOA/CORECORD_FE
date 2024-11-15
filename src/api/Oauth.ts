import api from './instance';

/**
 * [1.2] 회원가입 api
 * @param registerToken
 * @param nickName
 * @param status
 * @returns
 */
export async function registerUser(registerToken: string, nickName: string, status: string) {
  try {
    const response = await api.post(
      '/api/users/register ',
      { nickName, status },
      {
        headers: {
          registerToken: registerToken,
        },
      },
    );
    console.log('User registration successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('User registration failed:', error);
    throw error;
  }
}

/** [1.4]tmpToken으로 accessToken과 refreshToken 발급
 * @param tmpToken
 * @returns
 */
export async function getTokensWithTmpToken(tmpToken: string) {
  try {
    const response = await api.get('/api/token', {
      headers: {
        tmpToken: tmpToken,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API - 토큰 교환 실패', error);
    throw error;
  }
}

/** [1.3] refreshToken으로 accessToken 재발급
 * @returns
 */
export async function reissueAccessToken() {
  try {
    const response = await api.get('/api/token/reissue');
    return response.data;
  } catch (error) {
    console.error('Failed to reissue access token:', error);
    throw error;
  }
}
