import { combineReducers } from "redux";
import bakeryReducer from "./bakeryReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  bakeries: bakeryReducer,
  products: productReducer,
});

export default rootReducer;
