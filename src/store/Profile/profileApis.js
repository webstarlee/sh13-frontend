import { API_URL } from "config";

const changeFullname = async (data) => {
  const response = await window.axios.post(
    `${API_URL}/profile/change/fullname`,
    data
  );
  return response.data;
};

const changeUsername = async (data) => {
  const response = await window.axios.post(
    `${API_URL}/profile/change/username`,
    data
  );
  return response.data;
};

const changePassword = async (data) => {
  const response = await window.axios.post(
    `${API_URL}/profile/change/password`,
    data
  );
  return response.data;
};

export { changeFullname, changeUsername, changePassword };
