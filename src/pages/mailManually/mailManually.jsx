import { useState, useRef } from "react";
import { PageContainer, MainContent, FormContainer, BottomContainer } from "./index.style";
import InputInfo from "./components/common/inputInfo/InputInfo";
import MailWrite from "./components/common/mailWrite/MailWrite";
import FileInput from "@/components/common/fileInput/FileInput";
import SubmitBtn from "@/components/common/submitBtn/SubmitBtn";
import Sidebar from "@/components/common/sideBar/SideBar";
import Modal from '@components/common/aiPopUp/AIPopUP';

const MailManually = () => {
    const [showModal, setShowModal] = useState(false);
    
    // useRef로 각 입력값을 참조
    const toRef = useRef(null);
    const subjectRef = useRef(null);
    const fromRef = useRef(null);
    const bodyRef = useRef(null);

    const handleSave = () => {
        console.log("임시저장:", {
            to: toRef.current.value,
            subject: subjectRef.current.value,
            from: fromRef.current.value,
            body: bodyRef.current.value,
        });
        // 메일 임시저장 로직
    };

    const handleSend = () => {
        console.log("메일 전송:", {
            to: toRef.current.value,
            subject: subjectRef.current.value,
            from: fromRef.current.value,
            body: bodyRef.current.value,
        });
        setShowModal(true);
        // 메일 전송 로직
    };

    const handleClose = () => {
        setShowModal(false);
        console.log("모달 닫습니다.");
    };

    return (
        <>
            <PageContainer>
                <Sidebar />
                <MainContent>
                    <FormContainer>
                        <InputInfo 
                            toRef={toRef} 
                            subjectRef={subjectRef} 
                            fromRef={fromRef} 
                        />
                        <MailWrite 
                            label="내용 입력"
                            bodyRef={bodyRef}
                        />
                        <BottomContainer>
                            <FileInput width="1340px" />
                            <SubmitBtn onSave={handleSave} onSend={handleSend} />
                        </BottomContainer>
                    </FormContainer>
                </MainContent>
            </PageContainer>

            {showModal && <Modal onClose={handleClose} />}
        </>
    );
};

export default MailManually;
