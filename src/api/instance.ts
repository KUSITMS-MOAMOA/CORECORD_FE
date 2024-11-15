import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        // 액세스 토큰 만료 시 리프레시 토큰으로 액세스 토큰 갱신 시도
        await api.get('/api/token/reissue');

        return api.request(error.config);
      } catch (refreshError) {
        console.error('리프레시 토큰이 만료되었습니다. 재로그인이 필요합니다.');
        window.location.href = '/oauth';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
