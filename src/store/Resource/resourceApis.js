import axios from "axios";
import { convertApiUrl } from "config";

const getAllImageApi = async () => {
    const response = await axios.get(convertApiUrl('image/fetch'));

    return response.data;
}

const uploadImageApi = async (payload) => {
    const response = await axios.post(convertApiUrl('image/create'), payload);
    return response;
};


const deleteImageApi = async ( id ) => {
    console.log("here api", id)
    axios.delete(convertApiUrl("image/delete", id));
    return true;
}

export { getAllImageApi, uploadImageApi, deleteImageApi };