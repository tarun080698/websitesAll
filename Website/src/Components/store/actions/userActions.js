import API from "../../../utils/api";

export const getUserDetails = (userId, token) => {
    return (dispatch) => {
        API.getUserDetails(userId, token, (res) => {
          console.log(res.data.email);
        dispatch({ type: "GET_USER", payload: { user: res.data} });
      });
    };
  };