import instance from '../instance';

export const sendMail = async ({to, subject, content, from, attachments}) => {
    const response = await instance.post(`/mail/send`, {to, subject, content, from, attachments}, {
        headers : {
            'Content-Type' : 'multipart/form-data',
        },
    });
    return response.data;
};

