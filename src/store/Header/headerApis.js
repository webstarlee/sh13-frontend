import { API_URL } from "constants";

const getUserApi = async (token) => {
  window.axios.defaults.headers.common['x-access-token'] = token;

  const response = await window.axios.get(`${API_URL}/user/current`);
  return response.data;
};

export { getUserApi };