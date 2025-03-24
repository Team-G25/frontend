import { Title, ButtonContainer, StyledButton } from './index.style';

const TargetBtn = ({ selected, onSelect }) => {
  return (
    <>
      <Title>대상</Title>
      <ButtonContainer>
        <StyledButton
          $isSelected={selected === '학생'}
          onClick={() => onSelect('학생')}
        >
          학생
        </StyledButton>
        <StyledButton
          $isSelected={selected === '직장인'}
          onClick={() => onSelect('직장인')}
        >
          직장인
        </StyledButton>
      </ButtonContainer>
    </>
  );
};

export default TargetBtn;
