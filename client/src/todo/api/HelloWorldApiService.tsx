import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});
export const retrieveHelloWorldBean = () => apiClient.get("/hello-world/Sam");

export const retrieveHelloWorldPathVariable = (username: string) =>
  apiClient.get(`/hello-world/${username}`, {
    headers: {
      Authorization: "Basic dG9kb2FwaTp0b2RvYXBp",
    },
  });

export const executeBasicAuthenticationService = (token: string) =>
  apiClient.get(`/basicauth`, {
    headers: {
      Authorization: token,
    },
  });
