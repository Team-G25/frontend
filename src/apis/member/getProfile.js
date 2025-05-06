import instance from '../instance';
import defaultProfile from '@svgs/ic_profile.svg?react';

export const getProfile = async () => {
  const { data } = await instance.get('/profile');
  const info = data?.info;

  return {
    nickname: info?.nickname || 'user',
    profileUrl: info?.profileUrl || defaultProfile,
  };
};
