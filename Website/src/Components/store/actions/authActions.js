import API from "../../../utils/api";

export const login = (email, password) => {
  return (dispatch) => {
    API.login(email, password, (res) => {
      dispatch({
        type: "LOGIN",
        payload: {
          user: res.data,
          token: res.data.id,
          userId: res.data.userId,
        },
      });

      API.getUser(res.data.userId, res.data.id, (res2) => {
        // console.log('in auth actions after login')
        dispatch({
          type: "AFTER_LOGIN",
          payload: res2.data,
        });
      });
    });
  };
};

export const register = (name, email, password) => {
  return (dispatch) => {
    API.register(name, email, password, (res) => {
      if (res.status === 200) {
        dispatch(login(email, password));
      } else {
        dispatch({
          type: "SHOW_ERR",
          payload: {
            message: "Please check, if email or username does not exists.",
            code: "422",
          },
        });
      }
    });
  };
};

export const logout = (token) => {
  return (dispatch) => {
    API.logout(token, (res) => {
      if (res.status === 204) {
        dispatch({ type: "LOGOUT", payload: "user logged out!" });
      }
    });
  };
};
