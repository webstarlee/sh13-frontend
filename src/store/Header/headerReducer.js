import types from "./headerTypes";
import authTypes from "store/Auth/authTypes";

const INITIAL_STATE = {
  error: null,
  openToast: false,
  toastData: {},
  profile: null,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.NEW_ERROR:
      return {
        ...state,
        error: action.payload.response.data,
      };
    case types.OPEN_TOAST:
      return {
        ...state,
        openToast: action.data.IsOpen,
        toastData: action.data.IsOpen ? action.data : {},
      };
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        profile: action.payload.data,
      };
    case authTypes.LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default headerReducer;
