import {
  api
} from "src/boot/axios"
export function Register(state, payload) {
  return new Promise((resolve, reject) => {
    api.post('/register', payload).then(response => {
      resolve(response)
    })
  })
}
