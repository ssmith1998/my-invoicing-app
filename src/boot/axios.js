import {
  boot
} from 'quasar/wrappers'
import axios from 'axios'
import store from '../store'
import Router from '../router/index';
import {
  Platform
} from 'quasar'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL: Platform.is.mobile ? 'http://10.0.2.2:8000/api' : 'http://api.myinvoicing.gomedia:8000/api',
})

api.defaults.withCredentials = true;


// api.interceptors.response.use(undefined, function (error) {
//   if (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401) {
//       store.dispatch('app/Logout')
//       return Router.push({
//         name: 'Login'
//       })
//     }
//   }
// })

export default boot(({
  app
}) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export {
  api
}
