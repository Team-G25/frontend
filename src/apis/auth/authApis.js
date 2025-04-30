import instance from '../instance';

/**
 * 회원가입 요청
 * @param {Object} data - 회원가입 데이터
 * @param {string} data.nickname - 닉네임
 * @param {string} data.email - 이메일
 * @param {string} data.password - 비밀번호
 * @returns {Promise<any>} - 서버 응답
 * @author 노찬영
 */
export const signupUser = async ({ nickname, email, password }) => {
  try {
    const response = await instance.post('/member/signup', {
      nickname,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('회원가입 실패:', error);
    throw error;
  }
};

/**
 * 로그인 요청
 * @param {Object} data - 로그인 데이터
 * @param {string} data.email - 이메일
 * @param {string} data.password - 비밀번호
 * @returns {Promise<any>} - 서버 응답
 * @author 노찬영
 */
export const loginUser = async ({ email, password }) => {
  try {
    const response = await instance.post('/member/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};

/**
 * 로그아웃 요청
 * @returns {Promise<any>} - 서버 응답
 * @author 노찬영
 */
export const logoutUser = async () => {
  try {
    const response = await instance.get('/member/logout');
    return response.data;
  } catch (error) {
    console.error('로그아웃 실패:', error);
    throw error;
  }
};
