import types from "./usermanageTypes";

export const getAllUser = () => ({
  type: types.GET_ALL_USER_START,
});

export const approveUser = (data) => ({
  type: types.APPROVE_USER,
  data: data,
});

export const deleteUser = (data) => ({
  type: types.DELETE_USER,
  data: data,
});
