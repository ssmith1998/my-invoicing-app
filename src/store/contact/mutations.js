export function add(state, payload) {
  state.contacts.push(payload)
}

export function list(state, payload) {
  state.contacts = payload
}
