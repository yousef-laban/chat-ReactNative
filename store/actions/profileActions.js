//
import instance from "./instance";

// Action Types
import * as actionType from "./types";

export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/profile");
      dispatch({
        type: actionType.FETCH_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updateProfile = (updatedProfile, navigation) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);

      const res = await instance.post("/profile/update", formData);
      navigation.goBack();

      console.log(res.data);

      dispatch({
        type: actionType.UPDATE_PROFILE,
        payload: { updatedProfile: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
