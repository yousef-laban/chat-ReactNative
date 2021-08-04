//
import instance from "./instance";

// Action Types
import * as actionType from "./types";

export const fetchAllMessages = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/message");
      dispatch({
        type: actionType.FETCH_MESSGAE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const creatMessage = (data) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/message/create", data);

      dispatch({
        type: actionType.CREATE_MESSAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
