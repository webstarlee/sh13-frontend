import { API_URL } from "constants";

const changeFullname = async (data) => {
  const response = await window.axios.post(
    `${API_URL}/profile/changeFullname`,
    data
  );
  return response.data;
};

const changeUsername = async (data) => {
  const response = await window.axios.post(
    `${API_URL}/profile/changeFullname`,
    data
  );
  return response.data;
};

const changePassword = async (data) => {
  const response = await window.axios.post(
    `${API_URL}/profile/changeFullname`,
    data
  );
  return response.data;
};

export { changeFullname, changeUsername, changePassword };
