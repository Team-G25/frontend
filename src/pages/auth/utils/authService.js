import { loginUser, logoutUser } from '@/apis/auth/authApis';
import { getCurrentUser } from '@/apis/auth/user';
import useUserStore from '../store/userStore';

export const loginAndFetchUser = async ({ email, password }) => {
  await loginUser({ email, password });
  const userInfo = await getCurrentUser();
  useUserStore.getState().setUser(userInfo);
  return userInfo;
};

export const useLogout = () => {
  const clearUser = useUserStore((state) => state.clearUser);

  const logout = async () => {
    try {
      await logoutUser();
      clearUser();
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};
