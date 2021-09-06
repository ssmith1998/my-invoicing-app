<template>
<div class="backDrop" v-if="show">
  <q-card class="notificationWrapper">
      <q-card-section>
          <h3 class="text-center text-positive text-h4">{{title}}</h3>
      </q-card-section>
       <q-card-section>
          <h3 class="text-h5 text-center">{{message}}</h3>
      </q-card-section>
      <q-card-section class="text-center q-py-xl">
         <q-icon name="check_circle" class="text-positive" style="font-size:3rem;"/>
         <q-icon name="times"/>
      </q-card-section>
      <q-card-section class="q-px-xl">
          <router-link v-if="actionBtn" @click="onClose" :to="{name: actionBtnLink}" style="text-decoration: none;">
          <q-btn color="primary" :label="actionBtnText" class="full-width"/>
          </router-link>
      </q-card-section>
  </q-card>
</div>

</template>

<script>
export default {
    name: 'notification',
    props: {
        message:{
            type: String,
            default: ''
        },
        title:{
            type: String,
            default: ''
        },
        show: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: ''
        },
        actionBtn: {
            type: Boolean,
            default: false
        },
        actionBtnText: {
            type: String,
            default: ''
        },
        actionBtnLink: {
            type: String,
            default: ''
        }
    },
    methods: {
        onClose () {
            this.$emit('close', true)
    }
    }

}
</script>

<style lang="scss">
.notificationWrapper {
    position:absolute;
    height: 500px;
    width: 500px;
    left: 50%;
    margin-left: -250px;
    top: 50%;
    margin-top: -250px;

  
  
  
}

.backDrop {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    
}
</style>

