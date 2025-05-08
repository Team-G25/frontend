import instance from '../instance';

export const fetchTemplate = async ({ targetName, keyword1, keyword2 }) => {
  const response = await instance.get('/templates/search', {
    params: {
      targetName,
      keyword1,
      keyword2,
    },
  });
  return response.data;
};
