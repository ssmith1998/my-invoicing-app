<template>
  <q-layout view="hHh lpR fFf">
       <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="">
          My Invoicing
        </q-toolbar-title>
         <router-link class="authLinks" :to="{name:'Register'}">
        <q-btn label="Register" color="white" flat/>
        </router-link>
        <router-link class="authLinks" :to="{name:'Login'}">
        <q-btn label="Login" color="white" flat/>
        </router-link>
      </q-toolbar>
    </q-header>
      <q-page-container>
      <router-view />
    </q-page-container>
</q-layout>
</template>

<script>
export default {

}
</script>

<style>
.authLinks {
    text-decoration: none;
}
</style>