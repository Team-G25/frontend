// 컴포넌트 테스트 용
import { ComponentSection, SubTitle } from './index.style';
import StudentSelectKeyword from '@components/common/selectKeyword/forStudent/SelectKeyword';
import WorkerSelectKeyword from '@components/common/selectKeyword/forWorker/SelectKeyword';

import AISubmitBtn from '@/components/common/aiSubmitButton/AISubmitBtn';

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
        <SubTitle>AI 생성 전송 버튼</SubTitle>
        <AISubmitBtn />
      </ComponentSection>
    </>
  );
};

export default index;
