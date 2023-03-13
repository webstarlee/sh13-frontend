import types from "./authTypes";

const INITIAL_STATE = {
  user: null,
  loading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      window.sessionStorage.setItem("access_token", action.payload.accessToken);
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case types.LOG_OUT:
      window.sessionStorage.clear();
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;
