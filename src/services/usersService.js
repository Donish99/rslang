import http from "./httpService";
import { apiUrl } from "../config";
import axios from "axios";

const apiEndpoint = apiUrl + "/users";
const getIdUrl = (id) => `${apiEndpoint}/${id}`;

const headers = {
  "Content-Type": "application/json",
};
function register(user) {
  console.log(user);
  const data = {
    password: user.password,
    email: user.email,
    name: user.name,
  };
  return axios.post(apiEndpoint, data, { headers: headers });
}
function getUser(id) {
  return http.get(getIdUrl(id));
}

function deleteUser(id) {
  return http.delete(getIdUrl(id));
}
function updateUser(id, updatedUser) {
  return http.put(getIdUrl(id), {
    email: updatedUser.email,
    password: updatedUser.password,
  });
}

export default {
  register,
  getUser,
  deleteUser,
  updateUser,
};
