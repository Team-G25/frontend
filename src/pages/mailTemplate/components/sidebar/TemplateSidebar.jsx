import TargetBtn from '@components/common/targetButton/TargetBtn';
import SelectKeywordStudent from '@/components/common/select/forStudent/SelectKeyword';
import SelectKeywordWorker from '@/components/common/select/forWorker/SelectKeyword';

import {
  SidebarContainer,
  SectionTitle,
  TargetBox,
  KeywordContainer,
} from './index.style';

const TemplateSidebar = ({
  selectedTarget,
  setSelectedTarget,
  selectedKeyword,
  setSelectedKeyword,
  selectedDetail,
  setSelectedDetail,
}) => {
  return (
    <SidebarContainer>
      <SectionTitle>템플릿</SectionTitle>
      <TargetBox>
        <TargetBtn selected={selectedTarget} onSelect={setSelectedTarget} />
      </TargetBox>
      <KeywordContainer>
        {selectedTarget === '학생' ? (
          <SelectKeywordStudent
            selectedKeyword={selectedKeyword}
            setSelectedKeyword={setSelectedKeyword}
            selectedDetail={selectedDetail}
            setSelectedDetail={setSelectedDetail}
          />
        ) : (
          <SelectKeywordWorker
            selectedKeyword={selectedKeyword}
            setSelectedKeyword={setSelectedKeyword}
            selectedDetail={selectedDetail}
            setSelectedDetail={setSelectedDetail}
          />
        )}
      </KeywordContainer>
    </SidebarContainer>
  );
};

export default TemplateSidebar;
