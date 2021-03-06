import {
  store
} from 'quasar/wrappers'
import {
  createStore
} from 'vuex'

import app from './app'
import contact from './contact'
import details from './details'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store = createStore({
  modules: {
    app,
    contact,
    details
  },

  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: process.env.DEBUGGING
})
