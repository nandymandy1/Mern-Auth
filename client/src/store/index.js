import thunk from "redux-thunk";
import logger from "redux-logger";
import "regenerator-runtime/runtime";
import rootReducer from "./Reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {};

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
