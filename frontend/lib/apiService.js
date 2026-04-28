import axios from "axios";

const url = "http://127.0.0.1:3000/api/v1/";

export const getAllpizza = async () => {
  const responce = await axios.get(`${url}pizza`);

  const { data } = responce;

  return data;
};

export const getOnePizza = async (id) => {
  const responce = await axios.get(`${url}pizza/${id}`);

  const data = responce;

  return data;
};
