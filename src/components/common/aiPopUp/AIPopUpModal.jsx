import {
  ModalContainer,
  Title,
  ButtonContainer,
  Button,
  Overlay,
} from './index.style';

const AIPopUp = ({ onClose, onSend, onFeedback }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Title>AI 피드백을 받으시겠어요?</Title>
        <ButtonContainer>
          <Button onClick={onSend}>메일 전송하기</Button>
          <Button onClick={onFeedback}>피드백 받기</Button>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default AIPopUp;
