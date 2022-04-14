import http from './httpService';

const apiEndPoint = "https://server-message-app.herokuapp.com/api/user";

export const createUser = (payload, upload) => {
  const fd = new FormData();

  fd.append('username', payload.username);
  fd.append('email', payload.email);
  fd.append('role', payload.role);
  fd.append('password', payload.password);
  fd.append('file', upload, upload.name);

  return http.post(apiEndPoint, fd);
}
