import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import * as reducers from "./reducers/reducers";
import posts from "./data/posts";
import createHistory from "history/createBrowserHistory";
import { routerReducer } from "react-router-redux";

const defaultStore = {
  sticky: false,
  isAuthenticated: false,
  isAuthenticating: true,
  posts
};

export const history = createHistory();
const loggerMiddleware = createLogger();

const middleware = [
  thunkMiddleware,
  loggerMiddleware,
  routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  defaultStore,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
