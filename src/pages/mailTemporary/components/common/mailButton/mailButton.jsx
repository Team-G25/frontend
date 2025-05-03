import { StyledFrame, TitleFrame, DateFrame } from "./index.style";

const MailButton = ({mailTitle, mailDate, onClick}) => {
    return(
        <StyledFrame onClick={onClick}>
            <TitleFrame>{mailTitle}</TitleFrame>
            <DateFrame>{mailDate}</DateFrame>
        </StyledFrame>
    );
};

export default MailButton;