import instance from '../instance';

export const postAIFeedback = async (customContent) => {
  const response = await instance.post('/templates/ai-made', {
    customContent,
  });
  return response.data;
};
