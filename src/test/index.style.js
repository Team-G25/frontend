import styled from 'styled-components';
import theme from '@/styles/theme';

export const ComponentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const SubTitle = styled.h3`
  grid-column: 1 / -1;
  color: ${theme.colors.blue};
`;

export const Spacing = styled.section`
  margin: 10px;
`;

export const FlexSpacing = styled.section`
  display: flex;
  gap: 20px;
`;

export const AutoTestCase = styled.div`
  display: grid;
  padding: 20px 20px;
  grid-template-columns: repeat(auto-fit);
  border: 1px solid ${theme.colors.black1};
  justify-content: center;
`;
