import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  token: "",
  title: "This title is coming from reducer!"
};

//prettier-ignore
export const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {

    case LOGIN_START:
      return { ...state, isLoading: true, message: "" };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, message: action.payload.message, token: action.payload.token };
    case LOGIN_ERROR:
      return { ...state, isLoading: false, message: action.payload };

    case LOGOUT_START:
      return { ...state, isLoading: true, message: "" };
    case LOGOUT_SUCCESS:
      return { ...state, isLoading: false, message: action.payload, token: "" };
    case LOGOUT_ERROR:
      return { ...state, isLoading: false, message: action.payload };

    case SIGNUP_START:
      return { ...state, isLoading: true, message: "" };
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false, message: action.payload };
    case SIGNUP_ERROR:
      return { ...state, isLoading: false, message: action.payload };
      
    default:
      return state;
  }
};
