import styled from "styled-components";
import theme from "@/styles/theme";

export const ButtonContainer = styled.section`
    display: flex;
    width: 254px;
    height: 64px;
    gap: 12px;
`;

export const StyledButton = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.weight.bold};
    
    background-color: ${({ $isSelected}) => 
        $isSelected? theme.colors.red : theme.colors.white};
    color: ${({$isSelected}) =>
        $isSelected? theme.colors.white : theme.colors.red};
    border: ${({$isSelected}) =>
        $isSelected? 'none' : `2px solid ${theme.colors.red}`};
    
    border-radius: 47px;
    height: 51px;
    width: 121px;
    
    &:hover {
        background-color: ${theme.colors.red_hover};
        border-color: ${theme.colors.red_hover};
        color: ${theme.colors.white};
    }
`;