import * as actionType from "../actions/types";

const initialState = { profiles: [], loading: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PROFILE:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };

    case actionType.UPDATE_PROFILE:
      const { updatedProfile } = action.payload;

      return {
        ...state,
        profiles: state.profiles.map((profile) =>
          profile.id === +updatedProfile.id ? updatedProfile : profile
        ),
      };

    default:
      return state;
  }
};
export default reducer;
