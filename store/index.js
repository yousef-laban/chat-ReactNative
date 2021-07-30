import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { checkForToken } from "./actions/authActions";
import { fetchProfile } from "./actions/profileActions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(checkForToken());
store.dispatch(fetchProfile());

export default store;
