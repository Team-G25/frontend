import { useState } from 'react';
import { ButtonContainer, StyledButton } from './index.style';

const SubmitBtn = ({ onSave, onSend }) => {
    const [selected, setSelected] = useState(null);

    const handleClick = (type) => {
        setSelected(type);
        if(type=='임시저장'){
            onSave();
        } else if(type=='보내기'){
            onSend();
        }
    }

    return(
        <>
            <ButtonContainer>
                <StyledButton
                  $isSelected={selected === '임시저장'}
                  onClick={() => handleClick('임시저장')}
                >
                    임시저장
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

export default SubmitBtn