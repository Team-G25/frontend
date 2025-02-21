// 컴포넌트 테스트 용 페이지
import { useState } from 'react';
import { ComponentSection, Spacing, SubTitle } from './index.style';
import TargetBtn from '@components/common/targetButton/TargetBtn';

import StudentSelectKeyword from '@components/common/selectKeyword/forStudent/SelectKeyword';
import WorkerSelectKeyword from '@components/common/selectKeyword/forWorker/SelectKeyword';

import AISubmitBtn from '@components/common/aiSubmitButton/AISubmitBtn';
import Modal from '@components/common/aiPopUp/AIPopUP';

import CreateBtn from '@/components/common/createBtn/CreateBtn';
import SubmitBtn from '@/components/common/submitBtn/SubmitBtn';
import SubmitAlert from '@/components/common/submitAlert/SubmitAlert';
import FileInput from '@/components/common/fileInput/FileInput';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ComponentSection>
        <SubTitle>파일 입출력 </SubTitle>
        <Spacing />
        <FileInput />
      </ComponentSection>
      
      <ComponentSection>
        <SubTitle>메일 전송 성공 알림 </SubTitle>
        <Spacing />
        <SubmitAlert />
      </ComponentSection>

      <ComponentSection>
        <SubTitle>메일 전송 버튼들 </SubTitle>
        <Spacing />
        <SubmitBtn />
      </ComponentSection>
      
      <ComponentSection>
        <SubTitle>생성하기 버튼 </SubTitle>
        <Spacing />
        <CreateBtn />
      </ComponentSection>

      <ComponentSection>
        {/* 클릭 시 모달 열기 */}
        <SubTitle onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
          AI 피드백 팝업창
        </SubTitle>
        <Spacing />
        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </ComponentSection>

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

export default Index;
