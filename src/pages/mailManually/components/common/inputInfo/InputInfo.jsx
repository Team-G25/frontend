import { StyledContainer, TextGroup, StyledLabel, StyledInput } from "./index.style";

const InputInfo = ({mailData, onChange}) => {
    return (
        <StyledContainer>
            <TextGroup>
                <StyledLabel htmlFor="to">받는 사람:</StyledLabel>
                <StyledInput
                    id="to"
                    name="to"
                    type="text"
                    value={mailData.to}
                    onChange={onChange}
                />
            </TextGroup>
            <TextGroup>
                <StyledLabel htmlFor="subject">제목:</StyledLabel>
                <StyledInput
                    id="subject"
                    name="subject"
                    type="text"
                    value={mailData.subject}
                    onChange={onChange}
                />
            </TextGroup>
            <TextGroup>
                <StyledLabel htmlFor="from">보낸 사람:</StyledLabel>
                <StyledInput
                    id="from"
                    name="from"
                    type="text"
                    value={mailData.from}
                    onChange={onChange}
                />
            </TextGroup>
        </StyledContainer>
    );
};

export default InputInfo;