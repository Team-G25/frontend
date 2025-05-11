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
    Note,
    BottomArea,
    BottomLeft,
    BottomRight,
    ContentBox,
    Textarea,
 } from "./index.style";

import { postMail } from "@/apis/postMail";
import { saveMail } from "@/apis/saveMail";
import { postAIFeedback } from "@/apis/templete/postAIFeedback";
import { getProfile } from "@/apis/member/getProfile";
import { getHighlightedDiffHTML } from "@/utils/highlightDiff";

import FileInput from "@/components/common/fileInput/FileInputForm";
import AIPopUp from "@/components/common/aiPopUp/AIPopUpModal";
import SubmitBtn from "@/components/common/submitButton/SubmitBtn";
import SubmitAlert from "@/components/common/submitAlert/SubmitAlertModal";



const MailEditor = () => {
    const [showModal, setShowModal] = useState(false);
    const [recipientEmail, setRecipientEmail] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [mailTitle, setMailTitle] = useState('');
    const [content, setContent] = useState('');
    const [aiFeedback, setAiFeedback] = useState('');
    const [attachments, setAttachments] = useState([]); //첨부파일
    const [isMailSent, setIsMailSent] = useState(false); 
    
    useEffect(() => {
        const fetchSender = async () => {
            try{
                const profile = await getProfile();
                setSenderEmail(`${profile.nickname}@mailergo.io.kr`);
            } catch {
                setSenderEmail('user@mailergo.io.kr');
            }
        };
        fetchSender();
    }, []);

    if(isMailSent){
        return(
            <SuccessWrapper>
                <SubmitAlert />
            </SuccessWrapper>
        );
    };

    const openModal = () => {
        console.log("모달 열립니다.");
        setShowModal(true);
    };


    const handleSave = async () => {
        try {
            const payload = {
                email: senderEmail, 
                content: {
                    subject: mailTitle,
                    body: content,
                },
            };
            console.log("전송할 데이터:", payload);
            await saveMail(payload);

            alert('임시 메일 저장 성공!');
        } catch(error) {
            console.log('메일 저장 실패', error.message);
        }
    };

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
            setIsMailSent(true);
        } catch  {
            alert('메일 전송 실패');
        }
    };

    const handleFeedback = async () => {
        setShowModal(false);
        try{
            const {refinedContent} = await postAIFeedback(content);
            setAiFeedback(refinedContent);
        } catch {
            alert('AI 피드백 실패');
        }
    };

    return(
        <>
        <EditorContainer>
            <TopArea>
                <InputWrapper>
                    <Label>발신자 입력 :</Label>
                    <Input 
                        placeholder="발신자 이메일 입력"
                        onChange={(e) => setRecipientEmail(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>제목 :</Label>
                    <Input 
                        placeholder="메일 입력"
                        onChange={(e) => setMailTitle(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>수신자 입력 :</Label>
                    <Input 
                        placeholder="수신자 이메일 입력"
                        value={senderEmail}
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
                    <FileInput width="1200px" onFileSelect={setAttachments} />
                </BottomLeft>
                <BottomRight>
                    <SubmitBtn onSave={handleSave} onSend={openModal} />
                </BottomRight>
            </BottomArea>
        </EditorContainer>

        {showModal && (
            <AIPopUp
                onClose={() => setShowModal(false)}
                onSend={handleSend}
                onFeedback={handleFeedback}
            />    
        )}
        </>
    );
};

export default MailEditor;

export const SuccessWrapper = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`