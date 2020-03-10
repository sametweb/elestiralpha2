import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from "../actions";

const INITIAL_STATE = {
  isLoggingIn: false,
  token: "",
  title: "This title is coming from reducer!"
};

export const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_START:
      return { ...state, isLoggingIn: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoggingIn: false };
    case LOGIN_ERROR:
      return { ...state, isLoggingIn: false };
    case LOGOUT_START:
      return { ...state, isLoggingIn: true };
    case LOGOUT_SUCCESS:
      return { ...state, isLoggingIn: false };
    case LOGOUT_ERROR:
      return { ...state, isLoggingIn: false };
    default:
      return state;
  }
};
