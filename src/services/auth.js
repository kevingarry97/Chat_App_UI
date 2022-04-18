import jwtDecode from "jwt-decode";
import http from "./httpService";
// import * as apiUrl from "../config.json"

const apiEndPoint = "https://server-message-app.herokuapp.com/api/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export const verifyUser = (token) => {
  return http.get(apiEndPoint + '/verify/' + token);
}

export const requestReset = (email) => {
  return http.post(apiEndPoint + '/requestReset', { email });
}

export const resetPassword = (payload) => {
  return http.post(apiEndPoint + '/resetPassword', payload);
}

export function getJwt() {
  return localStorage.getItem("token");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
