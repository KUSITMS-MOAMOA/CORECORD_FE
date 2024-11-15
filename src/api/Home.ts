import api from './instance';

/**
 *
 * [2.1] 최근 생성된 경험 기록 리스트 조회
 */
export async function getRecords() {
  try {
    const response = await api.get('/api/records/recent');

    if (response.data.is_success) {
      return response.data.data.recordDtoList;
    }
  } catch (error) {
    console.error(error);
  }
}
