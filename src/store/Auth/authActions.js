import types from './authTypes';

export const logInStart = (credentials) => ({
  type: types.LOGIN_START,
  payload: credentials,
});

export const logInSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const logInFailure = (error) => ({
  type: types.LOGIN_FAILURE,
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
  type: types.REGISTER_FAILURE,
  payload: error,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});

export const clearError = () => ({
  type: types.CLEAR_ERROR,
});

export const getUserInfo = () =>({
  type: types.GET_USER_START
})