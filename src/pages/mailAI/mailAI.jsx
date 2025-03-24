import { useState } from 'react';
import AIGenerationInput from './components/generationInput/AIGenerationInput';
import MailEditor from './components/mailEditor/MailEditor';
import Sidebar from '@components/common/sidebar/Sidebar';
import styled from 'styled-components';

const MailAIPage = () => {
  const [aiContent, setAiContent] = useState('');

  return (
    <PageWrapper>
      <Sidebar />
      <ContentWrapper>
        <AIGenerationInput onSubmit={setAiContent} />
        {aiContent && <MailEditor aiContent={aiContent} />}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MailAIPage;

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;
