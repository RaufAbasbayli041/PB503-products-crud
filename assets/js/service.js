import { BASE_URL } from "./constants.js";


const getAllData = async (endpoint) => {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getDataById = async (endpoint, id) => {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const addData = async (endpoint, payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, payload);
    return response;
  } catch (error) {
    console.log(error.ex);
  }
};

const deleteDataById = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error.ex);
  }
};

const editDataById = async (endpoint, payload, id) => {
  try {
    const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error.ex);
  }
};

export { getAllData, addData, deleteDataById, editDataById, getDataById };
