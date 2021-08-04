//
import instance from "./instance";

// Action Types
import * as actionType from "./types";

export const fetchGroups = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/group");

      dispatch({
        type: actionType.FETCH_GROUPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const creatGroup = (data, setWanted) => {
  return async (dispatch) => {
    try {
      const xdata = Object.assign({}, data);

      data.usersId = data.usersId.map((a) => a.userId).join(",");

      const formData = new FormData();
      for (const key in data) formData.append(key, data[key]);

      const res = await instance.post("/group/create-group", formData);

      res.data.users = xdata.usersId;
      setWanted(res.data);

      dispatch({
        type: actionType.CREATE_GROUPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const creatDM = (data) => {
  return async (dispatch) => {
    try {
      console.log(data);
      const res = await instance.post("/group/create", data);
      console.log(data);
      console.log(res.data);

      dispatch({
        type: actionType.CREATE_GROUPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
