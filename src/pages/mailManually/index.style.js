//직접 작성 입력구간, 버튼구간 위치 조절하는 페이지입니다.
import styled from "styled-components";
import theme from "@/styles/theme";

//페이지 배경
export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

//컨텐츠 컨테이너(사이드바 합치기 위하여 입력구간 분리)
export const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 20px;
  overflow-y: auto;
  border-left: 2px solid ${theme.colors.gray1};
  margin: 0 auto;
`;
