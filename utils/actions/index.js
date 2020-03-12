import { apiRequest } from "../../apiRequest";
import { AsyncStorage } from "react-native";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  if (creds.username && creds.password) {
    apiRequest()
      .post("/login", creds)
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            token: res.data.data.token,
            message: "You have successfully logged in!"
          }
        });
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
