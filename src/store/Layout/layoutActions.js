import types from './layoutActionTypes';

export const openToast = (data) => ({
  type: types.OPEN_TOAST,
  data: data
});

export const closeToast = () => ({
  type: types.CLOSE_TOAST,
});


