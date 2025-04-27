import { useState } from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';

const IdentityVerification = ({
  setStep,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const [confirmPassword, setConfirmPassword] = useState('');

  const isAllFilled = email && password && confirmPassword;
  const isPasswordMatch = password === confirmPassword;

  const handleComplete = () => {
    if (!isPasswordMatch) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    setStep('profile');
  };

  return (
    <Wrapper>
      <Title>
        메일러에 오신걸 환영합니다!
        <br />
        회원가입을 진행해볼까요?
      </Title>
      <Form>
        <Input
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="비밀번호 확인"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {isAllFilled && (
          <NextButton type="submit" onClick={handleComplete}>
            본인인증 완료하기
          </NextButton>
        )}
      </Form>
    </Wrapper>
  );
};

export default IdentityVerification;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 129px 308px 200px 266px;
  height: 100%;
`;

const Title = styled.h1`
  font-size: ${theme.font.size.titleLarge};
  font-weight: ${theme.font.weight.medium};
  text-align: center;
  color: ${theme.colors.black1};
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  margin-top: 86px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid ${theme.colors.red};
  border-radius: 20px;
  font-size: ${theme.font.size.sMedium};
  font-weight: ${theme.font.weight.regular};

  ::placeholder {
    color: ${theme.colors.gray};
  }

  &:first-of-type {
    margin-bottom: 33px;
  }
`;

const NextButton = styled.button`
  margin-top: 30px;
  padding: 15px 0;
  width: 100%;
  font-size: ${theme.font.size.large};
  font-weight: ${theme.font.weight.regular};

  color: ${theme.colors.white};
  background-color: ${theme.colors.red};
  border-radius: 20px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${theme.colors.red_hover};
  }
`;
