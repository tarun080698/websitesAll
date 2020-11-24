const defaultState = {
  posts: [],
};

const site = (state = defaultState, action) => {
  switch (action.type) {
    case "GOT_SITE_POST":
      return {
        ...state,
        posts: action.skip
          ? state.posts.concat(action.payload)
          : action.payload,
      };
    default:
      return state;
  }
};

export default site;
