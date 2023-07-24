import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});
export const retrieveHelloWorldBean = () => apiClient.get("/hello-world/Sam");

export const retrieveHelloWorldPathVariable = (username: string) =>
  apiClient.get(`/hello-world/${username}`);
