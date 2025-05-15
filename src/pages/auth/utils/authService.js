import { loginUser, logoutUser } from '@/apis/auth/authApis';
import { getCurrentUser } from '@/apis/auth/user';
import useUserStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';

/**
 * 로그인 후 유저 정보 가져오는 통합 함수
 * @param {Object} data - { email, password }
 * @returns {Object} - 로그인 성공 시 유저 정보 반환
 */
export const loginAndFetchUser = async ({ email, password }) => {
  await loginUser({ email, password });
  return getCurrentUser();
};

export const useLogout = () => {
  const clearUser = useUserStore((state) => state.clearUser);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await logoutUser(); // 서버 세션 종료
      clearUser(); // 클라이언트 상태 초기화
      navigate('/login'); // 로그인 페이지 이동
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return logout;
};
