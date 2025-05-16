import instance from '../instance';

export const getCurrentUser = async () => {
  const res = await instance.get('/member/now-me');
  return res.data.info; // { userId, nickname, profileUrl } 형태
};
