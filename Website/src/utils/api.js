import axios from "axios";

const host = "http://localhost:8080";

const API = {
  login: (email, password, success) => {
    axios
      .post(`${host}/api/users/login`, { email: email, password: password })
      .then((res) => {
        success(res);
      });
  },
  getUsers: (token, success) => {
    axios.get(`${host}/api/users?access_token=${token}`).then((res) => {
      success(res);
    });
  },
  getPosts: (token, success) => {
    axios.get(`${host}/api/Posts`).then((res) => {
      success(res);
    });
  },
};

export default API;
