import { useState, useEffect } from "react";
import styled from "styled-components";
import {
    EditorContainer,
    TopArea,
    InputWrapper,
    Label,
    Input,
    Separator,
    MainArea,
    ContentBox,
    Textarea,
    Note,
    BottomArea,
    BottomLeft,
    BottomRight,
  } from './index.style';
  
import FileInput from '@components/common/fileInput/FileInput';
import SubmitCancelBtn from "../submitCancelBtn/submitCancelBtn";
import AIPopUp from "@/components/common/aiPopUp/AIPopUP";
import SubmitAlert from "@/components/common/submitAlert/SubmitAlert";

import { postMail } from "@/apis/postMail";
import { postAIFeedback } from "@/apis/templete/postAIFeedback";
import { getProfile } from "@/apis/member/getProfile";
import { getHighlightedDiffHTML } from "@/utils/highlightDiff";

const MailEditor = ({draft, onCancel, onMailSent}) => {
    const [showModal, setShowModal] = useState(false);
    const [recipientEmail, setRecipientEmail] = useState('');
    const [senderEmail, setSenderEmail] = useState(''); 
    const [aiFeedback, setAiFeedback] = useState('');
    const [mailTitle, setMailTitle] = useState('');
    const [content, setContent] = useState(draft.content || '');
    const [attachments, setAttachments] = useState([]); //첨부파일
    const [isMailSent, setIsMailSent] = useState(false); //메일 성공 알림띄우는 상태


    useEffect(() => {
        const fetchSender = async () => {
            try {
                const profile = await getProfile();
                setSenderEmail(`${profile.nickname}@mailergo.io.kr`)
            } catch {
                setSenderEmail('0000@mailergo.io.kr');
            }
        };
        fetchSender();
    }, []);

    const openModal = () => {
        setShowModal(true);
    }

    //메일 전송하기
    const handleSend = async () => {
        try {
            await postMail({
                to: recipientEmail,
                subject: mailTitle,
                content,
                from: senderEmail,
                attachments,
            });
            setShowModal(false);
            onMailSent(draft.id);
            setIsMailSent(true);
        } catch  {
            alert('메일 전송 실패');
        }
    };

    const handleAIFeedback = async () =>{
        setShowModal(false);
        try{
            const {refinedContent} = await postAIFeedback(content);
            setAiFeedback(refinedContent);
        } catch {
            alert('AI 피드백 실패');
        }
    };

    //취소하기 버튼 누르면 보관함으로 돌아갑니다.
    const handleCancelEdit = () => {
        onCancel();
    };

    //메일 전송 성공한 경우 돌아가기 컴포넌트가 생깁니다.
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
                            readOnly 
                        />
                    </InputWrapper>
                </TopArea>

                <MainArea>
                    <ContentBox>
                        <Label>본문</Label>
                        <Separator /> 
                        <Textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />    
                    </ContentBox>

                    {aiFeedback && (
                        <ContentBox>
                            <Label>AI 피드백</Label>
                            <Separator />
                            <Textarea
                                as = "div"
                                dangerouslySetInnerHTML={{
                                    __html: getHighlightedDiffHTML(content, aiFeedback),
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
                            <br />* 보내기 버튼을 누르면 AI 피드백으로 전송됩니다.
                            </Note>
                        </ContentBox>
                    )}
                </MainArea>
        
                <BottomArea>
                    <BottomLeft>
                        <FileInput width="930px" onFileSelect={setAttachments}/>
                    </BottomLeft>
                    <BottomRight>
                        <SubmitCancelBtn onCancel={handleCancelEdit} onSend={openModal} />
                    </BottomRight>
                </BottomArea>
            </EditorContainer>

            {showModal && (
                <AIPopUp
                    onClose={() => setShowModal(false)}
                    onSend={handleSend}
                    onFeedback={handleAIFeedback}
                />
            )}
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