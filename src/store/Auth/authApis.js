import axios from "axios";
import { API_URL } from "constants";

const logIn = async (username, password) => {
  const response = await axios.post(`${API_URL}/auth/signin`, {
    username,
    password,
  });
  return response.data;
};

const register = async (fullname, username, password, confirmPassword) => {
  await axios.post(`${API_URL}/auth/signup`, {
    fullname,
    username,
    password,
    confirmPassword,
  });
};

export { logIn, register };
