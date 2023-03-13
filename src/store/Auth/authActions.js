import types from "./authTypes";
import { headerTypes } from "store/Header";

export const logInStart = (credentials) => ({
  type: types.LOGIN_START,
  payload: credentials,
});

export const logInSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const logInFailure = (error) => ({
  type: headerTypes.NEW_ERROR,
  payload: error,
});

export const registerStart = (credentials) => ({
  type: types.REGISTER_START,
  payload: credentials,
});

export const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: headerTypes.NEW_ERROR,
  payload: error,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});

export const clearError = () => ({
  type: headerTypes.CLEAR_ERROR,
});
