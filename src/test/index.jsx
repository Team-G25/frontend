// 컴포넌트 테스트 용
import { ComponentSection, SubTitle } from './index.style';
import Button from '@components/common/Button/Button';

const index = () => {
  return (
    <ComponentSection>
      <SubTitle>AI 생성 전송 버튼</SubTitle>
      <Button />
    </ComponentSection>
  );
};

export default index;
