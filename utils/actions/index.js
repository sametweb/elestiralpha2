import { apiRequest } from "../../apiRequest";
import { AsyncStorage } from "react-native";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  if (creds.username && creds.password) {
    apiRequest()
      .post("/login", creds)
      .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
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
    .then(res => dispatch({ type: LOGOUT_SUCCESS }))
    .catch(err =>
      dispatch({ type: LOGOUT_ERROR, payload: "Error logging out." })
    );
};
