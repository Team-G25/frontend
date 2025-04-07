import styled from "styled-components";
import theme from "@/styles/theme";

export const StyledFrame = styled.div`
    width: 823px;
    height: 56px;
    background-color: ${({ $isSelected}) =>
        $isSelected? theme.colors.gray1 : theme.colors.white1};
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    padding: 0 16px;

    border-radius: 8px;
    box-sizing: border-box;
    transition: background-color 0.2s ease;
`;

export const StyledGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const MailTitle = styled.div`
    color: ${theme.colors.black1};
    font-family: ${theme.font.family};
    font-size: 15.3px;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 600px;
`;

export const MailDate = styled.div`
    color: ${theme.colors.black1};
    font-family: ${theme.font.family};
    font-size: 15.3px;
    font-weight: 300;
    text-align: center;
    width: 120px;
    flex-shrink: 0;
`;