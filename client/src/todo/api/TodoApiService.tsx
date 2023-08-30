import axios from "axios";
import { Todo } from "../TodoComponent";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});
export const retrieveAllTodosForUsername = (username: string) =>
  apiClient.get(`users/${username}/todos`);

export const deleteTodoForUsername = (username: string, id: number) =>
  apiClient.delete(`users/${username}/todos/${id}`);

export const getTodoForUsername = (username: string, id: string) =>
  apiClient.get(`users/${username}/todos/${id}`);

export const updateTodoForUsername = (
  username: string,
  id: string,
  todo: Todo,
) => apiClient.put(`users/${username}/todos/${id}`, todo);

export const createTodoForUsername = (username: string, todo: Todo) =>
  apiClient.post(`users/${username}/todos`, todo);
