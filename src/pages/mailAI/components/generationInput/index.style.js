import styled from 'styled-components';
import theme from '@styles/theme';

export const Container = styled.section`
  width: 200px;
  height: 100%;
  padding: 35px 24px 0 24px;
  background-color: ${theme.colors.white1};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${theme.colors.black2};
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.large};
  font-weight: ${theme.font.weight.bold};
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  color: ${theme.colors.gray};
  font-family: ${theme.font.family.basic};
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.weight.semiBold};
  margin-bottom: 16px;
`;

export const InputArea = styled.div`
  position: relative;
  flex: 1;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 16px 12px 4px 12px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black1};
  font-family: ${theme.font.family.basic};
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.weight.regular};
  outline: none;
`;

export const Counter = styled.span`
  color: ${theme.colors.gray2};
  font-family: ${theme.font.family.popup};
  font-size: ${theme.font.size.sMedium};
  font-weight: ${theme.font.weight.regular};
  position: absolute;
  bottom: 100px;
  right: 0;
`;

export const SubmitButtonWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  right: 0;
`;
