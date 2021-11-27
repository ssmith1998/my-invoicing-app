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
                                               <q-markup-table>
                                                <thead>
                                                    <tr>
                                                    <th class="text-left">#</th>
                                                    <th class="text-left">Card Name</th>
                                                    <th class="text-right">Card Account Number</th>
                                                    <th class="text-right">Card Sort Code</th>
                                                    <th class="text-right">Default</th>
                                                    <th class="text-right"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr style="background:lightgrey;" v-for="(account, index) in bank_accounts" :key="index">
                                                    <td class="text-left">
                                                        {{index + 1}}
                                                    </td>
                                                    <td class="text-left">
                                                        <q-input
                                                        label="Card Name"
                                                        v-model="account.card_name"
                                                        type="text"
                                                        >
                                                        </q-input>
                                                    </td>
                                                    <td class="text-right">
                                                            <q-input
                                                            label="Card Account Number"
                                                            v-model="account.accountNumber"
                                                            maxlength="8"
                                                                :rules="[
                                                                (val) => val.length === 8 || 'Card Number must be 8 characters long'
                                                                ]"
                                                            >
                                                            </q-input>
                                                    </td>
                                                    <td class="text-right">
                                                            <q-input
                                                            label="Card Sort Code"
                                                            maxlength="6"
                                                            v-model="account.sortCode"
                                                            @keyup="onCheckSortCodeLength"
                                                            @blur="onFormatSortCode"
                                                            >
                                                            </q-input>
                                                    </td>
                                                    <td class="text-right">
                                                        <q-toggle
                                                        label="Default"
                                                        v-model="account.is_default"
                                                        type="text"
                                                        >
                                                        </q-toggle>
                                                    </td>
                                                    <td class="text-right">
                                                        <q-icon name="remove_circle" color="negative" size="30px" @click="onRemoveItem(index)"  />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-left">
                                                    </td>
                                                    <td class="text-left">
                                                        <q-input
                                                        label="Card Name"
                                                        v-model="bank_account.card_name"
                                                        type="text"
                                                        >
                                                        </q-input>
                                                    </td>
                                                    <td class="text-right">
                                                            <q-input
                                                            label="Card Account Number"
                                                            v-model="bank_account.accountNumber"
                                                            maxlength="8"
                                                                :rules="[
                                                                (val) => val.length === 8 || 'Card Number must be 8 characters long'
                                                                ]"
                                                            >
                                                            </q-input>
                                                    </td>
                                                    <td class="text-right">
                                                            <q-input
                                                            label="Card Sort Code"
                                                            maxlength="6"
                                                            v-model="bank_account.sortCode"
                                                            @keyup="onCheckSortCodeLength"
                                                            @blur="onFormatSortCode"
                                                            >
                                                            </q-input>
                                                    </td>
                                                    <td class="text-right">
                                                        <q-toggle
                                                        label="Default"
                                                        v-model="bank_account.is_default"
                                                        type="text"
                                                        >
                                                        </q-toggle>
                                                    </td>
                                                    <td class="text-right">
                                                        <q-icon name="add_circle" color="positive" size="30px" @click="onAddItem" />
                                                    </td>
                                                </tr>
                                                </tbody>
                                                </q-markup-table>
                                           </div>
                                   </form>
                               </q-card-section>
                           </q-card>
                       </q-tab-panel>


                       <q-tab-panel name="contacts">
                           <h4 class="q-my-md">Contacts</h4>
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
                :rows="contactsData"
                :columns="contactColumns"
                row-key="id"
                >
                    <template v-slot:top>
                    <q-icon name="add_circle" style="font-size:45px; cursor:pointer;" color="positive" @click="onAdd"/>
                    </template>
                    <template v-slot:body-cell-actions='props'>
                        <td>
                        <q-icon name="more_vert" size="30px">
                            <q-menu>
                                <q-list>
                                    <q-item @click="onEdit(props.row.id)" clickable>
                                        Edit
                                    </q-item>
                                </q-list>
                            </q-menu>
                        </q-icon>
                        </td>
                    </template>
    
                 </q-table>
                <q-dialog v-model="addContactDialog">
                <q-card style="width:90%;" >
                    <q-card-section>
                        <h1 class="text-h5 q-ma-none">{{title}}</h1>
                    </q-card-section>
                    <q-card-section>
                        <form>
                        <div class="row">
                        <div class="col-xs-12 col-sm-4 q-pa-md">
                            <q-input
                            label="Name"
                            v-model="contact.name"
                            type="text"
                            >

                            </q-input>
                        </div>
                        <div class="col-xs-12 col-sm-4 q-pa-md">
                            <q-input
                            label="Email"
                            v-model="contact.email"
                            type="email"
                            >

                            </q-input>
                        </div>
                        <div  class="col-xs-12 col-sm-4 q-pa-md">
                            <q-input
                            label="Phone"
                            v-model="contact.phone"
                            prefix="+44"
                            ></q-input>
                        </div>
                        <div class="col-xs-12 col-sm-4 q-pa-md">
                            <q-input
                            label="Address Line 1"
                            v-model="contact.address_line_1"
                            type="text"
                            ></q-input>
                        </div>
                         <div class="col-xs-12 col-sm-4 q-pa-md">
                            <q-input
                            label="Address Line 2"
                            v-model="contact.address_line_2"
                            type="text"
                            ></q-input>
                        </div>
                         <div class="col-xs-12 col-sm-4 q-pa-md">
                            <q-input
                            label="Postcode"
                            v-model="contact.postcode"
                            type="text"
                            ></q-input>
                        </div>
                         <div class="col-xs-12 col-sm-6 justify-center q-pa-md">
                            <q-btn
                            v-if="add"
                            @click="onSubmitContact"
                            label="Create Contact"
                            color="primary"
                            ></q-btn>
                            <q-btn
                            v-else
                            @click="onUpdate"
                            label="Update Contact"
                            color="primary"
                            ></q-btn>
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
             title: '',
             add: false,
             edit: false,
             contact: {
                email:'' ,
                phone: '',
                name: '',
                address_line_1: '',
                address_line_2: '',
                postcode: '',

             },
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
            {
                name: 'actions',
                required: true,
                align: 'left',
                field:' actions',
            },
             ],
             sortCodeFormatted: false,
             tab:'details',
             userDetails: {
                 name:'',
                 email: '',
                 address: '',
                 postcode: '',
             },
             bank_account: {
                 accountNumber: '',
                 sortCode: '',
                 card_name: '',
                 is_default: false
             },
             bank_accounts: [],
             importedContacts: []
         }
     },
     methods: {
onAddItem () {
    console.log('hiii')
this.bank_accounts.push({
    accountNumber: this.bank_account.accountNumber,
    sortCode: this.bank_account.sortCode,
    card_name: this.bank_account.card_name,
    is_default: this.bank_account.is_default
})
},
onRemoveItem (index) {
this.bank_accounts = this.bank_accounts.filter((item,indexItem) => {
    if(indexItem !== index) {
        return item;
    }
})
},
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
onAdd() {
    this.addContactDialog = true
    this.title = 'Add Contact'
    this.add = true
    this.contact = {}
},
async onEdit (props) {
this.title = 'Edit Contact'
this.edit = true
this.add = false
console.log(props)
const resp = await this.$store.dispatch('contact/View', {id: props})
console.log('RESP',resp)
this.contact = resp.data
console.log(this.contact)
this.addContactDialog = true

},
async onUpdate() {
const resp = await this.$store.dispatch('contact/Update', this.contact)
console.log('UPDATED', resp)
this.edit = false
this.addContactDialog = false
},
onError(contactError) {
    alert('onError!');
},
         loadUserDetails () {
             this.userDetails.email = this.user.email
         },
         onFormatSortCode () {
             if(!this.sortCodeFormatted && this.bank_account.sortCode.length === 6 ){
             console.log('hello')
           
           let res = this.chunk(this.bank_account.sortCode, 2).join('-')

           this.bank_account.sortCode = res
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
            },
        onSubmitContact() {
            this.contact.user_id = this.user.id
            this.$store.dispatch('contact/store', this.contact).then(response => {
                if(response.data.success === true) {
                    this.addContactDialog = false
                }
                console.log(response)
            })
        }
     },
     mounted() {
         this.$store.dispatch('contact/list');
     },
     computed: {
         user () {
             return this.$store.state.app.user
         },
         contactsData () {
             return this.$store.state.contact.contacts
         }
      },

     created () {
         this.loadUserDetails()
     }
 }
 </script>
 <style lang="scss">
 
 </style>