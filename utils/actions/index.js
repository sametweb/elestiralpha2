import apiRequest from "../../apiRequest";
import { AsyncStorage } from "react-native";

export const APP_START = "APP_START";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const FETCH_QUESTIONS_START = "FETCH_QUESTIONS_START";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_ERROR = "FETCH_QUESTIONS_ERROR";

export const FETCH_QUESTION_START = "FETCH_QUESTION_START";
export const FETCH_QUESTION_SUCCESS = "FETCH_QUESTION_SUCCESS";
export const FETCH_QUESTION_ERROR = "FETCH_QUESTION_ERROR";

export const SET_CHOICE_START = "SET_CHOICE_START";
export const SET_CHOICE_SUCCESS = "SET_CHOICE_SUCCESS";
export const SET_CHOICE_ERROR = "SET_CHOICE_ERROR";

export const appStart = () => dispatch => {
  AsyncStorage.getItem("@token").then(token => {
    dispatch({ type: APP_START, payload: JSON.parse(token) });
  });
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  if (creds.username && creds.password) {
    apiRequest()
      .post("/login", creds)
      .then(res => {
        AsyncStorage.setItem("@token", JSON.stringify(res.data.user.token))
          .then(() =>
            dispatch({
              type: LOGIN_SUCCESS,
              payload: {
                token: res.data.user.token,
                message: "You have successfully logged in!"
              }
            })
          )
          .catch(err => console.log("error asyncstorage"));
      })
      .catch(err =>
        dispatch({
          type: LOGIN_ERROR,
          payload: "Login failed with provided credentials. Please try again."
        })
      );
  } else {
    dispatch({
      type: LOGIN_ERROR,
      payload: "You must enter a username and password."
    });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_START });
  AsyncStorage.removeItem("@token")
    .then(res =>
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: "You have successfully logged out!"
      })
    )
    .catch(err =>
      dispatch({
        type: LOGOUT_ERROR,
        payload:
          "There was an error while logging out, we couldn't log you out. Please try again."
      })
    );
};

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  apiRequest()
    .post("/signup", creds)
    .then(res =>
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: `You successfully signed up, ${creds.username}! Please log in to proceed.`
      })
    )
    .catch(res =>
      dispatch({
        type: SIGNUP_ERROR,
        payload:
          "There was an error on the server while signing up, we couldn't register your information. Please try again."
      })
    );
};

export const fetchQuestions = params => (dispatch, getState) => {
  dispatch({ type: FETCH_QUESTIONS_START });
  const { token } = getState();
  apiRequest(token)
    .post(`/getquestions`, params)
    .then(res => {
      dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: res.data.questions });
    })
    .catch(err => {
      console.log({ err });

      dispatch({
        type: FETCH_QUESTIONS_ERROR,
        payload:
          "There was an error fetching your feed, please swipe down to refresh."
      });
    });
};

export const fetchQuestion = id => (dispatch, getState) => {
  dispatch({ type: FETCH_QUESTION_START });
  const state = getState();
  const { token } = state;
  const question = state.feed.find(q => q.ID === id);
  if (question) {
    console.log(question);
  } else {
    apiRequest(token)
      .post(`/question/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
};

export const setChoice = params => (dispatch, getState) => {
  dispatch({ type: SET_CHOICE_START });

  const { token } = getState();
  const { questionID, choice } = params;

  apiRequest(token)
    .post("/setchoice", params)
    .then(res =>
      dispatch({ type: SET_CHOICE_SUCCESS, payload: { questionID, choice } })
    )
    .catch(err =>
      dispatch({
        type: SET_CHOICE_ERROR,
        payload: "There was an error saving your answer. Please try again."
      })
    );
};
