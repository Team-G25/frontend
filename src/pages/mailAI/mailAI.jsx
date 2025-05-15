import { useState } from 'react';
import styled from 'styled-components';

import AIGenerationInput from './components/generationInput/AIGenerationInput';
import MailEditor from './components/mailEditor/MailEditorComponent';
import Sidebar from '@/components/common/sideBar/SideBarComponent';
import Spinner from '@components/common/spinner/SpinnerComponent';
import { postGenerateMail } from '@apis/aiMail/postGenerateMail';

const MailAIPage = () => {
  const [aiContent, setAiContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptSubmit = async (input) => {
    try {
      setIsLoading(true);
      const result = await postGenerateMail(input);
      setAiContent(result.content);
    } catch (error) {
      console.error('AI 메일 생성 실패:', error);
      alert('메일 생성을 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Sidebar />
      <ContentWrapper>
        <AIGenerationInput onSubmit={handlePromptSubmit} />
        {isLoading && (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        )}
        {!isLoading && aiContent && <MailEditor aiContent={aiContent} />}
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

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
