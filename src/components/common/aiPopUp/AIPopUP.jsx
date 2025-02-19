import {
  ModalContainer,
  Title,
  ButtonContainer,
  Button,
  Overlay,
} from './index.style';

const Modal = ({ onClose }) => {
  const handleButtonClick = () => {
    onClose();
  };

  return (
    <Overlay>
      <ModalContainer>
        <Title>AI 피드백을 받으시겠어요?</Title>
        <ButtonContainer>
          <Button onClick={handleButtonClick}>메일 전송하기</Button>
          <Button onClick={handleButtonClick}>피드백 받기</Button>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
