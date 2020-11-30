const defaultState = {
  user: {},
  token: null,
  error: null,
  lgMessage: null,
};

const auth = (state = defaultState, actions) => {
  switch (actions.type) {
    case "LOGIN":
      return {
        ...state,
        user: actions.payload,
        token: actions.payload.token,
      };
    case "REGISTER":
      return {
        ...state,
        user: actions.payload,
        token: actions.payload.token,
        error: null,
      };
    case "SHOW_ERR":
      return {
        ...state,
        error: actions.payload.code !== '422' ? null : actions.payload.message,
      };
    case "LOGOUT":
      return {
        ...state,
        lgMessage: actions.payload,
        token: null,
      };
    default:
      return state;
  }
};

export default auth;
