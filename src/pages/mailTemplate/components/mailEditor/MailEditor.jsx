import { useEffect, useState } from 'react';
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

import { postCustomizeTemplate } from '@apis/templete/postCustomizeTemplate';
import { postMail } from '@/apis/postMail';
import { postAIFeedback } from '@apis/templete/postAIFeedback';
import { getProfile } from '@apis/member/getProfile';

const MailEditor = ({
  templateContent,
  setTemplateContent,
  templateId,
  setShowFeedback,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [receiver, setReceiver] = useState('');
  const [subject, setSubject] = useState('');
  const [sender, setSender] = useState('');
  const [attachments, setAttachments] = useState([]);

  const userId = 1; // TODO: 로그인 정보 연동

  useEffect(() => {
    const fetchSender = async () => {
      try {
        const profile = await getProfile();
        setSender(`${profile.nickname}@mailergo.io.kr`);
      } catch (err) {
        console.error('프로필 불러오기 실패:', err);
        setSender('user@mailergo.io.kr');
      }
    };

    fetchSender();
  }, []);

  const handleSave = async () => {
    try {
      await postCustomizeTemplate({
        templateId,
        customTitle: subject,
        customContent: templateContent,
        userId,
      });
      setShowModal(true);
    } catch (err) {
      console.error('임시 저장 실패:', err);
      alert('저장 실패');
    }
  };

  const handleSendMail = async () => {
    try {
      await postMail({
        to: receiver,
        subject,
        content: templateContent,
        from: sender,
        attachments,
      });
      alert('메일 전송 완료!');
      setShowModal(false);
    } catch (err) {
      console.error('메일 전송 실패:', err);
      alert('메일 전송 실패');
    }
  };

  const handleAIFeedback = async () => {
    try {
      const { refinedContent } = await postAIFeedback(templateContent);
      setTemplateContent(refinedContent);
      setShowModal(false);
      setShowFeedback(true);
    } catch (err) {
      console.error('AI 피드백 실패:', err);
      alert('AI 피드백 실패');
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
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>제목 :</Label>
            <Input
              placeholder="메일 제목 입력"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>보낸 사람 :</Label>
            <Input placeholder="발신자 이메일" value={sender} readOnly />
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
            <FileInput width="930px" onFileSelect={setAttachments} />
          </BottomLeft>
          <BottomRight>
            <SubmitBtn onSave={handleSave} onSend={handleSave} />
          </BottomRight>
        </BottomArea>
      </EditorContainer>

      {showModal && (
        <AIPopUp
          onClose={() => setShowModal(false)}
          onSend={handleSendMail}
          onFeedback={handleAIFeedback}
        />
      )}
    </>
  );
};

export default MailEditor;
