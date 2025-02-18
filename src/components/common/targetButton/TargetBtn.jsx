import { useState } from 'react';
import { ButtonContainer, StyledButton } from './index.style';

const TargetBtn = () => {
  const [selected, setSelected] = useState(null);

  return (
    <ButtonContainer>
      <StyledButton
        $isSelected={selected === '학생'}
        onClick={() => setSelected('학생')}
      >
        학생
      </StyledButton>
      <StyledButton
        $isSelected={selected === '직장인'}
        onClick={() => setSelected('직장인')}
      >
        직장인
      </StyledButton>
    </ButtonContainer>
  );
};

export default TargetBtn;
