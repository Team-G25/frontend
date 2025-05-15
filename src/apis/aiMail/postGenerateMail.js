import instance from '../instance';

export const postGenerateMail = async (prompt) => {
  const response = await instance.post('/mailer-ai/auto-generate', { prompt });
  return response.data;
};
