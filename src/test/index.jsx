// 컴포넌트 테스트 용
import { ComponentSection, SubTitle, Spacing } from './index.style';
import StudentSelectKeyword from '@components/common/selectKeyword/forStudent/SelectKeyword';
import WorkerSelectKeyword from '@components/common/selectKeyword/forWorker/SelectKeyword';

import AISubmitBtn from '@/components/common/aiSubmitButton/AISubmitBtn';
import TargetBtn from '@components/common/targetButton/TargetBtn';

const index = () => {
  return (
    <>
      <ComponentSection>
        <SubTitle>키워드 선택 (학생) </SubTitle>
        <StudentSelectKeyword />
      </ComponentSection>
      <ComponentSection>
        <SubTitle>키워드 선택 (직장인) </SubTitle>
        <WorkerSelectKeyword />
      </ComponentSection>

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
