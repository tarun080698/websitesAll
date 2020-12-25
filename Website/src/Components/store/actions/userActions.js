import API from "../../../utils/api";

export const getUserDetails = (userId, token) => {
  return (dispatch) => {
      // console.log(userId, token)
        API.getUserDetails(userId, token, (res) => {
          // console.log(res.data.user.user);
        dispatch({ type: "GET_USER", payload:res.data });
      });
    };
  };