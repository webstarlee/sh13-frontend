import types from './headerTypes';

export const newError = (error) => ({
  type: types.NEW_ERROR,
  payload: error,
});

export const openToast = (data) => ({
  type: types.OPEN_TOAST,
  data: data
});

export const clearError = () => ({
  type: types.CLEAR_ERROR,
});

export const getUserInfo = (data) => ({
  type: types.GET_USER_START,
  payload: data
});