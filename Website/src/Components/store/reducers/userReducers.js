const defaultState = {
  user: {},
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_USER":
      // console.log(this.state.user);
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default user;
