import { useState, useEffect } from "react";
import { fetchDrafts, deleteAllDrafts, deleteDraft } from "@/apis/temporary/temporaryDrafts";
import { PageContainer, MainContent } from "./index.style";
import TopButton from "./components/common/topButton/topButton";
import Top from "./components/common/top/Top";
import Bottom1 from "./components/common/bottom/bottom1";
import MailButton from "./components/common/mailButton/mailButton";
import Sidebar from "@/components/common/sideBar/SideBar";
import MailEditor from "./components/common/mailEditor/MailEditor";
import DeleteModal from "./components/common/deletePopuUp/deletePopUp";

const MailTemporary = () => {
    const [drafts, setDrafts] = useState([]); //현재 페이지에서 보일 데이터
    const [editDraft, setEditDraft] = useState(null); //편집중 상태
    const [isLoading, setIsLoading] = useState(false); 
    const [showModal, setShowModal] = useState(false); //삭제 버튼 누를시 모달띄움
    const [selectedMailID, setSelectedMailID] = useState(null); //메일버튼 누를시 id값을 저장하게됩니다
    const [selectedMailContent, setSelectedMailContent] = useState(null); //메일버튼 누를시 id와 함께 내용도 저장하게됩니다                              

    //전체 메일 갖고오기
    useEffect(() =>{
        const loadAllDrafts = async () => {
            setIsLoading(true);
            try{
                const fetchedDrafts = await fetchDrafts();
                console.log("전체 임시 메일 데이터:", fetchedDrafts);
                setDrafts(fetchedDrafts || []);
            } catch(error){
                console.error("임시메일 로드 오류", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadAllDrafts();
    }, []);
    
    //메일 선택 핸들러
    const handleSelectedMail = (mailID, content) => {
        setSelectedMailID((prevId) => (prevId === mailID? null : mailID))
        setSelectedMailContent((prevId) => (prevId === mailID? null : content))
    }

    //삭제 누를시 모달창 띄우기
    const handleDelete = async () =>{
        setShowModal(true);
        console.log("모달창 띄웁니다.")
    };

    //메일 전체 삭제
    const handleAllDelete = async (draftID) => {
        try {
            await deleteAllDrafts(draftID);
            setDrafts([]);
            console.log("모든 메일 삭제 완료");
        } catch (error) {
            console.error("전체 삭제 오류:", error);
        } finally {
            setShowModal(false);
        };
    };

    //선택한 메일 삭제(단일 삭제) 
    const handleOneDelete = async () => {
        if(!selectedMailID) return;

        try{
            console.log("메일 삭제 시작합니다", selectedMailID);
            await deleteDraft(selectedMailID);
            setDrafts((prevDrafts) =>
                prevDrafts.filter((draft) => draft.id !== selectedMailID)
            );
            setSelectedMailID(null);
            setSelectedMailContent(null);
            console.log("메일 삭제 완료", selectedMailID);
        } catch (error) {
            console.log("메일 삭제 오류", error);
        }
    };

    //임시 메일 편집 상태설정
    const handleEdit = (mail) => {
        setEditDraft(mail);
    }

    //임시 메일 편집 상태해제
    const handleCancelEdit = () => {
        setEditDraft(null);
    }

    //모달 닫기
    const handleClose = () => {
        setShowModal(false);
        console.log("모달 닫습니다.");
    } 

    return (
        <PageContainer>
            <Sidebar />
            <MainContent> 
                {/* 편집중인 메일이 있으면 */}
                {editDraft ? (
                    <MailEditor
                        draft = {editDraft}
                        // onSave = {(updatedMail) => {
                        //     setDrafts((prevDrafts) =>
                        //         prevDrafts.map((draft) =>    
                        //             draft.id === updatedMail.id ? updatedMail : draft
                        //         )
                        //     );
                        //     setEditDraft(null);
                        // }}
                        onCancel = {handleCancelEdit}
                    />            
                ): (
                <>
                    <TopButton onDelete={handleDelete} />
                    <Top />
                    {drafts.length === 0 && !isLoading ? (
                        <Bottom1 />
                    ) : (
                        drafts.map((draft) => (
                            <MailButton
                                key={draft.id}
                                mailTitle={draft.content}
                                mailDate={draft.savedAt}
                                isSelected={selectedMailID === draft.id}
                                onClick={() => handleSelectedMail(draft.id, draft.content)}
                                onEdit={() => handleEdit(draft)}
                             />
                        ))
                    )}        
                </>            
            )}

            {/* MODAL screen */}
            {showModal && (
                <DeleteModal
                    onClose={handleClose}
                    onConfirm={() => {
                        if (selectedMailID) {
                            handleOneDelete();
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
