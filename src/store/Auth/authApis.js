import axios from "axios";
import { convertApiUrl } from "config";



const logIn = async (username, password) => {
  const response = await axios.post(convertApiUrl('auth/signin'), {
    username,
    password,
  });
  return response.data;
};

const register = async (fullname, username, password, confirmPassword) => {
  await axios.post(convertApiUrl('auth/signup'), {
    fullname,
    username,
    password,
    confirmPassword,
  });
};

export { logIn, register };
