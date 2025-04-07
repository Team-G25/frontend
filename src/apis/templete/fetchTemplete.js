import instance from '../instance';

export const fetchTemplate = async ({ targetName, keyword1, keyword2 }) => {
  const params = { targetName, keyword1 };
  if (keyword2) params.keyword2 = keyword2;

  const { data } = await instance.get('/templates/search', { params });
  return data;
};
