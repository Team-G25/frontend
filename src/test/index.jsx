// 컴포넌트 테스트 용
import { ComponentSection, SubTitle } from './index.style';
import AISubmitBtn from '@/components/common/aiSubmitButton/AISubmitBtn';

const index = () => {
  return (
    <ComponentSection>
      <SubTitle>AI 생성 전송 버튼</SubTitle>
      <AISubmitBtn />
    </ComponentSection>
  );
};

export default index;
