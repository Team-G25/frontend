import { useState } from 'react';
import { ButtonContainer, StyledButton } from './index.style';

const SubmitBtn = () => {
    const [selected, setSelected] = useState(null);

    return(
        <>
            <ButtonContainer>
                <StyledButton
                  $isSelected={selected == '임시저장'}
                  onClick={() => setSelected('임시저장')}
                >
                    임시저장
                </StyledButton>
                <StyledButton
                  $isSelected={selected == '보내기'}
                  onClick={() => setSelected('보내기')}
                >
                    보내기
                </StyledButton>
            </ButtonContainer>
        </>
    )
};

export default SubmitBtn