export function authenticated(state, payload) {
  state.isAuthenticated = payload
}

export function user(state, payload) {
  state.user = payload
}
