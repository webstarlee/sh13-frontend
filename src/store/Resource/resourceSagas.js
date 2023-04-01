import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "./resourceTypes";

import {
  getAllImageApi,
  uploadImageApi,
  deleteImageApi,
} from "./resourceApis";

import { imageFetch } from "./resourceActions";

export function* getImage() {
  try {
    const response = yield getAllImageApi();
    yield put({ type: types.IMAGE_FETCH_SUCCESS, payload: response });
  } catch (error) {
    console.log("Something went  ddd wrong!")
  }
}

export function* imageUpload(action) {
  try {
    yield uploadImageApi(action.payload);
    yield put(imageFetch());
  } catch (error) {
    console.log("Something went wrong!");
  }
}

export function* imageDelete(action) {
  try {
    yield deleteImageApi(action.payload);
    yield put(imageFetch());
  } catch (error) {
    console.log("Something went wrong!");
  }
}

export function* onHandleStart() {
  yield takeLatest(types.IMAGE_FETCH, getImage);
  yield takeLatest(types.IMAGE_UPLOAD, imageUpload);
  yield takeLatest(types.IMAGE_DELETE, imageDelete);
}
export default function* headerSagas() {
  yield all([call(onHandleStart)]);
}
