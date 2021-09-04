<template>
<div class="backDrop" v-if="show">
  <q-card class="notificationWrapper">
      <q-card-section>
          <h3>{{title}}</h3>
      </q-card-section>
       <q-card-section>
          <h3>{{message}}</h3>
      </q-card-section>
      <q-card-section>
         <q-icon name="done"/>
         <q-icon name="times"/>
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

