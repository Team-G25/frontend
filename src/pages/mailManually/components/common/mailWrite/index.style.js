import styled from "styled-components";
import theme from "@/styles/theme";

export const StyledFrame = styled.textarea`
    display: flex;
    background-color: ${theme.colors.white1};
    height: 409px;
    width: 1096px;
    border-radius: 12px;
    position: relative;

    color : ${theme.colors.black2};
    font-family : ${theme.font.basic};
    font-size :  ${theme.font.size.medium};
    font-weight : ${theme.font.weight.light};

    max-height: 409px;
    overflow-y: hidden; 
    scroll: none;
    resize: none; 
    padding: 12px; 
    box-sizing: border-box; 

`;

