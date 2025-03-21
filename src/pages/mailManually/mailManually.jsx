// 수동 작성 테스트 페이지입니다.
import { useState } from "react";
import { PageContainer, FormContainer, BottomContainer } from "./index.style";
import InputInfo from "./components/common/inputInfo/InputInfo";
import MailWrite from "./components/common/mailWrite/MailWrite";
import FileInput from "@/components/common/fileInput/FileInput";
import SubmitBtn from "@/components/common/submitBtn/SubmitBtn";


const MailManually = () => {
    const [mailData, setMailData] = useState({
        to: "",
        subject: "",
        from: "",
        body: "",
    })

    const [errors, setErrors] = useState({
        to: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMailData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "to") {
            validateEmail(value); // 이메일 입력 시 유효성 검사
        }
    }


    const validateEmail = (email) => { // 유효성 검사해주는 함수
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailRegex.test(email)) {
            setErrors((prev) => ({ ...prev, to: "유효한 이메일 주소를 입력하세요." }));
        } else {
            setErrors((prev) => ({ ...prev, to: "" })); // 에러 메시지 초기화
        }
    };
    
    const handleSave = () => {
        console.log("임시저장:", mailData);
    }

    const handleSend = () => {
        const formData = new FormData();
        formData.append('to', mailData.to);
        formData.append('subject', mailData.subject);
        formData.append('from', mailData.from);
        formData.append('body', mailData.body);

        console.log('보내기', formData);
    }
    

    return(
        <PageContainer>
            <FormContainer>
                <InputInfo mailData={mailData} onChange={handleChange} />
                {errors.to && <p style={{ color: "red" }}>{errors.to}</p>}
                <MailWrite 
                    label = "내용 입력"
                    id = "body"
                    name = "body"
                    value = {mailData.body}
                    onChange={handleChange}
                />
                <BottomContainer>
                    <FileInput width="822px"/>
                    <SubmitBtn onSave={handleSave} onSend={handleSend}/>
                </BottomContainer>
            </FormContainer>
        </PageContainer>
    );
};

export default MailManually;