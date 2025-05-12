import {
  ModalContainer,
  Title,
  ButtonContainer,
  Button,
  Overlay,
} from './index.style';
import { useNavigate } from 'react-router-dom';

const SaveAlert = ({ onClose, draftFailed }) => {
  const navigate = useNavigate();

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Title>
          {draftFailed
            ? '이미 임시저장이 되어 있습니다.'
            : '메일이 임시저장 되었습니다!'}
        </Title>
        <ButtonContainer>
          <Button onClick={() => navigate('/mailTemporary')}>
            임시보관함에서 확인하기
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default SaveAlert;
