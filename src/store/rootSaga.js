import { all, call } from 'redux-saga/effects';

import { authSagas } from './Auth/authSagas';

export default function* rootSaga() {
  yield all([call(authSagas)]);
}
