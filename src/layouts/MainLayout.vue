<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
        class="gt-xs"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-center">
          My Invoicing
        </q-toolbar-title>

        <div><q-btn @click="onLogout" color="white" label="Logout" flat/></div>
      </q-toolbar>
    </q-header>

    <q-drawer
    class="gt-xs"
    no-swipe-open
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Invoicing Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

<q-footer class="xs">
    <q-tabs
        v-model="tab"
      >
        <q-route-tab clickable :to="{name: tab.linkName}" v-for="(tab,index) in essentialLinks " :key="index" :name="tab.name" :icon="tab.icon" :label="tab.title" />
      </q-tabs>
    </q-footer>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Templates',
    icon: 'content_copy',
    linkName: 'Templates',
    name: 'templates'
  },
  {
    title: 'Invoices',
    icon: 'receipt',
    linkName: 'Invoices',
    name: 'invoices'
  },  
  {
    title: 'Personal Details',
    icon: 'manage_accounts',
    linkName: 'Personal Details',
    name: 'personal_details'
  },
];

import { defineComponent, ref } from 'vue'
import {mapActions} from 'vuex'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      tab: 'invoices',
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }

   
  },

      methods: {
        ...mapActions('app', ['Logout']),
      onLogout() {
        this.Logout().then((response) => {
          if(!this.$store.state.app.isAuthenticated){
            this.$router.push({name: 'Login'})
          }
        });
      }
    }
})
</script>
