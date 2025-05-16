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
  Note,
  Separator,
} from './index.style';

import FileInput from '@/components/common/fileInput/FileInputForm';
import SubmitBtn from '@/components/common/submitButton/SubmitBtn';
import AIPopUp from '@/components/common/aiPopUp/AIPopUpModal';
import SaveAlert from '@/components/common/presaveAlert/SaveAlertModal';
import SubmitAlert from '@/components/common/submitAlert/SubmitAlertModal';
import AlertModal from '@/components/common/alertModal/CommonAlertModal';

import { postCustomizeTemplate } from '@apis/templete/postCustomizeTemplate';
import { postMail } from '@apis/postMail';
import { postAIFeedback } from '@apis/templete/postAIFeedback';
import { getProfile } from '@apis/member/getProfile';
import { getHighlightedDiffHTML } from '@/utils/highlightDiff';
import { saveMail } from '@/apis/saveMail';

const MailEditor = ({ templateContent, setTemplateContent, templateId }) => {
  const [showModal, setShowModal] = useState(false);
  const [receiver, setReceiver] = useState('');
  const [subject, setSubject] = useState('');
  const [sender, setSender] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [aiFeedback, setAIFeedback] = useState('');
  const [showDraftAlert, setShowDraftAlert] = useState(false);
  const [draftFailed, setDraftFailed] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showTemplateFailAlert, setShowTemplateFailAlert] = useState(false);
  const [showSendFailAlert, setShowSendFailAlert] = useState(false);
  const [showAIFailAlert, setShowAIFailAlert] = useState(false);

  const userId = 1;

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

  const handleSaveDraftOnly = async () => {
    try {
      await saveMail(sender, receiver, subject, templateContent);
      setDraftFailed(false);
    } catch {
      setDraftFailed(true);
    } finally {
      setShowDraftAlert(true);
    }
  };

  const handleSaveAndOpenModal = async () => {
    try {
      await postCustomizeTemplate({
        templateId,
        customTitle: subject,
        customContent: templateContent,
        userId,
      });
      setShowModal(true);
    } catch {
      setShowTemplateFailAlert(true);
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
      setShowModal(false);
      setShowSuccessAlert(true);
    } catch {
      setShowSendFailAlert(true);
    }
  };

  const handleAIFeedback = async () => {
    setShowModal(false);
    try {
      const { refinedContent } = await postAIFeedback(templateContent);
      setAIFeedback(refinedContent);
    } catch {
      setShowAIFailAlert(true);
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
            <Label>본문</Label>
            <Separator />
            <Textarea
              value={templateContent}
              onChange={(e) => setTemplateContent(e.target.value)}
            />
          </ContentBox>

          {aiFeedback && (
            <ContentBox>
              <Label>AI 피드백</Label>
              <Separator />
              <Textarea
                as="div"
                dangerouslySetInnerHTML={{
                  __html: getHighlightedDiffHTML(templateContent, aiFeedback),
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
            <SubmitBtn
              onSave={handleSaveDraftOnly}
              onSend={handleSaveAndOpenModal}
            />
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

      {showDraftAlert && (
        <SaveAlert
          onClose={() => setShowDraftAlert(false)}
          draftFailed={draftFailed}
        />
      )}

      {showSuccessAlert && <SubmitAlert />}

      {showTemplateFailAlert && (
        <AlertModal
          title="템플릿 저장에 실패했습니다."
          buttonText="확인"
          onButtonClick={() => setShowTemplateFailAlert(false)}
        />
      )}

      {showSendFailAlert && (
        <AlertModal
          title="메일 전송에 실패했습니다."
          buttonText="확인"
          onButtonClick={() => setShowSendFailAlert(false)}
        />
      )}

      {showAIFailAlert && (
        <AlertModal
          title="AI 피드백 요청에 실패했습니다."
          buttonText="확인"
          onButtonClick={() => setShowAIFailAlert(false)}
        />
      )}
    </>
  );
};

export default MailEditor;
