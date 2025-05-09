import { useState } from 'react';
import { ButtonContainer, StyledButton } from './index.style';

const SubmitCancelBtn = ({ onCancel, onSend }) => {
    const [selected, setSelected] = useState(null);

    const handleClick = (type) => {
        setSelected(type);
        if(type=='취소하기'){
            onCancel();
            console.log("취소하기 버튼 클릭.");
        } else if(type=='보내기'){
            onSend();
            console.log("보내기 버튼 클릭.");
        }
    }

    return(
        <>
            <ButtonContainer>
                <StyledButton
                  $isSelected={selected === '취소하기'}
                  onClick={() => handleClick('취소하기')}
                >
                    취소하기
                </StyledButton>
                <StyledButton
                  $isSelected={selected == '보내기'}
                  onClick={() => handleClick('보내기')}
                >
                    보내기
                </StyledButton>
            </ButtonContainer>
        </>
    )
};

export default SubmitCancelBtn