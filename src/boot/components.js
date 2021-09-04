import Notification from '../components/app/Notification'
import {
  boot
} from 'quasar/wrappers'
export default boot(({
  app
}) => {
  app.component('notification', Notification)
})
