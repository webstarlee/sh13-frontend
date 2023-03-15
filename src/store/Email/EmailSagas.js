import { all, call, put, takeLatest } from "redux-saga/effects";

import { getAllEmails } from "./EmailActions";

import { headerAction } from "store/Header";

import types from "./EmailTypes";
import {
  getAllEmailApi,
  createEmailApi,
  updateEmailApi,
  deleteEmailApi,
} from "./EmailApis";

export function* getEmailAccount() {
  try {
    const response = yield getAllEmailApi();
    yield put({ type: types.GET_ALL_EMAIL_SUCCESS, payload: response });
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* createEmailAccount(action) {
  try {
    yield createEmailApi(action.payload);
    yield put(getAllEmails());
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* updateEmailAccount(action) {
  try {
    const res = yield updateEmailApi(action.payload);
    if (res) yield put(getAllEmails());
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* deleteEmailAccount({ payload: { id } }) {
  try {
    const res = yield deleteEmailApi(id);
    if (res) yield put(getAllEmails());
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* onhandleStart() {
  yield takeLatest(types.GET_ALL_EMAIL, getEmailAccount);
  yield takeLatest(types.EMAIL_CREATE, createEmailAccount);
  yield takeLatest(types.EMAIL_UPDATE, updateEmailAccount);
  yield takeLatest(types.EMAIL_DELETE, deleteEmailAccount);
}

export default function* EmailSagas() {
  yield all([call(onhandleStart)]);
}
