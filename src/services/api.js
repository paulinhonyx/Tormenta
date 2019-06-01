import axios from "axios";

const api = axios.create({
  baseURL: "tormenta.herokuapp.com"
});

export default api;
