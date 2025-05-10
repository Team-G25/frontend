import styled from "styled-components";
import theme from "@/styles/theme";

export const TopContainer = styled.div`
    display: flex;
    justify-content: left;
    position: relative
    height: 30px;
    width: 1200px;
    user-select: none; 
`;

export const TitleFrame = styled.div`
    left: 0;
    top: 0;
    width: 900px;
    postion: absolute;
    background-color: ${theme.colors.pink_hover};

    font-family: ${theme.font.basic};
    font-size: ${theme.font.size.medium};
    color: ${theme.colors.black1};
`;

export const DateFrame = styled.div`
    left: 0;
    top: 0;
    width: 300px;
    background-color: ${theme.colors.red};

    font-family: ${theme.font.basic};
    font-size: ${theme.font.size.medium};
    color: ${theme.colors.white};
`;