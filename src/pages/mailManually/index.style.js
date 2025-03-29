//입력구간, 버튼구간 위치 조절하는 페이지입니다.
import styled from "styled-components";

//페이지 배경
export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

//컨텐츠 컨테이너(사이드바 합치기 위하여 입력구간 분리)
export const MainContent = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 20px;
`;

//입력구간#1
export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px; /* 각 필드 간 간격 */
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  margin-left: auto;
`;

//입력구간#2
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 세로 정렬 */
  padding-top: 20px;
`;