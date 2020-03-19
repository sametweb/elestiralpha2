//prettier-ignore
import {
  APP_START, 
  LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, 
  LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_ERROR, 
  SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR, 
  FETCH_QUESTIONS_START, FETCH_QUESTIONS_ERROR, FETCH_QUESTIONS_SUCCESS, 
  SET_CHOICE_START, SET_CHOICE_SUCCESS, SET_CHOICE_ERROR
} from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  token: "",
  feed: []
};

//prettier-ignore
export const reducer = (state = INITIAL_STATE, action) => {
  console.log(`${action.type}`);
  switch (action.type) {

    case APP_START:
      return { ...state, token: action.payload }

    case LOGIN_START:
      return { ...state, isLoading: true, message: "" };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, message: action.payload.message, token: action.payload.token };
    case LOGIN_ERROR:
      return { ...state, isLoading: false, message: action.payload };

    case LOGOUT_START:
      return { ...state, isLoading: true, message: "" };
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    case LOGOUT_ERROR:
      return { ...state, isLoading: false, message: action.payload };

    case SIGNUP_START:
      return { ...state, isLoading: true, message: "" };
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false, message: action.payload };
    case SIGNUP_ERROR:
      return { ...state, isLoading: false, message: action.payload };

    case FETCH_QUESTIONS_START:
      return { ...state, isLoading: true, message: '' }
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, isLoading: false, feed: action.payload };
    case FETCH_QUESTIONS_ERROR:
      return { ...state, isLoading: false, message: action.payload }

    case SET_CHOICE_START:
      return { ...state, message: '' } 
    case SET_CHOICE_SUCCESS:
      return { 
        ...state, 
        feed: state.feed.map(item => (item.ID === action.payload.questionID 
          ? { ...item, choice: action.payload.choice } 
          : item
      ))}
    case SET_CHOICE_ERROR:
      return { ...state,  message: action.payload }

    default:
      return state;
  }
};
