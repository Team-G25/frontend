import styled from "styled-components";
import theme from "@/styles/theme";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.white};
    background-color: ${theme.colors.red};

    border-radius: 8px;
    height: 38px;
    width: 96px;

    &:hover {
        background-color: ${theme.colors.red_hover};
        font-weight: ${theme.font.weight.bold};
    }
`;