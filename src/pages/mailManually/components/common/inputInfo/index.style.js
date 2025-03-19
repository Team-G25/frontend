import styled from "styled-components";
import theme from "@/styles/theme";


export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    height: 202px;
    width: 1096px;
    border-radius: 12px;
    justify-content: space-evenly;
    background-color: ${theme.colors.white1}
`;

export const TextGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    border-bottom: 1px solid ${theme.colors.gray2};
`;

export const StyledLabel = styled.label`
    font-size: ${theme.font.size.medium};
    color: ${theme.colors.black2};
    min-width: 100px;
`;

export const StyledInput = styled.input`
    flex: 1;
    font-family: ${theme.font.basic}
    font-size: ${theme.font.size.medium}
    color: ${theme.colors.black2}
    height: 40px;
    background-color: transparent;

    &:focus{
        outline: none;
    }
`;