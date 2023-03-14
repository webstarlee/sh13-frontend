import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "./headerTypes";
import { headerAction } from "store/Header";
import { getUserApi } from "./headerApis";

export function* getUser() {
  try {
    const user = yield getUserApi();
    yield put({ type: types.GET_USER_SUCCESS, payload: user });
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* onGetUserStart() {
  yield takeLatest(types.GET_USER_START, getUser);
}

export default function* headerSagas() {
  yield all([call(onGetUserStart)]);
}
