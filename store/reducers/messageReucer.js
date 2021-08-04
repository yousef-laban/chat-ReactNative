import * as actionType from "../actions/types";

const initialState = { messages: [], loading: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_MESSGAE:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };

    case actionType.CREATE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
};
export default reducer;
