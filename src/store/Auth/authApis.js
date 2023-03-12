import axios from "axios";
import { API_URL } from "../../constants/index";

const token = window.sessionStorage.getItem("access_token");

const logIn = async (userId, password) => {
  const response = await axios.post(`${API_URL}auth/signin`, {
    userId,
    password,
  });
  return { token: response.data.accessToken, user: response.data };
};

const register = async (username, userId, password, confirmPassword) => {
  await axios.post(`${API_URL}auth/signup`, {
    username,
    userId,
    password,
    confirmPassword,
  });
};

const getUserApi = async () => {
  const response = await axios.get(`${API_URL}user/current`, {
    headers: {
      "x-access-token": token,
    },
  });
  return response.data;
};
export { logIn, register, getUserApi };
