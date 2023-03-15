import types from "./EmailTypes";

export const emailCreate = (data) => ({
    type: types.EMAIL_CREATE,
    payload: data,
});

export const getAllEmails = () => ({
    type: types.GET_ALL_EMAIL,
});

export const updateEmail = (data) => ({
    type: types.EMAIL_UPDATE,
    payload: data,
});

export const deleteEmail = (id) => ({
    type: types.EMAIL_DELETE,
    payload: id,
});
