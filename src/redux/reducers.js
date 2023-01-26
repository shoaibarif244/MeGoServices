import { USER_TOKEN, REMEMBER_ME } from "./constants";

const initialState = {
  usertoken: null,
  rememberme: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_TOKEN:
      return {
        ...state,
        usertoken: action.payload,
      };
    case REMEMBER_ME:
      return {
        ...state,
        rememberme: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
