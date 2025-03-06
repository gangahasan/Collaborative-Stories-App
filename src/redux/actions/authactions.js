import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

export const SIGN_UP = "signup";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const AUTH_ERROR = "auth_error";

export const signUp = (email, password) => async (dispatch) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials, "user");
    dispatch({ type: SIGN_UP, payload: userCredentials.user });

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(userCredentials.user));
  } catch (error) {
    console.error("Signup Error:", error.message);

    dispatch({ type: AUTH_ERROR, payload: error.message });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch({ type: LOGIN, payload: userCredentials.user });

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(userCredentials.user));
  } catch (error) {
    console.error("Login Error:", error.message);

    dispatch({ type: AUTH_ERROR, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);

    // Clear localStorage
    localStorage.removeItem("user");

    dispatch({ type: LOGOUT });
  } catch (error) {
    console.error("Logout Error:", error.message);

    dispatch({ type: AUTH_ERROR, payload: error.message });
  }
};
