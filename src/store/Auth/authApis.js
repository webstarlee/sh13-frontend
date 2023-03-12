import axios from 'axios';
import { API_URL } from '../../constants/index';

const logIn = async (userId, password) => {
  const response = await axios.post(`${API_URL}auth/signin`, {
    userId,
    password,
  });
  return { token: response.data.token, user: response.data };
};

const register = async (username, userId, password, confirmPassword) => {
  await axios.post(`${API_URL}auth/signup`, {
    username,
    userId,
    password,
    confirmPassword,
  });
};

export { logIn, register };
