import instance from '../instance';

export const postGenerateMail = async ({ prompt }) => {
  const res = await instance.post('/ai/generate', { prompt });
  return res.data;
};
