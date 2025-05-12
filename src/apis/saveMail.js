// 임시 저장 api
import instance from './instance';

export const saveMail = async (sender, recipient, subject, body) => {
  const response = await instance.post('/temporary/write', {
    email: sender,
    content: {
      receiverId: recipient,
      senderId: sender,
      subject,
      body,
    },
  });
  return response.data;
};
