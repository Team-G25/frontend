import { StyledFrame, Textarea } from "./index.style";

const MailWrite = ({label, bodyRef}) => {
    return(
        <StyledFrame>
            <Textarea 
            label={label} 
            id="body"
            name="body"
            ref={bodyRef}
            placeholder="메일 본문을 입력하세요" 
             />
        </StyledFrame>
    );
};

export default MailWrite