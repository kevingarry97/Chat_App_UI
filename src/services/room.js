import http from './httpService';

const apiEndPoint = "https://server-message-app.herokuapp.com/api/room";

export const getRoom = () => {
  return http.get(apiEndPoint);
}

export const createRoom = (room) => {
  return http.post(apiEndPoint, room);
}
