import styled from "styled-components";
import theme from "@/styles/theme";

export const StyledFrame = styled.div`
    display: flex;
    width: 1200px;
    height: 56px;
    background-color: ${({ $isSelected}) =>
        $isSelected? theme.colors.gray1 : theme.colors.white1};
    cursor: pointer;
    user-select: none;
    flex-shrink: 0;
    overflow: hidden;
    align-items: center;
    box-sizing: border-box;
    transition: background-color 0.2s ease;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.gray1};
`;

export const TitleFrame = styled.div`
    width: 900px;
    color: ${theme.colors.black1};
    font-family: ${theme.font.family};
    font-size: 15.3px;
    font-weight: 300;
    overflow: hidden;
    padding-left: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const DateFrame = styled.div`
    width: 300px;
    color: ${theme.colors.black1};
    font-family: ${theme.font.family};
    font-size: 15.3px;
    font-weight: 300;
    text-align: center;
    align-items: center;
`;