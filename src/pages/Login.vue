<template>
  <q-page class="flex items-center justify-center column">
<h1 class="text-h3 text-center  q-ma-none q-pt-lg">Login</h1>
<auth-form type="Login"/>
  </q-page>
</template>

<script>
import authForm from "../components/authForm.vue"
export default {
components: {
    'auth-form' : authForm
}
}
</script>

<style>

</style>