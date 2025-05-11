//임시 저장 api입니다.
import instance from "./instance";

export const saveMail = async(payload) => {
    const response = await instance.post('/temporary/write', payload);
    
    return response.data;
};