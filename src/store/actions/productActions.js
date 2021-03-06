import axios from "axios";
// ACTION TYPES
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

// ACTIONS
export const addProduct = (newProduct, bakeryId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);

      const res = await axios.post(
        `http://localhost:8000/bakeries/${bakeryId}/products`, //we get the bakeryId from the product form as we define it in the product state
        formData
      );
      dispatch({
        type: ADD_PRODUCT,
        payload: { newProduct: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: { productId: productId },
      });
    } catch (error) {
      console.log(error);
      //we will chnage the log above into this console.log(error.message.include("401"));
      //and also we can change it to if condition the wrap the dispatch steatment under like this if(error.message.include("401")) {dispatch({type: payload:})}

      //this part of code is usefull so that when the token is expiered and the user click on the delete button it will turn him back to the sighin page
      // dispatch({
      //   type: actionTypes.SET_USER,
      //   payload: null,
      // });
    }
  };
};

export const updateProduct = (updatedProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);

      const res = await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        formData
      );
      dispatch({
        type: UPDATE_PRODUCT,
        payload: { updatedProduct: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      //this is the same as the return
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data, //res.data the data here is reserved in js which is the data the contain the array of data from the database which you can find in the inspect page if you console.log it
      });
    } catch (error) {
      console.log(error);
    }
  };
};
