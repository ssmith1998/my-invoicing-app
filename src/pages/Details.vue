 <template>
    <q-page>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="details" label="Details" />
          <q-tab name="contacts" label="Contacts" />
        </q-tabs>
        <q-separator />

         <q-tab-panels v-model="tab" animated>
                       <q-tab-panel name="details">
                           <q-card>
                               <q-card-section>
                                   <form>
                                        <h5 class="q-ma-none">Details</h5>
                                       <div class="row">
                                           <div class="col-xs-12 col-sm-6 q-pa-md">
                                               <q-input
                                               label="Name/Company Name"
                                               v-model="userDetails.name"
                                               >
                                               </q-input>
                                           </div>
                                           <div class="col-xs-12 col-sm-6 q-pa-md">
                                               <q-input
                                               label="Email"
                                               v-model="userDetails.email"
                                               >
                                               </q-input>
                                           </div>
                                            <div class="col-xs-12 col-sm-6 q-pa-md">
                                               <q-input
                                               label="Address"
                                               v-model="userDetails.address"
                                               >
                                               </q-input>
                                           </div>
                                           <div class="col-xs-12 col-sm-6 q-pa-md">
                                               <q-input
                                               label="Postcode"
                                               v-model="userDetails.postcode"
                                               >
                                               </q-input>
                                           </div>
                                       </div>
                                       <div class="flex-column">
                                               <div class="head">
                                            <h5 class="q-ma-none q-pt-md">Billing Information</h5>
                                               </div>
                                               <div class="row full-width">
                                               <div class="col-xs-12 col-sm-6 q-pa-md">
                                               <q-input
                                               label="Card Account Number"
                                               v-model="userDetails.accountNumber"
                                               >
                                               </q-input>
                                           </div>
                                             <div class="col-xs-12 col-sm-6 q-pa-md">
                                               <q-input
                                               label="Card Sort Code"
                                               v-model="userDetails.sortCode"
                                               @blur="onFormatSortCode"
                                               >
                                               </q-input>
                                           </div>
                                               </div>
                                           </div>
                                   </form>
                               </q-card-section>
                           </q-card>
                       </q-tab-panel>


                       <q-tab-panel name="contacts">
                           <h4>Contacts</h4>
                       </q-tab-panel>

         </q-tab-panels>


    </q-page>
 </template>
 <script>
 export default {
     data () {
         return { 
             tab:'details',
             userDetails: {
                 name:'',
                 email: '',
                 address: '',
                 postcode: '',
                 accountNumber: '',
                 sortCode: '',
             }
         }
     },
     methods: {
         loadUserDetails () {
             this.userDetails.email = this.user.email
         },
         onFormatSortCode () {
             console.log('hello')
           
            var parts = this.userDetails.sortCode.match(/.{1,3}/g);
            parts.join("-")
            this.userDetails.sortCode = parts
         }
     },

     computed: {
         user () {
             return this.$store.state.app.user
         }
      },

     created () {
         this.loadUserDetails()
     }
 }
 </script>
 <style lang="scss">
 
 </style>