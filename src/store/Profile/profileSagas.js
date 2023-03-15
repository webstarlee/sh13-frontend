import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "store/Profile/profileTypes";
import { headerTypes } from "store/Header";
import { headerAction } from "store/Header";
import { changeFullname, changeUsername, changePassword } from "./profileApis";

export function* changeFullnameSaga(data) {
  try {
    const user = yield changeFullname(data.payload);
    yield put({ type: headerTypes.NEW_SUCCESS, payload: user.message });
    yield put(headerAction.getUserInfo());
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* changeUsernameSaga(data) {
  try {
    const user = yield changeUsername(data.payload);
    yield put({ type: headerTypes.NEW_SUCCESS, payload: user.message });
    yield put(headerAction.getUserInfo());
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* changePasswordSaga(data) {
  try {
    const user = yield changePassword(data.payload);
    yield put({ type: headerTypes.NEW_SUCCESS, payload: user.message });
    yield put(headerAction.getUserInfo());
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

export default function* profileSagas() {
  yield all([
    call(onChangeFullnameStart),
    call(onChangeUsernameStart),
    call(onChangePasswordStart),
  ]);
}
