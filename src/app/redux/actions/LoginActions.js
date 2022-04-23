import jwtAuthService from "../../services/jwtAuthService";
import FirebaseAuthService from "../../services/firebase/firebaseAuthService";
import { setUserData } from "./UserActions";
import history from "@history.js";

export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_LOGIN_ERROR = "RESET_LOGIN_ERROR";
export const AUTO_LOGIN = "AUTO_LOGIN";
export const LOGOUT = "LOGOUT";

export function loginWithEmailAndPassword({ email, password }) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    jwtAuthService
      .loginWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(setUserData(user));

        history.push({
          pathname: "/",
        });

        return dispatch({
          type: LOGIN_SUCCESS,
        });
      })
      .catch((error) => {
        return dispatch({
          type: LOGIN_ERROR,
          payload: error,
        });
      });
  };
}

export function login({ login, password }) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    jwtAuthService
      .login(login, password)
      .then((data) => {
        dispatch(setUserData(data.user));

        history.push({
          pathname: "/",
        });

        return dispatch({
          type: LOGIN_SUCCESS,
        });
      })
      .catch((error) => {
        return dispatch({
          type: LOGIN_ERROR,
          payload: error.response.data.message,
        });
      });
  };
}

export const autoLogin = () => {
  return {
    type: AUTO_LOGIN,
  };
};

export function resetPassword({ email }) {
  return (dispatch) => {
    dispatch({
      payload: email,
      type: RESET_PASSWORD,
    });
  };
}

export function firebaseLoginEmailPassword({ email, password }) {
  return (dispatch) => {
    FirebaseAuthService.signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          dispatch(
            setUserData({
              userId: "1",
              role: "ADMIN",
              displayName: "Watson Joyce",
              email: "watsonjoyce@gmail.com",
              photoURL: "/assets/images/face-7.jpg",
              age: 25,
              token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
              ...user,
            })
          );

          history.push({
            pathname: "/dashboard/v1",
          });

          return dispatch({
            type: LOGIN_SUCCESS,
          });
        } else {
          return dispatch({
            type: LOGIN_ERROR,
            payload: "Login Failed",
          });
        }
      })
      .catch((error) => {
        return dispatch({
          type: LOGIN_ERROR,
          payload: error,
        });
      });
  };
}

export const resetLoginError = () => {
  return {
    type: RESET_LOGIN_ERROR,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
