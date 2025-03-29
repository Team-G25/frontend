import styled from "styled-components";
import theme from "@/styles/theme";

export const StyledFrame = styled.div`
    display: flex;
    background-color: ${theme.colors.white1};
    border-radius: 12px;
    flex-direction: column;
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 580px;
    border: none;
    border-radius: 12px;
    background-color: ${theme.colors.white1};
    padding: 24px;
    color : ${theme.colors.black2};
    font-family : ${theme.font.family.basic};
    font-size :  ${theme.font.size.sMedium};
    font-weight : ${theme.font.weight.regular};
    overflow-y: hidden; 
    scroll: none;
    resize: none; 
`;


