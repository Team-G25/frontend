import instance from '../instance';

export const postCustomizeTemplate = async ({
  templateId,
  customTitle,
  customContent,
  userId,
}) => {
  const response = await instance.post('/templates/customize', {
    templateId,
    customTitle,
    customContent,
    userId,
  });
  return response.data;
};
