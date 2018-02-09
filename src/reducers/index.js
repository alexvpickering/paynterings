export function navHeight(state = 0, action) {
  switch (action.type) {
    case "UPDATE_NAV_HEIGHT":
      return action.navHeight;
    default:
      return state;
  }
}
export function sticky(state = false, action) {
  switch (action.type) {
    case "UPDATE_STICKY":
      return action.sticky;
    default:
      return state;
  }
}

export function isAuthenticating(state = true, action) {
  switch (action.type) {
    case "UPDATE_AUTHENTICATING":
      return action.isAuthenticating;
    default:
      return state;
  }
}
export function isAuthenticated(state = false, action) {
  switch (action.type) {
    case "UPDATE_AUTHENTICATED":
      return action.isAuthenticated;
    default:
      return state;
  }
}

export function posts(state = [], action) {
  switch (action.type) {
    case "ADD_POST":
      return [action.post, ...state];
    default:
      return state;
  }
}
