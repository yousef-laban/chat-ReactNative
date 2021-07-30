import { combineReducers } from "redux";
import user from "./authReducer";
import profiles from "./profileReducer";

const rootReducer = combineReducers({
  user: user,
  profiles: profiles,
});

export default rootReducer;
