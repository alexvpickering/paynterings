import * as actions from "./actions";

export function addPost(post) {
  return {
    type: actions.ADD_POST,
    post
  };
}

export function updateSticky(sticky) {
  return {
    type: actions.UPDATE_STICKY,
    sticky
  };
}

export function updateAuthenticating(isAuthenticating) {
  return {
    type: actions.UPDATE_AUTHENTICATING,
    isAuthenticating
  };
}

export function updateAuthenticated(isAuthenticated) {
  return {
    type: actions.UPDATE_AUTHENTICATED,
    isAuthenticated
  };
}
