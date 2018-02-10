import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import * as reducers from "./reducers/reducers";
import posts from "./data/posts";

const defaultStore = {
  sticky: false,
  navHeight: 0,
  isAuthenticated: false,
  isAuthenticating: true,
  posts
};

const loggerMiddleware = createLogger();
const store = createStore(
  combineReducers(reducers),
  defaultStore,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
