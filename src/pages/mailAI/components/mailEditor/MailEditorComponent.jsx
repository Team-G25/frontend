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
  FeedbackBox,
} from './index.style';

import FileInput from '@components/common/fileInput/FileInputForm';
import SubmitBtn from '@components/common/submitButton/SubmitBtn';
import AIPopUp from '@components/common/aiPopUp/AIPopUpModal';
import SubmitAlert from '@components/common/submitAlert/SubmitAlertModal';

import { postRefineMail } from '@apis/aiMail/postRefineMail';
import { getHighlightedDiffHTML } from '@/utils/highlightDiff';
import { postMail } from '@apis/postMail';
import { getProfile } from '@apis/member/getProfile';
import { writeDraft } from '@/apis/temporary/writeDraft';

const MailEditor = ({ aiContent }) => {
  const [showModal, setShowModal] = useState(false);
  const [refinedContent, setRefinedContent] = useState('');
  const [receiver, setReceiver] = useState('');
  const [subject, setSubject] = useState('');
  const [sender, setSender] = useState('');
  const [content, setContent] = useState(aiContent);
  const [attachments, setAttachments] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // 최초 AI 생성 내용 반영
  useEffect(() => {
    setContent(aiContent);
  }, [aiContent]);

  // 보낸 사람 자동 세팅
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

  // 임시 저장
  const handleSave = async () => {
    try {
      await writeDraft({
        email: sender,
        content,
      });
      alert('임시 메일 저장 성공!');
    } catch (err) {
      console.error('임시 저장 실패:', err);
      alert('임시 메일 저장 실패');
    }
  };

  // 모달 오픈
  const handleSend = () => {
    setShowModal(true);
  };

  // AI 피드백
  const handleAIFeedback = async () => {
    setShowModal(false);
    try {
      const { refined } = await postRefineMail(content);
      setRefinedContent(refined);
    } catch (err) {
      alert('AI 피드백 요청 실패');
      console.error(err);
    }
  };

  // 메일 전송
  const handleSendMail = async () => {
    try {
      await postMail({
        to: receiver,
        from: sender,
        subject,
        content,
        attachments,
      });
      setShowModal(false);
      setShowSuccessAlert(true);
    } catch (error) {
      console.error('메일 전송 실패:', error);
      alert('메일 전송에 실패했습니다.');
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
            <Input placeholder="발신자 이메일" value={sender} readOnly />
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
              <FeedbackBox
                dangerouslySetInnerHTML={{
                  __html: getHighlightedDiffHTML(aiContent, refinedContent),
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
          onSend={handleSendMail}
          onFeedback={handleAIFeedback}
        />
      )}

      {showSuccessAlert && <SubmitAlert />}
    </>
  );
};

export default MailEditor;
