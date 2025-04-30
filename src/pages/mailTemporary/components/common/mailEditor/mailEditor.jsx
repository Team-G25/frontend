import { useState } from "react";
import {
    EditorContainer,
    MainArea,
    Textarea,
    BottomArea,
    BottomLeft,
    BottomRight,
  } from './index.style';
  
import FileInput from '@components/common/fileInput/FileInput';
import SubmitBtn from '@components/common/submitBtn/SubmitBtn';
import { writeDraft } from "@/apis/temporary/writeDraft";

const MailEditor = ({email, draftTitle}) => {
    const [content, setContent] = useState('');
    
    const handleSend = async () => {
        try {
            const result = await writeDraft({
                email,
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
                <MainArea>
                    <Textarea
                        value={draftTitle}
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