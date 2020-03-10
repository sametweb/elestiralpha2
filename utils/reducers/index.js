import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions";

const INITIAL_STATE = {
  isLoggingIn: false,
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
  }
};
