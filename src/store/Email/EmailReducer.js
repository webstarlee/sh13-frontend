import types from "./EmailTypes";

const INITIAL_STATE = {
  email: [],
  loading: false,
};

const EmailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EMAIL_CREATE_SUCCESS:
      return {
        ...state,
        email: action.payload.data,
        loading: true,
      };
    case types.GET_ALL_EMAIL_SUCCESS:
      return {
        ...state,
        email: action.payload.data,
        loading: true,
      };
    default:
      return state;
  }
};

export default EmailReducer;
