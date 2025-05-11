import styled from 'styled-components';
import theme from '@/styles/theme';

export const TopContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 30px;
  user-select: none;
`;

export const TitleFrame = styled.div`
  flex: 3;
  background-color: ${theme.colors.pink_hover};
  display: flex;
  align-items: center;
  padding-left: 18px;

  font-family: ${theme.font.basic};
  font-size: ${theme.font.size.medium};
  color: ${theme.colors.black1};
`;

export const DateFrame = styled.div`
  flex: 1;
  background-color: ${theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 12px;

  font-family: ${theme.font.basic};
  font-size: ${theme.font.size.medium};
  color: ${theme.colors.white};
`;
