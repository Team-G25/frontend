import { useState, useEffect } from 'react';
import {
  fetchDrafts,
  deleteAllDrafts,
  deleteDraft,
} from '@/apis/temporary/temporaryDrafts';
import { PageContainer, MainContent } from './index.style';
import Bottom1 from './components/common/bottom/bottom1';
import Sidebar from '@/components/common/sideBar/SideBarComponent';
import MailEditor from '../mailTemporary/components/common/mailEditor/mailEditorComponent';
import TopButton from './components/common/topButton/topBtn';
import Top from './components/common/top/TopContent';
import MailButton from './components/common/mailButton/mailBtn';
import DeleteModal from './components/common/deletePopuUp/deletePopUpModal';

const MailTemporary = () => {
  const [drafts, setDrafts] = useState([]); // 현재 페이지에서 보일 데이터
  const [editDraft, setEditDraft] = useState(null); // 편집중 상태
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // 삭제 버튼 누를 시 모달 띄움
  const [selectedMailID, setSelectedMailID] = useState(null); // 메일버튼 누를 시 id값 저장

  // 전체 메일 가져오기
  useEffect(() => {
    const loadAllDrafts = async () => {
      setIsLoading(true);
      try {
        const fetchedDrafts = await fetchDrafts();
        console.log('전체 임시 메일 데이터:', fetchedDrafts);
        setDrafts(fetchedDrafts || []);
      } catch (error) {
        console.error('임시메일 로드 오류', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAllDrafts();
  }, []);

  // 메일 선택 핸들러
  const handleSelectedMail = (mailID) => {
    setSelectedMailID((prevId) => (prevId === mailID ? null : mailID));
  };

  // 삭제 누를 시 모달창 띄우기
  const handleDelete = async () => {
    setShowModal(true);
    console.log('모달창 띄웁니다.');
  };

  // 메일 전체 삭제
  const handleAllDelete = async (draftID) => {
    try {
      await deleteAllDrafts(draftID);
      setDrafts([]);
      console.log('모든 메일 삭제 완료');
    } catch (error) {
      console.error('전체 삭제 오류:', error);
    } finally {
      setShowModal(false);
    }
  };

  // 선택한 메일 삭제 (단일 삭제)
  const handleOneDelete = async (draftID) => {
    if (!draftID) return;

    try {
      console.log('메일 삭제 시작합니다', draftID);
      await deleteDraft(draftID);
      setDrafts((prevDrafts) =>
        prevDrafts.filter((draft) => draft.id !== draftID),
      );
      setSelectedMailID(null);
      console.log('메일 삭제 완료', draftID);
    } catch (error) {
      console.log('메일 삭제 오류', error);
    }
  };

  // 임시 메일 편집 상태 설정
  const handleEdit = (mail) => {
    setEditDraft(mail);
  };

  // 임시 메일 편집 상태 해제
  const handleCancelEdit = () => {
    setEditDraft(null);
  };

  // 모달 닫기
  const handleClose = () => {
    setShowModal(false);
    console.log('모달 닫습니다.');
  };

  // 메일 보내지면 해당 메일 삭제
  const handleMailSent = (sentDraftID) => {
    handleOneDelete(sentDraftID);
  };

  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        {editDraft ? (
          <MailEditor
            draft={editDraft}
            onCancel={handleCancelEdit}
            onMailSent={handleMailSent}
          />
        ) : (
          <>
            <TopButton onDelete={handleDelete} />
            <Top />
            {drafts.length === 0 && !isLoading ? (
              <Bottom1 />
            ) : (
              drafts.map((draft) => {
                let parsed = {};
                try {
                  // parsed = JSON.parse(draft.content);
                  parsed = draft.content;
                } catch (e) {
                  console.error('임시메일 파싱 오류:', draft.content);
                }

                return (
                  <MailButton
                    key={draft.id}
                    mailTitle={parsed.subject || '(제목 없음)'}
                    mailDate={draft.savedAt}
                    isSelected={selectedMailID === draft.id}
                    onClick={() => handleSelectedMail(draft.id)}
                    onEdit={() => handleEdit(draft)}
                  />
                );
              })
            )}
          </>
        )}

        {showModal && (
          <DeleteModal
            onClose={handleClose}
            onConfirm={() => {
              if (selectedMailID) {
                handleOneDelete(selectedMailID);
              } else {
                handleAllDelete();
              }
            }}
          />
        )}
      </MainContent>
    </PageContainer>
  );
};

export default MailTemporary;
