import { API_URL } from "config";

const getUserApi = async () => {
  const token = window.sessionStorage.getItem("access_token");
  window.axios.defaults.headers.common["x-access-token"] = token;

  const response = await window.axios.get(`${API_URL}/user/current`);
  return response.data;
};

export { getUserApi };
