// add post
export function addPost(post) {
  return {
    type: "ADD_POST",
    post
  };
}

export function updateNavHeight(navHeight) {
  return {
    type: "UPDATE_NAV_HEIGHT",
    navHeight
  };
}

export function updateSticky(sticky) {
  return {
    type: "UPDATE_STICKY",
    sticky
  };
}

export function updateAuthenticating(isAuthenticating) {
  return {
    type: "UPDATE_AUTHENTICATING",
    isAuthenticating
  };
}

export function updateAuthenticated(isAuthenticated) {
  return {
    type: "UPDATE_AUTHENTICATED",
    isAuthenticated
  };
}
