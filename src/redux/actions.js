import { USER_TOKEN, REMEMBER_ME } from "./constants";

export const userToken = (usertoken) => (dispatch) => {
  dispatch({
    type: USER_TOKEN,
    payload: usertoken,
  });
};

export const dispatchRememberMe = (rememberme) => (dispatch) => {
  dispatch({
    type: REMEMBER_ME,
    payload: rememberme,
  });
};

export const dispatch = (rememberme) => (dispatch) => {
  dispatch({
    type: REMEMBER_ME,
    payload: rememberme,
  });
};
