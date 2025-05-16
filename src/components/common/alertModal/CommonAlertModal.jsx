import { ModalOverlay, SytledScreen, Title, StyledButton } from './index.style';

const AlertModal = ({ title, buttonText, onButtonClick }) => {
  return (
    <ModalOverlay>
      <SytledScreen>
        <Title>{title}</Title>
        <StyledButton onClick={onButtonClick}>{buttonText}</StyledButton>
      </SytledScreen>
    </ModalOverlay>
  );
};

export default AlertModal;
