import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  logInFailure,
  logInSuccess,
  registerFailure,
  registerSuccess,
} from "./authActions";
import types from "./authTypes";
import { logIn, register, getUserApi } from "./authApis";

export function* logInWithCredentials({ payload: { userId, password } }) {
  try {
    const user = yield logIn(userId, password);
    yield put(logInSuccess(user));
  } catch (error) {
    yield put(logInFailure(error));
  }
}

export function* registerWithCredentials({
  payload: { username, userId, password, confirmPassword },
}) {
  try {
    yield register(username, userId, password, confirmPassword);
    yield put(registerSuccess({ userId, password }));
  } catch (error) {
    yield put(registerFailure(error));
  }
}

export function* getUser() {
  try {
    const user = yield getUserApi();
    yield put({ type: types.GET_USER_SUCCESS, payload: user });
  } catch (error) {}
}

export function* logInAfterRegister({ payload: { userId, password } }) {
  yield logInWithCredentials({ payload: { userId, password } });
}

export function* onLogInStart() {
  yield takeLatest(types.LOG_IN_START, logInWithCredentials);
}

export function* onRegisterStart() {
  yield takeLatest(types.REGISTER_START, registerWithCredentials);
}

export function* onRegisterSuccess() {
  yield takeLatest(types.REGISTER_SUCCESS, logInAfterRegister);
}

export function* onGetUserStart() {
  yield takeLatest(types.GET_USER_START, getUser);
}

export function* authSagas() {
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    call(onRegisterSuccess),
    call(onGetUserStart)
  ]);
}
