import { useState } from "react";
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
import { writeDraft } from "@/apis/temporary/writeDraft";

const MailEditor = ({draft}) => {
    const [recipientEmail, setRecipientEmail] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [mailTitle, setMailTitle] = useState('');
    const [content, setContent] = useState(draft.content || '');
    
    const handleSend = async () => {
        try {
            const result = await writeDraft({
                recipientEmail,
                content
            });
            console.log("메일 전송 성공", result)
        } catch (error) {
            console.error('메일 전송 실패:', error)
        }
    };

    const handleSave = () => {
        console.log("메일 저장하기 눌렀습니다. 여기선 저장 X");
    };

    return (
        <>
          <EditorContainer>
                <TopArea>
                    <InputWrapper>
                        <Label>받는 사람 :</Label>
                        <Input
                            placeholder = "수신자 이메일 입력"
                            value = {recipientEmail}
                            onChange = {(e) => setRecipientEmail(e.target.value)}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>제목 :</Label>
                        <Input
                            placeholder = "메일 제목 입력"
                            value = {mailTitle}
                            onChange = {(e) => setMailTitle(e.target.value)}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>보낸 사람 :</Label>
                        <Input
                            placeholder = "발신자 이메일 입력"
                            value = {senderEmail}
                            onChange = {(e) => setSenderEmail(e.target.value)}
                        />
                    </InputWrapper>
                </TopArea>

                <MainArea>
                    <Textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
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
        </>
    );
};

export default MailEditor;