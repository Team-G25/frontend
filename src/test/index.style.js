import styled from 'styled-components';

export const ComponentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SubTitle = styled.h3`
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.colors.blue};
`;

export const Spacing = styled.section`
  margin: 2rem;
`;

export const FlexSpacing = styled.section`
  display: flex;
  gap: 4rem;
`;

export const AutoTestCase = styled.div`
  display: grid;
  padding: 20px 20px;
  grid-template-columns: repeat(auto-fit);
  border: 1px solid ${({ theme }) => theme.colors.black};
  justify-content: center;
`;
