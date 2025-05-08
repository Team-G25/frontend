import instance from './instance';

/**
 * 메일 전송 요청
 * @param {Object} payload
 * @param {string} payload.to - 수신자 이메일
 * @param {string} payload.from - 발신자 이메일
 * @param {string} payload.subject - 제목
 * @param {string} payload.content - 본문
 * @param {string} [payload.references] - 참조 필드 (optional)
 * @param {File[]} [payload.attachments] - 첨부 파일 배열
 * @author 노찬영
 */
export const postMail = async (payload) => {
  const formData = new FormData();

  formData.append('to', payload.to);
  formData.append('from', payload.from);
  formData.append('subject', payload.subject);
  formData.append('content', payload.content);
  formData.append('references', payload.references || ''); // 기본값 처리

  if (payload.attachments?.length > 0) {
    payload.attachments.forEach((file) => {
      formData.append('attachments', file); // 여러 파일 지원
    });
  }

  const response = await instance.post('/mail/send', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
