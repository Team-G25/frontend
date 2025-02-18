// 컴포넌트 테스트 용
import { ComponentSection, Spacing, SubTitle } from './index.style';
import TargetBtn from '@components/common/targetButton/TargetBtn';
import AISubmitBtn from '@components/common/aiSubmitButton/AISubmitBtn';

const index = () => {
  return (
    <>
      <ComponentSection>
        <SubTitle>대상 버튼(학생/직장인)</SubTitle>
        <Spacing />
        <TargetBtn />
      </ComponentSection>
      <ComponentSection>
        <SubTitle>AI 생성 전송 버튼</SubTitle>
        <Spacing />
        <AISubmitBtn />
      </ComponentSection>
    </>
  );
};

export default index;
