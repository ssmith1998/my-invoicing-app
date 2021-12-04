export function addAccount(state, payload) {
  state.accounts.push(payload)
}

export function list(state, payload) {
  state.contacts = payload
}

export function updateDetails(state, payload) {
  state.user_details = payload
}
