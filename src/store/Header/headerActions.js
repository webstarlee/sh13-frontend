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

export const clearSuccess = () => ({
  type: types.CLEAR_SUCCESS,
});

export const getUserInfo = () => ({
  type: types.GET_USER_START,
});