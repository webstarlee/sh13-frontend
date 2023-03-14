import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "./profileTypes";
import { headerAction } from "store/Header";
import { changeFullname, changeUsername, changePassword } from "./profileApis";

export function* changeFullnameSaga(data) {
  try {
    const user = yield changeFullname(data.payload);
    console.log(user);
    // yield put({ type: types.GET_USER_SUCCESS, payload: user });
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* changeUsernameSaga(data) {
  try {
    const user = yield changeUsername(data.payload);
    // yield put({ type: types.GET_USER_SUCCESS, payload: user });
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* changePasswordSaga(data) {
  try {
    const user = yield changePassword(data.payload);
    // yield put({ type: types.GET_USER_SUCCESS, payload: user });
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* onChangeFullnameStart() {
  yield takeLatest(types.CHANGE_FULLNAME, changeFullnameSaga);
}
export function* onChangeUsernameStart() {
  yield takeLatest(types.CHANGE_USERNAME, changeUsernameSaga);
}
export function* onChangePasswordStart() {
  yield takeLatest(types.CHANGE_PASSWORD, changePasswordSaga);
}

export default function* headerSagas() {
  yield all([
    call(onChangeFullnameStart),
    call(onChangeUsernameStart),
    call(onChangePasswordStart),
  ]);
}
