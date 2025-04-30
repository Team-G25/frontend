//임시메일 보관함목록 전체삭제 버튼입니다.
import { ButtonContainer, StyledButton } from "./index.style";

const TopButton = ({onDelete}) => {    
    
    const handleClick = () => {
        if(onDelete) {
            onDelete();
        }
    }
    return(
        <ButtonContainer>
            <StyledButton onClick={handleClick}>
            전체삭제
            </StyledButton>
        </ButtonContainer>
    );
};

export default TopButton;