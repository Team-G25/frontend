//입력구간, 버튼구간 위치 조절하는 페이지입니다.
import styled from "styled-components";

//페이지 배경
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  padding: 20px;
`;

//입력구간
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px; /* 각 필드 간 간격 */
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  margin-left: auto;
`;

//버튼구간
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 세로 정렬 */
  padding-top: 20px;
`;