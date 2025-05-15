import { loginUser, logoutUser } from '@/apis/auth/authApis';
import { getCurrentUser } from '@/apis/auth/user';
import useUserStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';

export const loginAndFetchUser = async ({ email, password }) => {
  await loginUser({ email, password });
  const userInfo = await getCurrentUser();
  useUserStore.getState().setUser(userInfo);
  return userInfo;
};

export const useLogout = () => {
  const clearUser = useUserStore((state) => state.clearUser);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await logoutUser(); // 서버 세션 종료
      clearUser(); // 클라이언트 상태 초기화
      alert('로그아웃 되었습니다!');
      navigate('/'); // 홈 페이지 이동
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return logout;
};
