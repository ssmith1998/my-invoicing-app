<template>
  <div class="q-pa-lg full-width">
      <q-card class="q-pa-lg full-width">
      <form class="q-pa-lg full-width">
          <q-input label="Email" type="email" v-model="authForm.email"/>
          <q-input label="Password" type="password" v-model="authForm.password"/>
          <q-input v-if="type === 'Register'" label="Confirm Password" type="password" v-model="authForm.confirmPassword"/>
          <q-btn color="primary" v-if="type === 'Register' " :disable="!authForm.password || !authForm.email ||!authForm.confirmPassword" :label="type" class="q-mt-md"/>
          <q-btn color="primary" v-else :label="type" :disable="!authForm.email || !authForm.password" class="q-mt-md"/>
      </form>
      </q-card>
  </div>

</template>

<script>
export default {
name: 'auth-form',
props: ['type'],
data () {
    return { 
        authForm: {
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
}
}
</script>

<style>

</style>