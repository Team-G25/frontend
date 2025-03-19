import { StyledButton, ButtonContainer, StyledFrame, File, Photo } from "./index.style";

const FileInput2 = () => {
    return(
        <StyledFrame>
            <ButtonContainer>
                <StyledButton onClick={onclick}>
                    <Photo />
                </StyledButton>
                <StyledButton onClick={onclick}>
                        <File />
                </StyledButton>
            </ButtonContainer>
        </StyledFrame>
    )
};

export default FileInput2;

