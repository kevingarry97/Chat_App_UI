import http from './httpService';

const apiEndPoint = "https://server-message-app.herokuapp.com/api/blog";

export const getBlogs = () => {
  return http.get(apiEndPoint);
}

export const updateBlog = (id, text) => {
  return http.put(apiEndPoint + '/' + id, { text })
}
