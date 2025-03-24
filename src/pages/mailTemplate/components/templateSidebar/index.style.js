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

export const SectionTitle = styled.h2`
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.colors.black2};
  margin: 20px 0 8px;
`;

export const KeywordContainer = styled.div`
  margin-top: 16px;
`;
