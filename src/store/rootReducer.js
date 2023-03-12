import { combineReducers } from "redux";

import auth from "./Auth/authReducer";
import layout from "./Layout/layoutReducer";

export default combineReducers({
  auth: auth,
  layout: layout,
});
