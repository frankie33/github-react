import Redux from "redux";

let initialState = {
  username: "",
  repos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
};

export default reducer;
