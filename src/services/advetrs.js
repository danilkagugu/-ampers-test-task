import axios from "axios";

export const BASE_URL = "https://6696fcf202f3150fb66c5d6e.mockapi.io";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const getCampersApi = async () => {
  const { data } = await instance.get("/Advert");
  console.log("data: ", data);
  return data;
};

export const getCamperById = async (id) => {
  const { data } = await instance.get(`/Advert/${id}`);
  return data;
};
