import types from "./authTypes";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      console.log(action);
      window.sessionStorage.setItem("access_token", action.payload.accessToken);
      return {
        ...state,
        currentUser: action.payload.user,
        error: null,
      };
    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload.response.data,
      };
    case types.LOG_OUT:
      window.sessionStorage.clear();
      return INITIAL_STATE;
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.data,
      };
    default:
      return state;
  }
};

export default authReducer;
