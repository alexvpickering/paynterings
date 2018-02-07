import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers/index";
import posts from "./data/posts";

const loggerMiddleware = createLogger();
const store = createStore(
  combineReducers(reducers),
  { posts },
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
