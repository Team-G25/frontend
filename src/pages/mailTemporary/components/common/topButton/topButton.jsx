//임시메일 보관함목록 상단 버튼입니다.
import { ButtonContainer, StyledButton } from "./index.style";

const TopButton = ({onAllDelete, onDelete}) => {    
    
    const handleClick = () => {
        if(onAllDelete) {
            onAllDelete();
        } else {
            onDelete();
        }
    }
    return(
        <ButtonContainer>
            <StyledButton onClick={handleClick}>
                전체삭제
            </StyledButton>
            <StyledButton onClick={handleClick}>
                삭제
            </StyledButton>
        </ButtonContainer>
    );
};

export default TopButton;