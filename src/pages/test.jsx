import styled from 'styled-components';
import TestComponents from '@test/index';

const TestContainer = styled.div`
  padding: 2rem;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const TestHeader = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export default function Test() {
  return (
    <TestContainer>
      <TestHeader>테스트 페이지</TestHeader>
      <TestComponents />
    </TestContainer>
  );
}