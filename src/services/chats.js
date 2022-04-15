import http from './httpService';

const apiEndPoint = "https://server-message-app.herokuapp.com/api/chat";

export const getChats = (id) => {
  return http.get(apiEndPoint + '/' + id);
}

export const sendChat = (payload) => {
  return http.post(apiEndPoint, payload)
}
