import { useState, useEffect } from "react";
import { fetchDrafts, deleteAllDrafts } from "@/apis/temporary/temporaryDrafts";
import { PageContainer, MainContent } from "./index.style";
import TopButton from "./components/common/topButton/topButton";
import Top from "./components/common/top/Top";
import Bottom1 from "./components/common/bottom/bottom1";
import MailButton from "./components/common/mailButton/mailButton";
import Sidebar from "@/components/common/sideBar/SideBar";
import MailEditor from "../mailTemplate/components/mailEditor/MailEditor";
import DeleteModal from "./components/common/deletePopuUp/deletePopUp";

const MailTemporary = () => {
    const [drafts, setDrafts] = useState([]); //현재 페이지에서 보일 데이터
    const [editDraft, setEditDraft] = useState(null); //편집중 상태
    const [isLoading, setIsLoading] = useState(false); 
    const [showModal, setShowModal] = useState(false); //삭제 버튼 누를시 모달띄움

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
    
    //메일 전체 삭제 누를시 모달창 띄우기
    const handleDelete = async () =>{
        setShowModal(true);
        console.log("모달창 띄웁니다.")
    };

    //메일 전체 삭제
    const handleConfirmDelete = async (draftID) => {
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
                        onSave = {(updatedMail) => {
                            setDrafts((prevDrafts) =>
                                prevDrafts.map((draft) =>    
                                    draft.id === updatedMail.id ? updatedMail : draft
                                )
                            );
                            setEditDraft(null);
                        }}
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
                                onClick={() => handleEdit(draft)}
                             />
                        ))
                    )}        
                </>            
            )}

            {/* MODAL screen */}
            {showModal && (
                <DeleteModal
                    onClose={handleClose}
                    onConfirm={handleConfirmDelete}
                />
            )}
            </MainContent>
        </PageContainer>
    );
};

export default MailTemporary;
