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
  ContentBox,
  Separator,
  Note,
} from './index.style';

import FileInput from '@components/common/fileInput/FileInput';
import SubmitBtn from '@components/common/submitBtn/SubmitBtn';
import AIPopUp from '@components/common/aiPopUp/AIPopUp';

import { postRefineMail } from '@apis/aiMail/postRefineMail';
import { getHighlightedDiffHTML } from '@/utils/highlightDiff';
import { postMail } from '@apis/postMail';
import { getProfile } from '@apis/member/getProfile';

const MailEditor = ({ aiContent }) => {
  const [showModal, setShowModal] = useState(false);
  const [refinedContent, setRefinedContent] = useState('');
  const [receiver, setReceiver] = useState('');
  const [subject, setSubject] = useState('');
  const [sender, setSender] = useState('');
  const [content, setContent] = useState(aiContent);
  const [attachments, setAttachments] = useState([]);

  const handleSave = () => {
    // 메일 임시저장 로직 예정
  };

  useEffect(() => {
    setContent(aiContent);
  }, [aiContent]);

  useEffect(() => {
    const fetchSender = async () => {
      try {
        const profile = await getProfile();
        setSender(`${profile.nickname}@mailergo.io.kr`);
      } catch {
        setSender('user@mailergo.io.kr');
      }
    };
    fetchSender();
  }, []);

  const handleSend = () => {
    setShowModal(true);
  };

  const handleAIFeedback = async () => {
    setShowModal(false);
    try {
      const { refined } = await postRefineMail(aiContent);
      setRefinedContent(refined);
    } catch (err) {
      alert('AI 피드백 요청 실패');
      console.error(err);
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
              onChange={(e) => setSubject(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>보낸 사람 :</Label>
            <Input
              placeholder="발신자 이메일 입력"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
            />
          </InputWrapper>
        </TopArea>

        <MainArea>
          <ContentBox>
            <Label>생성된 본문</Label>
            <Separator />
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </ContentBox>

          {refinedContent && (
            <ContentBox>
              <Label>AI 피드백</Label>
              <Separator />
              <Textarea
                as="div"
                dangerouslySetInnerHTML={{
                  __html: getHighlightedDiffHTML(aiContent, refinedContent),
                }}
                style={{
                  paddingLeft: '8px',
                  height: '580px',
                  overflowY: 'auto',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '12px',
                  fontSize: '14px',
                  whiteSpace: 'pre-wrap',
                }}
              />
              <Note>
                * <span style={{ color: 'red' }}>빨간색 글씨</span>는 변경된
                부분,
                <del style={{ color: 'gray' }}>회색 취소선</del>은 삭제된 부분을
                의미합니다.
                <br />* 보내기 버튼을 통해 메일 전송 혹은 재피드백 요청이
                가능합니다.
              </Note>
            </ContentBox>
          )}
        </MainArea>

        <BottomArea>
          <BottomLeft>
            <FileInput width="930px" onFileSelect={setAttachments} />
          </BottomLeft>
          <BottomRight>
            <SubmitBtn onSave={handleSave} onSend={handleSend} />
          </BottomRight>
        </BottomArea>
      </EditorContainer>

      {showModal && (
        <AIPopUp
          onClose={() => setShowModal(false)}
          onSend={() => alert('전송 로직 미구현')}
          onFeedback={handleAIFeedback}
        />
      )}
    </>
  );
};

export default MailEditor;
