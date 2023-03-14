import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  logInSuccess,
  registerSuccess,
} from "./authActions";

import {
  headerAction
} from "store/Header";

import types from "./authTypes";
import { logIn, register } from "./authApis";

export function* logInWithCredentials({ payload: { username, password } }) {
  try {
    const user = yield logIn(username, password);
    yield put(logInSuccess(user));
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* registerWithCredentials({
  payload: { fullname, username, password, confirmPassword },
}) {
  try {
    yield register(fullname, username, password, confirmPassword);
    yield put(registerSuccess({ username, password }));
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* gologInAfterRegister() {
  yield call(GotoForward, "/auth/login");
}

export function* onLogInStart() {
  yield takeLatest(types.LOGIN_START, logInWithCredentials);
}

export function* onRegisterStart() {
  yield takeLatest(types.REGISTER_START, registerWithCredentials);
}

export function* onRegisterSuccess() {
  yield takeLatest(types.REGISTER_SUCCESS, gologInAfterRegister);
}

function GotoForward(path) {
  window.location.replace(path);
}

export function* authSagas() {
  yield all([
    call(onLogInStart),
    call(onRegisterStart),
    call(onRegisterSuccess)
  ]);
}
