import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import * as reducers from "./reducers/reducers";
import posts from "./data/posts";

const defaultStore = {
  sticky: false,
  isAuthenticated: false,
  isAuthenticating: true,
  posts
};

const loggerMiddleware = createLogger();

const middleware = [thunkMiddleware, loggerMiddleware];

const store = createStore(
  combineReducers(reducers),
  defaultStore,
  applyMiddleware(...middleware)
);

export default store;
