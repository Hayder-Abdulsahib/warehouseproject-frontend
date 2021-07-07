import { combineReducers } from "redux";
import bakeryReducer from "./bakeryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  bakeries: bakeryReducer,
  products: productReducer,
  auth: authReducer,
});

export default rootReducer;
