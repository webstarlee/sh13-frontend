import { all, call } from "redux-saga/effects";

import { authSagas } from './Auth/authSagas';
import { headerSagas } from './Header';
import { EmailSagas } from './Email';
import { profileSagas } from "./Profile";
import { usermanageSagas } from "./Usermanage";

export default function* rootSaga() {
  yield all([
    call(authSagas), 
    call(headerSagas),
    call(EmailSagas),
    call(profileSagas),
    call(usermanageSagas)
  ]);
}
