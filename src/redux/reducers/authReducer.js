import { LOGIN, LOGOUT, SIGN_UP, AUTH_ERROR } from "../actions/authactions";

// Safe LocalStorage retrieval
const getUserFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || null;
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    return null;
  }
};

const initState = {
  user: getUserFromLocalStorage(),
  error: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_UP:
    case LOGIN:
      return { ...state, user: action.payload, error: null };

    case LOGOUT:
      return { ...state, user: null, error: null };

    case AUTH_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
