import { StyledButton, ButtonContainer, StyledFrame, File, Photo } from "./index.style";

const FileInput = ({width, onclick}) => {
    return (
        <StyledFrame width={width}>
            <ButtonContainer>
                <StyledButton onclick={onclick}>
                    <Photo />
                </StyledButton>
                <StyledButton onclick={onclick}>
                    <File />
                </StyledButton>
            </ButtonContainer>
        </StyledFrame>

    );
};

export default FileInput