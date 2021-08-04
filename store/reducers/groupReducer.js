import * as actionType from "../actions/types";

const initialState = { groups: [], loading: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_GROUPS:
      return {
        ...state,
        groups: action.payload,
        loading: false,
      };

    case actionType.CREATE_GROUPS:
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };

    default:
      return state;
  }
};
export default reducer;
