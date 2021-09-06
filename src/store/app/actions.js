import {
  api
} from "src/boot/axios"
import axios from 'axios'
export function Register(state, payload) {
  return new Promise((resolve, reject) => {
    api.post('/register', payload).then(response => {
      resolve(response)
    })
  })
}

export function Login({
  commit
}, payload) {
  return new Promise((resolve, reject) => {
    axios.get('http://api.myinvoicing.gomedia:8000/sanctum/csrf-cookie', {
      withCredentials: true
    }).then(response => {
      api.post('/login', payload).then(response => {
        resolve(response)
        if (response.data.success === true) {
          console.log(response)
          console.log('yes');
          commit('authenticated', true)
          commit('user', response.data.data)
          localStorage.setItem('user', JSON.stringify(response.data.data))
        }

      })
    })
  })
}

export async function Logout({
  commit
}, payload) {
  return new Promise((resolve, reject) => {
    api.post('/logout', payload).then(response => {
      localStorage.removeItem('user')
      commit('authenticated', false)
      commit('user', {})
      resolve(response)

    })
  })
}
