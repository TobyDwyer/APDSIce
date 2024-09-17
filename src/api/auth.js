import axios from "axios";

export const loginUser = (email, password) => {
  return axios.post("/api/login", { email, password });
};

export const registerUser = (email, password) => {
  return axios.post("/api/register", { email, password });
};
