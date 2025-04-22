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

const MailEditor = ({ templateContent, setTemplateContent }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    // 저장 API 연결 예정
    console.log('저장할 템플릿:', templateContent);
  };

  const handleSend = () => {
    setShowModal(true);
    // 전송 API 연결 예정
  };

  return (
    <>
      <EditorContainer>
        {/* 수신자 정보 입력 영역 */}
        <TopArea>
          <InputWrapper>
            <Label>받는 사람 :</Label>
            <Input placeholder="수신자 이메일 입력" />
          </InputWrapper>

          <InputWrapper>
            <Label>제목 :</Label>
            <Input placeholder="메일 제목 입력" />
          </InputWrapper>

          <InputWrapper>
            <Label>보낸 사람 :</Label>
            <Input placeholder="발신자 이메일 입력" />
          </InputWrapper>
        </TopArea>

        {/* 본문 영역 */}
        <MainArea>
          <Textarea
            value={templateContent}
            onChange={(e) => setTemplateContent(e.target.value)}
          />
        </MainArea>

        {/* 하단: 파일 첨부 + 버튼 */}
        <BottomArea>
          <BottomLeft>
            <FileInput width="930px" />
          </BottomLeft>
          <BottomRight>
            <SubmitBtn onSave={handleSave} onSend={handleSend} />
          </BottomRight>
        </BottomArea>
      </EditorContainer>

      {/* AI 피드백 모달 */}
      {showModal && <AIPopUp onClose={() => setShowModal(false)} />}
    </>
  );
};

export default MailEditor;
