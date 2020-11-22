const defaultState = {
  user: {},
  token: null,
};

const auth = (state = defaultState, actions) => {
  switch (actions.type) {
    case "LOGIN":
      console.log(this.state.user);
      return {
        ...state,
        user: actions.payload,
        token: actions.payload.token,
      };
    
    case "REGISTER":
      return {
        ...state,
        user: actions.payload,
        token: 1,
      };
    default:
      return state;
  }
};

export default auth;
