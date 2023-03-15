import { combineReducers } from "redux";

import authReducer from "./Auth/authReducer";
import headerReducer from "./Header/headerReducer";
import UsermanageReducer from "./Usermanage/usermanageReducer";

export default combineReducers({
  auth: authReducer,
  header: headerReducer,
  usermanage: UsermanageReducer,
});
