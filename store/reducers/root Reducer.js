import { combineReducers } from "redux";
import user from "./authReducer";

const rootReducer = combineReducers({
  user: user,
});

export default rootReducer;
