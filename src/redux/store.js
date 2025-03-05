import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { storyReducer } from "./reducers/storyReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  story: storyReducer
});


export const store = createStore(rootReducer,applyMiddleware(thunk))