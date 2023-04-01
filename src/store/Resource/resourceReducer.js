import types from "./resourceTypes";

const INITIAL_STATE = {
  images: [],
  message: "",
};

const resourceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.IMAGE_FETCH_SUCCESS:
      return {
        ...state,
        images: action.payload.data,
      };
    default:
      return state;
  }
};

export default resourceReducer;
