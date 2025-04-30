import { useState } from "react";
import { StyledFrame, StyledGroup, MailDate, MailTitle } from "./index.style";

const MailButton = ({mailTitle, mailDate}) => {
    const [selected, setSelected] = useState(null);

    const handleClick = (type) => {
        if (selected === type){
            setSelected(null);
        }else{
        setSelected(type);
        }
        console.log("클릭됨")
    }

    return(
        <StyledFrame
            $isSelected={selected === '메일'} 
            onClick={() => handleClick('메일')}
        >
            <StyledGroup>
                <MailTitle>{mailTitle}</MailTitle>
                <MailDate>{mailDate}</MailDate>
            </StyledGroup>
        </StyledFrame>
    );
};

export default MailButton;