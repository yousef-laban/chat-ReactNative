import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/root Reducer";
import thunk from "redux-thunk";
import { checkForToken } from "./actions/authActions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(checkForToken());

export default store;
