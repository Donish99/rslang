import http from "./httpService";
import { apiUrl } from "../config";

const apiEndpoint = apiUrl + "/signin";
const tokenKey = "token";
const userId = "userId";

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export async function login(email, password) {  
  const { data } = await http.post(apiEndpoint, { email, password });
  if (data) {
    localStorage.setItem(tokenKey, data.token);
    localStorage.setItem(userId, data.userId);
    http.setJwt(getJwt());
  }  
  return data;
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.clear();
}
const authService = {
  login,
  loginWithJwt,
  logout,
  getJwt,
};

export default authService;
