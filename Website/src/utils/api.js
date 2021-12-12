import axios from "axios";

let host;
if(process.env.NODE_ENV === 'development'){
    host = 'http://localhost:8080';
}else{
    host = 'http://speedup.com';
}


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
  getUser: (userId, token, success) => {
    axios
      .get(`${host}/api/users/${userId}?access_token=${token}`, {
        params: {
          filter: {
        include: 'Profile'
      }}})
      .then((res) => {
        success(res);
      });
  },
  register: (name, email, password, success) => {
    axios
      .post(`${host}/api/users`, {
        username: name,
        email: email,
        password: password,
      })
      .then((res) => {
        success(res);
      })
      .catch((err) => {
        console.log(err);
        success(err);
      });
  },
  logout: (token, success) => {
    axios.post(`${host}/api/users/logout?access_token?${token}`).then((res) => {
      console.log("logout ===> ", res.data);
      success(res);
    });
  },
  getUsers: (token, success) => {
    axios.get(`${host}/api/users?access_token=${token}`, {
      params: {
        filter: {
        include : ['Profile', 'Post']
      }
    }}).then((res) => {
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
          filter: { include: ['PostImage', 'Comments'] },
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
  getSitePosts: (skip, success) => {
    axios
      .get(`${host}/api/Posts`, {
        params: {
          filter: {
            skip: skip,
            limit: 6,
            include: "PostImage",
            fields: {
              id: true,
              title: true,
              slug: true,
            },
          },
        },
      })
      .then((res) => {
        success(res);
      });
  },
  getPostBySlug: (slug, token, success) => {
    axios
      .get(`${host}/api/Posts/findOne?access_token=${token}`, {
        params: {
          filter: {
            where: { slug: slug },
            include: { Comments: "Profile" },
          },
        },
      })
      .then((res) => {
        success(res);
      });
  },
  getPostsCount: (success) => {
    axios.get(`${host}/api/Posts/count`).then((res) => {
      success(res);
    });
  },
  getCommentById: (commentId, token, success) => {
    axios
      .get(`${host}/api/Comments/${commentId}?access_token=${token}`, {
        params: {
          filter: {
            include: "Profile",
          },
        },
      })
      .then((res) => {
        success(res);
      });
  },
  postComment: (comment, token, success) => {
    axios
      .post(`${host}/api/Comments?access_token=${token}`, comment, {
        params: {
          filter: {
            include: "Profile",
          },
        },
      })
      .then((res) => {
        success(res);
      });
  },
};

export default API;
