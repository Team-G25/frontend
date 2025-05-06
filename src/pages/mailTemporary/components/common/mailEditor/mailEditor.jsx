import { useState } from "react";
import styled from "styled-components";
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
import SubmitCancelBtn from "../submitCancelBtn/submitCancelBtn";
import { sendMail } from "@/apis/mailWrite/sendMail";
import SubmitAlert from "@/components/common/submitAlert/SubmitAlert";

const MailEditor = ({draft, onCancel}) => {
    const [recipientEmail, setRecipientEmail] = useState('');
    const [senderEmail, setSenderEmail] = useState('0000@mailergo.io.kr'); 
    //테스트를 위해 초기값 고정세팅 추후 퍼블리싱할때는 제거.
    const [mailTitle, setMailTitle] = useState('');
    const [content, setContent] = useState(draft.content || '');
    const [file, setFile] = useState([]); //첨부파일
    const [isMailSent, setIsMailSent] = useState(false); //메일 성공 알림띄우는 상태

    const handleSend = async () => {
        try {
            const result = await sendMail({
                to: recipientEmail,
                subject: mailTitle,
                content,
                from: senderEmail,
                attachments: file,
            });

            console.log("메일 전송 성공", result);
            setIsMailSent(true);
        } catch (error) {
            console.error('메일 전송 실패:', error.response?.data || error.message)
        }
    };

    const handleCancelEdit = () => {
        onCancel();
    };

    if(isMailSent){
        return (
            <SuccessWrapper>
                <SubmitAlert />
            </SuccessWrapper>
        );
    }

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
                            // onChange = {(e) => setSenderEmail(e.target.value)}
                            readOnly // 퍼블리싱할때 제거
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
                        <SubmitCancelBtn onCancel={handleCancelEdit} onSend={handleSend} />
                    </BottomRight>
                </BottomArea>
            </EditorContainer>
        </>
    );
};

export default MailEditor;

const SuccessWrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;