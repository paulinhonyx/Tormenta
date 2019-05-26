import { create } from "apisauce";

const api = create({
  baseURL: "http://5ce16d028ad3c700145b7c26.mockapi.io"
});

api.addResponseTransform(response => {
  if (!response.ok) throw response;
});

export default api;
