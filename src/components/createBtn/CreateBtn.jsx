import { StyledButton } from "./index.style";

const CreateBtn = (onclick) => {
    return(
        <StyledButton onclick={onclick}>
            생성하기
        </StyledButton>
    );
};

export default CreateBtn