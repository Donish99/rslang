import http from "./httpService";
import { apiUrl } from "../config";
import axios from "axios";

const apiEndpoint = apiUrl + "/users";
const getIdUrl = (id) => `${apiEndpoint}/${id}`;

const headers = {
  "Content-Type": "application/json",
};

function register(user) {
  const data = {
    password: user.password,
    email: user.email,
    name: user.name,
  };
   axios.post(apiEndpoint, data, { headers: headers })
  .catch(err => {
    if( err.response.status === 417 ) {
      alert('Пользователь с таким e-mail уже существует');
    }
    if( err.response.status === 422 ) {
      alert('Вы не заполнити все поля, либо ввели некоректные данные');
    }
  });
  return axios.post(apiEndpoint, data, { headers: headers });

}


function getUser(id) {
  return http.get(getIdUrl(id));
}

function deleteUser(id) {
  return http.delete(getIdUrl(id));
}

function updateUser(id, updatedUser) {
  return http.delete(getIdUrl(id), {
    email: updatedUser.email,
    password: updatedUser.password,
  });
}

const usersService = {
  register,
  getUser,
  deleteUser,
  updateUser,
};

export default usersService;