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
