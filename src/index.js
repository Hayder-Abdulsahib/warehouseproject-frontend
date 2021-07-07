import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

// Redux stuff
import { createStore } from "redux";
import { applyMiddleware, compose } from "redux"; //we add this
import thunk from "redux-thunk"; //we add this
import { Provider } from "react-redux";
// import productReducer from "./store/reducers/productReducer";
import rootReducer from "./store/reducers/rootReducer";
import { fetchProduct } from "./store/actions/productActions";
import { fetchBakery } from "./store/actions/bakeryActions";
import { checkForToken } from "./store/actions/authActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //we changed and added this

// we add this to the store
const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchProduct());
store.dispatch(fetchBakery());
store.dispatch(checkForToken());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
