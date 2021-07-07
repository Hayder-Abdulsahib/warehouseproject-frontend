import axios from "axios";
import instance from "./instance";
import decode from "jwt-decode";
import * as actionTypes from "./types";

export const signUp = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/signup", userData);
      dispatch(setUser(res.data.token));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

//we didn't need the reducer because we dont those data anymore, in the time being
//and if we put it, it's not gonna be a problem

export const signIn = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      // console.log("res", decode(res.data.token));
      dispatch(setUser(res.data.token));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signOut = (history) => {
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) return setUser(token);
  }
  return setUser();
};

export const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    // instance.defaults.headers.common.Authorization = `Bearer ${token}`; don't forget to use this line, the usefullnes of this line is to save the ("Bearer " + token) inside the Authorization in the headers, and any request made by this site will have the token in the header
    //the only way to implement this code is using instance not axios, because if we use axios it will be harder to implement
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    // delete instance.defaults.headers.common.Authorization //this command is used to delete the token when logedout
    //we also can put htis line in the signOut method
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};
