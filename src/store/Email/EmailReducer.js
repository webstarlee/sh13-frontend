import types from "./EmailTypes";

const INITIAL_STATE = {
  email: null,
  loading: false,
};

const EmailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_SUCCESS:
      return {
        ...state,
        email: action.payload.res,
        loading: true,
      };
    case types.GET_ALL_EMAIL_SUCCESS:
        return {
            ...state,
            email: action.payload,
            loading: true,
        }
    default:
      return state;
  }
};

export default EmailReducer;
