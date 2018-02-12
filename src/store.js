import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import * as reducers from "./reducers/reducers";

const defaultStore = {
  sticky: false,
  isAuthenticated: false,
  isAuthenticating: true,
  posts: []
};

const loggerMiddleware = createLogger();

const middleware = [thunkMiddleware, loggerMiddleware];

const store = createStore(
  combineReducers(reducers),
  defaultStore,
  applyMiddleware(...middleware)
);

export default store;
