import instance from "../instance";

//임시로 저장한 메일 전체 조회하기
export const fetchDrafts = async () => {
    const response = await instance.get('/temporary/list');
    return response.data;
};

//메일 전체 삭제
export const deleteAllDrafts = async () => {
    const response = await instance.delete('/temporary/delete-all');
    return response.data;
};

//메일 단일 삭제
export const deleteDraft = async (id) => {
    const response = await instance.delete(`/temporary/delete/${id}`);
    return response.data;
};