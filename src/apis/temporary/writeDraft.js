import instance from "../instance";

export const writeDraft = async () => {
    const response = await instance.post('temporary/write');
    return response.data; 
};