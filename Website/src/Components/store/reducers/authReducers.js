const defaultState = {
  user: {},
  token: null,
  error: null,
  lgMessage: null,
  profile: {}
};

const auth = (state = defaultState, actions) => {
  switch (actions.type) {
    case "LOGIN":
      console.log('login',actions.payload)
      return {
        ...state,
        user: actions.payload,
        token: actions.payload.token,
      };
    case "AFTER_LOGIN":
      console.log('after login',actions.payload)
        return {
          ...state,
          user: actions.payload,
          profile: actions.payload.Profile,
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
