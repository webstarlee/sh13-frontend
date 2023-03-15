import axios from "axios";
import { API_URL } from "constants";

const getAllEmail = async () => {
    const response = await axios.get(`${API_URL}/email/all`);
    return response.data;
}

const create = async (email, password, firstname, lastname, status) => {
    const response = await axios.post(`${API_URL}/email/create`, {
        email,
        password,
        firstname,
        lastname,
        status,
    });
    return response;
};

const updateEmail = async (email, password, firstname, lastname, status, id) => {
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

export { create, getAllEmail, updateEmail, deleteEmailApi };
