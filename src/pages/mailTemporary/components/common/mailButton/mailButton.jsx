import { StyledFrame, StyledGroup, MailDate, MailTitle } from "./index.style";

const MailButton = ({mailTitle, mailDate, onClick}) => {
    return(
        <StyledFrame onClick={onClick}>
            <StyledGroup>
                <MailTitle>{mailTitle}</MailTitle>
                <MailDate>{mailDate}</MailDate>
            </StyledGroup>
        </StyledFrame>
    );
};

export default MailButton;