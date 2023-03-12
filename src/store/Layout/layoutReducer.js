import types from "./layoutActionTypes";

const INITIAL_STATE = {
  openToast: false,
  toastData: {},
};

const layoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.OPEN_TOAST:
      return {
        ...state,
        openToast: true,
        toastData: action.data,
      };
    case types.CLOSE_TOAST:
      return {
        ...state,
        openToast: false,
        toastData: {},
      };
    default:
      return state;
  }
};

export default layoutReducer;
