import { useState, useEffect } from "react";
import { fetchDrafts, deleteAllDrafts } from "@/apis/temporary/temporaryDrafts";
import { PageContainer, MainContent } from "./index.style";
import TopButton from "./components/common/topButton/topButton";
import Top from "./components/common/top/Top";
import Bottom1 from "./components/common/bottom/bottom1";
import MailButton from "./components/common/mailButton/mailButton";
import Sidebar from "@/components/common/sideBar/SideBar";

const MailTemporary = () => {
    const [drafts, setDrafts] = useState([]); //현재 페이지에서 보일 데이터
    const [isLoading, setIsLoading] = useState(false);
    
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
    
    //메일 전체 삭제
    const handleDelete = async (draftID) => {
        try {
            await deleteAllDrafts(draftID);
            setDrafts([]);
            console.log("모든 메일 삭제 완료");
        } catch (error) {
            console.error("전체 삭제 오류:", error);
        }
    };

    return (
        <PageContainer>
            <Sidebar />
            <MainContent>               
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
                                onClick={() => console.log("메일 상세 보기", draft)}
                            />
                        ))
                    )}
            </MainContent>
        </PageContainer>
    );
};

export default MailTemporary;
