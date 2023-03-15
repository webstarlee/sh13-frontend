import { all, call } from "redux-saga/effects";

import { authSagas } from "./Auth/authSagas";
import { headerSagas } from "./Header";
import { profileSagas } from "./Profile";
import { usermanageSagas } from "./Usermanage";

export default function* rootSaga() {
  yield all([call(authSagas), call(headerSagas), call(profileSagas), call(usermanageSagas)]);
}
