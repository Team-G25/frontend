import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Sidebar from '@components/common/sidebar/Sidebar';
import TemplateSidebar from './components/templateSidebar/TemplateSidebar';
import MailEditor from './components/mailEditor/MailEditor';

const TemplatePage = () => {
  const [selectedTarget, setSelectedTarget] = useState('학생');
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [selectedDetail, setSelectedDetail] = useState('');
  const [templateContent, setTemplateContent] = useState('');

  const isKeywordSelected = selectedKeyword && selectedDetail;

  useEffect(() => {
    if (isKeywordSelected) {
      // 임시 템플릿 내용
      setTemplateContent(`
        안녕하세요 [교수님 이름],
        저는 [학과명] [학번] [본인이름]입니다.

        다름이 아니라, [상황 설명]으로 인해 수업에 참석하지 못할 것 같습니다.
        다른 날짜로 조정이 불가피한 상황이라, 출석 인정 받을 수 있는 다른 방법이 있을 지 문의 드립니다.
        출석 인정이 가능하다면 관련 서류를 발급 받을 수 있는지 확인해보고자 합니다.

        항상 좋은 수업 감사합니다!
        [본인이름] 드림
      `);
    }
  }, [isKeywordSelected]);

  return (
    <PageWrapper>
      <Sidebar />
      <ContentWrapper>
        <TemplateSidebar
          selectedTarget={selectedTarget}
          setSelectedTarget={setSelectedTarget}
          selectedKeyword={selectedKeyword}
          setSelectedKeyword={setSelectedKeyword}
          selectedDetail={selectedDetail}
          setSelectedDetail={setSelectedDetail}
        />
        {isKeywordSelected && <MailEditor templateContent={templateContent} />}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default TemplatePage;

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;
