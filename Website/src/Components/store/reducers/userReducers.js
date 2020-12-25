const defaultState = {
  user: null,
  profile: null
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_USER":
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
        profile: action.payload.Profile,
      };
    default:
      return state;
  }
};

export default user;
