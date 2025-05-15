import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MailerLogo from '@assets/svgs/Mailer-logo.svg?react';
import {
  FormWrapper,
  Input,
  LoginButton,
  LogoWrapper,
  PageWrapper,
  SignUpLink,
  SignUpText,
} from './login.style';
import useUserStore from './store/userStore';
import { loginAndFetchUser } from './utils/authService';

const LoginPage = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userInfo = await loginAndFetchUser({ email, password });
      setUser(userInfo); 
      alert('로그인 성공!');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('다시 시도해 주세요.');
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <PageWrapper>
      <LogoWrapper onClick={handleLogoClick}>
        <MailerLogo />
      </LogoWrapper>

      <FormWrapper>
        <Input
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <LoginButton type="submit" onClick={handleLogin}>
          로그인
        </LoginButton>

        <SignUpText>
          처음 사용하시는 건가요?
          <SignUpLink onClick={() => navigate('/signup')}>
            회원가입하기
          </SignUpLink>
        </SignUpText>
      </FormWrapper>
    </PageWrapper>
  );
};

export default LoginPage;
