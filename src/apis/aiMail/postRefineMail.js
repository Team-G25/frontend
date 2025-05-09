import instance from '../instance';

export const postRefineMail = async (content) => {
  const res = await instance.post('/ai/refine', { content });
  return res.data;
};
