import { StyledFrame, TitleFrame, DateFrame } from "./index.style";

const MailButton = ({mailTitle, mailDate, isSelected, onClick, onEdit}) => {
    const handleClick = () => {
        onClick();

        if(isSelected && onEdit){
            onEdit();
        }
    };

    return(
        <StyledFrame $isSelected={isSelected} onClick={handleClick}>
            <TitleFrame>{mailTitle}</TitleFrame>
            <DateFrame>{mailDate}</DateFrame>
        </StyledFrame>
    );
};

export default MailButton;