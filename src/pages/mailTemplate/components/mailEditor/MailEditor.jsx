import { useState } from 'react';
import {
  EditorContainer,
  TopArea,
  InputWrapper,
  Label,
  Input,
  MainArea,
  Textarea,
  BottomArea,
  BottomLeft,
  BottomRight,
} from './index.style';

import FileInput from '@components/common/fileInput/FileInput';
import SubmitBtn from '@components/common/submitBtn/SubmitBtn';
import AIPopUp from '@components/common/aiPopUp/AIPopUp';
import { postUpdateAndSendTemplate } from '@apis/templete/postUpdateAndSend';

const MailEditor = ({ templateContent, setTemplateContent, templateId }) => {
  const [showModal, setShowModal] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [mailTitle, setMailTitle] = useState('');

  const handleSave = () => {
    console.log('저장할 템플릿:', templateContent);
  };

  const handleSend = async () => {
    setShowModal(true);
    try {
      const result = await postUpdateAndSendTemplate({
        templateId,
        recipientEmail,
        from: senderEmail,
        customTitle: mailTitle,
        customContent: templateContent,
      });

      console.log('메일 전송 성공:', result);
    } catch (error) {
      console.error('메일 전송 실패:', error);
    }
  };

  return (
    <>
      <EditorContainer>
        <TopArea>
          <InputWrapper>
            <Label>받는 사람 :</Label>
            <Input
              placeholder="수신자 이메일 입력"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>제목 :</Label>
            <Input
              placeholder="메일 제목 입력"
              value={mailTitle}
              onChange={(e) => setMailTitle(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>보낸 사람 :</Label>
            <Input
              placeholder="발신자 이메일 입력"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
          </InputWrapper>
        </TopArea>

        <MainArea>
          <Textarea
            value={templateContent}
            onChange={(e) => setTemplateContent(e.target.value)}
          />
        </MainArea>

        <BottomArea>
          <BottomLeft>
            <FileInput width="930px" />
          </BottomLeft>
          <BottomRight>
            <SubmitBtn onSave={handleSave} onSend={handleSend} />
          </BottomRight>
        </BottomArea>
      </EditorContainer>

      {showModal && <AIPopUp onClose={() => setShowModal(false)} />}
    </>
  );
};

export default MailEditor;
