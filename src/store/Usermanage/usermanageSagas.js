import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "store/Usermanage/usermanageTypes";
import { headerTypes } from "store/Header";
import { headerAction } from "store/Header";
import { approveUserApi, getAllUserApi, deleteUserApi } from "./usermanageApis";

export function* approveUser(data) {
  try {
    const response = yield approveUserApi(data.data);
    yield put({ type: types.GET_ALL_USER_START });
    yield put({ type: headerTypes.NEW_SUCCESS, payload: response.message });
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* getAllUser() {
  try {
    const response = yield getAllUserApi();
    yield put({ type: types.GET_ALL_USER_SUCCESS, payload: response });
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* deleteUser(data) {
  try {
    const response = yield deleteUserApi(data.data);
    yield put({ type: headerTypes.NEW_SUCCESS, payload: response.message });
    yield put({ type: types.GET_ALL_USER_START });
  } catch (error) {
    yield put(headerAction.newError(error));
  }
}

export function* onApproveUserStart() {
  yield takeLatest(types.APPROVE_USER, approveUser);
}

export function* onGetAllUsersStart() {
  yield takeLatest(types.GET_ALL_USER_START, getAllUser);
}

export function* onDeleteUsersStart() {
  yield takeLatest(types.DELETE_USER, deleteUser);
}

export default function* usermanageSagas() {
  yield all([
    call(onApproveUserStart),
    call(onGetAllUsersStart),
    call(onDeleteUsersStart),
  ]);
}
