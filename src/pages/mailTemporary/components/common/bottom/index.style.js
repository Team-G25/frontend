import styled from "styled-components";
import theme from "@/styles/theme";

export const BottomContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;

    width: 1200px;
    height: 668px;
    position: relative;

    font-family: ${theme.font.family.basic};
    font-size: ${theme.font.size.large};
    color: ${theme.colors.black1};
    text-align: center;

    user-select: none; 
`;


