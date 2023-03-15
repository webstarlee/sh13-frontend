import { all, call, put, takeLatest } from "redux-saga/effects";

import {
    GetAllEmails
} from './EmailActions';

import {
    headerAction
} from "store/Header";

import types from "./EmailTypes";
import { create, getAllEmail, updateEmail, deleteEmailApi } from "./EmailApis";

export function* getEmailAccount() {
    try {
        const email = yield getAllEmail();
        yield put({ type: types.GET_ALL_EMAIL_SUCCESS, payload: email });
    } catch (error) {
        yield put(headerAction.newError(error))
    }
}

export function* saveEmailAccount({ payload: {
    email,
    password,
    firstname,
    lastname,
    status,
} }) {
    try {
        yield create(email, password, firstname, lastname, status);
        yield put(GetAllEmails());
    } catch (error) {
        yield put(headerAction.newError(error));
    }
}

export function* updateEmailAccount({ payload: {
    email,
    password,
    firstname,
    lastname,
    status,
    id,
} }) {
    console.log(email, id);
    try {
        const res = yield updateEmail(email, password, firstname, lastname, status, id);
        if(res) yield put(GetAllEmails());
    } catch (error) {
        yield put(headerAction.newError(error));
    }
}

export function* deleteEmailAccount({ payload: {
    id
} }) {
    try {
        const res = yield deleteEmailApi(id);
        if(res) yield put(GetAllEmails());
    } catch (error) {
        yield put(headerAction.newError(error));
    }
}

export function* onhandleStart() {
    yield takeLatest(types.GET_ALL_EMAIL, getEmailAccount);
    yield takeLatest(types.EMAIL_CREATE, saveEmailAccount);
    yield takeLatest(types.UPDATE_EMAIL, updateEmailAccount);
    yield takeLatest(types.DELETE_EMAIL, deleteEmailAccount);
}

export default function* EmailSagas() {
    yield all([
        call(onhandleStart),
    ]);
}
