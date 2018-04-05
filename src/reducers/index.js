import Redux from "redux";

let initialState = {
  username: "frankie33",
  profile: {},
  repos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return {
        ...state,
        username: action.username
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        profile: action.profile
      };
    case "UPDATE_REPOS":
      return {
        ...state,
        repos: action.repos
      };
    default:
      return state;
  }
};

export default reducer;
