import API from "../../../utils/api";

export const getSitePosts = (skip) => {
  return (dispatch) => {
    API.getSitePosts(skip, (res) => {
      dispatch({
        type: "GOT_SITE_POST",
        payload: res.data,
        skip: skip,
      });
    });
  };
};

export const getPostsCount = () => {
  return (dispatch) => {
    API.getPostsCount((res) => {
      dispatch({
        type: "GOT_POST_COUNT",
        payload: res.data.count,
      });
    });
  };
};

export const setPostData = (post) => {
  return (dispatch) => {
    dispatch({ type: "SET_POST_DATA", payload: post });
  };
};

export const getPostBySlug = (slug, token) => {
  return (dispatch) => {
    API.getPostBySlug(slug, token, (res) => {
      dispatch({ type: "SET_FULL_POST_DATA", payload: res.data });
    });
  };
};


export const postComment = (comment, token) => {
  return dispatch => {
    API.postComment(comment, token, res => {
      if (res.status === 200) {
        API.getCommentById(res.data.id, token, res2 => {
          dispatch({
            type: 'ADDED_COMMENT',
            payload: res2.data
          })
        })
      }
    })
  }

}