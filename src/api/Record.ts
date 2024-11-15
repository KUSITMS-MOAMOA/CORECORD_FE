import api from './instance';

/** [4.4] 경험 기록하기 (채팅 + 메모)
 * @returns
 */
export async function postRecord({
  title,
  content,
  folderId,
  recordType,
  chatRoomId,
}: {
  title: string;
  content: string;
  folderId: number;
  recordType: string;
  chatRoomId?: number;
}) {
  try {
    const response = await api.post('/api/records',
      {
        title,
        content,
        folderId,
        recordType,
        ...(chatRoomId && { chatRoomId }),
      });
    if (response.data.is_success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}
