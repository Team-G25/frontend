import { Overlay, ModalContainer, Title, ButtonContainer, Button } from "./index.style";

const DeleteModal = ({onClose, onConfirm}) => { 
    return (
        <Overlay>
            <ModalContainer>
                <Title>선택된 메일을 삭제하시겠습니까?</Title>
                <ButtonContainer>
                    <Button onClick={onClose}>닫기</Button>
                    <Button onClick={onConfirm}>삭제하기</Button>
                </ButtonContainer>
            </ModalContainer>
        </Overlay>
    );
};

export default DeleteModal;