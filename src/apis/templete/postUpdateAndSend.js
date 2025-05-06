import instance from '../instance';

/**
 * 템플릿 수정 + 메일 전송 요청
 * @param {Object} payload - 전송할 데이터
 * @param {number} payload.templateId - 템플릿 ID
 * @param {string} payload.recipientEmail - 수신자 이메일
 * @param {string} payload.from - 발신자 이메일
 * @param {string} payload.customTitle - 사용자 지정 제목
 * @param {string} payload.customContent - 사용자 지정 본문
 * @returns {Promise<any>} - 응답 데이터
 * @author 노찬영
 */

export const postUpdateAndSendTemplate = async ({
  templateId,
  recipientEmail,
  from,
  customTitle,
  customContent,
}) => {
  const response = await instance.post('/templates/update-and-send', {
    templateId,
    recipientEmail,
    from,
    customTitle,
    customContent,
  });

  return response.data;
};

