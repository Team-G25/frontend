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

const MailEditor = ({ templateContent }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    // 메일 임시저장 로직 작성 예정
  };

  const handleSend = () => {
    setShowModal(true);
    // 메일 전송 로직 작성 예정
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
          <Textarea readOnly value={templateContent} />
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
