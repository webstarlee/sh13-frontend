import types from "./usermanageTypes";

const INITIAL_STATE = {
  error: null,
  message: "",
  users: null,
};

const usermanageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        users: action.payload.data,
      };    
    default:
      return state;
  }
};

export default usermanageReducer;
