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
                                               maxlength="8"
                                                :rules="[
                                                (val) => val.length === 8 || 'Card Number must be 8 characters long'
                                                ]"
                                               >
                                               </q-input>
                                           </div>
                                             <div class="col-xs-12 col-sm-6 q-pa-md">
                                               <q-input
                                               label="Card Sort Code"
                                               maxlength="6"
                                               v-model="userDetails.sortCode"
                                               @keyup="onCheckSortCodeLength"
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
                <!-- import contacts option for mobile -->
                 <q-btn class="lt-sm" label="Import Contacts" color="primary" @click="onImportContacts"/>                       
                 <q-expansion-item
                    v-for="(item, index) in importedContacts"
                    :key="index"
                        expand-separator
                        icon="perm_identity"
                        :label="item.name"
                        caption="Contact"
                    >
                        <q-card>
                        <q-card-section>
                        <p v-for="(email, index) in item.emails" :key="index">email: {{email.value}}</p>
                        </q-card-section>
                        </q-card>
                    </q-expansion-item>
                <!-- import contacts option for mobile end -->

                <q-table
                class="gt-xs"
                title="Contacts"
                :rows="contacts"
                :columns="contactColumns"
                row-key="id"
                >
                    <template v-slot:top>
                    <q-icon name="add_circle" style="font-size:45px; cursor:pointer;" color="positive" @click="addContactDialog = true"/>
                    </template>
    
                 </q-table>
                <q-dialog v-model="addContactDialog">
                <q-card style="width:90%;" >
                    <q-card-section>
                        <h1 class="text-h5 q-ma-none">Add contact</h1>
                    </q-card-section>
                    <q-card-section>
                        <form>
                        <div class="row">
                        <div class="col-xs-12 col-sm-4">
                            <q-select
                            label="Customer"
                            v-model="contact.customer"
                            >

                            </q-select>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <q-select
                            label="Template"
                            v-model="contact.template"
                            >

                            </q-select>
                        </div>
                        <div v-if="!contact.template" class="col-xs-12 col-sm-4">
                            <q-input
                            label="Name"
                            v-model="contact.name"
                            ></q-input>
                        </div>
                        <div class="col-xs-12 col-sm-4">
                            <q-input
                            label="Due Date"
                            v-model="contact.due_date"
                            type="date"
                            ></q-input>
                        </div>
                        </div>
                        </form>
                    </q-card-section>

                </q-card>


                </q-dialog>


                </q-tab-panel>

         </q-tab-panels>


    </q-page>
 </template>
 <script>
     
 export default {
     data () {
         return { 
             addContactDialog: false,
             contacts: [],
             contactColumns: 
             [
             {
                name: 'id',
                required: true,
                label: '#',
                align: 'left',
                field: row => row.id,
                sortable: true
            },
            {
                name: 'name',
                required: true,
                label: 'Name',
                align: 'left',
                field: row => row.name,
                sortable: true
            },
            {
                name: 'email',
                required: true,
                label: 'Email',
                align: 'left',
                field: row => row.email,
                sortable: true
            },
             ],
             sortCodeFormatted: false,
             tab:'details',
             userDetails: {
                 name:'',
                 email: '',
                 address: '',
                 postcode: '',
                 accountNumber: '',
                 sortCode: '',
             },
             importedContacts: []
         }
     },
     methods: {
onImportContacts() {
var options = new ContactFindOptions();
options.multiple = true;
var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
navigator.contacts.find(fields, this.onSuccessContacts, this.onError, options);

},
 onSuccessContacts(contacts) {
    console.log(contacts)
    this.importedContacts = []
 contacts.forEach(contact => {
      this.importedContacts.push({ 
            name:contact.displayName,
            emails: contact.emails
        })
    })
    console.log(this.importedContacts)
},

onError(contactError) {
    alert('onError!');
},
         loadUserDetails () {
             this.userDetails.email = this.user.email
         },
         onFormatSortCode () {
             if(!this.sortCodeFormatted && this.userDetails.sortCode.length === 6 ){
             console.log('hello')
           
           let res = this.chunk(this.userDetails.sortCode, 2).join('-')

           this.userDetails.sortCode = res
           this.sortCodeFormatted = true
             }
         },
         onCheckSortCodeLength () {
             if(this.userDetails.sortCode.length < 6) {
                 this.sortCodeFormatted = false
             }
         },
            chunk(str, n) {
            var ret = [];
            var i;
            var len;

            for(i = 0, len = str.length; i < len; i += n) {
            ret.push(str.substr(i, n))
            }

             return ret
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