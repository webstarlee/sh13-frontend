import { combineReducers } from "redux";

import authReducer from "./Auth/authReducer";
import headerReducer from "./Header/headerReducer";

export default combineReducers({
  auth: authReducer,
  header: headerReducer,
});
