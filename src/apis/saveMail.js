//임시 저장 api입니다.
import instance from "./instance";

export const saveMail = async(email, content) => {
    const response = await instance.post('/temporary/write', {email, content});
    return response.data;
};