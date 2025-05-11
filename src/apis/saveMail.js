//임시 저장 api입니다.
import instance from './instance';

export const saveMail = async (email, subject, body) => {
  const response = await instance.post('/temporary/write', {
    email,
    content: {
      subject,
      body,
    },
  });
  return response.data;
};
