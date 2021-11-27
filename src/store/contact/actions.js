import {
  api
} from "src/boot/axios"
import axios from 'axios'
import {
  Platform
} from 'quasar'
export function list({
  commit
}, payload) {
  return new Promise((resolve, reject) => {
    api.get('/contacts', payload, {
      withCredentials: true
    }).then(response => {
      commit('list', response.data)
      resolve(response)
    })
  })
}
export function store({
  commit
}, payload) {
  return new Promise((resolve, reject) => {
    api.post('/contacts', payload, {
      withCredentials: true
    }).then(response => {
      commit('add', response.data.contact)
      resolve(response)
    })
  })
}
