import styled from "styled-components";
import theme from "@/styles/theme";

export const TopContainer = styled.div`
    position: relative
    height: 27px;
    weight: 825px;
`;

export const TitleFrame = styled.div`
    left: 0;
    top: 0;
    width: 692px;
    postion: absoulte;
    background-color: ${theme.colors.pink_hover};

    font-family: ${theme.font.basic};
    font-size: ${theme.font.size.small};
    font-color: ${theme.colors.black1};
`;

export const DateFrame = styled.div`
    left: 0;
    top: 0;
    width: 133px;
    postion: absoulte;
    background-color: ${theme.colors.red};

    font-family: ${theme.font.basic};
    font-size: ${theme.font.size.small};
    font-color: ${theme.colors.black1};
`;