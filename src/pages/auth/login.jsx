import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '@apis/auth/authApis'; 

import MailerLogo from '@assets/svgs/Mailer-logo.svg?react';
import { FormWrapper, Input, LoginButton, LogoWrapper, PageWrapper, SignUpLink, SignUpText } from './login.style';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });
      console.log('로그인 성공:', res);
      alert('로그인 성공!');
      navigate('/'); // 로그인 성공 시 메인으로 이동
    } catch (err) {
      console.error('로그인 실패:', err);
      alert('이메일 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <PageWrapper>
      <LogoWrapper>
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

        <LoginButton type="submit" onClick={handleLogin}>로그인</LoginButton>

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
