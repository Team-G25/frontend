import styled from 'styled-components';
import theme from '@styles/theme';

export const SidebarContainer = styled.section`
  width: 200px;
  height: 100%;
  padding: 35px 24px 0 24px;
  background-color: ${theme.colors.white1};
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h1`
  color: ${theme.colors.black2};
  font-family: ${theme.font.family.basic};
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.size.large};
`;

export const TargetBox = styled.div`
  margin: 32px 0;
`;

export const KeywordContainer = styled.div`
  margin-top: 28px;
`;
