import axios from "axios";
import * as actionTypes from "./types";

export const addBakery = (newBakery) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newBakery) formData.append(key, newBakery[key]);

      const res = await axios.post("http://localhost:8000/bakeries", formData);
      dispatch({
        type: actionTypes.ADD_BAKERY,
        payload: { newBakery: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchBakery = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/bakeries");
      //this is the same as the return
      dispatch({
        type: actionTypes.FETCH_BAKERIES,
        payload: res.data, //res.data the data here is reserved in js which is the data the contain the array of data from the database which you can find in the inspect page if you console.log it
      });
    } catch (error) {
      console.log(error);
    }
  };
};
