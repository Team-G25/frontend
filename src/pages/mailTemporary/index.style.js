//임시보관함 페이지 레이아웃 전반을 다루는 페이지입니다.
import styled from "styled-components";
import theme from "@/styles/theme";

//페이지 배경
export const PageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;

//메일 컨테이너(사이드바 합치기 위해 입력구간 분리)
export const MainContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;

    height: 100vh;
    overflow-y: auto;

    border-left: 2px solid ${theme.colors.gray1};
`;