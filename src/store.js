import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import * as reducers from "./reducers/reducers";

const defaultStore = {
  sticky: false,
  isAuthenticated: false,
  isAuthenticating: true,
  posts: []
};

const middleware = [thunkMiddleware];

const store = createStore(
  combineReducers(reducers),
  defaultStore,
  applyMiddleware(...middleware)
);

export default store;
