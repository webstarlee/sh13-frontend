import { combineReducers } from 'redux';

import { AuthReducer } from './Auth';

export default combineReducers({ auth: AuthReducer });