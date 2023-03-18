import { API_URL } from "config";

const getAllUserApi = async () => {
  const response = await window.axios.get(`${API_URL}/user/all`);
  return response.data;
};

const approveUserApi = async (data) => {
  const response = await window.axios.post(`${API_URL}/user/approve`, data);
  return response.data;
};

const deleteUserApi = async (data) => {
  const response = await window.axios.delete(`${API_URL}/user/delete/${data.id}`);
  return response.data;
};
export { getAllUserApi, approveUserApi, deleteUserApi };
