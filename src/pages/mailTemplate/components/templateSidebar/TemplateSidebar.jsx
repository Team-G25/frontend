import { useState } from 'react';
import TargetBtn from '@components/common/targetButton/TargetBtn';
import SelectKeywordStudent from '@components/common/selectKeyword/forStudent/SelectKeyword';
import SelectKeywordWorker from '@components/common/selectKeyword/forWorker/SelectKeyword';

import {
  SidebarContainer,
  SectionTitle,
  TargetBox,
  KeywordContainer,
} from './index.style';

const TemplateSidebar = () => {
  const [selectedTarget, setSelectedTarget] = useState('학생'); // 기본값: 학생

  return (
    <SidebarContainer>
      <SectionTitle>템플릿</SectionTitle>
      <TargetBox>
        <TargetBtn selected={selectedTarget} onSelect={setSelectedTarget} />
      </TargetBox>
      <KeywordContainer>
        {selectedTarget === '학생' ? (
          <SelectKeywordStudent />
        ) : (
          <SelectKeywordWorker />
        )}
      </KeywordContainer>
    </SidebarContainer>
  );
};

export default TemplateSidebar;
