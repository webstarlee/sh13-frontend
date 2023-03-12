import types from "./authActionTypes";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      window.sessionStorage.setItem("access_token", action.payload.token);
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case types.LOG_IN_FAILURE:
    case types.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload.response.data,
      };
    case types.LOG_OUT:
      return INITIAL_STATE;
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user,
      };
    default:
      return state;
  }
};

export default authReducer;
