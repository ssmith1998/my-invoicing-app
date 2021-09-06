<template>
  <div class="q-pa-lg full-width">
      <q-card class="q-pa-lg full-width">
      <form class="q-pa-lg full-width">
          <q-input label="Email" type="email" v-model="authForm.email"/>
          <q-input label="Password" type="password" v-model="authForm.password"/>
          <q-input v-if="type === 'Register'" label="Confirm Password" type="password" v-model="authForm.confirmPassword"/>
          <q-btn color="primary" @click="onRegister" v-if="type === 'Register' " :disable="!authForm.password || !authForm.email ||!authForm.confirmPassword" :label="type" class="q-mt-md"/>
          <q-btn color="primary" @click="onLogin" v-else :label="type" :disable="!authForm.email || !authForm.password" class="q-mt-md"/>
      </form>
      </q-card>
      <notification :actionBtn="true" actionBtnLink='Login' actionBtnText="Login" @close="closeNotification" :title="notification.title" :message="notification.message" :type="notification.type" :show="notification.show" />
  </div>

</template>

<script>
import {mapActions} from "vuex"
import { Notify } from 'quasar'

export default {
name: 'auth-form',
props: ['type'],
data () {
    return { 
        notification: {
            title: '',
            message: '',
            type: '',
            show:false
        },
        authForm: {
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
},
methods: {
    ...mapActions('app', ['Register', 'Login']),
    closeNotification () {
     this.notification.show = false
    },
    onRegister () {
        this.Register({email: this.authForm.email, password:this.authForm.password}).then(response => {
            console.log(response)
            if(response.data.success) {
            this.notification = {
                type: 'success',
                message: `You have registered successfully!`,
                title: `Register Success`,
                show: true,
            }
            }else{
               Notify.create({
                   message: response.data.message,
                   position: 'top-right',
                   color: 'red'
               })
            }
        })
    },

    onLogin () {
        this.Login({email: this.authForm.email, password:this.authForm.password}).then((response) => {
            if(this.$store.state.app.isAuthenticated) {
                this.$router.push({name: 'Invoices'})
            }else{
              Notify.create({
                   message: response.data.message,
                   position: 'top-right',
                   color: 'red'
               })  
            }
        })
    }
}
}
</script>

<style>

</style>