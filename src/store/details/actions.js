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
    api.get('/details', payload, {
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
    api.post('/details', payload, {
      withCredentials: true
    }).then(response => {
      commit('addAccount', response.data.account)
      commit('updateDetails', response.data.user_details)
      resolve(response)
    })
  })
}

export function View({
  commit
}, payload) {
  return new Promise((resolve, reject) => {
    api.get(`/details/${payload.id}`, {
      withCredentials: true
    }).then(response => {
      resolve(response)
    })
  })
}

export function Update({
  commit
}, payload) {
  return new Promise((resolve, reject) => {
    api.put(`/details/${payload.id}`, payload, {
      withCredentials: true
    }).then(response => {
      resolve(response)
    })
  })
}
