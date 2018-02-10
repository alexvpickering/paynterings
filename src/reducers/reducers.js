import * as actions from "../actions/actions";

export function navHeight(state = 0, action) {
  switch (action.type) {
    case actions.SET_NAV_HEIGHT:
      console.log("here");
      return action.navHeight;
    default:
      return state;
  }
}
export function sticky(state = false, action) {
  switch (action.type) {
    case actions.UPDATE_STICKY:
      return action.sticky;
    default:
      return state;
  }
}

export function isAuthenticating(state = true, action) {
  switch (action.type) {
    case actions.UPDATE_AUTHENTICATING:
      return action.isAuthenticating;
    default:
      return state;
  }
}
export function isAuthenticated(state = false, action) {
  switch (action.type) {
    case actions.UPDATE_AUTHENTICATED:
      return action.isAuthenticated;
    default:
      return state;
  }
}

export function posts(state = [], action) {
  switch (action.type) {
    case actions.ADD_POST:
      return [action.post, ...state];
    default:
      return state;
  }
}
