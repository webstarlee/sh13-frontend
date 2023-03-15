import types from "./EmailTypes";

export const EmailCreate = (data) => ({
    type: types.EMAIL_CREATE,
    payload: data,
});

export const GetAllEmails = () => ({
    type: types.GET_ALL_EMAIL,
});

export const HandleUpdateEmail = (data) => ({
    type: types.UPDATE_EMAIL,
    payload: data,
});

export const DeleteEmail = (id) => ({
    type: types.DELETE_EMAIL,
    payload: id,
});
