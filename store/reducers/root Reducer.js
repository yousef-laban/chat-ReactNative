import { combineReducers } from "redux";
import user from "./authReducer";
import profiles from "./profileReducer";
import groups from "./groupReducer";
import messages from "./messageReucer";

const rootReducer = combineReducers({
  user: user,
  profiles: profiles,
  groups: groups,
  messages: messages,
});

export default rootReducer;
