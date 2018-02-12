import * as actions from "./actions";

export function addPosts(posts) {
  return {
    type: actions.ADD_POSTS,
    posts
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
