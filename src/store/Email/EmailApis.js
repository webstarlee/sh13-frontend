import axios from "axios";
import { API_URL } from "constants";

const getAllEmailApi = async () => {
    const response = await axios.get(`${API_URL}/email/all`);
    return response.data;
}

const createEmailApi = async (payload) => {
    const response = await axios.post(`${API_URL}/email/create`, payload);
    return response;
};

const updateEmailApi = async (email, password, firstname, lastname, status, id) => {
    const response = await axios.post(`${API_URL}/email/update`, {
        email,
        password,
        firstname,
        lastname,
        status,
        id
    });
    return response.data;
};

const deleteEmailApi = async ( id ) => {
    axios.delete(`${API_URL}/email/delete/${id}`);
    return true;
}

export { createEmailApi, getAllEmailApi, updateEmailApi, deleteEmailApi };
