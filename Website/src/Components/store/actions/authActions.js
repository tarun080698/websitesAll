import API from '../../../utils/api';

export const login = (email, password) => {
  return (dispatch) => {
    API.login(email, password, (res) => {
      console.log("result", res.data);
      dispatch({ type: "LOGIN", payload: { user: res.data, token: res.data.id, userId: res.data.userId } });
    });
  };
};



export const register = (email, name, password) => {
  return {
    type: "REGISTER",
    payload: { email, name, password },
  };
};
