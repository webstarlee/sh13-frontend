import types from "./layoutTypes";

const INITIAL_STATE = {
  openToast: false,
  toastData: {},
};

const layoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.OPEN_TOAST:
      return {
        ...state,
        openToast: action.data.IsOpen,
        toastData: action.data.IsOpen ? action.data : false,
      };
    default:
      return state;
  }
};

export default layoutReducer;
