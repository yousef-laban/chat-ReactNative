import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/root Reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

import { checkForToken, fetchUsers } from "./actions/authActions";
import { fetchProfile } from "./actions/profileActions";
import { fetchGroups } from "./actions/groupActions";
import { fetchAllMessages } from "./actions/messageActions";

store.dispatch(checkForToken());
store.dispatch(fetchProfile());
store.dispatch(fetchUsers());
store.dispatch(fetchGroups());
store.dispatch(fetchAllMessages());

export default store;
