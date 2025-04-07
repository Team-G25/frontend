import { useState } from "react";
import { StyledFrame, StyledGroup, MailDate, MailTitle } from "./index.style";

const MailButton = () => {
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
                <MailTitle>[알고리즘 분석] 금일 수업 불참</MailTitle>
                <MailDate>24.10.09</MailDate>
            </StyledGroup>
        </StyledFrame>
    );
};

export default MailButton;