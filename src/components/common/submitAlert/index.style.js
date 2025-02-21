import styled from "styled-components";
import theme from "@/styles/theme";

export const SytledScreen = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 70px;
    position: relative;
    width: 592px;
`;

export const Title = styled.h1`
    font-family: ${theme.font.basic};
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.black2};
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 58px;
    width: 148px;
    position: relative;

    font-family: ${theme.font.basic};
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.weight.medium};
    
    border-radius: 12.21px;
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};

    &:hover {
        background-color: ${theme.colors.red_hover};
        font-weight: ${theme.font.weight.bold};
    }
`;