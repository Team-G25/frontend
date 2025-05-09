import { useState } from 'react';
import AIGenerationInput from './components/generationInput/AIGenerationInput';
import MailEditor from './components/mailEditor/MailEditor';
import Sidebar from '@/components/common/sideBar/SideBarComponent';
import { postGenerateMail } from '@apis/aiMail/postGenerateMail';
import styled from 'styled-components';

const MailAIPage = () => {
  const [aiContent, setAiContent] = useState('');

  const handlePromptSubmit = async (input) => {
    try {
      const result = await postGenerateMail({ prompt: input });
      setAiContent(result.content);
    } catch (error) {
      console.error('AI 메일 생성 실패:', error);
      alert('메일 생성을 실패했습니다.');
    }
  };

  return (
    <PageWrapper>
      <Sidebar />
      <ContentWrapper>
        <AIGenerationInput onSubmit={handlePromptSubmit} />
        {aiContent !== '' && <MailEditor aiContent={aiContent} />}
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
