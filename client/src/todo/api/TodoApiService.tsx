import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});
export const retrieveAllTodosForUsername = (username: string) =>
  apiClient.get(`users/${username}/todos`);

export const deleteTodoForUsername = (username: string, id: number) =>
  apiClient.delete(`users/${username}/todos/${id}`);

export const getTodoForUsername = (username: string, id: string) =>
  apiClient.get(`users/${username}/todos/${id}`);
