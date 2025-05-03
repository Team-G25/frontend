import styled from "styled-components";
import theme from "@/styles/theme";

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 100px;
    width: 1200px;
    height: 60px;
    flex-shrink: none;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;    

    width: 100px;
    height: 40px;

    border: ${({$isSelected}) =>
        $isSelected? 'none' : `2px solid ${theme.colors.red}`};
    border-radius: 8px;
    background-color: ${({ $isSelected}) => 
        $isSelected? theme.colors.red : theme.colors.white};
    font-family : ${theme.font.family};
    font-size: ${theme.font.size.regular};
    font-weight: ${theme.font.weight.bold};
    color: ${({$isSelected}) =>
        $isSelected? theme.colors.white : theme.colors.red};

    &:hover {
        background-color: ${theme.colors.red_hover};
        color: ${theme.colors.white};
    }
`;