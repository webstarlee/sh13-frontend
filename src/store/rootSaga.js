import { all, call } from 'redux-saga/effects';

import { authSagas } from './Auth/authSagas';
import { headerSagas } from './Header';
import { EmailSagas } from './Email';

export default function* rootSaga() {
  yield all([
    call(authSagas), 
    call(headerSagas),
    call(EmailSagas),
  ]);
}
