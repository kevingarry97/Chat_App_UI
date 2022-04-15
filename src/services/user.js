import http from './httpService';

const apiEndPoint = "http://localhost:4000/api/user";

export const usersList = () => {
  return http.get(apiEndPoint);
}

export const createUser = (payload, upload) => {
  const fd = new FormData();

  fd.append('username', payload.username);
  fd.append('email', payload.email);
  fd.append('role', payload.role);
  fd.append('password', payload.password);
  fd.append('file', upload, upload.name);

  return http.post(apiEndPoint, fd);
}
