import API from '../../../utils/api';

export const login = (email, password) => {
  return (dispatch) => {
    API.login(email, password, (res) => {
      console.log("result", res.data);
      dispatch({ type: "LOGIN", payload: { email: email, token: res.data.id, userId: res.data.userId } });
    });
  };
};



export const register = (email, password) => {
  return {
    type: "REGISTER",
    payload: { email, password },
  };
};
