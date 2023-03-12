import axios from "axios";
import { API_URL } from "../../constants/index";

const token = window.sessionStorage.getItem("access_token");

const logIn = async (username, password) => {
  const response = await axios.post(`${API_URL}/auth/signin`, {
    username,
    password,
  });

  console.log(response);
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

const getUserApi = async () => {
  const response = await axios.get(`${API_URL}/user/current`, {
    headers: {
      "x-access-token": token,
    },
  });
  return response.data;
};
export { logIn, register, getUserApi };
