const defaultState = {
  user: {},
  token: null,
  error: null,
  lgMessage: null,
  profile: {}
};

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "AFTER_LOGIN":
        return {
          ...state,
          profile: action.payload.Profile,
        };
    case "REGISTER":
      console.log(action.payload)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    case "SHOW_ERR":
      return {
        ...state,
        error: action.payload.code !== '422' ? null : action.payload.message,
      };
    case "LOGOUT":
      return {
        ...state,
        lgMessage: action.payload,
        token: null,
      };
    default:
      return state;
  }
};

export default auth;
