import * as actionType from "../actions/types";

const initialState = {
  user: null,
  users: [],
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionType.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
