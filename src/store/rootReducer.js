import { combineReducers } from "redux";

import authReducer from "./Auth/authReducer";
import headerReducer from "./Header/headerReducer";
import EmailReducer from "./Email/EmailReducer";

export default combineReducers({
  auth: authReducer,
  header: headerReducer,
  email: EmailReducer,
});
