import styled from "styled-components";
import theme from "@/styles/theme";

export const ButtonContainer = styled.div`
    display: flex;
    jsutify-content: space-between;
    width: 825px;
    height: 50px;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;    

    width: 96px;
    height: 38px;

    border: ${({$isSelected}) =>
        $isSelected? 'none' : `2px solid ${theme.colors.red}`};
    border-radius: 8px;
    background-color: ${({ $isSelected}) => 
        $isSelected? theme.colors.red : theme.colors.white};
    font-family : ${theme.font.family};
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.weight.bold};
    color: ${({$isSelected}) =>
        $isSelected? theme.colors.white : theme.colors.red};

    &:hover {
        background-color: ${theme.colors.red_hover};
        color: ${theme.colors.white};
    }
`;