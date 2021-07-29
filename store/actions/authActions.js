//
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";

// Action Types
import * as actionType from "./types";
import { log } from "react-native-reanimated";

export const signup = (userData, navigation) => async (dispatch) => {
  try {
    const res = await instance.post(`/signup`, userData);

    dispatch(setUser(res.data.token));
    navigation.navigate("Home");
  } catch (error) {
    console.log(error);
  }
};

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(`/signin`, userData);
      dispatch(setUser(res.data.token));
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = (navigation) => async (dispatch) => {
  try {
    dispatch(await setUser());
    navigation.navigate("Home");
  } catch (error) {
    console.log(error);
  }
};

export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("myToken");

  if (token) {
    console.log(token);
    const currentTime = Date.now();
    const user = decode(token);

    if (currentTime > user.exp) dispatch(setUser());
    else dispatch(setUser(token));
  } else dispatch(setUser());
};

const setUser = (token) => async (dispatch) => {
  if (token) {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    dispatch({
      type: actionType.SET_USER,
      payload: decode(token),
    });
  } else {
    await AsyncStorage.removeItem("myToken");
    dispatch({
      type: actionType.SET_USER,
      payload: null,
    });
  }
};

export const verify = (user) => async (dispatch) => {
  try {
    const res = await instance.post("/verify", user);

    dispatch(verifyToken(res.data.token));
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = async (token) => {
  await AsyncStorage.setItem("Token", token);

  return {
    type: actionType.VERIFY,
    payload: decode(token),
  };
};
