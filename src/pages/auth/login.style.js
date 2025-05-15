import styled from 'styled-components';
import theme from '@styles/theme';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 60px;
  cursor: pointer;

  svg {
    width: 300px;
    height: auto;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 30px 55px 80px;
  border: 3px solid ${theme.colors.red};
  border-radius: 20px;
  background-color: white;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 28px;
  border: 1px solid ${theme.colors.red};
  border-radius: 10px;
  font-size: ${theme.font.size.sMedium};
  font-weight: ${theme.font.weight.regular};
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 18px;
  margin-top: 10px;
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  border-radius: 20px;
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.regular};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.red_hover};
  }
`;

export const SignUpText = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.weight.regular};
  color: ${theme.colors.black1};
`;

export const SignUpLink = styled.span`
  margin-left: 4px;
  color: ${theme.colors.red};
  cursor: pointer;
  text-decoration: underline;
`;
