import axios from "axios";

const host = "http://localhost:8080";

const API = {
  makeFileUrl: (url, token) => {
    return host + url + "?access_token=" + token;
  },

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
  getUserDetails: (userId, token, success) => {
    axios
      .get(`${host}/api/users/${userId}?access_token=${token}`, {
        params: {
          filter: { include: ["Profile", "Post"] },
        },
      })
      .then((res) => {
        success(res);
      });
  },
  getPosts: (token, success) => {
    axios.get(`${host}/api/Posts`).then((res) => {
      success(res);
    });
  },
  addPost: (post, token, success) => {
    axios.post(`${host}/api/Posts?access_token=${token}`, post).then((res) => {
      success(res);
    });
  },
  getSinglePost: (id, token, success) => {
    axios
      .get(`${host}/api/Posts/${id}?access_token=${token}`, {
        params: {
          filter: { include: "PostImage" },
        },
      })
      .then((res) => {
        success(res);
      });
  },
  updatePost: (post, token, success) => {
    axios
      .patch(`${host}/api/Posts/${post.id}?access_token=${token}`, post)
      .then((res) => {
        success(res);
      });
  },
  uploadImage: (data, token, postId, userId, success) => {
    console.log(typeof data);
    axios
      .post(
        `${host}/api/PostImages/upload?access_token=${token}`,
        {
          params: {
            postId,
            userId,
            token,
            data,
          },
        },
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        success(res);
      });
  },
};

export default API;
