const defaultState = {
  users: [],
  posts: [],
  post: {}
};

const admin = (state = defaultState, action) => {
  switch (action.type) {
    case "GOT_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GOT_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
      case "POST_ADDED":
        return {
          ...state,
          posts: state.posts.concat(action.payload),
          post: action.payload
      };
      case "GOT_SINGLE_POST":
        return {
          ...state,
          post: action.payload,
      };
      case "UPDATE_POST":
        return {
          ...state,
          post: action.payload,
          posts: state.posts.map(p => {
            if (p.id === action.payload.id) {
              // this is a exitsing post
              return {...p, 
              ...action.payload}
            }
            else {
              return p
            }
           })
      };
    default:
      return state;
  }
};

export default admin;
