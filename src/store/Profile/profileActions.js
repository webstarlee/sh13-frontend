import types from "./profileTypes";

export const changeFullname = (data) => ({
  type: types.CHANGE_FULLNAME,
  payload: data,
});

export const changeUsername = (data) => ({
  type: types.CHANGE_USERNAME,
  payload: data,
});

export const changePassword = (data) => ({
  type: types.CHANGE_PASSWORD,
  payload: data,
});
