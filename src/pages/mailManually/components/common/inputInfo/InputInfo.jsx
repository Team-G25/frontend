import { StyledContainer, TextGroup, StyledLabel, StyledInput } from "./index.style";

const InputInfo = ({ toRef, subjectRef, fromRef }) => {
    return (
        <StyledContainer>
            <TextGroup>
                <StyledLabel htmlFor="to">받는 사람:</StyledLabel>
                <StyledInput
                    id="to"
                    name="to"
                    type="text"
                    ref={toRef}
                    placeholder="수신자 이메일 입력"
                />
            </TextGroup>
            <TextGroup>
                <StyledLabel htmlFor="subject">제목:</StyledLabel>
                <StyledInput
                    id="subject"
                    name="subject"
                    type="text"
                    ref={subjectRef}
                    placeholder="메일 제목 입력"
                />
            </TextGroup>
            <TextGroup>
                <StyledLabel htmlFor="from">보낸 사람:</StyledLabel>
                <StyledInput
                    id="from"
                    name="from"
                    type="text"
                    ref={fromRef}
                    placeholder="발신자 이메일 입력"
                />
            </TextGroup>
        </StyledContainer>
    );
};

export default InputInfo;