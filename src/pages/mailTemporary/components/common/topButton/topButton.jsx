import { useState } from "react";
import { ButtonContainer, StyledButton } from "./index.style";

const TopButton = () => {
    const [selected, setSelected] = useState(null);
    
    const handleClick = (type) => {
        setSelected(type);
        if(type=='전체선택'){
            alert("전체 선택 누르셨습니다.")
        }else if(type=='삭제'){
            alert("삭제 누르셨습니다.")
        }
    }
    return(
        <ButtonContainer>
            <StyledButton 
                $isSelected={selected === '전체선택'}
                onClick={() => handleClick('전체선택')}>
                전체 선택
            </StyledButton>
            <StyledButton 
                $isSelected={selected === '삭제'}
                onClick={() => handleClick('삭제')}>
                삭제
            </StyledButton>
        </ButtonContainer>
    );
};

export default TopButton;