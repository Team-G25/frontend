import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Sidebar from '@components/common/sidebar/Sidebar';
import TemplateSidebar from './components/templateSidebar/TemplateSidebar';
import MailEditor from './components/mailEditor/MailEditor';

import { fetchTemplate } from '@apis/templete/fetchTemplete';

const TemplatePage = () => {
  const [selectedTarget, setSelectedTarget] = useState('학생');
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [selectedDetail, setSelectedDetail] = useState('');
  const [templateContent, setTemplateContent] = useState('');
  const [templateId, setTemplateId] = useState(null);

  const isKeywordSelected = selectedKeyword && selectedDetail;

  // 대상 변경 시 전체 초기화
  useEffect(() => {
    setSelectedKeyword('');
    setSelectedDetail('');
    setTemplateContent('');
    setTemplateId(null);
  }, [selectedTarget]);

  // 키워드 변경 시 세부 키워드 이하 초기화
  useEffect(() => {
    setSelectedDetail('');
    setTemplateContent('');
    setTemplateId(null);
  }, [selectedKeyword]);

  // 세부 키워드 변경 시 템플릿 초기화
  useEffect(() => {
    setTemplateContent('');
    setTemplateId(null);
  }, [selectedDetail]);

  // 템플릿 불러오기
  useEffect(() => {
    const loadTemplate = async () => {
      if (!isKeywordSelected) return;

      try {
        const result = await fetchTemplate({
          targetName: selectedTarget,
          keyword1: selectedKeyword,
          keyword2: selectedDetail,
        });

        if (result?.length > 0) {
          setTemplateContent(result[0].content);
          setTemplateId(result[0].templateId);
        } else {
          setTemplateContent('해당 템플릿을 찾을 수 없습니다.');
          setTemplateId(null);
        }
      } catch (err) {
        console.error(err);
        setTemplateContent('템플릿 불러오기에 실패했습니다.');
        setTemplateId(null);
      }
    };

    loadTemplate();
  }, [selectedTarget, selectedKeyword, selectedDetail, isKeywordSelected]);

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
        {isKeywordSelected && (
          <MailEditor
            templateContent={templateContent}
            setTemplateContent={setTemplateContent}
            templateId={templateId}
          />
        )}
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
