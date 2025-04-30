import instance from "../instance";

export const fetchDrafts = async () => {
    const response = await instance.get('/temporary/list');
    return response.data;
};

export const deleteAllDrafts = async () => {
    const response = await instance.delete('/temporary/delete-all');
    return response.data;
};